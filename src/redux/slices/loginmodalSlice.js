import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  phoneAuthModal: false,
  wishlistModal: false,
  productViewModal: false,
  openReturnModal: false,
  cancelModal: false,
  exchangeModal: false,
  selectedProduct: null,
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
      state.selectedProduct = action.payload;
    },
    closeProductViewModal: (state) => {
      state.productViewModal = false;
      state.selectedProduct = null;
    },

    // Return Modal
    openReturnModal: (state, action) => {
      state.openReturnModal = true;
      state.selectedProduct = action.payload;
    },
    closeReturnModal: (state) => {
      state.openReturnModal = false;
      state.selectedProduct = null;
    },

    // Cancel Modal
    openCancelModal: (state, action) => {
      state.cancelModal = true;
      state.selectedProduct = action.payload;
    },
    closeCancelModal: (state) => {
      state.cancelModal = false;
      state.selectedProduct = null;
    },

    // Exchange Modal
    openExchangeModal: (state, action) => {
      state.exchangeModal = true;
      state.selectedProduct = action.payload;
    },
    closeExchangeModal: (state) => {
      state.exchangeModal = false;
      state.selectedProduct = null;
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
  openReturnModal,
  closeReturnModal,
  openCancelModal,
  closeCancelModal,
  openExchangeModal,
  closeExchangeModal,
} = modalSlice.actions;

export default modalSlice.reducer;
