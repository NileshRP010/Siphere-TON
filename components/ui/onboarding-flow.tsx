import { useState } from "react";
import { motion } from "framer-motion";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import {
  ArrowRight,
  Wallet,
  DollarSign,
  Shield,
  BarChart3,
  Play,
  CheckCircle,
} from "lucide-react";

interface OnboardingProps {
  onComplete: () => void;
}

const onboardingSteps = [
  {
    id: 1,
    title: "Welcome to Siphere",
    description: "Your automated DeFi investment platform on TON blockchain",
    icon: Wallet,
    content:
      "Siphere makes crypto investing simple through systematic investment plans (SIPs). Let's get you started!",
  },
  {
    id: 2,
    title: "Connect Your Wallet",
    description: "Securely connect your TON wallet to begin",
    icon: Wallet,
    content:
      "We support Tonkeeper, TonHub, and other TonConnect-compatible wallets. Your keys remain secure with you.",
  },
  {
    id: 3,
    title: "Create Your First SIP",
    description: "Set up automated investments in TON, USDT, or USDC",
    icon: DollarSign,
    content:
      "Choose your investment amount, frequency, and strategy. Our smart contracts handle the rest automatically.",
  },
  {
    id: 4,
    title: "Optional Insurance",
    description: "Protect your investments with smart contract insurance",
    icon: Shield,
    content:
      "Add insurance coverage for protection against smart contract failures and execution errors.",
  },
  {
    id: 5,
    title: "Track & Optimize",
    description: "Monitor your portfolio and performance",
    icon: BarChart3,
    content:
      "Use our dashboard to track returns, manage SIPs, and optimize your investment strategy.",
  },
];

export function OnboardingFlow({ onComplete }: OnboardingProps) {
  const [currentStep, setCurrentStep] = useState(0);
  const [completedSteps, setCompletedSteps] = useState<number[]>([]);

  const handleNext = () => {
    if (currentStep < onboardingSteps.length - 1) {
      setCompletedSteps([...completedSteps, currentStep]);
      setCurrentStep(currentStep + 1);
    } else {
      setCompletedSteps([...completedSteps, currentStep]);
      onComplete();
    }
  };

  const handleSkip = () => {
    onComplete();
  };

  const currentStepData = onboardingSteps[currentStep];
  const Icon = currentStepData.icon;

  return (
    <motion.div
      className="fixed inset-0 bg-background/80 backdrop-blur-sm z-50 flex items-center justify-center p-4"
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0 }}
    >
      <motion.div
        initial={{ scale: 0.9, opacity: 0 }}
        animate={{ scale: 1, opacity: 1 }}
        exit={{ scale: 0.9, opacity: 0 }}
        className="w-full max-w-lg"
      >
        <Card className="glass-card border-primary/20">
          <CardHeader className="text-center">
            {/* Progress indicators */}
            <div className="flex justify-center mb-4">
              {onboardingSteps.map((_, index) => (
                <div
                  key={index}
                  className={`w-2 h-2 rounded-full mx-1 transition-colors ${
                    index === currentStep
                      ? "bg-primary"
                      : completedSteps.includes(index)
                      ? "bg-primary/60"
                      : "bg-muted"
                  }`}
                />
              ))}
            </div>

            <motion.div
              key={currentStep}
              initial={{ y: 20, opacity: 0 }}
              animate={{ y: 0, opacity: 1 }}
              className="flex justify-center mb-4"
            >
              <div className="w-16 h-16 rounded-full bg-primary/10 flex items-center justify-center">
                <Icon className="w-8 h-8 text-primary" />
              </div>
            </motion.div>

            <CardTitle className="text-2xl mb-2">
              {currentStepData.title}
            </CardTitle>
            <p className="text-muted-foreground">
              {currentStepData.description}
            </p>
          </CardHeader>

          <CardContent className="text-center">
            <motion.p
              key={currentStep}
              initial={{ y: 10, opacity: 0 }}
              animate={{ y: 0, opacity: 1 }}
              className="mb-6 leading-relaxed"
            >
              {currentStepData.content}
            </motion.p>

            <div className="flex gap-3 justify-center">
              <Button
                variant="outline"
                onClick={handleSkip}
                className="min-w-20"
              >
                Skip Tour
              </Button>
              <Button onClick={handleNext} className="min-w-20 ton-button">
                {currentStep === onboardingSteps.length - 1 ? (
                  <>
                    Get Started
                    <CheckCircle className="w-4 h-4 ml-2" />
                  </>
                ) : (
                  <>
                    Next
                    <ArrowRight className="w-4 h-4 ml-2" />
                  </>
                )}
              </Button>
            </div>

            <p className="text-xs text-muted-foreground mt-4">
              Step {currentStep + 1} of {onboardingSteps.length}
            </p>
          </CardContent>
        </Card>
      </motion.div>
    </motion.div>
  );
}
