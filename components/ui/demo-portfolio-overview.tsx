import { motion } from "framer-motion";
import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { Progress } from "@/components/ui/progress";
import {
  TrendingUp,
  DollarSign,
  Shield,
  PieChart,
  ArrowUpRight,
  Clock,
  Target,
} from "lucide-react";
import { demoPortfolioStats, demoSIPs, demoInsurance } from "@/lib/demo-data";

interface DemoPortfolioOverviewProps {
  onCreateSIP?: () => void;
  onAddInsurance?: () => void;
}

export function DemoPortfolioOverview({
  onCreateSIP,
  onAddInsurance,
}: DemoPortfolioOverviewProps) {
  const stats = demoPortfolioStats;
  const isPositive = stats.totalReturns >= 0;

  const formatCurrency = (amount: number) => {
    return new Intl.NumberFormat("en-US", {
      style: "currency",
      currency: "USD",
      minimumFractionDigits: 0,
      maximumFractionDigits: 2,
    }).format(amount);
  };

  const allocationData = [
    {
      token: "TON",
      percentage: 65,
      amount: stats.totalValue * 0.65,
      color: "bg-blue-500",
    },
    {
      token: "USDT",
      percentage: 25,
      amount: stats.totalValue * 0.25,
      color: "bg-green-500",
    },
    {
      token: "USDC",
      percentage: 10,
      amount: stats.totalValue * 0.1,
      color: "bg-purple-500",
    },
  ];

  return (
    <div className="space-y-6">
      {/* Portfolio Value Card */}
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
      >
        <Card className="glass-card border-primary/20 bg-gradient-to-br from-primary/5 to-primary/10">
          <CardHeader>
            <CardDescription>Total Portfolio Value</CardDescription>
            <CardTitle className="text-3xl font-bold flex items-center gap-2">
              {formatCurrency(stats.totalValue)}
              <Badge variant="secondary" className="text-xs">
                Demo
              </Badge>
            </CardTitle>
          </CardHeader>
          <CardContent>
            <div className="flex items-center justify-between">
              <div className="flex items-center gap-2">
                {isPositive ? (
                  <TrendingUp className="w-5 h-5 text-green-400" />
                ) : (
                  <TrendingUp className="w-5 h-5 text-red-400 rotate-180" />
                )}
                <span
                  className={`font-semibold ${
                    isPositive ? "text-green-400" : "text-red-400"
                  }`}
                >
                  {isPositive ? "+" : ""}
                  {formatCurrency(stats.totalReturns)}
                </span>
                <span
                  className={`text-sm ${
                    isPositive ? "text-green-400" : "text-red-400"
                  }`}
                >
                  ({isPositive ? "+" : ""}
                  {stats.totalReturnsPercentage.toFixed(1)}%)
                </span>
              </div>
              <span className="text-muted-foreground text-sm">
                from {formatCurrency(stats.totalInvested)} invested
              </span>
            </div>
          </CardContent>
        </Card>
      </motion.div>

      {/* Quick Stats Grid */}
      <motion.div
        className="grid grid-cols-2 lg:grid-cols-4 gap-4"
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ delay: 0.1 }}
      >
        <Card className="glass-card">
          <CardContent className="pt-6">
            <div className="flex items-center justify-between">
              <div>
                <p className="text-sm text-muted-foreground">Active SIPs</p>
                <p className="text-2xl font-bold">{stats.activeSIPs}</p>
              </div>
              <Target className="w-8 h-8 text-primary" />
            </div>
          </CardContent>
        </Card>

        <Card className="glass-card">
          <CardContent className="pt-6">
            <div className="flex items-center justify-between">
              <div>
                <p className="text-sm text-muted-foreground">Paused SIPs</p>
                <p className="text-2xl font-bold">{stats.pausedSIPs}</p>
              </div>
              <Clock className="w-8 h-8 text-orange-400" />
            </div>
          </CardContent>
        </Card>

        <Card className="glass-card">
          <CardContent className="pt-6">
            <div className="flex items-center justify-between">
              <div>
                <p className="text-sm text-muted-foreground">
                  Insurance Coverage
                </p>
                <p className="text-xl font-bold">
                  {formatCurrency(stats.totalInsuranceCoverage)}
                </p>
              </div>
              <Shield className="w-8 h-8 text-green-400" />
            </div>
          </CardContent>
        </Card>

        <Card className="glass-card">
          <CardContent className="pt-6">
            <div className="flex items-center justify-between">
              <div>
                <p className="text-sm text-muted-foreground">Monthly Premium</p>
                <p className="text-xl font-bold">
                  {formatCurrency(stats.monthlyPremium)}
                </p>
              </div>
              <DollarSign className="w-8 h-8 text-blue-400" />
            </div>
          </CardContent>
        </Card>
      </motion.div>

      {/* Asset Allocation */}
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ delay: 0.2 }}
      >
        <Card className="glass-card">
          <CardHeader>
            <CardTitle className="flex items-center gap-2">
              <PieChart className="w-5 h-5" />
              Asset Allocation
            </CardTitle>
            <CardDescription>
              Distribution of your investments across different tokens
            </CardDescription>
          </CardHeader>
          <CardContent>
            <div className="space-y-4">
              {allocationData.map((asset, index) => (
                <div key={asset.token} className="space-y-2">
                  <div className="flex justify-between items-center">
                    <div className="flex items-center gap-2">
                      <div className={`w-3 h-3 rounded-full ${asset.color}`} />
                      <span className="font-medium">{asset.token}</span>
                    </div>
                    <div className="text-right">
                      <span className="font-semibold">{asset.percentage}%</span>
                      <span className="text-muted-foreground text-sm ml-2">
                        {formatCurrency(asset.amount)}
                      </span>
                    </div>
                  </div>
                  <Progress value={asset.percentage} className="h-2" />
                </div>
              ))}
            </div>
          </CardContent>
        </Card>
      </motion.div>

      {/* Quick Actions */}
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ delay: 0.3 }}
      >
        <Card className="glass-card border-dashed border-primary/30">
          <CardContent className="pt-6">
            <div className="text-center space-y-4">
              <div>
                <h3 className="text-lg font-semibold">
                  Ready to start your own SIP?
                </h3>
                <p className="text-muted-foreground">
                  These are demo investments to show you how Siphere works
                </p>
              </div>
              <div className="flex gap-3 justify-center">
                <Button onClick={onCreateSIP} className="ton-button">
                  <ArrowUpRight className="w-4 h-4 mr-2" />
                  Create Real SIP
                </Button>
                <Button onClick={onAddInsurance} variant="outline">
                  <Shield className="w-4 h-4 mr-2" />
                  Add Insurance
                </Button>
              </div>
            </div>
          </CardContent>
        </Card>
      </motion.div>
    </div>
  );
}
