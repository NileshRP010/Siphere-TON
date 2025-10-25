import { useState, useEffect, useCallback } from "react";
import {
  TonSiphereContracts,
  SwapCoffeeIntegration,
} from "@/lib/ton-contracts";
import { useTonWallet } from "@/components/ton-wallet-provider";

export interface SIPData {
  id: string;
  name: string;
  token: string;
  amount: string;
  frequency: string;
  strategy: string;
  currentValue: number;
  invested: number;
  returns: number;
  status: "Active" | "Paused" | "Completed";
  nextExecution: string;
  apy: number;
  insurance: boolean;
}

export interface InsuranceData {
  totalCoverage: number;
  totalPremiums: number;
  activePolicies: number;
  claimsPaid: number;
  successRate: number;
}

export function useTonSiphere() {
  const { isConnected, address, sender } = useTonWallet();
  const [sipContracts, setSipContracts] = useState<TonSiphereContracts | null>(
    null
  );
  const [swapCoffee, setSwapCoffee] = useState<SwapCoffeeIntegration | null>(
    null
  );
  const [sips, setSips] = useState<SIPData[]>([]);
  const [insurance, setInsurance] = useState<InsuranceData | null>(null);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState<string | null>(null);

  // Initialize contracts
  useEffect(() => {
    if (isConnected) {
      const contracts = new TonSiphereContracts(true); // testnet
      const swap = new SwapCoffeeIntegration("demo-api-key", true);
      setSipContracts(contracts);
      setSwapCoffee(swap);
    }
  }, [isConnected]);

  // Load user SIPs
  const loadSIPs = useCallback(async () => {
    if (!sipContracts || !address) return;

    setLoading(true);
    try {
      // Mock data for demo - in real implementation, this would fetch from contracts
      const mockSIPs: SIPData[] = [
        {
          id: "1",
          name: "TON Staking SIP",
          token: "TON",
          amount: "100",
          frequency: "Weekly",
          strategy: "Staking Only",
          currentValue: 1200,
          invested: 1000,
          returns: 200,
          status: "Active",
          nextExecution: "2025-01-15",
          apy: 8.2,
          insurance: true,
        },
        {
          id: "2",
          name: "USDC Lending SIP",
          token: "USDC",
          amount: "500",
          frequency: "Bi-weekly",
          strategy: "Lending Only",
          currentValue: 2100,
          invested: 2000,
          returns: 100,
          status: "Active",
          nextExecution: "2025-01-10",
          apy: 5.8,
          insurance: false,
        },
      ];
      setSips(mockSIPs);
    } catch (err) {
      setError("Failed to load SIPs");
      console.error("Error loading SIPs:", err);
    } finally {
      setLoading(false);
    }
  }, [sipContracts, address]);

  // Load insurance data
  const loadInsurance = useCallback(async () => {
    if (!sipContracts) return;

    try {
      // Mock data for demo
      const mockInsurance: InsuranceData = {
        totalCoverage: 2400000,
        totalPremiums: 45200,
        activePolicies: 892,
        claimsPaid: 12,
        successRate: 94.2,
      };
      setInsurance(mockInsurance);
    } catch (err) {
      setError("Failed to load insurance data");
      console.error("Error loading insurance:", err);
    }
  }, [sipContracts]);

  // Create new SIP
  const createSIP = useCallback(
    async (sipData: {
      name: string;
      token: string;
      amount: string;
      frequency: string;
      strategy: string;
      insurance: boolean;
    }) => {
      if (!sipContracts || !address) {
        throw new Error("Wallet not connected");
      }

      setLoading(true);
      try {
        const frequencyDays =
          sipData.frequency === "Weekly"
            ? 7
            : sipData.frequency === "Bi-weekly"
            ? 14
            : 30;

        const contractAddress = await sipContracts.createSIP(
          address,
          sipData.token,
          sipData.amount,
          frequencyDays,
          sipData.strategy,
          sipData.insurance
        );

        // Add to local state
        const newSIP: SIPData = {
          id: contractAddress,
          name: sipData.name,
          token: sipData.token,
          amount: sipData.amount,
          frequency: sipData.frequency,
          strategy: sipData.strategy,
          currentValue: 0,
          invested: 0,
          returns: 0,
          status: "Active",
          nextExecution: new Date(
            Date.now() + frequencyDays * 24 * 60 * 60 * 1000
          )
            .toISOString()
            .split("T")[0],
          apy:
            sipData.strategy === "Staking Only"
              ? 8.2
              : sipData.strategy === "Lending Only"
              ? 5.8
              : 7.5,
          insurance: sipData.insurance,
        };

        setSips((prev) => [...prev, newSIP]);
        return contractAddress;
      } catch (err) {
        setError("Failed to create SIP");
        console.error("Error creating SIP:", err);
        throw err;
      } finally {
        setLoading(false);
      }
    },
    [sipContracts, address]
  );

  // Toggle SIP status
  const toggleSIP = useCallback(
    async (sipId: string, isActive: boolean) => {
      if (!sipContracts) return;

      try {
        const success = await sipContracts.toggleSIP(sipId, isActive);

        if (success) {
          setSips((prev) =>
            prev.map((sip) =>
              sip.id === sipId
                ? { ...sip, status: isActive ? "Active" : "Paused" }
                : sip
            )
          );
        }
      } catch (err) {
        setError("Failed to toggle SIP");
        console.error("Error toggling SIP:", err);
      }
    },
    [sipContracts]
  );

  // Execute SIP
  const executeSIP = useCallback(
    async (sipId: string) => {
      if (!sipContracts) return;

      try {
        const success = await sipContracts.executeSIP(sipId);

        if (success) {
          // Update SIP data after execution
          await loadSIPs();
        }
      } catch (err) {
        setError("Failed to execute SIP");
        console.error("Error executing SIP:", err);
      }
    },
    [sipContracts, loadSIPs]
  );

  // Submit insurance claim
  const submitClaim = useCallback(
    async (claimData: { sipId: string; amount: string; reason: string }) => {
      if (!sipContracts) return;

      try {
        const success = await sipContracts.submitClaim(
          "mock-insurance-address",
          claimData.sipId,
          claimData.amount,
          claimData.reason
        );

        return success;
      } catch (err) {
        setError("Failed to submit claim");
        console.error("Error submitting claim:", err);
        return false;
      }
    },
    [sipContracts]
  );

  // Get token prices
  const getTokenPrices = useCallback(async () => {
    if (!swapCoffee) return {};

    try {
      return await swapCoffee.getTokenPrices();
    } catch (err) {
      console.error("Error fetching token prices:", err);
      return {};
    }
  }, [swapCoffee]);

  // Load data on mount
  useEffect(() => {
    if (isConnected) {
      loadSIPs();
      loadInsurance();
    }
  }, [isConnected, loadSIPs, loadInsurance]);

  return {
    sips,
    insurance,
    loading,
    error,
    createSIP,
    toggleSIP,
    executeSIP,
    submitClaim,
    getTokenPrices,
    loadSIPs,
    loadInsurance,
  };
}
