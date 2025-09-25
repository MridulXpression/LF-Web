"use client";

import { Provider } from "react-redux";
import { store, persistor } from "@/redux/store"; // import persistor
import { PersistGate } from "redux-persist/integration/react";

export function Providers({ children }) {
  return (
    <Provider store={store}>
      <PersistGate loading={null} persistor={persistor}>
        {children}
      </PersistGate>
    </Provider>
  );
}
