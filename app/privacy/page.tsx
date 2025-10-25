import { Navigation } from "@/components/navigation";

export default function PrivacyPolicy() {
  return (
    <div className="min-h-screen">
      <Navigation />

      <div className="pt-20 px-4 sm:px-6 lg:px-8 max-w-4xl mx-auto">
        <div className="mb-8">
          <h1 className="text-4xl font-bold mb-4">Privacy Policy</h1>
          <p className="text-muted-foreground">
            Last updated: October 26, 2025
          </p>
        </div>

        <div className="prose prose-gray dark:prose-invert max-w-none">
          <section className="mb-8">
            <h2 className="text-2xl font-semibold mb-4">
              1. Information We Collect
            </h2>
            <p className="mb-4">
              Siphere is designed with privacy in mind. We collect minimal
              information:
            </p>
            <ul className="list-disc pl-6 mb-4">
              <li>
                <strong>Wallet Addresses:</strong> Public wallet addresses for
                transaction processing
              </li>
              <li>
                <strong>Transaction Data:</strong> On-chain transaction history
                for portfolio tracking
              </li>
              <li>
                <strong>Usage Analytics:</strong> Anonymous usage statistics to
                improve our service
              </li>
              <li>
                <strong>Contact Information:</strong> Email addresses for
                waitlist and support communications
              </li>
            </ul>
          </section>

          <section className="mb-8">
            <h2 className="text-2xl font-semibold mb-4">
              2. Information We Do NOT Collect
            </h2>
            <ul className="list-disc pl-6 mb-4">
              <li>Private keys or seed phrases</li>
              <li>Personal identification documents</li>
              <li>Financial account information</li>
              <li>Detailed personal profiles</li>
            </ul>
          </section>

          <section className="mb-8">
            <h2 className="text-2xl font-semibold mb-4">
              3. How We Use Information
            </h2>
            <p className="mb-4">We use collected information to:</p>
            <ul className="list-disc pl-6 mb-4">
              <li>Execute your investment instructions via smart contracts</li>
              <li>Display your portfolio and transaction history</li>
              <li>Process insurance claims</li>
              <li>Improve our platform and user experience</li>
              <li>Send important service updates</li>
            </ul>
          </section>

          <section className="mb-8">
            <h2 className="text-2xl font-semibold mb-4">
              4. Data Storage and Security
            </h2>
            <p className="mb-4">Your data security is our priority:</p>
            <ul className="list-disc pl-6 mb-4">
              <li>
                All sensitive operations occur on-chain via smart contracts
              </li>
              <li>We use industry-standard encryption for data transmission</li>
              <li>
                Personal data is stored with secure, privacy-focused providers
              </li>
              <li>We never store private keys or have custody of your funds</li>
            </ul>
          </section>

          <section className="mb-8">
            <h2 className="text-2xl font-semibond mb-4">
              5. Third-Party Services
            </h2>
            <p className="mb-4">
              We integrate with trusted third-party services:
            </p>
            <ul className="list-disc pl-6 mb-4">
              <li>
                <strong>TON Blockchain:</strong> For smart contract execution
                and data
              </li>
              <li>
                <strong>Wallet Providers:</strong> TonConnect protocol for
                secure wallet integration
              </li>
              <li>
                <strong>DeFi Protocols:</strong> Various TON ecosystem protocols
                for investment execution
              </li>
              <li>
                <strong>Analytics:</strong> Anonymous usage analytics (no
                personal data)
              </li>
            </ul>
          </section>

          <section className="mb-8">
            <h2 className="text-2xl font-semibold mb-4">6. Your Rights</h2>
            <p className="mb-4">You have the right to:</p>
            <ul className="list-disc pl-6 mb-4">
              <li>Access your data and request copies</li>
              <li>Correct inaccurate information</li>
              <li>Request deletion of your personal data</li>
              <li>Opt out of communications</li>
              <li>Export your on-chain data</li>
            </ul>
          </section>

          <section className="mb-8">
            <h2 className="text-2xl font-semibold mb-4">
              7. Cookies and Tracking
            </h2>
            <p className="mb-4">We use minimal cookies for:</p>
            <ul className="list-disc pl-6 mb-4">
              <li>Session management and authentication</li>
              <li>User preferences and settings</li>
              <li>Anonymous usage analytics</li>
            </ul>
            <p className="mb-4">
              You can disable cookies in your browser settings, though this may
              affect functionality.
            </p>
          </section>

          <section className="mb-8">
            <h2 className="text-2xl font-semibold mb-4">
              8. Updates to This Policy
            </h2>
            <p className="mb-4">
              We may update this privacy policy as our service evolves. Material
              changes will be communicated through our platform or via email.
            </p>
          </section>

          <section className="mb-8">
            <h2 className="text-2xl font-semibold mb-4">9. Contact Us</h2>
            <p className="mb-4">For privacy-related questions or requests:</p>
            <ul className="list-none mb-4">
              <li>Email: nileshpathak781@gmail.com</li>
              <li>GitHub: https://github.com/NileshRP010/Siphere-TON</li>
            </ul>
          </section>
        </div>
      </div>
    </div>
  );
}
