import { useEffect, useRef } from "react";
import { useSelector, useDispatch } from "react-redux";
import axiosHttp from "@/utils/axioshttp";
import { endPoints } from "@/utils/endpoints";
import { setCartItems } from "@/redux/slices/cartSlice";

const useCartSync = () => {
  const dispatch = useDispatch();
  const isInitialSync = useRef(false);
  const syncInProgress = useRef(false);
  const hasFetchedCart = useRef(false);

  // Get userId from Redux
  const userInfo = useSelector((state) => state.user?.userInfo);
  const userId = userInfo?.id;

  // Get cart items from Redux
  const cartItems = useSelector((state) => state.cart?.items || []);

  // Fetch cart items from server when user logs in
  useEffect(() => {
    const fetchCartFromServer = async () => {
      if (!userId || hasFetchedCart.current) return;

      hasFetchedCart.current = true;

      try {
        const response = await axiosHttp.get(`/cart-items/${userId}`);

        if (response.data.status === 200 && response.data.data) {
          // Transform API data to Redux format
          const transformedData = response.data.data.map((item) => ({
            id: item.productId,
            cartItemId: item.id,
            productId: item.productId,
            variantId: item.variantId,
            title: item.product.title,
            description:
              item.product.shortDescription || item.product.description,
            imageUrls: item.product.imageUrls || [],
            basePrice:
              item.pricing?.unitPrice ||
              item.product_variant?.price ||
              item.product.basePrice ||
              0,
            mrp: item.product.mrp || item.product.basePrice,
            quantity: item.quantity || 1,
            variants: item.product_variant
              ? [
                  {
                    id: item.variantId,
                    title: item.product_variant.title,
                    price: item.product_variant.price,
                    imageSrc: item.product_variant.imageSrc,
                  },
                ]
              : [],
            type: item.product.type,
            tags: item.product.tags,
            hasCOD: item.product.hasCOD,
            hasExchange: item.product.hasExchange,
            exchangeDays: item.product.exchangeDays,
            selected: true,
          }));

          // Update Redux with fetched cart items
          dispatch(setCartItems(transformedData));
        }
      } catch (error) {}
    };

    fetchCartFromServer();
  }, [userId, dispatch]);

  // Sync local cart to server when user logs in (if they had items before login)
  useEffect(() => {
    const syncCartToServer = async () => {
      // Prevent concurrent syncs
      if (syncInProgress.current) return;

      // Only sync if:
      // 1. User is logged in (userId exists)
      // 2. Redux has cart items
      // 3. This is the first time syncing for this session
      if (userId && cartItems.length > 0 && !isInitialSync.current) {
        syncInProgress.current = true;
        isInitialSync.current = true;

        try {
          // Transform Redux cart items to API payload format
          const payload = {
            userId: userId,
            items: cartItems.map((item) => ({
              productId: item.productId || item.id,
              variantId: item.variantId || null,
            })),
          };

          const response = await axiosHttp.post(endPoints.cartsync, payload);

          if (response.data.status === 200) {
          }
        } catch (error) {
          // Don't throw error - let the app continue normally
        } finally {
          syncInProgress.current = false;
        }
      }
    };

    syncCartToServer();
  }, [userId, cartItems.length]);

  return {
    isSynced: isInitialSync.current,
    cartItemsCount: cartItems.length,
  };
};

export default useCartSync;
