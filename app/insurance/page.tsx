"use client";

import { useState } from "react";
import { motion } from "framer-motion";
import {
  Shield,
  FileText,
  Clock,
  CheckCircle,
  XCircle,
  AlertTriangle,
  DollarSign,
  Users,
  TrendingUp,
  Info,
  Plus,
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
import { Navigation } from "@/components/navigation";
import Link from "next/link";

const insuranceStats = {
  totalCoverage: 2400000,
  totalPremiums: 45200,
  activePolices: 892,
  claimsPaid: 12,
  successRate: 94.2,
  monthlyGrowth: 15.3,
  tonCoverage: 1800000,
  usdtCoverage: 400000,
  usdcCoverage: 200000,
  averageClaimTime: "18 hours",
  totalPayouts: 125000,
};

const coverageOptions = [
  {
    id: "basic",
    name: "Basic Coverage",
    premium: "1.0%",
    coverage: "Up to $10,000",
    features: [
      "Smart contract failures",
      "Failed transactions",
      "24h claim review",
      "Basic support",
    ],
    tonCompatible: true,
    popular: false,
  },
  {
    id: "premium",
    name: "Premium Coverage",
    premium: "1.5%",
    coverage: "Up to $50,000",
    features: [
      "All Basic features",
      "Protocol exploits",
      "12h claim review",
      "Priority support",
      "Advanced analytics",
    ],
    tonCompatible: true,
    popular: true,
  },
  {
    id: "enterprise",
    name: "Enterprise Coverage",
    premium: "2.0%",
    coverage: "Up to $250,000",
    features: [
      "All Premium features",
      "Custom coverage terms",
      "Dedicated support",
      "6h claim review",
      "Multi-protocol coverage",
    ],
    tonCompatible: true,
    popular: false,
  },
];

export default function Insurance() {
  const [selectedPlan, setSelectedPlan] = useState("premium");

  return (
    <div className="min-h-screen">
      <Navigation />

      <div className="pt-20 px-4 sm:px-6 lg:px-8 max-w-7xl mx-auto">
        {/* Header */}
        <div className="flex flex-col sm:flex-row justify-between items-start sm:items-center mb-8">
          <div>
            <h1 className="text-3xl font-bold mb-2">Insurance Coverage</h1>
            <p className="text-muted-foreground">
              Protect your investments with comprehensive coverage
            </p>
          </div>
          <Button className="bg-primary hover:bg-primary/90 text-primary-foreground font-medium mt-4 sm:mt-0">
            <Link href="/claims" className="flex items-center">
              <Plus className="w-4 h-4 mr-2" />
              File New Claim
            </Link>
          </Button>
        </div>

        {/* Stats Overview */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-5 gap-6 mb-8">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
          >
            <Card className="glass-card">
              <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
                <CardTitle className="text-sm font-medium">
                  Total Coverage
                </CardTitle>
                <Shield className="h-4 w-4 text-muted-foreground" />
              </CardHeader>
              <CardContent>
                <div className="text-2xl font-bold">
                  ${(insuranceStats.totalCoverage / 1000000).toFixed(1)}M
                </div>
                <p className="text-xs text-muted-foreground">Active policies</p>
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
                  Premiums Collected
                </CardTitle>
                <DollarSign className="h-4 w-4 text-muted-foreground" />
              </CardHeader>
              <CardContent>
                <div className="text-2xl font-bold">
                  ${insuranceStats.totalPremiums.toLocaleString()}
                </div>
                <p className="text-xs text-muted-foreground">This month</p>
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
                  Protected Users
                </CardTitle>
                <Users className="h-4 w-4 text-muted-foreground" />
              </CardHeader>
              <CardContent>
                <div className="text-2xl font-bold">
                  {insuranceStats.activePolices}
                </div>
                <p className="text-xs text-muted-foreground">Active policies</p>
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
                  Claims Paid
                </CardTitle>
                <CheckCircle className="h-4 w-4 text-muted-foreground" />
              </CardHeader>
              <CardContent>
                <div className="text-2xl font-bold">
                  {insuranceStats.claimsPaid}
                </div>
                <p className="text-xs text-muted-foreground">Last 30 days</p>
              </CardContent>
            </Card>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.4 }}
          >
            <Card className="glass-card">
              <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
                <CardTitle className="text-sm font-medium">
                  Success Rate
                </CardTitle>
                <TrendingUp className="h-4 w-4 text-muted-foreground" />
              </CardHeader>
              <CardContent>
                <div className="text-2xl font-bold text-green-400">
                  {insuranceStats.successRate}%
                </div>
                <p className="text-xs text-muted-foreground">Claim approval</p>
              </CardContent>
            </Card>
          </motion.div>
        </div>

        {/* Main Content */}
        <Tabs defaultValue="plans" className="space-y-6">
          <TabsList className="grid w-full grid-cols-3 lg:w-[400px]">
            <TabsTrigger value="plans">Coverage Plans</TabsTrigger>
            <TabsTrigger value="how-it-works">How It Works</TabsTrigger>
            <TabsTrigger value="governance">Governance</TabsTrigger>
          </TabsList>

          <TabsContent value="plans" className="space-y-6">
            <div className="grid md:grid-cols-3 gap-6">
              {coverageOptions.map((option, index) => (
                <motion.div
                  key={option.id}
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.6, delay: index * 0.1 }}
                >
                  <Card
                    className={`glass-card hover:bg-card/70 transition-colors h-full ${
                      option.id === "premium" ? "border-primary/50" : ""
                    }`}
                  >
                    <CardHeader>
                      <div className="flex items-center justify-between">
                        <CardTitle className="text-lg">{option.name}</CardTitle>
                        <Badge
                          variant={
                            option.id === "premium" ? "default" : "secondary"
                          }
                        >
                          {option.premium} fee
                        </Badge>
                      </div>
                      <CardDescription className="text-xl font-semibold text-primary">
                        {option.coverage}
                      </CardDescription>
                      {option.id === "premium" && (
                        <Badge className="w-fit bg-primary/10 text-primary border-primary/20">
                          Most Popular
                        </Badge>
                      )}
                    </CardHeader>
                    <CardContent>
                      <ul className="space-y-2 mb-6">
                        {option.features.map((feature, featureIndex) => (
                          <li
                            key={featureIndex}
                            className="flex items-center text-sm"
                          >
                            <CheckCircle className="w-4 h-4 text-green-400 mr-2 flex-shrink-0" />
                            {feature}
                          </li>
                        ))}
                      </ul>
                      <Button
                        className="w-full"
                        variant={
                          option.id === "premium" ? "default" : "outline"
                        }
                        onClick={() => setSelectedPlan(option.id)}
                      >
                        {option.id === selectedPlan
                          ? "Selected"
                          : "Select Plan"}
                      </Button>
                    </CardContent>
                  </Card>
                </motion.div>
              ))}
            </div>
          </TabsContent>

          <TabsContent value="how-it-works" className="space-y-6">
            <Card className="glass-card">
              <CardHeader>
                <CardTitle className="flex items-center">
                  <Info className="w-5 h-5 mr-2 text-blue-400" />
                  How Insurance Works
                </CardTitle>
              </CardHeader>
              <CardContent className="space-y-6">
                <div className="grid md:grid-cols-2 gap-8">
                  <div>
                    <h4 className="font-semibold mb-4 text-green-400">
                      Coverage Includes:
                    </h4>
                    <ul className="space-y-2 text-sm text-muted-foreground">
                      <li className="flex items-start">
                        <CheckCircle className="w-4 h-4 text-green-400 mr-2 mt-0.5 flex-shrink-0" />
                        Smart contract exploits and bugs
                      </li>
                      <li className="flex items-start">
                        <CheckCircle className="w-4 h-4 text-green-400 mr-2 mt-0.5 flex-shrink-0" />
                        Failed transactions due to protocol issues
                      </li>
                      <li className="flex items-start">
                        <CheckCircle className="w-4 h-4 text-green-400 mr-2 mt-0.5 flex-shrink-0" />
                        Temporary protocol suspensions
                      </li>
                      <li className="flex items-start">
                        <CheckCircle className="w-4 h-4 text-green-400 mr-2 mt-0.5 flex-shrink-0" />
                        Oracle manipulation attacks
                      </li>
                      <li className="flex items-start">
                        <CheckCircle className="w-4 h-4 text-green-400 mr-2 mt-0.5 flex-shrink-0" />
                        Execution bot failures
                      </li>
                    </ul>
                  </div>
                  <div>
                    <h4 className="font-semibold mb-4 text-red-400">
                      Coverage Excludes:
                    </h4>
                    <ul className="space-y-2 text-sm text-muted-foreground">
                      <li className="flex items-start">
                        <XCircle className="w-4 h-4 text-red-400 mr-2 mt-0.5 flex-shrink-0" />
                        Market volatility and price fluctuations
                      </li>
                      <li className="flex items-start">
                        <XCircle className="w-4 h-4 text-red-400 mr-2 mt-0.5 flex-shrink-0" />
                        User errors (wrong addresses, insufficient gas)
                      </li>
                      <li className="flex items-start">
                        <XCircle className="w-4 h-4 text-red-400 mr-2 mt-0.5 flex-shrink-0" />
                        Regulatory changes affecting protocols
                      </li>
                      <li className="flex items-start">
                        <XCircle className="w-4 h-4 text-red-400 mr-2 mt-0.5 flex-shrink-0" />
                        Planned protocol upgrades with advance notice
                      </li>
                      <li className="flex items-start">
                        <XCircle className="w-4 h-4 text-red-400 mr-2 mt-0.5 flex-shrink-0" />
                        Losses due to personal key compromise
                      </li>
                    </ul>
                  </div>
                </div>

                <div className="border-t border-border pt-6">
                  <h4 className="font-semibold mb-4">Claims Process</h4>
                  <div className="grid md:grid-cols-4 gap-4">
                    <div className="text-center">
                      <div className="w-12 h-12 bg-primary/20 rounded-full flex items-center justify-center mx-auto mb-2">
                        <FileText className="w-6 h-6 text-primary" />
                      </div>
                      <h5 className="font-medium mb-1">1. Submit Claim</h5>
                      <p className="text-xs text-muted-foreground">
                        File your claim with evidence
                      </p>
                    </div>
                    <div className="text-center">
                      <div className="w-12 h-12 bg-primary/20 rounded-full flex items-center justify-center mx-auto mb-2">
                        <Clock className="w-6 h-6 text-primary" />
                      </div>
                      <h5 className="font-medium mb-1">2. Review Period</h5>
                      <p className="text-xs text-muted-foreground">
                        DAO members review claim
                      </p>
                    </div>
                    <div className="text-center">
                      <div className="w-12 h-12 bg-primary/20 rounded-full flex items-center justify-center mx-auto mb-2">
                        <Users className="w-6 h-6 text-primary" />
                      </div>
                      <h5 className="font-medium mb-1">3. Governance Vote</h5>
                      <p className="text-xs text-muted-foreground">
                        Community votes on approval
                      </p>
                    </div>
                    <div className="text-center">
                      <div className="w-12 h-12 bg-primary/20 rounded-full flex items-center justify-center mx-auto mb-2">
                        <DollarSign className="w-6 h-6 text-primary" />
                      </div>
                      <h5 className="font-medium mb-1">4. Payout</h5>
                      <p className="text-xs text-muted-foreground">
                        Approved claims are paid
                      </p>
                    </div>
                  </div>
                </div>
              </CardContent>
            </Card>
          </TabsContent>

          <TabsContent value="governance" className="space-y-6">
            <Card className="glass-card">
              <CardHeader>
                <CardTitle>DAO Governance</CardTitle>
                <CardDescription>
                  Participate in insurance fund governance and claim reviews
                </CardDescription>
              </CardHeader>
              <CardContent>
                <div className="text-center py-12">
                  <Users className="w-16 h-16 text-muted-foreground mx-auto mb-4" />
                  <h3 className="text-lg font-semibold mb-2">
                    Governance Coming Soon
                  </h3>
                  <p className="text-muted-foreground mb-6">
                    Token holders will be able to vote on claim approvals,
                    insurance policies, and fund management.
                  </p>
                  <div className="grid md:grid-cols-3 gap-4 mt-8">
                    <div className="p-4 bg-muted/20 rounded-lg">
                      <h4 className="font-semibold mb-2">Claim Reviews</h4>
                      <p className="text-sm text-muted-foreground">
                        Vote on insurance claim approvals with transparent
                        evidence review
                      </p>
                    </div>
                    <div className="p-4 bg-muted/20 rounded-lg">
                      <h4 className="font-semibold mb-2">Policy Updates</h4>
                      <p className="text-sm text-muted-foreground">
                        Propose and vote on coverage terms and premium
                        adjustments
                      </p>
                    </div>
                    <div className="p-4 bg-muted/20 rounded-lg">
                      <h4 className="font-semibold mb-2">Fund Management</h4>
                      <p className="text-sm text-muted-foreground">
                        Oversee insurance vault investments and reserve
                        requirements
                      </p>
                    </div>
                  </div>
                </div>
              </CardContent>
            </Card>
          </TabsContent>
        </Tabs>
      </div>
    </div>
  );
}
