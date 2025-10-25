"use client";

import { useState } from "react";
import { motion } from "framer-motion";
import { useRouter } from "next/navigation";
import {
  ArrowLeft,
  Calendar,
  DollarSign,
  TrendingUp,
  Shield,
  Clock,
  Info,
  Check,
  AlertTriangle,
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
import { Label } from "@/components/ui/label";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";
import { Switch } from "@/components/ui/switch";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { Badge } from "@/components/ui/badge";
import { Navigation } from "@/components/navigation";
import { useTonSiphere } from "@/hooks/use-ton-siphere";
import { ErrorFeedback } from "@/components/ui/error-feedback";
import Link from "next/link";

const strategies = [
  {
    id: "stake-only",
    name: "Staking Only",
    description:
      "Stake tokens with Marinade Finance for liquid staking rewards",
    apy: 8.2,
    risk: "Low",
    tokens: ["TON", "USDC"],
    minAmount: 0.1,
  },
  {
    id: "lend-only",
    name: "Lending Only",
    description: "Lend tokens on Solend for stable yields",
    apy: 5.8,
    risk: "Low",
    tokens: ["USDC", "USDT"],
    minAmount: 10,
  },
  {
    id: "split-strategy",
    name: "50/50 Split",
    description: "Split between staking and lending for balanced returns",
    apy: 7.5,
    risk: "Medium",
    tokens: ["TON", "USDC", "USDT"],
    minAmount: 20,
  },
];

const frequencies = [
  {
    value: "weekly",
    label: "Weekly",
    description: "Invest every week",
    multiplier: 52,
  },
  {
    value: "biweekly",
    label: "Bi-weekly",
    description: "Invest every 2 weeks",
    multiplier: 26,
  },
  {
    value: "monthly",
    label: "Monthly",
    description: "Invest every month",
    multiplier: 12,
  },
];

export default function CreateSIP() {
  const router = useRouter();
  const { createSIP, loading, error, errorType } = useTonSiphere();
  const [currentStep, setCurrentStep] = useState(0);
  const [formData, setFormData] = useState({
    name: "",
    token: "",
    amount: "",
    frequency: "",
    strategy: "",
    startDate: "",
    endDate: "",
    insurance: false,
  });

  const steps = ["Basic Info", "Strategy", "Schedule", "Insurance", "Review"];

  const handleNext = () => {
    if (currentStep < steps.length - 1) {
      setCurrentStep(currentStep + 1);
    }
  };

  const handlePrevious = () => {
    if (currentStep > 0) {
      setCurrentStep(currentStep - 1);
    }
  };

  const handleSubmit = async () => {
    try {
      console.log("Creating SIP with data:", formData);
      await createSIP({
        name: formData.name,
        token: formData.token,
        amount: formData.amount,
        frequency: formData.frequency,
        strategy: formData.strategy,
        insurance: formData.insurance,
      });
      router.push("/dashboard");
    } catch (error) {
      console.error("Error creating SIP:", error);
    }
  };

  const selectedStrategy = strategies.find((s) => s.id === formData.strategy);
  const selectedFrequency = frequencies.find(
    (f) => f.value === formData.frequency
  );

  const calculateProjections = () => {
    if (!formData.amount || !selectedFrequency || !selectedStrategy)
      return null;

    const annualInvestment =
      parseFloat(formData.amount) * selectedFrequency.multiplier;
    const expectedYield = annualInvestment * (selectedStrategy.apy / 100);
    const insuranceCost = formData.insurance ? annualInvestment * 0.015 : 0;

    return {
      annualInvestment,
      expectedYield,
      insuranceCost,
      netYield: expectedYield - insuranceCost,
    };
  };

  const projections = calculateProjections();

  return (
    <div className="min-h-screen">
      <Navigation />

      <div className="pt-20 px-4 sm:px-6 lg:px-8 max-w-4xl mx-auto w-full">
        {/* Header */}
        <div className="flex flex-col sm:flex-row sm:items-center mb-8 gap-4">
          <Link href="/dashboard">
            <Button variant="ghost" size="sm" className="mr-4">
              <ArrowLeft className="w-4 h-4 mr-2" />
              Back to Dashboard
            </Button>
          </Link>
          <div className="flex-1">
            <h1 className="text-2xl sm:text-3xl font-bold">Create New SIP</h1>
            <p className="text-muted-foreground">
              Set up your systematic investment plan
            </p>
          </div>
        </div>

        {/* Error Feedback */}
        <ErrorFeedback
          error={error}
          type={errorType}
          onRetry={() => window.location.reload()}
          onDismiss={() => {}}
        />

        {/* Progress Indicator */}
        <div className="mb-8 overflow-x-auto">
          <div className="flex items-center justify-between mb-4 min-w-max">
            {steps.map((step, index) => (
              <div
                key={step}
                className={`flex items-center ${
                  index <= currentStep
                    ? "text-primary"
                    : "text-muted-foreground"
                }`}
              >
                <div
                  className={`w-8 h-8 rounded-full flex items-center justify-center text-sm font-medium ${
                    index < currentStep
                      ? "bg-primary text-primary-foreground"
                      : index === currentStep
                      ? "bg-primary text-primary-foreground"
                      : "bg-muted text-muted-foreground"
                  }`}
                >
                  {index < currentStep ? (
                    <Check className="w-4 h-4" />
                  ) : (
                    index + 1
                  )}
                </div>
                <span className="ml-2 text-sm font-medium hidden sm:block">
                  {step}
                </span>
                {index < steps.length - 1 && (
                  <div
                    className={`w-8 sm:w-12 h-0.5 ml-2 sm:ml-4 ${
                      index < currentStep ? "bg-primary" : "bg-muted"
                    }`}
                  />
                )}
              </div>
            ))}
          </div>
        </div>

        {/* Step Content */}
        <Card className="glass-card mb-8">
          <CardContent className="p-4 sm:p-6 lg:p-8">
            {currentStep === 0 && (
              <motion.div
                initial={{ opacity: 0, x: 20 }}
                animate={{ opacity: 1, x: 0 }}
                className="space-y-6"
              >
                <div>
                  <h2 className="text-2xl font-bold mb-2">Basic Information</h2>
                  <p className="text-muted-foreground">
                    Let&apos;s start with the basics of your SIP
                  </p>
                </div>

                <div className="grid md:grid-cols-2 gap-6">
                  <div>
                    <Label htmlFor="sipName">SIP Name</Label>
                    <Input
                      id="sipName"
                      placeholder="My USDC Staking Plan"
                      value={formData.name}
                      onChange={(e) =>
                        setFormData({ ...formData, name: e.target.value })
                      }
                    />
                    <p className="text-xs text-muted-foreground mt-1">
                      Give your SIP a memorable name
                    </p>
                  </div>

                  <div>
                    <Label htmlFor="token">Deposit Token</Label>
                    <Select
                      onValueChange={(value) =>
                        setFormData({ ...formData, token: value })
                      }
                    >
                      <SelectTrigger>
                        <SelectValue placeholder="Select token" />
                      </SelectTrigger>
                      <SelectContent>
                        <SelectItem value="ton">TON</SelectItem>
                        <SelectItem value="usdc">USDC</SelectItem>
                        <SelectItem value="usdt">USDT</SelectItem>
                      </SelectContent>
                    </Select>
                  </div>

                  <div>
                    <Label htmlFor="amount">Investment Amount</Label>
                    <div className="relative">
                      <DollarSign className="absolute left-3 top-3 w-4 h-4 text-muted-foreground" />
                      <Input
                        id="amount"
                        type="number"
                        placeholder="100"
                        className="pl-10"
                        value={formData.amount}
                        onChange={(e) =>
                          setFormData({ ...formData, amount: e.target.value })
                        }
                      />
                    </div>
                    <p className="text-xs text-muted-foreground mt-1">
                      Amount to invest per interval
                    </p>
                  </div>

                  <div>
                    <Label htmlFor="frequency">Investment Frequency</Label>
                    <Select
                      onValueChange={(value) =>
                        setFormData({ ...formData, frequency: value })
                      }
                    >
                      <SelectTrigger>
                        <SelectValue placeholder="Select frequency" />
                      </SelectTrigger>
                      <SelectContent>
                        {frequencies.map((freq) => (
                          <SelectItem key={freq.value} value={freq.value}>
                            <div>
                              <div className="font-medium">{freq.label}</div>
                              <div className="text-xs text-muted-foreground">
                                {freq.description}
                              </div>
                            </div>
                          </SelectItem>
                        ))}
                      </SelectContent>
                    </Select>
                  </div>
                </div>
              </motion.div>
            )}

            {currentStep === 1 && (
              <motion.div
                initial={{ opacity: 0, x: 20 }}
                animate={{ opacity: 1, x: 0 }}
                className="space-y-6"
              >
                <div>
                  <h2 className="text-2xl font-bold mb-2">
                    Choose Your Strategy
                  </h2>
                  <p className="text-muted-foreground">
                    Select how you want your funds to be invested
                  </p>
                </div>

                <div className="grid gap-4">
                  {strategies.map((strategy) => (
                    <div
                      key={strategy.id}
                      className={`p-4 rounded-lg border cursor-pointer transition-colors ${
                        formData.strategy === strategy.id
                          ? "border-primary bg-primary/5"
                          : "border-border hover:border-primary/50"
                      }`}
                      onClick={() =>
                        setFormData({ ...formData, strategy: strategy.id })
                      }
                    >
                      <div className="flex items-center justify-between mb-2">
                        <h3 className="font-semibold">{strategy.name}</h3>
                        <div className="flex items-center space-x-2">
                          <Badge variant="secondary">{strategy.apy}% APY</Badge>
                          <Badge
                            variant={
                              strategy.risk === "Low" ? "secondary" : "outline"
                            }
                            className={
                              strategy.risk === "Low"
                                ? "bg-green-500/10 text-green-400"
                                : ""
                            }
                          >
                            {strategy.risk} Risk
                          </Badge>
                        </div>
                      </div>
                      <p className="text-sm text-muted-foreground mb-2">
                        {strategy.description}
                      </p>
                      <div className="flex items-center text-xs text-muted-foreground">
                        <span>Supports: {strategy.tokens.join(", ")}</span>
                        <span className="mx-2">•</span>
                        <span>Min: ${strategy.minAmount}</span>
                      </div>
                    </div>
                  ))}
                </div>
              </motion.div>
            )}

            {currentStep === 2 && (
              <motion.div
                initial={{ opacity: 0, x: 20 }}
                animate={{ opacity: 1, x: 0 }}
                className="space-y-6"
              >
                <div>
                  <h2 className="text-2xl font-bold mb-2">
                    Investment Schedule
                  </h2>
                  <p className="text-muted-foreground">
                    Set when your SIP should start and end
                  </p>
                </div>

                <div className="grid md:grid-cols-2 gap-6">
                  <div>
                    <Label htmlFor="startDate">Start Date</Label>
                    <Input
                      id="startDate"
                      type="date"
                      value={formData.startDate}
                      onChange={(e) =>
                        setFormData({ ...formData, startDate: e.target.value })
                      }
                    />
                    <p className="text-xs text-muted-foreground mt-1">
                      When should your first investment execute?
                    </p>
                  </div>

                  <div>
                    <Label htmlFor="endDate">End Date (Optional)</Label>
                    <Input
                      id="endDate"
                      type="date"
                      value={formData.endDate}
                      onChange={(e) =>
                        setFormData({ ...formData, endDate: e.target.value })
                      }
                    />
                    <p className="text-xs text-muted-foreground mt-1">
                      Leave empty for ongoing SIP
                    </p>
                  </div>
                </div>

                {projections && (
                  <Card className="p-4 bg-primary/5 border-primary/20">
                    <h3 className="font-semibold mb-3">
                      Investment Projections
                    </h3>
                    <div className="grid md:grid-cols-2 gap-4 text-sm">
                      <div className="flex justify-between">
                        <span className="text-muted-foreground">
                          Annual Investment:
                        </span>
                        <span className="font-medium">
                          ${projections.annualInvestment.toLocaleString()}
                        </span>
                      </div>
                      <div className="flex justify-between">
                        <span className="text-muted-foreground">
                          Expected Annual Yield:
                        </span>
                        <span className="font-medium text-green-400">
                          ${projections.expectedYield.toLocaleString()}
                        </span>
                      </div>
                      <div className="flex justify-between">
                        <span className="text-muted-foreground">
                          Strategy APY:
                        </span>
                        <span className="font-medium">
                          {selectedStrategy?.apy}%
                        </span>
                      </div>
                      <div className="flex justify-between">
                        <span className="text-muted-foreground">
                          Investment Frequency:
                        </span>
                        <span className="font-medium capitalize">
                          {formData.frequency}
                        </span>
                      </div>
                    </div>
                  </Card>
                )}
              </motion.div>
            )}

            {currentStep === 3 && (
              <motion.div
                initial={{ opacity: 0, x: 20 }}
                animate={{ opacity: 1, x: 0 }}
                className="space-y-6"
              >
                <div>
                  <h2 className="text-2xl font-bold mb-2">
                    Insurance Protection
                  </h2>
                  <p className="text-muted-foreground">
                    Protect your investment against protocol failures
                  </p>
                </div>

                <Card className="p-6 border-primary/20">
                  <div className="flex items-start space-x-4">
                    <Shield className="w-8 h-8 text-primary mt-1" />
                    <div className="flex-1">
                      <div className="flex items-center justify-between mb-4">
                        <div>
                          <h3 className="font-semibold text-lg">
                            SIP Insurance
                          </h3>
                          <p className="text-sm text-muted-foreground">
                            1.5% premium per investment for comprehensive
                            protection
                          </p>
                        </div>
                        <Switch
                          checked={formData.insurance}
                          onCheckedChange={(checked) =>
                            setFormData({ ...formData, insurance: checked })
                          }
                        />
                      </div>

                      {formData.insurance && (
                        <div className="space-y-3 p-4 bg-primary/5 rounded-lg">
                          <div className="flex items-center text-sm">
                            <Check className="w-4 h-4 text-green-400 mr-2" />
                            Protection against smart contract exploits
                          </div>
                          <div className="flex items-center text-sm">
                            <Check className="w-4 h-4 text-green-400 mr-2" />
                            Failed execution compensation
                          </div>
                          <div className="flex items-center text-sm">
                            <Check className="w-4 h-4 text-green-400 mr-2" />
                            Protocol failure coverage
                          </div>
                          <div className="flex items-center text-sm">
                            <Check className="w-4 h-4 text-green-400 mr-2" />
                            DAO-governed claims process
                          </div>
                          {projections && (
                            <div className="mt-3 pt-3 border-t border-border">
                              <div className="flex justify-between text-sm">
                                <span>Annual Insurance Cost:</span>
                                <span className="font-medium text-yellow-400">
                                  ${projections.insuranceCost.toFixed(2)}
                                </span>
                              </div>
                              <div className="flex justify-between text-sm mt-1">
                                <span>Net Expected Yield:</span>
                                <span className="font-medium text-green-400">
                                  ${projections.netYield.toFixed(2)}
                                </span>
                              </div>
                            </div>
                          )}
                        </div>
                      )}
                    </div>
                  </div>
                </Card>

                <div className="bg-blue-500/10 border border-blue-500/20 rounded-lg p-4">
                  <div className="flex items-start space-x-3">
                    <Info className="w-5 h-5 text-blue-400 mt-0.5" />
                    <div className="text-sm">
                      <p className="font-medium text-blue-400 mb-1">
                        How Insurance Works
                      </p>
                      <p className="text-muted-foreground">
                        Insurance premiums are pooled in a community-governed
                        vault. Claims are reviewed and approved by token holders
                        through our DAO governance system. Coverage applies to
                        protocol failures and execution errors, not market
                        volatility.
                      </p>
                    </div>
                  </div>
                </div>
              </motion.div>
            )}

            {currentStep === 4 && (
              <motion.div
                initial={{ opacity: 0, x: 20 }}
                animate={{ opacity: 1, x: 0 }}
                className="space-y-6"
              >
                <div>
                  <h2 className="text-2xl font-bold mb-2">Review Your SIP</h2>
                  <p className="text-muted-foreground">
                    Confirm your systematic investment plan details
                  </p>
                </div>

                <div className="space-y-4">
                  <Card className="p-4">
                    <h3 className="font-semibold mb-3">Basic Information</h3>
                    <div className="grid md:grid-cols-2 gap-4 text-sm">
                      <div>
                        <span className="text-muted-foreground">SIP Name:</span>
                        <span className="ml-2 font-medium">
                          {formData.name || "Unnamed SIP"}
                        </span>
                      </div>
                      <div>
                        <span className="text-muted-foreground">Token:</span>
                        <span className="ml-2 font-medium">
                          {formData.token?.toUpperCase()}
                        </span>
                      </div>
                      <div>
                        <span className="text-muted-foreground">Amount:</span>
                        <span className="ml-2 font-medium">
                          ${formData.amount}
                        </span>
                      </div>
                      <div>
                        <span className="text-muted-foreground">
                          Frequency:
                        </span>
                        <span className="ml-2 font-medium capitalize">
                          {formData.frequency}
                        </span>
                      </div>
                    </div>
                  </Card>

                  <Card className="p-4">
                    <h3 className="font-semibold mb-3">Strategy & Schedule</h3>
                    <div className="grid md:grid-cols-2 gap-4 text-sm">
                      <div>
                        <span className="text-muted-foreground">Strategy:</span>
                        <span className="ml-2 font-medium">
                          {selectedStrategy?.name}
                        </span>
                      </div>
                      <div>
                        <span className="text-muted-foreground">
                          Expected APY:
                        </span>
                        <span className="ml-2 font-medium text-green-400">
                          {selectedStrategy?.apy}%
                        </span>
                      </div>
                      <div>
                        <span className="text-muted-foreground">
                          Start Date:
                        </span>
                        <span className="ml-2 font-medium">
                          {formData.startDate}
                        </span>
                      </div>
                      <div>
                        <span className="text-muted-foreground">End Date:</span>
                        <span className="ml-2 font-medium">
                          {formData.endDate || "Ongoing"}
                        </span>
                      </div>
                    </div>
                  </Card>

                  <Card className="p-4">
                    <h3 className="font-semibold mb-3">
                      Insurance & Projections
                    </h3>
                    <div className="space-y-2 text-sm">
                      <div className="flex justify-between">
                        <span className="text-muted-foreground">
                          Insurance Coverage:
                        </span>
                        <span className="font-medium">
                          {formData.insurance ? "Enabled" : "Disabled"}
                        </span>
                      </div>
                      {projections && (
                        <>
                          <div className="flex justify-between">
                            <span className="text-muted-foreground">
                              Annual Investment:
                            </span>
                            <span className="font-medium">
                              ${projections.annualInvestment.toLocaleString()}
                            </span>
                          </div>
                          <div className="flex justify-between">
                            <span className="text-muted-foreground">
                              Expected Annual Yield:
                            </span>
                            <span className="font-medium text-green-400">
                              ${projections.expectedYield.toLocaleString()}
                            </span>
                          </div>
                          {formData.insurance && (
                            <div className="flex justify-between">
                              <span className="text-muted-foreground">
                                Insurance Cost:
                              </span>
                              <span className="font-medium text-yellow-400">
                                ${projections.insuranceCost.toFixed(2)}
                              </span>
                            </div>
                          )}
                        </>
                      )}
                    </div>
                  </Card>
                </div>

                <div className="bg-yellow-500/10 border border-yellow-500/20 rounded-lg p-4">
                  <div className="flex items-start space-x-3">
                    <AlertTriangle className="w-5 h-5 text-yellow-400 mt-0.5" />
                    <div className="text-sm">
                      <p className="font-medium text-yellow-400 mb-1">
                        Final Confirmation
                      </p>
                      <p className="text-muted-foreground">
                        By creating this SIP, you authorize automatic
                        investments according to your schedule. You can pause,
                        modify, or cancel your SIP at any time from your
                        dashboard.
                      </p>
                    </div>
                  </div>
                </div>
              </motion.div>
            )}
          </CardContent>
        </Card>

        {/* Navigation Buttons */}
        <div className="flex flex-col sm:flex-row justify-between gap-4 pb-8">
          <Button
            variant="outline"
            onClick={handlePrevious}
            disabled={currentStep === 0}
          >
            Previous
          </Button>

          {currentStep < steps.length - 1 ? (
            <Button
              onClick={handleNext}
              disabled={
                (currentStep === 0 &&
                  (!formData.name ||
                    !formData.token ||
                    !formData.amount ||
                    !formData.frequency)) ||
                (currentStep === 1 && !formData.strategy) ||
                (currentStep === 2 && !formData.startDate)
              }
              className="ton-button"
            >
              Next
            </Button>
          ) : (
            <Button
              onClick={handleSubmit}
              disabled={loading}
              className="ton-button"
            >
              {loading ? "Creating..." : "Create SIP Plan"}
            </Button>
          )}
        </div>
      </div>
    </div>
  );
}
