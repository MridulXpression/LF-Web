import { useEffect, useRef } from "react";
import { useSelector } from "react-redux";
import axiosHttp from "@/utils/axioshttp";
import { endPoints } from "@/utils/endpoints";

const useCartSync = () => {
  const isInitialSync = useRef(false);
  const syncInProgress = useRef(false);

  // Get userId from Redux
  const userInfo = useSelector((state) => state.user?.userInfo);
  const userId = userInfo?.id;

  // Get cart items from Redux
  const cartItems = useSelector((state) => state.cart?.items || []);

  // Sync cart when user logs in
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
          // User's local cart is still intact
          console.error("Cart sync error:", error);
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
