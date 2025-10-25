"use client";

import { useState, useEffect } from "react";
import { motion } from "framer-motion";
import { useTonSiphere } from "@/hooks/use-ton-siphere";
import {
  TrendingUp,
  DollarSign,
  Calendar,
  Shield,
  Plus,
  MoreHorizontal,
  ArrowUpRight,
  ArrowDownRight,
  Activity,
  Play,
  Pause,
  Settings,
  Trash2,
} from "lucide-react";
import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu";
import { Navigation } from "@/components/navigation";
import Link from "next/link";

const portfolioData = {
  totalValue: 15420.5,
  totalInvested: 12800.0,
  totalReturns: 2620.5,
  returnPercentage: 20.47,
  activeSIPs: 5,
  nextInvestment: "2025-01-15",
  monthlyGrowth: 8.2,
  yearlyGrowth: 24.5,
  riskScore: "Low",
  diversificationScore: 85,
};

const marketData = {
  tonPrice: 2.45,
  tonChange: 5.2,
  totalMarketCap: 12500000000,
  defiTVL: 2500000000,
  stakingAPY: 8.5,
  lendingAPY: 12.3,
};

const sipPlans = [
  {
    id: 1,
    name: "USDC Staking SIP",
    amount: 500,
    frequency: "Weekly",
    strategy: "Marinade Staking",
    currentValue: 6850,
    invested: 6000,
    returns: 850,
    status: "Active",
    nextExecution: "2025-01-08",
    apy: 8.2,
    insurance: true,
  },
  {
    id: 2,
    name: "SOL DCA Plan",
    amount: 200,
    frequency: "Bi-weekly",
    strategy: "Split Strategy",
    currentValue: 4200,
    invested: 3600,
    returns: 600,
    status: "Active",
    nextExecution: "2025-01-10",
    apy: 12.5,
    insurance: false,
  },
  {
    id: 3,
    name: "Conservative USDT",
    amount: 300,
    frequency: "Monthly",
    strategy: "Solend Lending",
    currentValue: 3150,
    invested: 3000,
    returns: 150,
    status: "Active",
    nextExecution: "2025-01-15",
    apy: 5.8,
    insurance: true,
  },
  {
    id: 4,
    name: "High Yield Mix",
    amount: 150,
    frequency: "Weekly",
    strategy: "Mixed DeFi",
    currentValue: 1220,
    invested: 1200,
    returns: 20,
    status: "Paused",
    nextExecution: "2025-01-12",
    apy: 15.2,
    insurance: false,
  },
];

const recentTransactions = [
  {
    id: 1,
    type: "Investment",
    amount: 500,
    token: "USDC",
    strategy: "Marinade Staking",
    timestamp: "2025-01-01T10:30:00Z",
    status: "Completed",
    txHash: "5KJp7z...",
  },
  {
    id: 2,
    type: "Yield",
    amount: 42.5,
    token: "SOL",
    strategy: "Split Strategy",
    timestamp: "2025-01-01T08:15:00Z",
    status: "Completed",
    txHash: "3Hm9k2...",
  },
  {
    id: 3,
    type: "Investment",
    amount: 300,
    token: "USDT",
    strategy: "Solend Lending",
    timestamp: "2025-12-31T14:45:00Z",
    status: "Completed",
    txHash: "7Qw8n5...",
  },
  {
    id: 4,
    type: "Insurance",
    amount: 7.5,
    token: "USDC",
    strategy: "Premium Payment",
    timestamp: "2025-12-31T10:20:00Z",
    status: "Completed",
    txHash: "9Rt4m1...",
  },
];

