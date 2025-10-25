import { Navigation } from "@/components/navigation";

export default function TermsOfService() {
  return (
    <div className="min-h-screen">
      <Navigation />

      <div className="pt-20 px-4 sm:px-6 lg:px-8 max-w-4xl mx-auto">
        <div className="mb-8">
          <h1 className="text-4xl font-bold mb-4">Terms of Service</h1>
          <p className="text-muted-foreground">
            Last updated: October 26, 2025
          </p>
        </div>

        <div className="prose prose-gray dark:prose-invert max-w-none">
          <section className="mb-8">
            <h2 className="text-2xl font-semibold mb-4">
              1. Acceptance of Terms
            </h2>
            <p className="mb-4">
              By accessing and using Siphere (&quot;we&quot;, &quot;our&quot;,
              &quot;us&quot;), you accept and agree to be bound by the terms and
              provision of this agreement.
            </p>
          </section>

          <section className="mb-8">
            <h2 className="text-2xl font-semibold mb-4">
              2. Description of Service
            </h2>
            <p className="mb-4">
              Siphere is an automated DeFi investment platform that enables
              users to create systematic investment plans (SIPs) on the TON
              blockchain. Our service includes:
            </p>
            <ul className="list-disc pl-6 mb-4">
              <li>Automated investment execution via smart contracts</li>
              <li>Portfolio management and tracking</li>
              <li>Optional insurance protection</li>
              <li>Integration with TON ecosystem protocols</li>
            </ul>
          </section>

          <section className="mb-8">
            <h2 className="text-2xl font-semibold mb-4">3. Risk Disclosure</h2>
            <p className="mb-4">
              DeFi and cryptocurrency investments carry significant risks
              including:
            </p>
            <ul className="list-disc pl-6 mb-4">
              <li>Market volatility and potential loss of funds</li>
              <li>Smart contract vulnerabilities</li>
              <li>Regulatory changes</li>
              <li>Technical failures or exploits</li>
            </ul>
            <p className="mb-4">
              You should only invest what you can afford to lose and understand
              the risks involved.
            </p>
          </section>

          <section className="mb-8">
            <h2 className="text-2xl font-semibold mb-4">
              4. User Responsibilities
            </h2>
            <p className="mb-4">Users are responsible for:</p>
            <ul className="list-disc pl-6 mb-4">
              <li>Maintaining the security of their wallet and private keys</li>
              <li>Verifying all transactions before approval</li>
              <li>Understanding the risks of DeFi investments</li>
              <li>Complying with local laws and regulations</li>
            </ul>
          </section>

          <section className="mb-8">
            <h2 className="text-2xl font-semibold mb-4">
              5. Limitation of Liability
            </h2>
            <p className="mb-4">
              Siphere provides the platform &quot;as is&quot; without warranties
              of any kind. We are not liable for:
            </p>
            <ul className="list-disc pl-6 mb-4">
              <li>Investment losses or market volatility</li>
              <li>Smart contract failures or exploits</li>
              <li>Third-party protocol failures</li>
              <li>Network outages or technical issues</li>
            </ul>
          </section>

          <section className="mb-8">
            <h2 className="text-2xl font-semibold mb-4">6. Privacy and Data</h2>
            <p className="mb-4">
              We respect your privacy and handle your data according to our
              Privacy Policy. We do not store private keys or have custody of
              your funds.
            </p>
          </section>

          <section className="mb-8">
            <h2 className="text-2xl font-semibold mb-4">7. Modifications</h2>
            <p className="mb-4">
              We reserve the right to modify these terms at any time. Continued
              use of the service constitutes acceptance of modified terms.
            </p>
          </section>

          <section className="mb-8">
            <h2 className="text-2xl font-semibold mb-4">
              8. Contact Information
            </h2>
            <p className="mb-4">
              For questions about these terms, contact us at:
            </p>
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
