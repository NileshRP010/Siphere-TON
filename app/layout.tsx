import "./globals.css";
import type { Metadata } from "next";
import { Inter } from "next/font/google";
import { ThemeProvider } from "@/components/theme-provider";
import { Toaster } from "@/components/ui/sonner";
import { TonWalletProvider } from "@/components/ton-wallet-provider";

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "Siphere - Automated DeFi Investment Platform",
  description:
    "Invest Smarter, Automatically. Create systematic investment plans with TON, USDT, or USDC on TON blockchain.",
  viewport: "width=device-width, initial-scale=1",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en" suppressHydrationWarning>
      <body className={inter.className}>
        <ThemeProvider
          attribute="class"
          defaultTheme="dark"
          enableSystem={false}
          disableTransitionOnChange
        >
          <TonWalletProvider>
            {children}
            <Toaster />
          </TonWalletProvider>
        </ThemeProvider>
      </body>
    </html>
  );
}
