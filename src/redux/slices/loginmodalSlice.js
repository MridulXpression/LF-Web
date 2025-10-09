import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  phoneAuthModal: false,
  wishlistModal: false,
  productViewModal: false,
  selectedProduct: null, // Add this line
};

const modalSlice = createSlice({
  name: "modal",
  initialState,
  reducers: {
    // Phone Auth Modal
    openPhoneAuthModal: (state) => {
      state.phoneAuthModal = true;
    },
    closePhoneAuthModal: (state) => {
      state.phoneAuthModal = false;
    },
    togglePhoneAuthModal: (state) => {
      state.phoneAuthModal = !state.phoneAuthModal;
    },

    // Wishlist Modal
    openWishlistModal: (state) => {
      state.wishlistModal = true;
    },
    closeWishlistModal: (state) => {
      state.wishlistModal = false;
    },

    // Product View Modal
    openProductViewModal: (state, action) => {
      state.productViewModal = true;
      state.selectedProduct = action.payload; // Add this line
    },
    closeProductViewModal: (state) => {
      state.productViewModal = false;
      state.selectedProduct = null; // Add this line
    },
  },
});

export const {
  openPhoneAuthModal,
  closePhoneAuthModal,
  togglePhoneAuthModal,
  openWishlistModal,
  closeWishlistModal,

  openProductViewModal,
  closeProductViewModal,
} = modalSlice.actions;

export default modalSlice.reducer;
