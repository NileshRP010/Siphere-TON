"use client";

import React, { createContext, useContext, useState } from "react";

interface TonWalletContextType {
  isConnected: boolean;
  address: string | null;
  connect: () => void;
  disconnect: () => void;
  sender: any;
}

const TonWalletContext = createContext<TonWalletContextType | undefined>(
  undefined
);

export function TonWalletProvider({ children }: { children: React.ReactNode }) {
  const [isConnected, setIsConnected] = useState(false);
  const [address, setAddress] = useState<string | null>(null);

  const connect = () => {
    // Simulate wallet connection for demo
    setIsConnected(true);
    setAddress("UQCD39VS5jcptHL8vMjEXrzGaRcCVYto7HUn4bpAOg8xqB2N"); // Demo address
  };

  const disconnect = () => {
    setIsConnected(false);
    setAddress(null);
  };

  const sender = {
    send: async (args: any) => {
      console.log("Simulating TON transaction:", args);
      return "mock-tx-hash";
    },
    address: address,
  };

  return (
    <TonWalletContext.Provider
      value={{ isConnected, address, connect, disconnect, sender }}
    >
      {children}
    </TonWalletContext.Provider>
  );
}

export function useTonWallet() {
  const context = useContext(TonWalletContext);
  if (context === undefined) {
    throw new Error("useTonWallet must be used within a TonWalletProvider");
  }
  return context;
}
