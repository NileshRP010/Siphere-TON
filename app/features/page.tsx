"use client";

import { useState } from "react";
import { motion } from "framer-motion";
import {
  Shield,
  Zap,
  BarChart3,
  Smartphone,
  Globe,
  Lock,
  Target,
  Activity,
  DollarSign,
  Clock,
  TrendingUp,
  Users,
  FileText,
  CheckCircle,
  ArrowRight,
  Star,
  Award,
  PieChart,
  Settings,
  Bell,
  RefreshCw,
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

const mainFeatures = [
  {
    title: "TON Ecosystem Integration",
    description:
      "Built specifically for TON blockchain with native token support and DeFi protocol integration",
    icon: Globe,
    color: "text-blue-400",
    bgColor: "bg-blue-500/10",
    features: [
      "Native TON token support",
      "USDT and USDC integration",
      "TON DeFi protocol integration",
      "Optimized for TON network",
      "Low transaction fees",
    ],
  },
  {
    title: "Automated Investment Strategies",
    description:
      "AI-powered investment strategies that automatically optimize your returns based on market conditions",
    icon: Activity,
    color: "text-green-400",
    bgColor: "bg-green-500/10",
    features: [
      "Dynamic strategy adjustment",
      "Market condition analysis",
      "Risk management protocols",
      "Yield optimization algorithms",
      "Real-time performance monitoring",
    ],
  },
  {
    title: "Smart Contract Security",
    description:
      "Audited smart contracts with multi-signature protection and optional insurance coverage",
    icon: Shield,
    color: "text-purple-400",
    bgColor: "bg-purple-500/10",
    features: [
      "Audited by leading security firms",
      "Multi-signature wallet protection",
      "Insurance coverage available",
      "Transparent contract code",
      "Regular security updates",
    ],
  },
  {
    title: "Human-Readable Interface",
    description:
      "Simple, intuitive interface following TON ecosystem standards for maximum usability",
    icon: FileText,
    color: "text-orange-400",
    bgColor: "bg-orange-500/10",
    features: [
      "Clear transaction descriptions",
      "Instant feedback on all actions",
      "Educational content and guidance",
      "Mobile-first responsive design",
      "Accessibility compliance",
    ],
  },
];

const investmentStrategies = [
  {
    name: "TON Staking",
    type: "Conservative",
    apy: "8.5%",
    risk: "Low",
    description:
      "Stake TON tokens for network security and earn regular rewards",
    icon: Target,
    features: [
      "Network participation",
      "Regular rewards",
      "Low risk",
      "TON ecosystem support",
    ],
    minAmount: "100 TON",
  },
  {
    name: "USDT Lending",
    type: "Balanced",
    apy: "12.3%",
    risk: "Medium",
    description: "Lend USDT on TON DeFi protocols for stable returns",
    icon: DollarSign,
    features: [
      "Stable returns",
      "Liquidity provision",
      "DeFi integration",
      "Flexible terms",
    ],
    minAmount: "50 USDT",
  },
  {
    name: "USDC DeFi",
    type: "Aggressive",
    apy: "15.7%",
    risk: "High",
    description: "Advanced DeFi strategies with USDC for maximum yield",
    icon: TrendingUp,
    features: [
      "High yield potential",
      "Advanced strategies",
      "Liquidity mining",
      "Protocol farming",
    ],
    minAmount: "100 USDC",
  },
  {
    name: "Mixed Portfolio",
    type: "Diversified",
    apy: "11.2%",
    risk: "Medium",
    description: "Diversified portfolio across multiple TON DeFi protocols",
    icon: PieChart,
    features: [
      "Risk diversification",
      "Multiple protocols",
      "Balanced returns",
      "Auto-rebalancing",
    ],
    minAmount: "200 TON",
  },
];

const platformFeatures = [
  {
    category: "Security & Trust",
    features: [
      {
        name: "Multi-Signature Wallets",
        description:
          "Your funds are protected by multi-signature wallet technology",
        icon: Lock,
      },
      {
        name: "Audited Smart Contracts",
        description: "All contracts are audited by leading security firms",
        icon: Shield,
      },
      {
        name: "Insurance Coverage",
        description: "Optional insurance protection for your investments",
        icon: Award,
      },
      {
        name: "Transparent Operations",
        description: "All operations are transparent and verifiable on-chain",
        icon: FileText,
      },
    ],
  },
  {
    category: "User Experience",
    features: [
      {
        name: "Mobile-First Design",
        description: "Optimized for mobile devices with responsive design",
        icon: Smartphone,
      },
      {
        name: "Real-Time Updates",
        description:
          "Get instant notifications and updates on your investments",
        icon: Bell,
      },
      {
        name: "Easy Management",
        description: "Simple interface to manage and adjust your SIP plans",
        icon: Settings,
      },
      {
        name: "Educational Content",
        description: "Learn about DeFi and investment strategies",
        icon: FileText,
      },
    ],
  },
  {
    category: "Advanced Features",
    features: [
      {
        name: "Auto-Rebalancing",
        description:
          "Automatically rebalance your portfolio for optimal returns",
        icon: RefreshCw,
      },
      {
        name: "Performance Analytics",
        description:
          "Detailed analytics and insights on your investment performance",
        icon: BarChart3,
      },
      {
        name: "Risk Management",
        description:
          "Advanced risk management protocols to protect your investments",
        icon: Target,
      },
      {
        name: "Custom Strategies",
        description:
          "Create custom investment strategies tailored to your needs",
        icon: Activity,
      },
    ],
  },
];

const testimonials = [
  {
    name: "Alex Chen",
    role: "DeFi Investor",
    content:
      "Siphere has revolutionized how I invest in TON ecosystem. The automated strategies and human-readable interface make DeFi accessible to everyone.",
    rating: 5,
  },
  {
    name: "Maria Rodriguez",
    role: "TON Community Member",
    content:
      "The security features and insurance coverage give me peace of mind. I can focus on building wealth without worrying about technical complexities.",
    rating: 5,
  },
  {
    name: "David Kim",
    role: "Crypto Enthusiast",
    content:
      "The TON ecosystem integration is seamless. I love how I can invest in TON, USDT, and USDC all from one platform with automated strategies.",
    rating: 5,
  },
];

export default function Features() {
  const [activeTab, setActiveTab] = useState("overview");

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
              Powerful Features
            </h1>
            <p className="text-xl text-muted-foreground max-w-3xl mx-auto mb-8">
              Discover the comprehensive features that make Siphere the leading
              automated investment platform for the TON ecosystem
            </p>
          </motion.div>
        </div>

        {/* Main Features Grid */}
        <motion.section
          className="mb-16"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.8, delay: 0.2 }}
        >
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {mainFeatures.map((feature, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
              >
                <Card className="ton-card h-full">
                  <CardHeader>
                    <div className="flex items-center space-x-4 mb-4">
                      <div className={`p-4 rounded-xl ${feature.bgColor}`}>
                        <feature.icon className={`w-8 h-8 ${feature.color}`} />
                      </div>
                      <div>
                        <CardTitle className="text-xl">
                          {feature.title}
                        </CardTitle>
                        <CardDescription className="text-base mt-2">
                          {feature.description}
                        </CardDescription>
                      </div>
                    </div>
                  </CardHeader>
                  <CardContent>
                    <ul className="space-y-3">
                      {feature.features.map((item, idx) => (
                        <li key={idx} className="flex items-center">
                          <CheckCircle className="w-5 h-5 text-green-400 mr-3 flex-shrink-0" />
                          <span className="text-sm">{item}</span>
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
          transition={{ duration: 0.8, delay: 0.4 }}
        >
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold mb-4">Investment Strategies</h2>
            <p className="text-muted-foreground">
              Choose from various DeFi strategies optimized for TON ecosystem
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            {investmentStrategies.map((strategy, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
              >
                <Card className="ton-card h-full">
                  <CardHeader>
                    <div className="flex items-center justify-between mb-4">
                      <div className="p-3 bg-primary/20 rounded-lg">
                        <strategy.icon className="w-6 h-6 text-primary" />
                      </div>
                      <Badge
                        className={
                          strategy.risk === "Low"
                            ? "ton-status-success"
                            : strategy.risk === "Medium"
                            ? "ton-status-warning"
                            : "ton-status-error"
                        }
                      >
                        {strategy.risk}
                      </Badge>
                    </div>
                    <CardTitle className="text-lg">{strategy.name}</CardTitle>
                    <CardDescription>{strategy.description}</CardDescription>
                  </CardHeader>
                  <CardContent>
                    <div className="space-y-4">
                      <div className="flex items-center justify-between">
                        <span className="text-sm font-medium">APY</span>
                        <span className="text-xl font-bold text-green-400">
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
                        <p className="text-sm font-medium">Key Features:</p>
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

        {/* Platform Features */}
        <motion.section
          className="mb-16"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.8, delay: 0.6 }}
        >
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold mb-4">Platform Features</h2>
            <p className="text-muted-foreground">
              Comprehensive features designed for the TON ecosystem
            </p>
          </div>

          <Tabs
            value={activeTab}
            onValueChange={setActiveTab}
            className="space-y-8"
          >
            <TabsList className="grid w-full grid-cols-3 lg:w-[600px] mx-auto">
              <TabsTrigger value="overview">Overview</TabsTrigger>
              <TabsTrigger value="security">Security</TabsTrigger>
              <TabsTrigger value="advanced">Advanced</TabsTrigger>
            </TabsList>

            <TabsContent value="overview" className="space-y-8">
              <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                {platformFeatures.slice(0, 2).map((category, categoryIndex) => (
                  <div key={categoryIndex}>
                    <h3 className="text-xl font-semibold mb-6">
                      {category.category}
                    </h3>
                    <div className="space-y-4">
                      {category.features.map((feature, index) => (
                        <motion.div
                          key={index}
                          initial={{ opacity: 0, x: -20 }}
                          animate={{ opacity: 1, x: 0 }}
                          transition={{ duration: 0.6, delay: index * 0.1 }}
                        >
                          <Card className="ton-card">
                            <CardContent className="p-6">
                              <div className="flex items-start space-x-4">
                                <div className="p-3 bg-primary/20 rounded-lg">
                                  <feature.icon className="w-6 h-6 text-primary" />
                                </div>
                                <div>
                                  <h4 className="font-semibold mb-2">
                                    {feature.name}
                                  </h4>
                                  <p className="text-sm text-muted-foreground">
                                    {feature.description}
                                  </p>
                                </div>
                              </div>
                            </CardContent>
                          </Card>
                        </motion.div>
                      ))}
                    </div>
                  </div>
                ))}
              </div>
            </TabsContent>

            <TabsContent value="security" className="space-y-8">
              <div className="max-w-4xl mx-auto">
                <div className="space-y-4">
                  {platformFeatures[0].features.map((feature, index) => (
                    <motion.div
                      key={index}
                      initial={{ opacity: 0, y: 20 }}
                      animate={{ opacity: 1, y: 0 }}
                      transition={{ duration: 0.6, delay: index * 0.1 }}
                    >
                      <Card className="ton-card">
                        <CardContent className="p-6">
                          <div className="flex items-start space-x-4">
                            <div className="p-3 bg-primary/20 rounded-lg">
                              <feature.icon className="w-6 h-6 text-primary" />
                            </div>
                            <div>
                              <h4 className="font-semibold mb-2">
                                {feature.name}
                              </h4>
                              <p className="text-sm text-muted-foreground">
                                {feature.description}
                              </p>
                            </div>
                          </div>
                        </CardContent>
                      </Card>
                    </motion.div>
                  ))}
                </div>
              </div>
            </TabsContent>

            <TabsContent value="advanced" className="space-y-8">
              <div className="max-w-4xl mx-auto">
                <div className="space-y-4">
                  {platformFeatures[2].features.map((feature, index) => (
                    <motion.div
                      key={index}
                      initial={{ opacity: 0, y: 20 }}
                      animate={{ opacity: 1, y: 0 }}
                      transition={{ duration: 0.6, delay: index * 0.1 }}
                    >
                      <Card className="ton-card">
                        <CardContent className="p-6">
                          <div className="flex items-start space-x-4">
                            <div className="p-3 bg-primary/20 rounded-lg">
                              <feature.icon className="w-6 h-6 text-primary" />
                            </div>
                            <div>
                              <h4 className="font-semibold mb-2">
                                {feature.name}
                              </h4>
                              <p className="text-sm text-muted-foreground">
                                {feature.description}
                              </p>
                            </div>
                          </div>
                        </CardContent>
                      </Card>
                    </motion.div>
                  ))}
                </div>
              </div>
            </TabsContent>
          </Tabs>
        </motion.section>

        {/* Testimonials */}
        <motion.section
          className="mb-16"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.8, delay: 0.8 }}
        >
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold mb-4">What Our Users Say</h2>
            <p className="text-muted-foreground">
              Join thousands of satisfied users building wealth on TON
              blockchain
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {testimonials.map((testimonial, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
              >
                <Card className="ton-card h-full">
                  <CardContent className="p-6">
                    <div className="flex items-center mb-4">
                      {[...Array(testimonial.rating)].map((_, i) => (
                        <Star
                          key={i}
                          className="w-4 h-4 text-yellow-400 fill-current"
                        />
                      ))}
                    </div>
                    <p className="text-muted-foreground mb-4 italic">
                      &quot;{testimonial.content}&quot;
                    </p>
                    <div>
                      <p className="font-semibold">{testimonial.name}</p>
                      <p className="text-sm text-muted-foreground">
                        {testimonial.role}
                      </p>
                    </div>
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
          transition={{ duration: 0.8, delay: 1.0 }}
        >
          <Card className="ton-card max-w-2xl mx-auto">
            <CardContent className="py-12">
              <h2 className="text-3xl font-bold mb-4 ton-gradient-text">
                Experience These Features Today
              </h2>
              <p className="text-muted-foreground mb-8">
                Start your automated investment journey on TON blockchain with
                all these powerful features
              </p>
              <div className="flex flex-col sm:flex-row gap-4 justify-center">
                <Button className="ton-button" size="lg" asChild>
                  <Link href="/create-sip" className="flex items-center">
                    Get Started Now
                    <ArrowRight className="w-4 h-4 ml-2" />
                  </Link>
                </Button>
                <Button variant="outline" size="lg" asChild>
                  <Link href="/how-it-works" className="flex items-center">
                    Learn More
                    <FileText className="w-4 h-4 ml-2" />
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