export default function Dashboard() {
  const [selectedPeriod, setSelectedPeriod] = useState("7d");
  const { sips, loading, toggleSIP, executeSIP } = useTonSiphere();

  const handleSIPAction = async (sipId: string, action: string) => {
    try {
      switch (action) {
        case "pause":
          await toggleSIP(sipId, false);
          break;
        case "resume":
          await toggleSIP(sipId, true);
          break;
        case "execute":
          await executeSIP(sipId);
          break;
        default:
          console.log(`${action} SIP ${sipId}`);
      }
    } catch (error) {
      console.error("Error handling SIP action:", error);
    }
  };

  return (
    <div className="min-h-screen">
      <Navigation />

      <div className="pt-20 px-4 sm:px-6 lg:px-8 max-w-7xl mx-auto">
        {/* Header */}
        <div className="flex flex-col sm:flex-row justify-between items-start sm:items-center mb-8">
          <div>
            <h1 className="text-3xl font-bold mb-2">Portfolio Dashboard</h1>
            <p className="text-muted-foreground">
              Track your SIP performance and manage investments
            </p>
          </div>
          <Button className="ton-button font-medium mt-4 sm:mt-0" asChild>
            <Link href="/create-sip" className="flex items-center">
              <Plus className="w-4 h-4 mr-2" />
              Create New SIP
            </Link>
          </Button>
        </div>

        {/* Portfolio Overview */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 mb-8">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
          >
            <Card className="glass-card">
              <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
                <CardTitle className="text-sm font-medium">
                  Total Portfolio Value
                </CardTitle>
                <DollarSign className="h-4 w-4 text-muted-foreground" />
              </CardHeader>
              <CardContent>
                <div className="text-2xl font-bold">
                  ${portfolioData.totalValue.toLocaleString()}
                </div>
                <div className="flex items-center text-xs text-green-400 mt-1">
                  <ArrowUpRight className="w-3 h-3 mr-1" />+
                  {portfolioData.returnPercentage}%
                </div>
              </CardContent>
            </Card>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.1 }}
          >
            <Card className="glass-card">
              <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
                <CardTitle className="text-sm font-medium">
                  Total Invested
                </CardTitle>
                <TrendingUp className="h-4 w-4 text-muted-foreground" />
              </CardHeader>
              <CardContent>
                <div className="text-2xl font-bold">
                  ${portfolioData.totalInvested.toLocaleString()}
                </div>
                <p className="text-xs text-muted-foreground mt-1">
                  Across {portfolioData.activeSIPs} active SIPs
                </p>
              </CardContent>
            </Card>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.2 }}
          >
            <Card className="glass-card">
              <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
                <CardTitle className="text-sm font-medium">
                  Total Returns
                </CardTitle>
                <Activity className="h-4 w-4 text-muted-foreground" />
              </CardHeader>
              <CardContent>
                <div className="text-2xl font-bold text-green-400">
                  +${portfolioData.totalReturns.toLocaleString()}
                </div>
                <p className="text-xs text-muted-foreground mt-1">
                  Since inception
                </p>
              </CardContent>
            </Card>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.3 }}
          >
            <Card className="glass-card">
              <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
                <CardTitle className="text-sm font-medium">
                  Next Investment
                </CardTitle>
                <Calendar className="h-4 w-4 text-muted-foreground" />
              </CardHeader>
              <CardContent>
                <div className="text-2xl font-bold">Jan 8</div>
                <p className="text-xs text-muted-foreground mt-1">
                  3 SIPs scheduled
                </p>
              </CardContent>
            </Card>
          </motion.div>
        </div>

        {/* Market Overview */}
        <motion.div
          className="mb-8"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.4 }}
        >
          <Card className="ton-card">
            <CardHeader>
              <CardTitle className="flex items-center">
                <TrendingUp className="w-5 h-5 mr-2" />
                TON Ecosystem Market Overview
              </CardTitle>
              <CardDescription>
                Real-time market data and DeFi opportunities on TON blockchain
              </CardDescription>
            </CardHeader>
            <CardContent>
              <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
                <div className="space-y-2">
                  <div className="flex items-center justify-between">
                    <span className="text-sm font-medium">TON Price</span>
                    <Badge className="ton-status-success">
                      +{marketData.tonChange}%
                    </Badge>
                  </div>
                  <div className="text-2xl font-bold">
                    ${marketData.tonPrice}
                  </div>
                  <div className="text-xs text-muted-foreground">
                    Market Cap: $
                    {(marketData.totalMarketCap / 1000000000).toFixed(1)}B
                  </div>
                </div>

                <div className="space-y-2">
                  <div className="flex items-center justify-between">
                    <span className="text-sm font-medium">DeFi TVL</span>
                    <Badge className="ton-badge">TON Ecosystem</Badge>
                  </div>
                  <div className="text-2xl font-bold">
                    ${(marketData.defiTVL / 1000000000).toFixed(1)}B
                  </div>
                  <div className="text-xs text-muted-foreground">
                    Total Value Locked
                  </div>
                </div>

                <div className="space-y-2">
                  <div className="flex items-center justify-between">
                    <span className="text-sm font-medium">Staking APY</span>
                    <Badge className="ton-status-success">
                      {marketData.stakingAPY}%
                    </Badge>
                  </div>
                  <div className="text-2xl font-bold">
                    {marketData.stakingAPY}%
                  </div>
                  <div className="text-xs text-muted-foreground">
                    Current staking rewards
                  </div>
                </div>
              </div>
            </CardContent>
          </Card>
        </motion.div>

        {/* Main Content */}
        <Tabs defaultValue="sips" className="space-y-6">
          <TabsList className="grid w-full grid-cols-3 lg:w-[400px]">
            <TabsTrigger value="sips">Active SIPs</TabsTrigger>
            <TabsTrigger value="transactions">Transactions</TabsTrigger>
            <TabsTrigger value="analytics">Analytics</TabsTrigger>
          </TabsList>

          <TabsContent value="sips" className="space-y-6">
            <div className="grid gap-6">
              {loading ? (
                <div className="text-center py-12">
                  <div className="animate-spin rounded-full h-12 w-12 border-b-2 border-primary mx-auto mb-4"></div>
                  <p className="text-muted-foreground">Loading your SIPs...</p>
                </div>
              ) : sips.length === 0 ? (
                <div className="text-center py-12">
                  <p className="text-muted-foreground mb-4">No SIPs found</p>
                  <Button asChild>
                    <Link href="/create-sip">Create Your First SIP</Link>
                  </Button>
                </div>
              ) : (
                sips.map((sip, index) => (
                  <motion.div
                    key={sip.id}
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.6, delay: index * 0.1 }}
                  >
                    <Card className="glass-card hover:bg-card/70 transition-colors">
                      <CardHeader>
                        <div className="flex items-center justify-between">
                          <div>
                            <CardTitle className="text-lg flex items-center gap-2">
                              {sip.name}
                              {sip.insurance && (
                                <Shield className="w-4 h-4 text-primary" />
                              )}
                            </CardTitle>
                            <CardDescription>
                              ${sip.amount} • {sip.frequency} • {sip.strategy}
                            </CardDescription>
                          </div>
                          <div className="flex items-center space-x-2">
                            <Badge
                              variant={
                                sip.status === "Active"
                                  ? "secondary"
                                  : "outline"
                              }
                              className={
                                sip.status === "Active"
                                  ? "bg-green-500/10 text-green-400"
                                  : ""
                              }
                            >
                              {sip.status}
                            </Badge>
                            <DropdownMenu>
                              <DropdownMenuTrigger asChild>
                                <Button variant="ghost" size="sm">
                                  <MoreHorizontal className="w-4 h-4" />
                                </Button>
                              </DropdownMenuTrigger>
                              <DropdownMenuContent align="end">
                                <DropdownMenuItem
                                  onClick={() =>
                                    handleSIPAction(sip.id, "edit")
                                  }
                                >
                                  <Settings className="w-4 h-4 mr-2" />
                                  Edit Plan
                                </DropdownMenuItem>
                                <DropdownMenuItem
                                  onClick={() =>
                                    handleSIPAction(
                                      sip.id,
                                      sip.status === "Active"
                                        ? "pause"
                                        : "resume"
                                    )
                                  }
                                >
                                  {sip.status === "Active" ? (
                                    <>
                                      <Pause className="w-4 h-4 mr-2" />
                                      Pause Plan
                                    </>
                                  ) : (
                                    <>
                                      <Play className="w-4 h-4 mr-2" />
                                      Resume Plan
                                    </>
                                  )}
                                </DropdownMenuItem>
                                <DropdownMenuItem
                                  className="text-destructive"
                                  onClick={() =>
                                    handleSIPAction(sip.id, "delete")
                                  }
                                >
                                  <Trash2 className="w-4 h-4 mr-2" />
                                  Delete Plan
                                </DropdownMenuItem>
                              </DropdownMenuContent>
                            </DropdownMenu>
                          </div>
                        </div>
                      </CardHeader>
                      <CardContent>
                        <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
                          <div>
                            <p className="text-sm text-muted-foreground">
                              Current Value
                            </p>
                            <p className="text-lg font-semibold">
                              ${sip.currentValue.toLocaleString()}
                            </p>
                          </div>
                          <div>
                            <p className="text-sm text-muted-foreground">
                              Invested
                            </p>
                            <p className="text-lg font-semibold">
                              ${sip.invested.toLocaleString()}
                            </p>
                          </div>
                          <div>
                            <p className="text-sm text-muted-foreground">
                              Returns
                            </p>
                            <p className="text-lg font-semibold text-green-400">
                              +${sip.returns.toLocaleString()}
                            </p>
                          </div>
                          <div>
                            <p className="text-sm text-muted-foreground">APY</p>
                            <p className="text-lg font-semibold">{sip.apy}%</p>
                          </div>
                        </div>
                        <div className="mt-4 pt-4 border-t border-border">
                          <p className="text-sm text-muted-foreground">
                            Next execution:{" "}
                            <span className="text-foreground font-medium">
                              {sip.nextExecution}
                            </span>
                          </p>
                        </div>
                      </CardContent>
                    </Card>
                  </motion.div>
                ))
              )}
            </div>
          </TabsContent>

          <TabsContent value="transactions" className="space-y-6">
            <Card className="glass-card">
              <CardHeader>
                <CardTitle>Recent Transactions</CardTitle>
                <CardDescription>
                  Your latest SIP executions, yields, and insurance payments
                </CardDescription>
              </CardHeader>
              <CardContent>
                <div className="space-y-4">
                  {recentTransactions.map((tx, index) => (
                    <motion.div
                      key={tx.id}
                      initial={{ opacity: 0, x: -20 }}
                      animate={{ opacity: 1, x: 0 }}
                      transition={{ duration: 0.6, delay: index * 0.1 }}
                      className="flex items-center justify-between p-4 rounded-lg bg-muted/20 border border-border/50"
                    >
                      <div className="flex items-center space-x-4">
                        <div className="w-10 h-10 bg-primary/10 rounded-full flex items-center justify-center">
                          {tx.type === "Investment" ? (
                            <ArrowUpRight className="w-5 h-5 text-primary" />
                          ) : tx.type === "Yield" ? (
                            <TrendingUp className="w-5 h-5 text-green-400" />
                          ) : (
                            <Shield className="w-5 h-5 text-blue-400" />
                          )}
                        </div>
                        <div>
                          <p className="font-medium">{tx.type}</p>
                          <p className="text-sm text-muted-foreground">
                            {tx.strategy}
                          </p>
                          <p className="text-xs text-muted-foreground">
                            Tx: {tx.txHash}
                          </p>
                        </div>
                      </div>
                      <div className="text-right">
                        <p className="font-semibold">
                          {tx.type === "Investment" || tx.type === "Insurance"
                            ? "-"
                            : "+"}
                          ${tx.amount} {tx.token}
                        </p>
                        <p className="text-sm text-muted-foreground">
                          {new Date(tx.timestamp).toLocaleDateString()}
                        </p>
                        <Badge variant="secondary" className="text-xs">
                          {tx.status}
                        </Badge>
                      </div>
                    </motion.div>
                  ))}
                </div>
              </CardContent>
            </Card>
          </TabsContent>

          <TabsContent value="analytics" className="space-y-6">
            <Card className="glass-card">
              <CardHeader>
                <CardTitle>Performance Analytics</CardTitle>
                <CardDescription>
                  Detailed insights into your investment performance
                </CardDescription>
              </CardHeader>
              <CardContent>
                <div className="text-center py-12">
                  <Activity className="w-16 h-16 text-muted-foreground mx-auto mb-4" />
                  <h3 className="text-lg font-semibold mb-2">
                    Analytics Coming Soon
                  </h3>
                  <p className="text-muted-foreground">
                    We're building comprehensive analytics to help you track
                    your performance.
                  </p>
                </div>
              </CardContent>
            </Card>
          </TabsContent>
        </Tabs>
      </div>
    </div>
  );
}
