# Siphere

Automated DeFi Investment Platform for TON Blockchain

## Overview

Siphere is a web application that enables users to create and manage systematic investment plans (SIPs) on the TON blockchain. The platform supports automated investing in TON, USDT, and USDC, with optional insurance protection and transparent smart contract execution. Siphere aims to make long-term crypto investing accessible, secure, and easy to manage for everyone.

## Features

- **TON Wallet Integration:** Secure connection via TonConnect protocol (Tonkeeper, TonHub, etc.)
- **Systematic Investment Plans (SIPs):** Automate recurring investments in supported tokens
- **Strategy Selection:** Choose from staking, lending, or custom DeFi strategies
- **Insurance Protection:** Optional coverage for smart contract failures and execution errors
- **Portfolio Dashboard:** Real-time tracking of investments, returns, and performance
- **Claims Management:** Submit and track insurance claims on-chain
- **Human-Readable Interface:** Simple, intuitive UI following TON ecosystem standards
- **Security:** Audited smart contracts, multi-signature wallets, and transparent operations

## Technology Stack

- **Frontend:** Next.js, React, TypeScript, Tailwind CSS, Framer Motion
- **Smart Contracts:** TON blockchain, TonConnect, TON SDK
- **Wallets Supported:** Tonkeeper, TonHub, OpenMask, and other TonConnect-compatible wallets
- **APIs & Integrations:** swap.coffee for token swaps and liquidity

## Folder Structure

- `app/` — Next.js app routes and pages
- `components/` — Reusable UI and logic components
- `hooks/` — Custom React hooks (e.g., SIP management)
- `lib/` — TON contract interfaces and utility functions
- `public/` — Static assets (logos, manifest)
- `scripts/` — Setup and migration scripts for TON integration
- `attached assets/` — Design mockups and local-only assets (not tracked in Git)

## Getting Started

1. **Clone the repository:**
   ```sh
   git clone https://github.com/NileshRP010/Siphere-TON.git
   cd Siphere-TON
   ```
2. **Install dependencies:**
   ```sh
   npm install
   ```
3. **Configure environment:**
   - Copy `.env.local.example` to `.env.local` and set your TON network, RPC URL, and API keys as needed.
   - Example values:
     ```env
     NEXT_PUBLIC_TON_NETWORK=testnet
     NEXT_PUBLIC_TON_RPC_URL=https://testnet.toncenter.com/api/v2/jsonRPC
     NEXT_PUBLIC_APP_NAME=Siphere
     NEXT_PUBLIC_APP_URL=http://localhost:3000
     ```
4. **Run the development server:**
   ```sh
   npm run dev
   ```
5. **Open the app:**
   - Visit [http://localhost:3000](http://localhost:3000) in your browser.
   - Connect your TON wallet and start creating SIPs.

## Usage

- **Create SIP:** Set up a new investment plan with your preferred token, amount, frequency, and strategy.
- **Track Portfolio:** View your active SIPs, returns, and performance analytics in the dashboard.
- **Insurance Claims:** Submit claims for failed executions or smart contract issues directly from the app.
- **Waitlist:** Join the waitlist for early access and feature updates at `/waitlist`.

## Contributing

Contributions are welcome! Please open issues or pull requests for bug fixes, improvements, or new features. For major changes, discuss them in advance via GitHub Issues.

## License

This project is licensed under the MIT License. See `LICENSE` for details.

## Contact & Support

- GitHub: [NileshRP010/Siphere-TON](https://github.com/NileshRP010/Siphere-TON)
- Email: nileshpathak781@gmail.com
- Twitter: @Siphere03

## Troubleshooting

- If you encounter wallet connection issues, ensure your wallet is TonConnect-compatible and connected to the correct network.
- For environment/configuration problems, check `.env.local` and restart the dev server.
- For smart contract or insurance claim issues, review the logs and open a GitHub issue with details.

## Roadmap

- Mainnet deployment and expanded token support
- Advanced strategy templates and analytics
- Enhanced insurance options and DAO governance
- Mobile app and additional wallet integrations
- Community features and educational resources
