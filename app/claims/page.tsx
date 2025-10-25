"use client";

import { useState } from "react";
import { motion } from "framer-motion";
import {
  FileText,
  Clock,
  CheckCircle,
  XCircle,
  AlertTriangle,
  Upload,
  Calendar,
  DollarSign,
  Shield,
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
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Textarea } from "@/components/ui/textarea";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { Navigation } from "@/components/navigation";

const recentClaims = [
  {
    id: "CLM-001",
    sipName: "TON Staking SIP",
    claimType: "Failed Transaction",
    amount: 500,
    status: "Approved",
    submittedDate: "2025-01-02",
    resolvedDate: "2025-01-04",
    reason: "Transaction failed due to TON network congestion during execution",
    evidence:
      "TON Transaction hash: EQD4FPq-PRDieyQKkizFTRtSDyucUIqrj0v_zXJmqaDp6_0t",
    payout: 500,
    token: "TON",
  },
  {
    id: "CLM-002",
    sipName: "USDT Lending SIP",
    claimType: "Smart Contract Failure",
    amount: 1200,
    status: "Under Review",
    submittedDate: "2025-01-05",
    resolvedDate: null,
    reason:
      "Smart contract execution failed during lending protocol interaction",
    evidence:
      "Contract address: EQD4FPq-PRDieyQKkizFTRtSDyucUIqrj0v_zXJmqaDp6_0t",
    payout: null,
    token: "USDT",
  },
  {
    id: "CLM-003",
    sipName: "USDC DeFi SIP",
    claimType: "Protocol Exploit",
    amount: 2500,
    status: "Approved",
    submittedDate: "2024-12-28",
    resolvedDate: "2024-12-30",
    reason:
      "DeFi protocol exploit resulted in loss of funds during automated execution",
    evidence:
      "Exploit transaction: EQD4FPq-PRDieyQKkizFTRtSDyucUIqrj0v_zXJmqaDp6_0t",
    payout: 2500,
    token: "USDC",
  },
];

const claimStats = {
  totalClaims: 15,
  approvedClaims: 12,
  pendingClaims: 2,
  rejectedClaims: 1,
  totalPayouts: 125000,
  averageProcessingTime: "18 hours",
  successRate: 94.2,
};

const claimTypes = [
  "Failed Transaction",
  "Smart Contract Failure",
  "Protocol Exploit",
  "Network Congestion",
  "Execution Bot Failure",
  "Insufficient Liquidity",
];

