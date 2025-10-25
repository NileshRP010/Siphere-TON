export interface DemoSIP {
  id: string;
  name: string;
  amount: number;
  frequency: "daily" | "weekly" | "monthly";
  token: "TON" | "USDT" | "USDC";
  status: "active" | "paused" | "completed";
  totalInvested: number;
  currentValue: number;
  returns: number;
  returnsPercentage: number;
  nextExecution: Date;
  createdAt: Date;
  isDemo?: boolean;
}

export interface DemoInsurance {
  id: string;
  sipId: string;
  coverage: number;
  premium: number;
  status: "active" | "expired" | "claimed";
  provider: string;
  startDate: Date;
  endDate: Date;
  isDemo?: boolean;
}

export const demoSIPs: DemoSIP[] = [
  {
    id: "demo-sip-1",
    name: "TON Growth Strategy",
    amount: 50,
    frequency: "weekly",
    token: "TON",
    status: "active",
    totalInvested: 600,
    currentValue: 684,
    returns: 84,
    returnsPercentage: 14,
    nextExecution: new Date(Date.now() + 3 * 24 * 60 * 60 * 1000), // 3 days from now
    createdAt: new Date(Date.now() - 12 * 7 * 24 * 60 * 60 * 1000), // 12 weeks ago
    isDemo: true,
  },
  {
    id: "demo-sip-2",
    name: "Stable Savings Plan",
    amount: 100,
    frequency: "monthly",
    token: "USDT",
    status: "active",
    totalInvested: 400,
    currentValue: 418,
    returns: 18,
    returnsPercentage: 4.5,
    nextExecution: new Date(Date.now() + 12 * 24 * 60 * 60 * 1000), // 12 days from now
    createdAt: new Date(Date.now() - 4 * 30 * 24 * 60 * 60 * 1000), // 4 months ago
    isDemo: true,
  },
  {
    id: "demo-sip-3",
    name: "Aggressive Growth",
    amount: 25,
    frequency: "daily",
    token: "TON",
    status: "paused",
    totalInvested: 750,
    currentValue: 825,
    returns: 75,
    returnsPercentage: 10,
    nextExecution: new Date(Date.now() + 1 * 24 * 60 * 60 * 1000), // 1 day from now (paused)
    createdAt: new Date(Date.now() - 30 * 24 * 60 * 60 * 1000), // 30 days ago
    isDemo: true,
  },
];

export const demoInsurance: DemoInsurance[] = [
  {
    id: "demo-insurance-1",
    sipId: "demo-sip-1",
    coverage: 600,
    premium: 12,
    status: "active",
    provider: "TON Safe Shield",
    startDate: new Date(Date.now() - 12 * 7 * 24 * 60 * 60 * 1000),
    endDate: new Date(Date.now() + 40 * 7 * 24 * 60 * 60 * 1000),
    isDemo: true,
  },
  {
    id: "demo-insurance-2",
    sipId: "demo-sip-2",
    coverage: 400,
    premium: 6,
    status: "active",
    provider: "Crypto Guardian",
    startDate: new Date(Date.now() - 4 * 30 * 24 * 60 * 60 * 1000),
    endDate: new Date(Date.now() + 8 * 30 * 24 * 60 * 60 * 1000),
    isDemo: true,
  },
];

export const demoPortfolioStats = {
  totalInvested: 1750,
  totalValue: 1927,
  totalReturns: 177,
  totalReturnsPercentage: 10.1,
  activeSIPs: 2,
  pausedSIPs: 1,
  totalInsuranceCoverage: 1000,
  monthlyPremium: 18,
};

// Utility functions for demo data
export function getDemoSIPById(id: string): DemoSIP | undefined {
  return demoSIPs.find((sip) => sip.id === id);
}

export function getDemoInsuranceForSIP(
  sipId: string
): DemoInsurance | undefined {
  return demoInsurance.find((ins) => ins.sipId === sipId);
}

export function calculatePortfolioStats(
  sips: DemoSIP[]
): typeof demoPortfolioStats {
  const totalInvested = sips.reduce((sum, sip) => sum + sip.totalInvested, 0);
  const totalValue = sips.reduce((sum, sip) => sum + sip.currentValue, 0);
  const totalReturns = totalValue - totalInvested;
  const totalReturnsPercentage =
    totalInvested > 0 ? (totalReturns / totalInvested) * 100 : 0;

  return {
    totalInvested,
    totalValue,
    totalReturns,
    totalReturnsPercentage,
    activeSIPs: sips.filter((sip) => sip.status === "active").length,
    pausedSIPs: sips.filter((sip) => sip.status === "paused").length,
    totalInsuranceCoverage: demoInsurance.reduce(
      (sum, ins) => sum + ins.coverage,
      0
    ),
    monthlyPremium: demoInsurance.reduce((sum, ins) => sum + ins.premium, 0),
  };
}
