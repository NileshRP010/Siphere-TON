"use client";

import { useState } from "react";
import { motion } from "framer-motion";
import {
  Plus,
  Search,
  Filter,
  TrendingUp,
  Calendar,
  DollarSign,
  MoreHorizontal,
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
import { Input } from "@/components/ui/input";
import { Badge } from "@/components/ui/badge";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu";
import { Navigation } from "@/components/navigation";
import Link from "next/link";

const sipPlans = [
  {
    id: 1,
    name: "SOL Staking Plan",
    amount: 100,
    frequency: "Weekly",
    strategy: "Marinade Staking",
    currentValue: 1850,
    invested: 1600,
    returns: 250,
    returnPercentage: 15.6,
    status: "Active",
    nextExecution: "2025-01-08",
    apy: 7.2,
    startDate: "2025-10-15",
    executionCount: 12,
  },
  {
    id: 2,
    name: "USDC Lending Plan",
    amount: 500,
    frequency: "Monthly",
    strategy: "Solend Protocol",
    currentValue: 6200,
    invested: 6000,
    returns: 200,
    returnPercentage: 3.3,
    status: "Active",
    nextExecution: "2025-01-15",
    apy: 5.8,
    startDate: "2025-09-01",
    executionCount: 4,
  },
  {
    id: 3,
    name: "mSOL Growth Plan",
    amount: 200,
    frequency: "Bi-weekly",
    strategy: "Marinade Finance",
    currentValue: 4350,
    invested: 4000,
    returns: 350,
    returnPercentage: 8.8,
    status: "Active",
    nextExecution: "2025-01-10",
    apy: 8.1,
    startDate: "2025-08-20",
    executionCount: 20,
  },
  {
    id: 4,
    name: "Conservative USDT Plan",
    amount: 300,
    frequency: "Monthly",
    strategy: "Solend Protocol",
    currentValue: 920,
    invested: 900,
    returns: 20,
    returnPercentage: 2.2,
    status: "Paused",
    nextExecution: "2025-01-20",
    apy: 4.5,
    startDate: "2025-11-01",
    executionCount: 3,
  },
];

export default function SIPPlans() {
  const [searchTerm, setSearchTerm] = useState("");
  const [statusFilter, setStatusFilter] = useState("all");
  const [sortBy, setSortBy] = useState("name");

  const filteredSIPs = sipPlans
    .filter(
      (sip) =>
        sip.name.toLowerCase().includes(searchTerm.toLowerCase()) &&
        (statusFilter === "all" || sip.status.toLowerCase() === statusFilter)
    )
    .sort((a, b) => {
      switch (sortBy) {
        case "value":
          return b.currentValue - a.currentValue;
        case "returns":
          return b.returnPercentage - a.returnPercentage;
        case "amount":
          return b.amount - a.amount;
        default:
          return a.name.localeCompare(b.name);
      }
    });

  const totalStats = sipPlans.reduce(
    (acc, sip) => ({
      totalValue: acc.totalValue + sip.currentValue,
      totalInvested: acc.totalInvested + sip.invested,
      totalReturns: acc.totalReturns + sip.returns,
      activePlans: acc.activePlans + (sip.status === "Active" ? 1 : 0),
    }),
    { totalValue: 0, totalInvested: 0, totalReturns: 0, activePlans: 0 }
  );

  return (
    <div className="min-h-screen">
      <Navigation />

      <div className="pt-20 px-4 sm:px-6 lg:px-8 max-w-7xl mx-auto">
        {/* Header */}
        <div className="flex flex-col sm:flex-row justify-between items-start sm:items-center mb-8">
          <div>
            <h1 className="text-3xl font-bold mb-2">SIP Plans</h1>
            <p className="text-muted-foreground">
              Manage your systematic investment plans
            </p>
          </div>
          <Button
            className="bg-accent hover:bg-accent/90 text-black font-medium mt-4 sm:mt-0"
            asChild
          >
            <Link href="/sip/create" className="flex items-center">
              <Plus className="w-4 h-4 mr-2" />
              Create New SIP
            </Link>
          </Button>
        </div>

        {/* Summary Cards */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 mb-8">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
          >
            <Card className="glass-card">
              <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
                <CardTitle className="text-sm font-medium">
                  Total Value
                </CardTitle>
                <DollarSign className="h-4 w-4 text-muted-foreground" />
              </CardHeader>
              <CardContent>
                <div className="text-2xl font-bold">
                  ${totalStats.totalValue.toLocaleString()}
                </div>
                <p className="text-xs text-muted-foreground">
                  +
                  {(
                    (totalStats.totalReturns / totalStats.totalInvested) *
                    100
                  ).toFixed(1)}
                  % total return
                </p>
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
                  Active Plans
                </CardTitle>
                <TrendingUp className="h-4 w-4 text-muted-foreground" />
              </CardHeader>
              <CardContent>
                <div className="text-2xl font-bold">
                  {totalStats.activePlans}
                </div>
                <p className="text-xs text-muted-foreground">
                  of {sipPlans.length} total plans
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
                  Total Invested
                </CardTitle>
                <Calendar className="h-4 w-4 text-muted-foreground" />
              </CardHeader>
              <CardContent>
                <div className="text-2xl font-bold">
                  ${totalStats.totalInvested.toLocaleString()}
                </div>
                <p className="text-xs text-muted-foreground">
                  Across all strategies
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
                  Total Returns
                </CardTitle>
                <TrendingUp className="h-4 w-4 text-muted-foreground" />
              </CardHeader>
              <CardContent>
                <div className="text-2xl font-bold text-green-400">
                  +${totalStats.totalReturns.toLocaleString()}
                </div>
                <p className="text-xs text-muted-foreground">
                  Lifetime earnings
                </p>
              </CardContent>
            </Card>
          </motion.div>
        </div>

        {/* Filters and Search */}
        <Card className="glass-card mb-6">
          <CardContent className="p-6">
            <div className="flex flex-col sm:flex-row gap-4">
              <div className="flex-1">
                <div className="relative">
                  <Search className="absolute left-3 top-3 h-4 w-4 text-muted-foreground" />
                  <Input
                    placeholder="Search SIP plans..."
                    value={searchTerm}
                    onChange={(e) => setSearchTerm(e.target.value)}
                    className="pl-10"
                  />
                </div>
              </div>
              <div className="flex gap-2">
                <Select value={statusFilter} onValueChange={setStatusFilter}>
                  <SelectTrigger className="w-[140px]">
                    <Filter className="h-4 w-4 mr-2" />
                    <SelectValue />
                  </SelectTrigger>
                  <SelectContent>
                    <SelectItem value="all">All Status</SelectItem>
                    <SelectItem value="active">Active</SelectItem>
                    <SelectItem value="paused">Paused</SelectItem>
                  </SelectContent>
                </Select>
                <Select value={sortBy} onValueChange={setSortBy}>
                  <SelectTrigger className="w-[140px]">
                    <SelectValue />
                  </SelectTrigger>
                  <SelectContent>
                    <SelectItem value="name">Sort by Name</SelectItem>
                    <SelectItem value="value">Sort by Value</SelectItem>
                    <SelectItem value="returns">Sort by Returns</SelectItem>
                    <SelectItem value="amount">Sort by Amount</SelectItem>
                  </SelectContent>
                </Select>
              </div>
            </div>
          </CardContent>
        </Card>

        {/* SIP Plans List */}
        <div className="space-y-4">
          {filteredSIPs.map((sip, index) => (
            <motion.div
              key={sip.id}
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: index * 0.1 }}
            >
              <Card className="glass-card hover:bg-card/70 transition-colors">
                <CardHeader>
                  <div className="flex items-center justify-between">
                    <div className="flex items-center space-x-4">
                      <div>
                        <CardTitle className="text-lg">{sip.name}</CardTitle>
                        <CardDescription>
                          ${sip.amount} • {sip.frequency} • {sip.strategy}
                        </CardDescription>
                      </div>
                    </div>
                    <div className="flex items-center space-x-2">
                      <Badge
                        variant={
                          sip.status === "Active" ? "secondary" : "outline"
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
                          <DropdownMenuItem>
                            <Settings className="w-4 h-4 mr-2" />
                            Edit Plan
                          </DropdownMenuItem>
                          <DropdownMenuItem>
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
                          <DropdownMenuItem className="text-destructive">
                            <Trash2 className="w-4 h-4 mr-2" />
                            Delete Plan
                          </DropdownMenuItem>
                        </DropdownMenuContent>
                      </DropdownMenu>
                    </div>
                  </div>
                </CardHeader>
                <CardContent>
                  <div className="grid grid-cols-2 md:grid-cols-5 gap-4 mb-4">
                    <div>
                      <p className="text-sm text-muted-foreground">
                        Current Value
                      </p>
                      <p className="text-lg font-semibold">
                        ${sip.currentValue.toLocaleString()}
                      </p>
                    </div>
                    <div>
                      <p className="text-sm text-muted-foreground">Invested</p>
                      <p className="text-lg font-semibold">
                        ${sip.invested.toLocaleString()}
                      </p>
                    </div>
                    <div>
                      <p className="text-sm text-muted-foreground">Returns</p>
                      <p className="text-lg font-semibold text-green-400">
                        +${sip.returns.toLocaleString()} ({sip.returnPercentage}
                        %)
                      </p>
                    </div>
                    <div>
                      <p className="text-sm text-muted-foreground">APY</p>
                      <p className="text-lg font-semibold">{sip.apy}%</p>
                    </div>
                    <div>
                      <p className="text-sm text-muted-foreground">
                        Executions
                      </p>
                      <p className="text-lg font-semibold">
                        {sip.executionCount}
                      </p>
                    </div>
                  </div>
                  <div className="flex flex-col sm:flex-row justify-between items-start sm:items-center pt-4 border-t border-border">
                    <div className="text-sm text-muted-foreground">
                      Started: {new Date(sip.startDate).toLocaleDateString()}
                    </div>
                    <div className="text-sm text-muted-foreground mt-2 sm:mt-0">
                      Next execution:{" "}
                      <span className="text-foreground font-medium">
                        {sip.nextExecution}
                      </span>
                    </div>
                  </div>
                </CardContent>
              </Card>
            </motion.div>
          ))}
        </div>

        {filteredSIPs.length === 0 && (
          <Card className="glass-card">
            <CardContent className="p-12 text-center">
              <Calendar className="w-16 h-16 text-muted-foreground mx-auto mb-4" />
              <h3 className="text-lg font-semibold mb-2">No SIP Plans Found</h3>
              <p className="text-muted-foreground mb-6">
                {searchTerm || statusFilter !== "all"
                  ? "Try adjusting your search or filter criteria."
                  : "Create your first systematic investment plan to get started."}
              </p>
              {!searchTerm && statusFilter === "all" && (
                <Button
                  className="bg-accent hover:bg-accent/90 text-black font-medium"
                  asChild
                >
                  <Link href="/sip/create">Create Your First SIP</Link>
                </Button>
              )}
            </CardContent>
          </Card>
        )}
      </div>
    </div>
  );
}
