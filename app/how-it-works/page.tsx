"use client";

import React, { useState } from "react";
import { motion } from "framer-motion";
import {
  Play,
  Pause,
  ArrowRight,
  CheckCircle,
  Shield,
  Zap,
  DollarSign,
  Clock,
  TrendingUp,
  Users,
  BarChart3,
  FileText,
  Smartphone,
  Globe,
  Lock,
  Target,
  Activity,
  PieChart,
  ArrowDown,
  ArrowUp,
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

const steps = [
  {
    id: 1,
    title: "Connect Your TON Wallet",
    description: "Securely connect your TON wallet using TonConnect protocol",
    icon: Smartphone,
    details: [
      "Connect via Tonkeeper, OpenMask, or other TON wallets",
      "Your wallet remains secure - we never access your private keys",
      "Real-time balance and transaction monitoring",
    ],
  },
  {
    id: 2,
    title: "Create Your SIP Plan",
    description:
      "Set up your systematic investment plan with TON ecosystem tokens",
    icon: Target,
    details: [
      "Choose from TON, USDT, or USDC",
      "Set investment amount and frequency",
      "Select from staking, lending, or DeFi strategies",
      "Optional insurance protection for added security",
    ],
  },
  {
    id: 3,
    title: "Automated Execution",
    description: "Our smart contracts automatically execute your investments",
    icon: Zap,
    details: [
      "Smart contracts handle all transactions",
      "Integration with TON DeFi protocols",
      "Real-time market analysis and optimization",
      "Instant notifications and updates",
    ],
  },
  {
    id: 4,
    title: "Track & Optimize",
    description: "Monitor performance and optimize your investment strategy",
    icon: BarChart3,
    details: [
      "Real-time portfolio tracking",
      "Performance analytics and insights",
      "Automatic strategy optimization",
      "Easy SIP management and adjustments",
    ],
  },
];

const features = [
  {
    title: "TON Ecosystem Integration",
    description:
      "Built specifically for TON blockchain with native token support",
    icon: Globe,
    benefits: [
      "Native TON token support",
      "Integration with TON DeFi protocols",
      "Optimized for TON network performance",
      "Low transaction fees",
    ],
  },
  {
    title: "Smart Contract Security",
    description: "Audited smart contracts ensure your funds are always secure",
    icon: Shield,
    benefits: [
      "Audited by leading security firms",
      "Multi-signature wallet protection",
      "Insurance coverage available",
      "Transparent contract code",
    ],
  },
  {
    title: "Automated Strategies",
    description: "AI-powered investment strategies optimized for TON ecosystem",
    icon: Activity,
    benefits: [
      "Dynamic strategy adjustment",
      "Market condition analysis",
      "Risk management protocols",
      "Yield optimization algorithms",
    ],
  },
  {
    title: "Human-Readable Interface",
    description:
      "Simple, intuitive interface following TON ecosystem standards",
    icon: FileText,
    benefits: [
      "Clear transaction descriptions",
      "Instant feedback on all actions",
      "Educational content and guidance",
      "Mobile-first responsive design",
    ],
  },
];

const strategies = [
  {
    name: "TON Staking",
    description: "Stake TON tokens for network security and earn rewards",
    apy: "8.5%",
    risk: "Low",
    minAmount: "100 TON",
    features: [
      "Network security participation",
      "Regular reward distribution",
      "Low risk",
      "TON ecosystem support",
    ],
  },
  {
    name: "USDT Lending",
    description: "Lend USDT on TON DeFi protocols for stable returns",
    apy: "12.3%",
    risk: "Medium",
    minAmount: "50 USDT",
    features: [
      "Stable returns",
      "Liquidity provision",
      "DeFi protocol integration",
      "Flexible terms",
    ],
  },
  {
    name: "USDC DeFi",
    description: "Advanced DeFi strategies with USDC on TON ecosystem",
    apy: "15.7%",
    risk: "High",
    minAmount: "100 USDC",
    features: [
      "High yield potential",
      "Advanced strategies",
      "Liquidity mining",
      "Protocol farming",
    ],
  },
];

const faqs = [
  {
    question: "How does Siphere work with TON blockchain?",
    answer:
      "Siphere is built specifically for the TON ecosystem, using native TON tokens and integrating with TON DeFi protocols. Our smart contracts are deployed on TON blockchain and use TonConnect for secure wallet integration.",
  },
  {
    question: "What tokens can I invest with?",
    answer:
      "You can invest using TON (native token), USDT, or USDC. All tokens are supported on the TON blockchain and integrated with our DeFi protocols.",
  },
  {
    question: "How secure are my investments?",
    answer:
      "Your investments are protected by audited smart contracts, multi-signature wallets, and optional insurance coverage. We follow TON ecosystem security standards and best practices.",
  },
  {
    question: "Can I withdraw my funds anytime?",
    answer:
      "Yes, you can pause or withdraw from your SIP plans at any time. However, some DeFi strategies may have lock-up periods for optimal returns.",
  },
  {
    question: "What are the fees?",
    answer:
      "Siphere charges a small management fee (typically 0.5-1%) on your returns. TON network transaction fees are minimal and paid separately.",
  },
];

export default function HowItWorks() {
  const [activeStep, setActiveStep] = useState(1);
  const [isPlaying, setIsPlaying] = useState(false);

  return (
    <div className="min-h-screen">
      <Navigation />

      <div className="pt-20 px-4 sm:px-6 lg:px-8 max-w-7xl mx-auto">
        {/* Header */}
        <div className="text-center mb-16">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
          >
            <h1 className="text-4xl sm:text-5xl font-bold ton-gradient-text mb-6">
              How Siphere Works
            </h1>
            <p className="text-xl text-muted-foreground max-w-3xl mx-auto mb-8">
              Learn how Siphere automates your investments on the TON blockchain
              with smart contracts, DeFi strategies, and human-readable
              interfaces.
            </p>
            <div className="flex justify-center">
              <Button
                className="ton-button"
                onClick={() => setIsPlaying(!isPlaying)}
              >
                {isPlaying ? (
                  <Pause className="w-4 h-4 mr-2" />
                ) : (
                  <Play className="w-4 h-4 mr-2" />
                )}
                {isPlaying ? "Pause" : "Play"} Demo
              </Button>
            </div>
          </motion.div>
        </div>

        {/* Steps Section */}
        <motion.section
          className="mb-16"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.8, delay: 0.2 }}
        >
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold mb-4">Simple 4-Step Process</h2>
            <p className="text-muted-foreground">
              Get started with automated investing in minutes
            </p>
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
            {/* Steps List */}
            <div className="space-y-6">
              {steps.map((step, index) => (
                <motion.div
                  key={step.id}
                  initial={{ opacity: 0, x: -20 }}
                  animate={{ opacity: 1, x: 0 }}
                  transition={{ duration: 0.6, delay: index * 0.1 }}
                  className={`p-6 rounded-xl transition-all duration-300 cursor-pointer ${
                    activeStep === step.id
                      ? "ton-card border-primary/50"
                      : "glass-card hover:border-primary/30"
                  }`}
                  onClick={() => setActiveStep(step.id)}
                >
                  <div className="flex items-start space-x-4">
                    <div
                      className={`p-3 rounded-lg ${
                        activeStep === step.id
                          ? "bg-primary/20 text-primary"
                          : "bg-muted text-muted-foreground"
                      }`}
                    >
                      <step.icon className="w-6 h-6" />
                    </div>
                    <div className="flex-1">
                      <h3 className="text-lg font-semibold mb-2">
                        {step.title}
                      </h3>
                      <p className="text-muted-foreground mb-3">
                        {step.description}
                      </p>
                      <ul className="space-y-1">
                        {step.details.map((detail, idx) => (
                          <li
                            key={idx}
                            className="flex items-center text-sm text-muted-foreground"
                          >
                            <CheckCircle className="w-4 h-4 text-green-400 mr-2 flex-shrink-0" />
                            {detail}
                          </li>
                        ))}
                      </ul>
                    </div>
                  </div>
                </motion.div>
              ))}
            </div>

            {/* Visual Representation */}
            <div className="flex items-center justify-center">
              <motion.div
                className="relative w-full max-w-md"
                initial={{ opacity: 0, scale: 0.8 }}
                animate={{ opacity: 1, scale: 1 }}
                transition={{ duration: 0.8, delay: 0.4 }}
              >
                <div className="bg-gradient-to-br from-primary/20 to-primary/5 rounded-2xl p-8 text-center">
                  <div className="w-24 h-24 bg-primary/20 rounded-full flex items-center justify-center mx-auto mb-6">
                    {React.createElement(steps[activeStep - 1].icon, {
                      className: "w-12 h-12 text-primary",
                    })}
                  </div>
                  <h3 className="text-xl font-semibold mb-2">
                    Step {activeStep}
                  </h3>
                  <p className="text-muted-foreground">
                    {steps[activeStep - 1].title}
                  </p>
                </div>
              </motion.div>
            </div>
          </div>
        </motion.section>

        {/* Features Section */}
        <motion.section
          className="mb-16"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.8, delay: 0.6 }}
        >
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold mb-4">Key Features</h2>
            <p className="text-muted-foreground">
              Built for the TON ecosystem with cutting-edge technology
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {features.map((feature, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
              >
                <Card className="ton-card h-full">
                  <CardHeader>
                    <div className="flex items-center space-x-3 mb-4">
                      <div className="p-3 bg-primary/20 rounded-lg">
                        <feature.icon className="w-6 h-6 text-primary" />
                      </div>
                      <CardTitle className="text-xl">{feature.title}</CardTitle>
                    </div>
                    <CardDescription className="text-base">
                      {feature.description}
                    </CardDescription>
                  </CardHeader>
                  <CardContent>
                    <ul className="space-y-2">
                      {feature.benefits.map((benefit, idx) => (
                        <li key={idx} className="flex items-center text-sm">
                          <CheckCircle className="w-4 h-4 text-green-400 mr-2 flex-shrink-0" />
                          {benefit}
                        </li>
                      ))}
                    </ul>
                  </CardContent>
                </Card>
              </motion.div>
            ))}
          </div>
        </motion.section>

        {/* Investment Strategies */}
        <motion.section
          className="mb-16"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.8, delay: 0.8 }}
        >
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold mb-4">Investment Strategies</h2>
            <p className="text-muted-foreground">
              Choose from various DeFi strategies optimized for TON ecosystem
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {strategies.map((strategy, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
              >
                <Card className="ton-card h-full">
                  <CardHeader>
                    <div className="flex items-center justify-between mb-4">
                      <CardTitle className="text-lg">{strategy.name}</CardTitle>
                      <Badge
                        className={
                          strategy.risk === "Low"
                            ? "ton-status-success"
                            : strategy.risk === "Medium"
                            ? "ton-status-warning"
                            : "ton-status-error"
                        }
                      >
                        {strategy.risk} Risk
                      </Badge>
                    </div>
                    <CardDescription>{strategy.description}</CardDescription>
                  </CardHeader>
                  <CardContent>
                    <div className="space-y-4">
                      <div className="flex items-center justify-between">
                        <span className="text-sm font-medium">APY</span>
                        <span className="text-lg font-bold text-green-400">
                          {strategy.apy}
                        </span>
                      </div>
                      <div className="flex items-center justify-between">
                        <span className="text-sm font-medium">Min Amount</span>
                        <span className="text-sm text-muted-foreground">
                          {strategy.minAmount}
                        </span>
                      </div>
                      <div className="space-y-2">
                        <p className="text-sm font-medium">Features:</p>
                        <ul className="space-y-1">
                          {strategy.features.map((feature, idx) => (
                            <li
                              key={idx}
                              className="flex items-center text-xs text-muted-foreground"
                            >
                              <CheckCircle className="w-3 h-3 text-green-400 mr-2 flex-shrink-0" />
                              {feature}
                            </li>
                          ))}
                        </ul>
                      </div>
                    </div>
                  </CardContent>
                </Card>
              </motion.div>
            ))}
          </div>
        </motion.section>

        {/* FAQ Section */}
        <motion.section
          className="mb-16"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.8, delay: 1.0 }}
        >
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold mb-4">
              Frequently Asked Questions
            </h2>
            <p className="text-muted-foreground">
              Everything you need to know about Siphere
            </p>
          </div>

          <div className="max-w-3xl mx-auto space-y-6">
            {faqs.map((faq, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
              >
                <Card className="ton-card">
                  <CardHeader>
                    <CardTitle className="text-lg">{faq.question}</CardTitle>
                  </CardHeader>
                  <CardContent>
                    <p className="text-muted-foreground">{faq.answer}</p>
                  </CardContent>
                </Card>
              </motion.div>
            ))}
          </div>
        </motion.section>

        {/* CTA Section */}
        <motion.section
          className="text-center py-16"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.8, delay: 1.2 }}
        >
          <Card className="ton-card max-w-2xl mx-auto">
            <CardContent className="py-12">
              <h2 className="text-3xl font-bold mb-4 ton-gradient-text">
                Ready to Start Your SIP Journey?
              </h2>
              <p className="text-muted-foreground mb-8">
                Join thousands of users already building wealth systematically
                on TON blockchain
              </p>
              <div className="flex flex-col sm:flex-row gap-4 justify-center">
                <Button className="ton-button" size="lg" asChild>
                  <Link href="/create-sip" className="flex items-center">
                    Create Your First SIP
                    <ArrowRight className="w-4 h-4 ml-2" />
                  </Link>
                </Button>
                <Button variant="outline" size="lg" asChild>
                  <Link href="/dashboard" className="flex items-center">
                    View Dashboard
                    <BarChart3 className="w-4 h-4 ml-2" />
                  </Link>
                </Button>
              </div>
            </CardContent>
          </Card>
        </motion.section>
      </div>
    </div>
  );
}
