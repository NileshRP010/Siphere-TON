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
  TrendingDown,
  DollarSign,
  Shield,
  Calendar,
  Pause,
  Play,
  Eye,
} from "lucide-react";
import { DemoSIP, DemoInsurance } from "@/lib/demo-data";

interface DemoSIPCardProps {
  sip: DemoSIP;
  insurance?: DemoInsurance;
  onViewDetails?: () => void;
}

export function DemoSIPCard({
  sip,
  insurance,
  onViewDetails,
}: DemoSIPCardProps) {
  const isPositive = sip.returns >= 0;
  const progressPercentage = Math.min(
    (sip.currentValue / (sip.totalInvested * 1.2)) * 100,
    100
  );

  const formatDate = (date: Date) => {
    return date.toLocaleDateString("en-US", {
      month: "short",
      day: "numeric",
    });
  };

  const formatCurrency = (amount: number) => {
    return new Intl.NumberFormat("en-US", {
      style: "currency",
      currency: "USD",
      minimumFractionDigits: 0,
      maximumFractionDigits: 2,
    }).format(amount);
  };

  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      className="w-full"
    >
      <Card className="glass-card border-primary/20 hover:border-primary/40 transition-all">
        <CardHeader>
          <div className="flex items-center justify-between">
            <div>
              <CardTitle className="text-lg flex items-center gap-2">
                {sip.name}
                {sip.isDemo && (
                  <Badge variant="secondary" className="text-xs">
                    Demo
                  </Badge>
                )}
              </CardTitle>
              <CardDescription>
                {formatCurrency(sip.amount)} {sip.frequency} • {sip.token}
              </CardDescription>
            </div>
            <Badge
              variant={sip.status === "active" ? "default" : "secondary"}
              className={
                sip.status === "active"
                  ? "bg-green-500/10 text-green-400 border-green-500/20"
                  : ""
              }
            >
              {sip.status === "active" && <Play className="w-3 h-3 mr-1" />}
              {sip.status === "paused" && <Pause className="w-3 h-3 mr-1" />}
              {sip.status.charAt(0).toUpperCase() + sip.status.slice(1)}
            </Badge>
          </div>
        </CardHeader>

        <CardContent className="space-y-4">
          {/* Performance Overview */}
          <div className="grid grid-cols-2 gap-4">
            <div className="space-y-1">
              <p className="text-sm text-muted-foreground">Total Invested</p>
              <p className="text-xl font-semibold">
                {formatCurrency(sip.totalInvested)}
              </p>
            </div>
            <div className="space-y-1">
              <p className="text-sm text-muted-foreground">Current Value</p>
              <p className="text-xl font-semibold">
                {formatCurrency(sip.currentValue)}
              </p>
            </div>
          </div>

          {/* Progress Bar */}
          <div className="space-y-2">
            <div className="flex justify-between text-sm">
              <span className="text-muted-foreground">Performance</span>
              <span className={isPositive ? "text-green-400" : "text-red-400"}>
                {isPositive ? "+" : ""}
                {sip.returnsPercentage.toFixed(1)}%
              </span>
            </div>
            <Progress value={progressPercentage} className="h-2" />
          </div>

          {/* Returns */}
          <div className="flex items-center justify-between p-3 rounded-lg bg-muted/50">
            <div className="flex items-center gap-2">
              {isPositive ? (
                <TrendingUp className="w-4 h-4 text-green-400" />
              ) : (
                <TrendingDown className="w-4 h-4 text-red-400" />
              )}
              <span className="text-sm font-medium">
                {isPositive ? "Profit" : "Loss"}
              </span>
            </div>
            <span
              className={`font-semibold ${
                isPositive ? "text-green-400" : "text-red-400"
              }`}
            >
              {isPositive ? "+" : ""}
              {formatCurrency(sip.returns)}
            </span>
          </div>

          {/* Insurance & Next Execution */}
          <div className="grid grid-cols-2 gap-2 text-sm">
            <div className="flex items-center gap-1">
              <Shield className="w-3 h-3 text-muted-foreground" />
              <span className="text-muted-foreground">
                {insurance ? "Insured" : "No Insurance"}
              </span>
              {insurance && (
                <Badge variant="outline" className="text-xs ml-1">
                  {formatCurrency(insurance.coverage)}
                </Badge>
              )}
            </div>
            <div className="flex items-center gap-1 justify-end">
              <Calendar className="w-3 h-3 text-muted-foreground" />
              <span className="text-muted-foreground">
                Next: {formatDate(sip.nextExecution)}
              </span>
            </div>
          </div>

          {/* Actions */}
          {onViewDetails && (
            <Button
              variant="outline"
              size="sm"
              onClick={onViewDetails}
              className="w-full"
            >
              <Eye className="w-4 h-4 mr-2" />
              View Details
            </Button>
          )}
        </CardContent>
      </Card>
    </motion.div>
  );
}
