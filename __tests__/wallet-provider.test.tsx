import { render } from "@testing-library/react";
import { TonWalletProvider } from "../components/ton-wallet-provider";
import "@testing-library/jest-dom";
import React from "react";

describe("TonWalletProvider", () => {
  it("renders children", () => {
    const { getByText } = render(
      <TonWalletProvider>
        <div>Wallet Test</div>
      </TonWalletProvider>
    );
    expect(getByText("Wallet Test")).toBeInTheDocument();
  });
});