export default function Claims() {
  const [newClaim, setNewClaim] = useState({
    sipId: "",
    claimType: "",
    amount: "",
    reason: "",
    evidence: "",
    token: "TON",
  });

  const handleSubmitClaim = () => {
    console.log("Submitting claim:", newClaim);
    // This would integrate with smart contracts
  };

  return (
    <div className="min-h-screen">
      <Navigation />

      <div className="pt-20 px-4 sm:px-6 lg:px-8 max-w-7xl mx-auto">
        {/* Header */}
        <div className="flex flex-col sm:flex-row sm:items-center justify-between mb-8">
          <div>
            <h1 className="text-3xl font-bold ton-gradient-text mb-2">
              Claims Management
            </h1>
            <p className="text-muted-foreground">
              Track and manage your insurance claims on TON blockchain
            </p>
          </div>
          <Button className="ton-button mt-4 sm:mt-0">
            <Plus className="w-4 h-4 mr-2" />
            File New Claim
          </Button>
        </div>

        {/* Claims Statistics */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 mb-8">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
          >
            <Card className="ton-card">
              <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
                <CardTitle className="text-sm font-medium">
                  Total Claims
                </CardTitle>
                <FileText className="h-4 w-4 text-muted-foreground" />
              </CardHeader>
              <CardContent>
                <div className="text-2xl font-bold">
                  {claimStats.totalClaims}
                </div>
                <p className="text-xs text-muted-foreground mt-1">
                  All time claims
                </p>
              </CardContent>
            </Card>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.1 }}
          >
            <Card className="ton-card">
              <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
                <CardTitle className="text-sm font-medium">Approved</CardTitle>
                <CheckCircle className="h-4 w-4 text-green-400" />
              </CardHeader>
              <CardContent>
                <div className="text-2xl font-bold text-green-400">
                  {claimStats.approvedClaims}
                </div>
                <p className="text-xs text-muted-foreground mt-1">
                  {claimStats.successRate}% success rate
                </p>
              </CardContent>
            </Card>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.2 }}
          >
            <Card className="ton-card">
              <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
                <CardTitle className="text-sm font-medium">Pending</CardTitle>
                <Clock className="h-4 w-4 text-yellow-400" />
              </CardHeader>
              <CardContent>
                <div className="text-2xl font-bold text-yellow-400">
                  {claimStats.pendingClaims}
                </div>
                <p className="text-xs text-muted-foreground mt-1">
                  Under review
                </p>
              </CardContent>
            </Card>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.3 }}
          >
            <Card className="ton-card">
              <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
                <CardTitle className="text-sm font-medium">
                  Total Payouts
                </CardTitle>
                <DollarSign className="h-4 w-4 text-muted-foreground" />
              </CardHeader>
              <CardContent>
                <div className="text-2xl font-bold">
                  ${claimStats.totalPayouts.toLocaleString()}
                </div>
                <p className="text-xs text-muted-foreground mt-1">
                  Average: {claimStats.averageProcessingTime}
                </p>
              </CardContent>
            </Card>
          </motion.div>
        </div>

        {/* Main Content */}
        <Tabs defaultValue="recent" className="space-y-6">
          <TabsList className="grid w-full grid-cols-3 lg:w-[400px]">
            <TabsTrigger value="recent">Recent Claims</TabsTrigger>
            <TabsTrigger value="submit">Submit Claim</TabsTrigger>
            <TabsTrigger value="history">Claim History</TabsTrigger>
          </TabsList>

          <TabsContent value="recent" className="space-y-6">
            <div className="grid gap-6">
              {recentClaims.map((claim, index) => (
                <motion.div
                  key={claim.id}
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.6, delay: index * 0.1 }}
                >
                  <Card className="ton-card">
                    <CardHeader>
                      <div className="flex items-center justify-between">
                        <div>
                          <CardTitle className="flex items-center">
                            {claim.sipName}
                            <Badge className="ml-2 ton-badge">
                              {claim.token}
                            </Badge>
                          </CardTitle>
                          <CardDescription>
                            Claim ID: {claim.id}
                          </CardDescription>
                        </div>
                        <Badge
                          className={
                            claim.status === "Approved"
                              ? "ton-status-success"
                              : claim.status === "Under Review"
                              ? "ton-status-warning"
                              : "ton-status-error"
                          }
                        >
                          {claim.status}
                        </Badge>
                      </div>
                    </CardHeader>
                    <CardContent>
                      <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                        <div>
                          <p className="text-sm font-medium mb-2">
                            Claim Details
                          </p>
                          <div className="space-y-1 text-sm text-muted-foreground">
                            <p>
                              <strong>Type:</strong> {claim.claimType}
                            </p>
                            <p>
                              <strong>Amount:</strong> ${claim.amount}{" "}
                              {claim.token}
                            </p>
                            <p>
                              <strong>Submitted:</strong> {claim.submittedDate}
                            </p>
                            {claim.resolvedDate && (
                              <p>
                                <strong>Resolved:</strong> {claim.resolvedDate}
                              </p>
                            )}
                          </div>
                        </div>
                        <div>
                          <p className="text-sm font-medium mb-2">Reason</p>
                          <p className="text-sm text-muted-foreground mb-2">
                            {claim.reason}
                          </p>
                          <p className="text-sm font-medium mb-1">Evidence</p>
                          <p className="text-xs text-muted-foreground font-mono">
                            {claim.evidence}
                          </p>
                        </div>
                      </div>
                      {claim.payout && (
                        <div className="mt-4 p-3 bg-green-500/10 border border-green-500/20 rounded-lg">
                          <p className="text-sm font-medium text-green-400">
                            Payout: ${claim.payout} {claim.token}
                          </p>
                        </div>
                      )}
                    </CardContent>
                  </Card>
                </motion.div>
              ))}
            </div>
          </TabsContent>

          <TabsContent value="submit" className="space-y-6">
            <Card className="ton-card">
              <CardHeader>
                <CardTitle>Submit New Claim</CardTitle>
                <CardDescription>
                  File a claim for your insured SIP on TON blockchain
                </CardDescription>
              </CardHeader>
              <CardContent className="space-y-6">
                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                  <div className="space-y-2">
                    <Label htmlFor="sipId">SIP ID</Label>
                    <Select
                      value={newClaim.sipId}
                      onValueChange={(value) =>
                        setNewClaim({ ...newClaim, sipId: value })
                      }
                    >
                      <SelectTrigger className="ton-input">
                        <SelectValue placeholder="Select your SIP" />
                      </SelectTrigger>
                      <SelectContent>
                        <SelectItem value="sip-1">TON Staking SIP</SelectItem>
                        <SelectItem value="sip-2">USDT Lending SIP</SelectItem>
                        <SelectItem value="sip-3">USDC DeFi SIP</SelectItem>
                      </SelectContent>
                    </Select>
                  </div>

                  <div className="space-y-2">
                    <Label htmlFor="claimType">Claim Type</Label>
                    <Select
                      value={newClaim.claimType}
                      onValueChange={(value) =>
                        setNewClaim({ ...newClaim, claimType: value })
                      }
                    >
                      <SelectTrigger className="ton-input">
                        <SelectValue placeholder="Select claim type" />
                      </SelectTrigger>
                      <SelectContent>
                        {claimTypes.map((type) => (
                          <SelectItem key={type} value={type}>
                            {type}
                          </SelectItem>
                        ))}
                      </SelectContent>
                    </Select>
                  </div>

                  <div className="space-y-2">
                    <Label htmlFor="amount">Claim Amount</Label>
                    <Input
                      id="amount"
                      type="number"
                      placeholder="Enter amount"
                      value={newClaim.amount}
                      onChange={(e) =>
                        setNewClaim({ ...newClaim, amount: e.target.value })
                      }
                      className="ton-input"
                    />
                  </div>

                  <div className="space-y-2">
                    <Label htmlFor="token">Token</Label>
                    <Select
                      value={newClaim.token}
                      onValueChange={(value) =>
                        setNewClaim({ ...newClaim, token: value })
                      }
                    >
                      <SelectTrigger className="ton-input">
                        <SelectValue />
                      </SelectTrigger>
                      <SelectContent>
                        <SelectItem value="TON">TON</SelectItem>
                        <SelectItem value="USDT">USDT</SelectItem>
                        <SelectItem value="USDC">USDC</SelectItem>
                      </SelectContent>
                    </Select>
                  </div>
                </div>

                <div className="space-y-2">
                  <Label htmlFor="reason">Reason for Claim</Label>
                  <Textarea
                    id="reason"
                    placeholder="Describe what happened and why you're filing this claim..."
                    value={newClaim.reason}
                    onChange={(e) =>
                      setNewClaim({ ...newClaim, reason: e.target.value })
                    }
                    className="ton-input min-h-[100px]"
                  />
                </div>

                <div className="space-y-2">
                  <Label htmlFor="evidence">Evidence</Label>
                  <Textarea
                    id="evidence"
                    placeholder="Provide transaction hashes, contract addresses, or other evidence..."
                    value={newClaim.evidence}
                    onChange={(e) =>
                      setNewClaim({ ...newClaim, evidence: e.target.value })
                    }
                    className="ton-input min-h-[100px]"
                  />
                </div>

                <Button
                  onClick={handleSubmitClaim}
                  className="ton-button w-full"
                  disabled={
                    !newClaim.sipId ||
                    !newClaim.claimType ||
                    !newClaim.amount ||
                    !newClaim.reason
                  }
                >
                  <FileText className="w-4 h-4 mr-2" />
                  Submit Claim
                </Button>
              </CardContent>
            </Card>
          </TabsContent>

          <TabsContent value="history" className="space-y-6">
            <Card className="ton-card">
              <CardHeader>
                <CardTitle>Complete Claim History</CardTitle>
                <CardDescription>
                  View all your claims and their processing status
                </CardDescription>
              </CardHeader>
              <CardContent>
                <div className="text-center py-12">
                  <FileText className="w-12 h-12 text-muted-foreground mx-auto mb-4" />
                  <p className="text-muted-foreground">
                    Complete claim history will be displayed here
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
