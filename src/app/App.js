import React from 'react';
import { SafeAreaProvider } from 'react-native-safe-area-context';

import Checkout from "./checkout/Checkout";

export default function App() {
  return (
      <SafeAreaProvider>
        <Checkout />
      </SafeAreaProvider>
  );
}
