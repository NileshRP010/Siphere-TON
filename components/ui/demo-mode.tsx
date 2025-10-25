"use client";

import { useState, useEffect } from "react";
import { motion } from "framer-motion";
import { OnboardingFlow } from "@/components/ui/onboarding-flow";
import { DemoPortfolioOverview } from "@/components/ui/demo-portfolio-overview";
import { DemoSIPCard } from "@/components/ui/demo-sip-card";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import {
  demoSIPs,
  demoInsurance,
  getDemoInsuranceForSIP,
  type DemoSIP,
} from "@/lib/demo-data";
import { Lightbulb, X, ArrowRight, BookOpen, Shield, Plus } from "lucide-react";

interface DemoModeProps {
  onExitDemo: () => void;
}

export function DemoMode({ onExitDemo }: DemoModeProps) {
  const [showOnboarding, setShowOnboarding] = useState(false);
  const [selectedSIP, setSelectedSIP] = useState<DemoSIP | null>(null);
  const [showTips, setShowTips] = useState(true);

  const demoTips = [
    "💡 All data shown here is simulated - perfect for exploring Siphere risk-free!",
    "🔄 SIPs automatically invest at your chosen frequency (daily, weekly, monthly)",
    "📈 Track real-time performance and returns across all your investments",
    "🛡️ Insurance protects against smart contract failures and execution errors",
    "🎯 Start with small amounts and increase as you get comfortable",
  ];

  const handleCreateSIP = () => {
    // In real app, this would navigate to create SIP flow
    alert("In the full version, this would open the SIP creation wizard!");
  };

  const handleAddInsurance = () => {
    // In real app, this would navigate to insurance flow
    alert(
      "In the full version, this would open the insurance selection process!"
    );
  };

  const handleViewSIPDetails = (sip: DemoSIP) => {
    setSelectedSIP(sip);
  };

  return (
    <div className="min-h-screen bg-background">
      {/* Demo Mode Header */}
      <div className="sticky top-0 z-40 bg-background/95 backdrop-blur-sm border-b border-primary/20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-3">
          <div className="flex items-center justify-between">
            <div className="flex items-center gap-3">
              <Badge className="bg-primary/10 text-primary border-primary/20">
                <Lightbulb className="w-3 h-3 mr-1" />
                Demo Mode
              </Badge>
              <span className="text-sm text-muted-foreground">
                Explore Siphere with realistic demo data
              </span>
            </div>
            <div className="flex items-center gap-3">
              <Button
                variant="outline"
                size="sm"
                onClick={() => setShowOnboarding(true)}
              >
                <BookOpen className="w-4 h-4 mr-2" />
                Tour
              </Button>
              <Button variant="ghost" size="sm" onClick={onExitDemo}>
                <X className="w-4 h-4 mr-2" />
                Exit Demo
              </Button>
            </div>
          </div>
        </div>
      </div>

      {/* Demo Tips */}
      {showTips && (
        <motion.div
          initial={{ opacity: 0, y: -20 }}
          animate={{ opacity: 1, y: 0 }}
          className="bg-primary/5 border-b border-primary/10"
        >
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-4">
            <div className="flex items-start justify-between">
              <div className="space-y-2">
                <h3 className="font-semibold text-sm">Demo Mode Tips:</h3>
                <ul className="text-sm text-muted-foreground space-y-1">
                  {demoTips.map((tip, index) => (
                    <li key={index} className="flex items-start gap-2">
                      <span className="text-primary">•</span>
                      {tip}
                    </li>
                  ))}
                </ul>
              </div>
              <Button
                variant="ghost"
                size="sm"
                onClick={() => setShowTips(false)}
              >
                <X className="w-4 h-4" />
              </Button>
            </div>
          </div>
        </motion.div>
      )}

      {/* Main Content */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8 space-y-8">
        {/* Portfolio Overview */}
        <div>
          <h1 className="text-3xl font-bold mb-6">Your Demo Portfolio</h1>
          <DemoPortfolioOverview
            onCreateSIP={handleCreateSIP}
            onAddInsurance={handleAddInsurance}
          />
        </div>

        {/* SIPs Grid */}
        <div>
          <div className="flex items-center justify-between mb-6">
            <h2 className="text-2xl font-semibold">Your SIPs</h2>
            <Button onClick={handleCreateSIP} variant="outline">
              <Plus className="w-4 h-4 mr-2" />
              Create New SIP
            </Button>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {demoSIPs.map((sip, index) => (
              <motion.div
                key={sip.id}
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: index * 0.1 }}
              >
                <DemoSIPCard
                  sip={sip}
                  insurance={getDemoInsuranceForSIP(sip.id)}
                  onViewDetails={() => handleViewSIPDetails(sip)}
                />
              </motion.div>
            ))}
          </div>
        </div>

        {/* Getting Started Section */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.4 }}
        >
          <Card className="glass-card border-primary/20 bg-gradient-to-br from-primary/5 to-background">
            <CardHeader>
              <CardTitle>Ready to Start Investing for Real?</CardTitle>
            </CardHeader>
            <CardContent className="space-y-4">
              <p className="text-muted-foreground">
                You&apos;ve explored our demo portfolio showing realistic SIP
                performance. Connect your TON wallet to start building your own
                automated investment strategy.
              </p>
              <div className="flex gap-3">
                <Button onClick={onExitDemo} className="ton-button">
                  <ArrowRight className="w-4 h-4 mr-2" />
                  Start Real Investing
                </Button>
                <Button
                  variant="outline"
                  onClick={() => setShowOnboarding(true)}
                >
                  <BookOpen className="w-4 h-4 mr-2" />
                  Take the Tour
                </Button>
              </div>
            </CardContent>
          </Card>
        </motion.div>
      </div>

      {/* Onboarding Flow */}
      {showOnboarding && (
        <OnboardingFlow onComplete={() => setShowOnboarding(false)} />
      )}

      {/* SIP Details Modal */}
      {selectedSIP && (
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          className="fixed inset-0 bg-background/80 backdrop-blur-sm z-50 flex items-center justify-center p-4"
          onClick={() => setSelectedSIP(null)}
        >
          <motion.div
            initial={{ scale: 0.9, opacity: 0 }}
            animate={{ scale: 1, opacity: 1 }}
            className="w-full max-w-2xl"
            onClick={(e) => e.stopPropagation()}
          >
            <Card className="glass-card">
              <CardHeader>
                <div className="flex items-center justify-between">
                  <CardTitle>{selectedSIP.name} - Detailed View</CardTitle>
                  <Button
                    variant="ghost"
                    size="sm"
                    onClick={() => setSelectedSIP(null)}
                  >
                    <X className="w-4 h-4" />
                  </Button>
                </div>
              </CardHeader>
              <CardContent>
                <p className="text-muted-foreground mb-4">
                  In the full version, this would show detailed analytics,
                  transaction history, performance charts, and management
                  options for your {selectedSIP.name} SIP.
                </p>
                <div className="grid grid-cols-2 gap-4 text-sm">
                  <div>
                    <p className="font-medium">Investment Strategy</p>
                    <p className="text-muted-foreground">
                      {selectedSIP.frequency} {selectedSIP.token} purchases
                    </p>
                  </div>
                  <div>
                    <p className="font-medium">Risk Level</p>
                    <p className="text-muted-foreground">
                      {selectedSIP.token === "TON"
                        ? "Moderate-High"
                        : "Low-Moderate"}
                    </p>
                  </div>
                </div>
                <Button
                  className="w-full mt-4"
                  onClick={() => setSelectedSIP(null)}
                >
                  Close Preview
                </Button>
              </CardContent>
            </Card>
          </motion.div>
        </motion.div>
      )}
    </div>
  );
}
