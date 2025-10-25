import { Navigation } from "@/components/navigation";

const GOOGLE_FORM_URL =
  process.env.NEXT_PUBLIC_WAITLIST_FORM_URL ||
  "https://docs.google.com/forms/d/e/1FAIpQLSeWD-utGbL5DNb45nX3raEpYgpwNmgr9nhNYsNY_FJaT_JtcQ/viewform?embedded=true";

export default function WaitlistPage() {
  return (
    <div className="min-h-screen">
      <Navigation />
      <div className="pt-20 px-4 sm:px-6 lg:px-8 max-w-5xl mx-auto">
        <h1 className="text-3xl sm:text-4xl font-bold mb-4">
          Join the Siphere Waitlist
        </h1>
        <p className="text-muted-foreground mb-8">
          Be first to access automated SIPs on TON, get early feature access,
          and help us shape the roadmap.
        </p>
        <div className="glass-card border border-border/50 rounded-xl overflow-hidden">
          <iframe
            src={GOOGLE_FORM_URL}
            width="100%"
            height="3829"
            frameBorder="0"
            marginHeight={0}
            marginWidth={0}
            title="Siphere Waitlist"
          >
            Loading…
          </iframe>
        </div>
        <p className="text-xs text-muted-foreground mt-4">
          You can change the embedded form URL anytime by setting
          <code> NEXT_PUBLIC_WAITLIST_FORM_URL </code> in{" "}
          <code>.env.local</code>.
        </p>
      </div>
    </div>
  );
}
