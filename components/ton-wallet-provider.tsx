"use client";

import React, { createContext, useContext, useEffect, useState } from "react";
import {
  TonConnectUIProvider,
  useTonConnectUI,
  useTonWallet as useTonConnectWallet,
} from "@tonconnect/ui-react";
import { Sender, SenderArguments, Address } from "@ton/core";

interface TonWalletContextType {
  isConnected: boolean;
  address: string | null;
  connect: () => void;
  disconnect: () => void;
  sender: Sender | null;
}

const TonWalletContext = createContext<TonWalletContextType | undefined>(
  undefined
);

// Inner component that uses TonConnect hooks
function TonWalletProviderInner({ children }: { children: React.ReactNode }) {
  const [tonConnectUI] = useTonConnectUI();
  const wallet = useTonConnectWallet();
  const [isConnected, setIsConnected] = useState(false);
  const [address, setAddress] = useState<string | null>(null);

  useEffect(() => {
    if (wallet) {
      setIsConnected(true);
      setAddress(wallet.account.address);
    } else {
      setIsConnected(false);
      setAddress(null);
    }
  }, [wallet]);

  const connect = () => {
    tonConnectUI.openModal();
  };

  const disconnect = () => {
    tonConnectUI.disconnect();
  };

  const sender = React.useMemo(() => {
    if (!wallet?.account?.address) return null;

    return {
      send: async (args: SenderArguments) => {
        await tonConnectUI.sendTransaction({
          messages: [
            {
              address: args.to.toString(),
              amount: args.value.toString(),
              payload: args.body?.toBoc().toString("base64"),
            },
          ],
          validUntil: Date.now() + 5 * 60 * 1000, // 5 minutes for user to approve
        });
      },
      address: Address.parse(wallet.account.address),
    };
  }, [wallet, tonConnectUI]);

  return (
    <TonWalletContext.Provider
      value={{ isConnected, address, connect, disconnect, sender }}
    >
      {children}
    </TonWalletContext.Provider>
  );
}

export function TonWalletProvider({ children }: { children: React.ReactNode }) {
  return (
    <TonConnectUIProvider
      manifestUrl="/tonconnect-manifest.json"
      actionsConfiguration={{
        twaReturnUrl: "https://t.me/si_phere_bot/siphere",
      }}
    >
      <TonWalletProviderInner>{children}</TonWalletProviderInner>
    </TonConnectUIProvider>
  );
}

export function useTonWallet() {
  const context = useContext(TonWalletContext);
  if (context === undefined) {
    throw new Error("useTonWallet must be used within a TonWalletProvider");
  }
  return context;
}
