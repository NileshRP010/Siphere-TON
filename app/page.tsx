"use client";

import { useState, useEffect } from "react";
import { motion, useScroll, useTransform } from "framer-motion";
import { Button } from "@/components/ui/button";
import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
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
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";
import { Navigation } from "@/components/navigation";
import Link from "next/link";
import {
  ArrowRight,
  DollarSign,
  Shield,
  Zap,
  TrendingUp,
  Users,
  Lock,
  Clock,
  BarChart3,
  Coins,
  CheckCircle,
  ArrowDown,
  Repeat,
  PiggyBank,
  FileText,
  Twitter,
  Github,
  MessageCircle,
  Mail,
  Settings,
  Star,
  Globe,
  Sparkles,
  Target,
  Layers,
  Activity,
  AlertTriangle,
} from "lucide-react";

export default function Home() {
  const [sipForm, setSipForm] = useState({
    token: "",
    amount: "",
    frequency: "",
    strategy: "",
    insurance: false,
  });

  const { scrollY } = useScroll();
  const y1 = useTransform(scrollY, [0, 300], [0, 50]);
  const y2 = useTransform(scrollY, [0, 300], [0, -50]);
  const opacity = useTransform(scrollY, [0, 300], [1, 0.5]);

  const handleCreateSIP = () => {
    console.log("Creating SIP:", sipForm);
    // This would integrate with wallet and smart contracts
  };

  // Enhanced animation variants
  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.1,
        delayChildren: 0.2,
      },
    },
  };

  const itemVariants = {
    hidden: { y: 30, opacity: 0 },
    visible: {
      y: 0,
      opacity: 1,
      transition: {
        type: "spring",
        stiffness: 100,
        damping: 12,
      },
    },
  };

  const floatingVariants = {
    animate: {
      y: [0, -20, 0],
      rotate: [0, 5, -5, 0],
      transition: {
        duration: 6,
        repeat: Infinity,
        ease: "easeInOut",
      },
    },
  };

  return (
    <div className="min-h-screen">
      <Navigation />

      {/* Hero Section with Enhanced Parallax */}
      <section className="relative overflow-hidden hero-bg min-h-screen flex items-center">
        <motion.div
          className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-24 relative z-10"
          style={{ y: y1, opacity }}
        >
          <div className="text-center">
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 1, ease: "easeOut" }}
            >
              <motion.div
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
              >
                <Badge
                  variant="secondary"
                  className="mb-6 bg-primary/10 text-primary border-primary/20 animate-pulse-slow hover-glow"
                >
                  <motion.div
                    animate={{ rotate: 360 }}
                    transition={{
                      duration: 2,
                      repeat: Infinity,
                      ease: "linear",
                    }}
                  >
                    <Sparkles className="w-4 h-4 mr-2" />
                  </motion.div>
                  Now Live on TON Blockchain
                </Badge>
              </motion.div>

              <motion.h1
                className="text-5xl md:text-7xl font-bold mb-8 leading-tight"
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 1, delay: 0.2 }}
              >
                <motion.span
                  whileHover={{ scale: 1.05 }}
                  className="inline-block"
                >
                  Invest Smarter,
                </motion.span>{" "}
                <span className="gradient-text relative text-shimmer">
                  <motion.span
                    whileHover={{ scale: 1.1 }}
                    className="inline-block"
                  >
                    Automatically
                  </motion.span>
                  <motion.div
                    className="absolute -bottom-2 left-0 right-0 h-1 bg-gradient-to-r from-primary to-green-400 rounded-full"
                    initial={{ scaleX: 0 }}
                    animate={{ scaleX: 1 }}
                    transition={{ duration: 1, delay: 1 }}
                  />
                </span>
              </motion.h1>

              <motion.p
                className="text-xl text-muted-foreground mb-6 max-w-2xl mx-auto"
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ duration: 1, delay: 0.4 }}
                whileHover={{ scale: 1.02 }}
              >
                Your Crypto SIP starts here.
              </motion.p>

              <motion.p
                className="text-lg text-muted-foreground mb-12 max-w-3xl mx-auto"
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ duration: 1, delay: 0.6 }}
              >
                Create systematic investment plans using TON, USDT, or USDC.
                Auto-deploy into staking or lending strategies on TON blockchain
                with optional insurance protection.
              </motion.p>

              <motion.div
                className="flex flex-col sm:flex-row gap-6 justify-center"
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 1, delay: 0.8 }}
                variants={containerVariants}
              >
                <motion.div
                  variants={itemVariants}
                  whileHover={{ scale: 1.05 }}
                  whileTap={{ scale: 0.95 }}
                >
                  <Button
                    size="lg"
                    className="animate-glow bg-primary hover:bg-primary/90 text-lg px-8 py-4 button-hover"
                  >
                    <Link href="/create-sip" className="flex items-center">
                      Start Your SIP
                      <motion.div
                        animate={{ x: [0, 5, 0] }}
                        transition={{ duration: 1.5, repeat: Infinity }}
                      >
                        <ArrowRight className="ml-2 h-5 w-5" />
                      </motion.div>
                    </Link>
                  </Button>
                </motion.div>

                <motion.div
                  variants={itemVariants}
                  whileHover={{ scale: 1.05 }}
                  whileTap={{ scale: 0.95 }}
                >
                  <Button
                    variant="outline"
                    size="lg"
                    className="text-lg px-8 py-4 button-hover hover-glow"
                  >
                    <Link href="/how-it-works" className="flex items-center">
                      Learn How
                      <BarChart3 className="ml-2 h-5 w-5" />
                    </Link>
                  </Button>
                </motion.div>
              </motion.div>
            </motion.div>
          </div>
        </motion.div>

        {/* Enhanced animated background elements */}
        <div className="absolute inset-0 -z-10">
          <motion.div
            className="absolute top-1/4 left-1/4 w-96 h-96 bg-primary/5 rounded-full blur-3xl"
            animate={{
              scale: [1, 1.2, 1],
              opacity: [0.3, 0.6, 0.3],
              x: [0, 50, 0],
              y: [0, -30, 0],
            }}
            transition={{
              duration: 8,
              repeat: Infinity,
              ease: "easeInOut",
            }}
          />
          <motion.div
            className="absolute bottom-1/4 right-1/4 w-96 h-96 bg-green-500/5 rounded-full blur-3xl"
            animate={{
              scale: [1.2, 1, 1.2],
              opacity: [0.6, 0.3, 0.6],
              x: [0, -50, 0],
              y: [0, 30, 0],
            }}
            transition={{
              duration: 8,
              repeat: Infinity,
              ease: "easeInOut",
              delay: 4,
            }}
          />
        </div>

        {/* Enhanced floating elements */}
        <motion.div
          className="absolute top-20 left-10 w-20 h-20 bg-primary/10 rounded-full flex items-center justify-center hover-rotate"
          variants={floatingVariants}
          animate="animate"
          whileHover={{ scale: 1.2, rotate: 180 }}
        >
          <DollarSign className="w-8 h-8 text-primary" />
        </motion.div>

        <motion.div
          className="absolute top-40 right-20 w-16 h-16 bg-green-500/10 rounded-full flex items-center justify-center hover-rotate"
          variants={floatingVariants}
          animate="animate"
          style={{ animationDelay: "2s" }}
          whileHover={{ scale: 1.2, rotate: -180 }}
        >
          <TrendingUp className="w-6 h-6 text-green-400" />
        </motion.div>

        <motion.div
          className="absolute bottom-40 left-20 w-12 h-12 bg-blue-500/10 rounded-full flex items-center justify-center hover-rotate"
          variants={floatingVariants}
          animate="animate"
          style={{ animationDelay: "4s" }}
          whileHover={{ scale: 1.3, rotate: 90 }}
        >
          <Shield className="w-5 h-5 text-blue-400" />
        </motion.div>
      </section>

      {/* Enhanced Stats Section */}
      <section className="py-20 bg-muted/5">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            className="grid grid-cols-2 md:grid-cols-4 gap-8"
            variants={containerVariants}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
          >
            {[
              {
                label: "Total Value Locked",
                value: "$2.4M",
                icon: Lock,
                color: "text-blue-400",
              },
              {
                label: "Active SIPs",
                value: "1,247",
                icon: Activity,
                color: "text-green-400",
              },
              {
                label: "Average APY",
                value: "8.2%",
                icon: TrendingUp,
                color: "text-purple-400",
              },
              {
                label: "Insurance Coverage",
                value: "94%",
                icon: Shield,
                color: "text-yellow-400",
              },
            ].map((stat, index) => (
              <motion.div
                key={index}
                variants={itemVariants}
                className="text-center group"
                whileHover={{ scale: 1.05 }}
              >
                <motion.div
                  className="w-16 h-16 bg-primary/10 rounded-full flex items-center justify-center mx-auto mb-4 hover-glow group-hover:bg-primary/20 transition-all duration-300"
                  whileHover={{ rotate: 360 }}
                  transition={{ duration: 0.6 }}
                >
                  <stat.icon className={`w-8 h-8 ${stat.color}`} />
                </motion.div>
                <motion.div
                  className="text-3xl font-bold mb-2"
                  initial={{ opacity: 0, scale: 0.5 }}
                  whileInView={{ opacity: 1, scale: 1 }}
                  transition={{ duration: 0.8, delay: 0.5 + index * 0.1 }}
                  viewport={{ once: true }}
                  whileHover={{ scale: 1.1 }}
                >
                  {stat.value}
                </motion.div>
                <div className="text-muted-foreground group-hover:text-foreground transition-colors duration-300">
                  {stat.label}
                </div>
              </motion.div>
            ))}
          </motion.div>
        </div>
      </section>

      {/* Enhanced How It Works Section */}
      <section className="py-24 bg-muted/10">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            className="text-center mb-16"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
          >
            <motion.h2
              className="text-4xl md:text-5xl font-bold mb-6"
              whileHover={{ scale: 1.02 }}
            >
              How It Works
            </motion.h2>
            <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
              Simple 3-step process to start your automated crypto investing
              journey
            </p>
          </motion.div>

          <div className="grid md:grid-cols-3 gap-12">
            {[
              {
                step: "01",
                title: "Set Your SIP",
                description:
                  "Choose asset (USDC, SOL), investment amount, and frequency (weekly, bi-weekly, monthly)",
                icon: Settings,
                color: "text-blue-400",
                bgColor: "from-blue-400/20 to-blue-600/20",
              },
              {
                step: "02",
                title: "Auto Invest",
                description:
                  "Funds are automatically invested via staking protocols or DeFi lending platforms",
                icon: Repeat,
                color: "text-primary",
                bgColor: "from-primary/20 to-green-600/20",
              },
              {
                step: "03",
                title: "Earn + Insure",
                description:
                  "Generate passive yield with optional protection against protocol failures",
                icon: PiggyBank,
                color: "text-green-400",
                bgColor: "from-green-400/20 to-green-600/20",
              },
            ].map((item, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8, delay: index * 0.2 }}
                viewport={{ once: true }}
                className="relative group"
                whileHover={{ y: -10 }}
              >
                <Card className="glass-card card-hover group h-full border-2 hover:border-primary/50 relative overflow-hidden">
                  {/* Animated background gradient */}
                  <motion.div
                    className={`absolute inset-0 bg-gradient-to-br ${item.bgColor} opacity-0 group-hover:opacity-100 transition-opacity duration-500`}
                  />

                  <CardHeader className="text-center pb-8 relative z-10">
                    <motion.div
                      className="w-20 h-20 mx-auto mb-6 bg-background/50 rounded-full flex items-center justify-center group-hover:scale-110 transition-transform duration-300 hover-glow"
                      whileHover={{ rotate: 360, scale: 1.2 }}
                      transition={{ duration: 0.6 }}
                    >
                      <item.icon className={`h-10 w-10 ${item.color}`} />
                    </motion.div>

                    <motion.div
                      className="text-sm font-mono text-muted-foreground mb-3 tracking-wider"
                      whileHover={{ scale: 1.1 }}
                    >
                      STEP {item.step}
                    </motion.div>

                    <motion.div whileHover={{ scale: 1.05 }}>
                      <CardTitle className="text-2xl mb-4 group-hover:text-primary transition-colors duration-300">
                        {item.title}
                      </CardTitle>
                    </motion.div>
                  </CardHeader>

                  <CardContent className="relative z-10">
                    <p className="text-muted-foreground text-center leading-relaxed group-hover:text-foreground transition-colors duration-300">
                      {item.description}
                    </p>
                  </CardContent>
                </Card>

                {index < 2 && (
                  <motion.div
                    className="hidden md:block absolute top-1/2 -right-6 transform -translate-y-1/2 z-20"
                    initial={{ opacity: 0, x: -20 }}
                    whileInView={{ opacity: 1, x: 0 }}
                    transition={{ duration: 0.6, delay: 0.8 + index * 0.2 }}
                    viewport={{ once: true }}
                    whileHover={{ scale: 1.2, x: 5 }}
                  >
                    <ArrowRight className="w-8 h-8 text-primary animate-pulse-slow" />
                  </motion.div>
                )}
              </motion.div>
            ))}
          </div>

          <motion.div
            className="text-center mt-16"
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            transition={{ duration: 0.8, delay: 0.6 }}
            viewport={{ once: true }}
          >
            <motion.div whileHover={{ scale: 1.05 }} whileTap={{ scale: 0.95 }}>
              <Button
                size="lg"
                className="bg-primary hover:bg-primary/90 button-hover"
              >
                <Link href="/how-it-works" className="flex items-center">
                  Learn More Details
                  <ArrowRight className="ml-2 h-5 w-5" />
                </Link>
              </Button>
            </motion.div>
          </motion.div>
        </div>
      </section>

      {/* Enhanced Features Section */}
      <section className="py-24">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            className="text-center mb-16"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
          >
            <motion.h2
              className="text-4xl md:text-5xl font-bold mb-6"
              whileHover={{ scale: 1.02 }}
            >
              Powerful Features
            </motion.h2>
            <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
              Everything you need for automated DeFi investing with
              institutional-grade security
            </p>
          </motion.div>

          <motion.div
            className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8"
            variants={containerVariants}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
          >
            {[
              {
                icon: TrendingUp,
                title: "Auto DCA",
                description:
                  "Dollar Cost Averaging reduces volatility impact through systematic investing",
                color: "text-blue-400",
                gradient: "from-blue-400/20 to-blue-600/20",
              },
              {
                icon: Coins,
                title: "Stake & Lend",
                description:
                  "Earn passive yield through automated staking and DeFi lending protocols",
                color: "text-primary",
                gradient: "from-primary/20 to-green-600/20",
              },
              {
                icon: DollarSign,
                title: "Stablecoin Support",
                description:
                  "Invest with USDC, USDT, or SOL with automatic token conversion",
                color: "text-green-400",
                gradient: "from-green-400/20 to-green-600/20",
              },
              {
                icon: Shield,
                title: "Insurance Protection",
                description:
                  "Optional coverage against execution failures and DeFi protocol risks",
                color: "text-purple-400",
                gradient: "from-purple-400/20 to-purple-600/20",
              },
              {
                icon: FileText,
                title: "Transparent Logs",
                description:
                  "Complete execution history with on-chain transaction verification",
                color: "text-yellow-400",
                gradient: "from-yellow-400/20 to-yellow-600/20",
              },
              {
                icon: Users,
                title: "DAO Governance",
                description:
                  "Community-governed claims system with oracle-based verification",
                color: "text-red-400",
                gradient: "from-red-400/20 to-red-600/20",
              },
            ].map((feature, index) => (
              <motion.div
                key={index}
                variants={itemVariants}
                whileHover={{ y: -8, scale: 1.02 }}
                className="group"
              >
                <Card className="glass-card card-hover group h-full border-2 hover:border-primary/50 relative overflow-hidden">
                  {/* Animated background */}
                  <motion.div
                    className={`absolute inset-0 bg-gradient-to-br ${feature.gradient} opacity-0 group-hover:opacity-100 transition-opacity duration-500`}
                  />

                  <CardHeader className="relative z-10">
                    <motion.div
                      className={`w-16 h-16 rounded-xl bg-gradient-to-br ${feature.gradient} flex items-center justify-center mb-6 group-hover:scale-110 transition-transform duration-300 hover-glow`}
                      whileHover={{ rotate: 360, scale: 1.2 }}
                      transition={{ duration: 0.6 }}
                    >
                      <feature.icon className={`h-8 w-8 ${feature.color}`} />
                    </motion.div>

                    <motion.div whileHover={{ scale: 1.05 }}>
                      <CardTitle className="text-xl mb-3 group-hover:text-primary transition-colors duration-300">
                        {feature.title}
                      </CardTitle>
                    </motion.div>
                  </CardHeader>

                  <CardContent className="relative z-10">
                    <p className="text-muted-foreground leading-relaxed group-hover:text-foreground transition-colors duration-300">
                      {feature.description}
                    </p>
                  </CardContent>
                </Card>
              </motion.div>
            ))}
          </motion.div>

          <motion.div
            className="text-center mt-16"
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            transition={{ duration: 0.8, delay: 0.4 }}
            viewport={{ once: true }}
          >
            <motion.div whileHover={{ scale: 1.05 }} whileTap={{ scale: 0.95 }}>
              <Button
                size="lg"
                variant="outline"
                className="button-hover hover-glow"
              >
                <Link href="/features" className="flex items-center">
                  Explore All Features
                  <ArrowRight className="ml-2 h-5 w-5" />
                </Link>
              </Button>
            </motion.div>
          </motion.div>
        </div>
      </section>

      {/* Enhanced Create SIP Preview Section */}
      <section id="create-sip" className="py-24 bg-muted/10">
        <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            className="text-center mb-12"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
          >
            <motion.h2
              className="text-4xl md:text-5xl font-bold mb-6"
              whileHover={{ scale: 1.02 }}
            >
              Create Your SIP
            </motion.h2>
            <p className="text-xl text-muted-foreground">
              Set up your systematic investment plan in minutes
            </p>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.2 }}
            viewport={{ once: true }}
            whileHover={{ scale: 1.01 }}
          >
            <Card className="glass-card border-2 border-primary/20 card-hover gradient-border">
              <CardContent className="p-8">
                <div className="grid md:grid-cols-2 gap-8">
                  <div className="space-y-6">
                    <motion.div
                      initial={{ opacity: 0, x: -20 }}
                      whileInView={{ opacity: 1, x: 0 }}
                      transition={{ duration: 0.6, delay: 0.1 }}
                      viewport={{ once: true }}
                      whileHover={{ scale: 1.02 }}
                    >
                      <Label
                        htmlFor="token"
                        className="hover:text-primary transition-colors"
                      >
                        Deposit Token
                      </Label>
                      <Select
                        onValueChange={(value) =>
                          setSipForm({ ...sipForm, token: value })
                        }
                      >
                        <SelectTrigger className="h-12 hover-glow">
                          <SelectValue placeholder="Select token" />
                        </SelectTrigger>
                        <SelectContent>
                          <SelectItem value="ton">TON</SelectItem>
                          <SelectItem value="usdc">USDC</SelectItem>
                          <SelectItem value="usdt">USDT</SelectItem>
                        </SelectContent>
                      </Select>
                    </motion.div>

                    <motion.div
                      initial={{ opacity: 0, x: -20 }}
                      whileInView={{ opacity: 1, x: 0 }}
                      transition={{ duration: 0.6, delay: 0.2 }}
                      viewport={{ once: true }}
                      whileHover={{ scale: 1.02 }}
                    >
                      <Label
                        htmlFor="amount"
                        className="hover:text-primary transition-colors"
                      >
                        Amount per Interval
                      </Label>
                      <Input
                        id="amount"
                        type="number"
                        placeholder="100"
                        className="h-12 hover-glow"
                        value={sipForm.amount}
                        onChange={(e) =>
                          setSipForm({ ...sipForm, amount: e.target.value })
                        }
                      />
                    </motion.div>

                    <motion.div
                      initial={{ opacity: 0, x: -20 }}
                      whileInView={{ opacity: 1, x: 0 }}
                      transition={{ duration: 0.6, delay: 0.3 }}
                      viewport={{ once: true }}
                      whileHover={{ scale: 1.02 }}
                    >
                      <Label
                        htmlFor="frequency"
                        className="hover:text-primary transition-colors"
                      >
                        Frequency
                      </Label>
                      <Select
                        onValueChange={(value) =>
                          setSipForm({ ...sipForm, frequency: value })
                        }
                      >
                        <SelectTrigger className="h-12 hover-glow">
                          <SelectValue placeholder="Select frequency" />
                        </SelectTrigger>
                        <SelectContent>
                          <SelectItem value="weekly">Weekly</SelectItem>
                          <SelectItem value="biweekly">Bi-weekly</SelectItem>
                          <SelectItem value="monthly">Monthly</SelectItem>
                        </SelectContent>
                      </Select>
                    </motion.div>

                    <motion.div
                      initial={{ opacity: 0, x: -20 }}
                      whileInView={{ opacity: 1, x: 0 }}
                      transition={{ duration: 0.6, delay: 0.4 }}
                      viewport={{ once: true }}
                      whileHover={{ scale: 1.02 }}
                    >
                      <Label
                        htmlFor="strategy"
                        className="hover:text-primary transition-colors"
                      >
                        Investment Strategy
                      </Label>
                      <Select
                        onValueChange={(value) =>
                          setSipForm({ ...sipForm, strategy: value })
                        }
                      >
                        <SelectTrigger className="h-12 hover-glow">
                          <SelectValue placeholder="Select strategy" />
                        </SelectTrigger>
                        <SelectContent>
                          <SelectItem value="stake">Staking Only</SelectItem>
                          <SelectItem value="lend">Lending Only</SelectItem>
                          <SelectItem value="split">50/50 Split</SelectItem>
                        </SelectContent>
                      </Select>
                    </motion.div>

                    <motion.div
                      className="flex items-center space-x-3 p-4 bg-primary/5 rounded-lg hover-glow"
                      initial={{ opacity: 0, x: -20 }}
                      whileInView={{ opacity: 1, x: 0 }}
                      transition={{ duration: 0.6, delay: 0.5 }}
                      viewport={{ once: true }}
                      whileHover={{
                        scale: 1.02,
                        backgroundColor: "rgba(34, 197, 94, 0.1)",
                      }}
                    >
                      <Switch
                        id="insurance"
                        checked={sipForm.insurance}
                        onCheckedChange={(checked) =>
                          setSipForm({ ...sipForm, insurance: checked })
                        }
                      />
                      <Label
                        htmlFor="insurance"
                        className="flex items-center hover:text-primary transition-colors cursor-pointer"
                      >
                        <motion.div
                          animate={{ rotate: sipForm.insurance ? 360 : 0 }}
                          transition={{ duration: 0.5 }}
                        >
                          <Shield className="w-4 h-4 mr-2 text-primary" />
                        </motion.div>
                        Enable Insurance Protection (1-2% fee)
                      </Label>
                    </motion.div>
                  </div>

                  <motion.div
                    className="space-y-6"
                    initial={{ opacity: 0, x: 20 }}
                    whileInView={{ opacity: 1, x: 0 }}
                    transition={{ duration: 0.8, delay: 0.3 }}
                    viewport={{ once: true }}
                  >
                    <motion.div
                      className="p-6 bg-gradient-to-br from-primary/10 to-green-500/10 rounded-xl border border-primary/20 hover-glow"
                      whileHover={{
                        scale: 1.02,
                        borderColor: "rgba(34, 197, 94, 0.5)",
                      }}
                    >
                      <h3 className="font-semibold mb-4 text-lg">
                        Investment Summary
                      </h3>
                      <div className="space-y-3 text-sm">
                        {[
                          {
                            label: "Token",
                            value:
                              sipForm.token?.toUpperCase() || "Not selected",
                          },
                          {
                            label: "Amount",
                            value: `$${sipForm.amount || "0"}`,
                          },
                          {
                            label: "Frequency",
                            value: sipForm.frequency || "Not selected",
                          },
                          {
                            label: "Strategy",
                            value: sipForm.strategy || "Not selected",
                          },
                          {
                            label: "Insurance",
                            value: sipForm.insurance ? "Enabled" : "Disabled",
                          },
                        ].map((item, index) => (
                          <motion.div
                            key={index}
                            className="flex justify-between hover:bg-primary/5 p-2 rounded transition-colors"
                            whileHover={{ x: 5 }}
                          >
                            <span className="text-muted-foreground">
                              {item.label}:
                            </span>
                            <span className="font-medium">{item.value}</span>
                          </motion.div>
                        ))}

                        {sipForm.amount && sipForm.frequency && (
                          <motion.div
                            className="pt-3 border-t border-border"
                            initial={{ opacity: 0 }}
                            animate={{ opacity: 1 }}
                            transition={{ duration: 0.5 }}
                          >
                            <div className="flex justify-between hover:bg-primary/5 p-2 rounded transition-colors">
                              <span className="text-muted-foreground">
                                Annual Investment:
                              </span>
                              <motion.span
                                className="font-medium text-primary"
                                whileHover={{ scale: 1.1 }}
                              >
                                $
                                {(
                                  parseFloat(sipForm.amount) *
                                  (sipForm.frequency === "weekly"
                                    ? 52
                                    : sipForm.frequency === "biweekly"
                                    ? 26
                                    : 12)
                                ).toLocaleString()}
                              </motion.span>
                            </div>
                          </motion.div>
                        )}
                      </div>
                    </motion.div>

                    <motion.div
                      className="p-6 bg-yellow-500/5 rounded-xl border border-yellow-500/20 hover-glow"
                      whileHover={{
                        scale: 1.02,
                        borderColor: "rgba(234, 179, 8, 0.4)",
                      }}
                    >
                      <h4 className="font-semibold text-yellow-400 mb-2 flex items-center">
                        <motion.div
                          animate={{ rotate: [0, 10, -10, 0] }}
                          transition={{ duration: 2, repeat: Infinity }}
                        >
                          <AlertTriangle className="w-4 h-4 mr-2" />
                        </motion.div>
                        Risk Disclosure
                      </h4>
                      <p className="text-sm text-muted-foreground">
                        DeFi investments carry risks including smart contract
                        vulnerabilities, market volatility, and potential loss
                        of funds. Insurance provides protection against
                        execution failures but not market risks.
                      </p>
                    </motion.div>

                    <motion.div
                      whileHover={{ scale: 1.02 }}
                      whileTap={{ scale: 0.98 }}
                    >
                      <Button
                        onClick={handleCreateSIP}
                        className="w-full bg-primary hover:bg-primary/90 h-12 text-lg button-hover"
                        size="lg"
                      >
                        <Link href="/create-sip" className="flex items-center">
                          Create Full SIP Plan
                          <motion.div
                            animate={{ x: [0, 5, 0] }}
                            transition={{ duration: 1.5, repeat: Infinity }}
                          >
                            <ArrowRight className="ml-2 h-5 w-5" />
                          </motion.div>
                        </Link>
                      </Button>
                    </motion.div>
                  </motion.div>
                </div>
              </CardContent>
            </Card>
          </motion.div>
        </div>
      </section>

      {/* Enhanced Dashboard Preview Section */}
      <section className="py-24">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            className="text-center mb-12"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
          >
            <motion.h2
              className="text-4xl md:text-5xl font-bold mb-6"
              whileHover={{ scale: 1.02 }}
            >
              Track Your Investments
            </motion.h2>
            <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
              Monitor your SIPs with real-time analytics and execution logs
            </p>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.2 }}
            viewport={{ once: true }}
            whileHover={{ scale: 1.01 }}
          >
            <Card className="glass-card border-2 border-primary/20 card-hover">
              <CardContent className="p-8">
                <motion.div
                  className="grid md:grid-cols-3 gap-6 mb-8"
                  variants={containerVariants}
                  initial="hidden"
                  whileInView="visible"
                  viewport={{ once: true }}
                >
                  {[
                    {
                      label: "Total Portfolio Value",
                      value: "$12,450",
                      change: "+15.2%",
                      color: "text-blue-400",
                    },
                    {
                      label: "Total Returns",
                      value: "+$1,890",
                      change: "+15.2%",
                      color: "text-green-400",
                    },
                    {
                      label: "Active SIPs",
                      value: "5",
                      change: "Running",
                      color: "text-purple-400",
                    },
                  ].map((stat, index) => (
                    <motion.div
                      key={index}
                      className="text-center group"
                      variants={itemVariants}
                      whileHover={{ scale: 1.05, y: -5 }}
                    >
                      <motion.div
                        className="text-3xl font-bold mb-2 group-hover:text-primary transition-colors duration-300"
                        initial={{ opacity: 0, scale: 0.5 }}
                        whileInView={{ opacity: 1, scale: 1 }}
                        transition={{ duration: 0.6, delay: 0.1 * index }}
                        viewport={{ once: true }}
                      >
                        {stat.value}
                      </motion.div>
                      <div className="text-sm text-muted-foreground mb-1 group-hover:text-foreground transition-colors">
                        {stat.label}
                      </div>
                      <motion.div
                        className={`text-sm ${stat.color}`}
                        whileHover={{ scale: 1.1 }}
                      >
                        {stat.change}
                      </motion.div>
                    </motion.div>
                  ))}
                </motion.div>

                <div className="space-y-4">
                  {[
                    {
                      name: "USDC Staking SIP",
                      amount: "$500",
                      frequency: "Weekly",
                      status: "Active",
                      yield: "+8.2%",
                      color: "bg-green-500/10",
                    },
                    {
                      name: "SOL DCA Plan",
                      amount: "$200",
                      frequency: "Bi-weekly",
                      status: "Active",
                      yield: "+12.5%",
                      color: "bg-blue-500/10",
                    },
                    {
                      name: "Mixed Strategy SIP",
                      amount: "$300",
                      frequency: "Monthly",
                      status: "Paused",
                      yield: "+6.8%",
                      color: "bg-yellow-500/10",
                    },
                  ].map((sip, index) => (
                    <motion.div
                      key={index}
                      className={`flex items-center justify-between p-4 ${sip.color} rounded-lg hover:bg-muted/30 transition-all duration-300 group hover-lift`}
                      initial={{ opacity: 0, x: -20 }}
                      whileInView={{ opacity: 1, x: 0 }}
                      transition={{ duration: 0.6, delay: 0.1 * index }}
                      viewport={{ once: true }}
                      whileHover={{ x: 5, scale: 1.02 }}
                    >
                      <div>
                        <motion.div
                          className="font-medium group-hover:text-primary transition-colors"
                          whileHover={{ scale: 1.05 }}
                        >
                          {sip.name}
                        </motion.div>
                        <div className="text-sm text-muted-foreground group-hover:text-foreground transition-colors">
                          {sip.amount} • {sip.frequency}
                        </div>
                      </div>
                      <div className="text-right">
                        <motion.div whileHover={{ scale: 1.1 }}>
                          <Badge
                            variant={
                              sip.status === "Active" ? "secondary" : "outline"
                            }
                            className="hover-glow"
                          >
                            {sip.status}
                          </Badge>
                        </motion.div>
                        <motion.div
                          className="text-sm text-green-400 mt-1"
                          whileHover={{ scale: 1.1 }}
                        >
                          {sip.yield}
                        </motion.div>
                      </div>
                    </motion.div>
                  ))}
                </div>

                <motion.div
                  className="mt-8 text-center"
                  initial={{ opacity: 0 }}
                  whileInView={{ opacity: 1 }}
                  transition={{ duration: 0.8, delay: 0.4 }}
                  viewport={{ once: true }}
                >
                  <motion.div
                    whileHover={{ scale: 1.05 }}
                    whileTap={{ scale: 0.95 }}
                  >
                    <Button size="lg" className="button-hover">
                      <Link href="/dashboard" className="flex items-center">
                        View Full Dashboard
                        <ArrowRight className="ml-2 h-5 w-5" />
                      </Link>
                    </Button>
                  </motion.div>
                </motion.div>
              </CardContent>
            </Card>
          </motion.div>
        </div>
      </section>

      {/* Enhanced About Section */}
      <section className="py-24 bg-muted/10">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
          >
            <motion.h2
              className="text-4xl md:text-5xl font-bold mb-6"
              whileHover={{ scale: 1.02 }}
            >
              About Siphere
            </motion.h2>
            <motion.p
              className="text-lg text-muted-foreground mb-8 leading-relaxed"
              whileHover={{ scale: 1.01 }}
            >
              Siphere's mission is to democratize long-term crypto investing
              through automation and protection. We provide safe, automated, and
              transparent DeFi investment solutions that remove the complexity
              of manual portfolio management while offering optional insurance
              against protocol risks.
            </motion.p>
          </motion.div>

          <motion.div
            className="grid md:grid-cols-3 gap-8 mt-12"
            variants={containerVariants}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
          >
            {[
              {
                icon: CheckCircle,
                title: "Transparency",
                description:
                  "All transactions and executions are recorded on-chain with full audit trails",
                color: "text-green-400",
              },
              {
                icon: Shield,
                title: "Security",
                description:
                  "Smart contracts audited with optional insurance coverage for added protection",
                color: "text-blue-400",
              },
              {
                icon: Users,
                title: "Community",
                description:
                  "DAO-governed platform with community-driven insurance claim reviews",
                color: "text-purple-400",
              },
            ].map((item, index) => (
              <motion.div
                key={index}
                variants={itemVariants}
                whileHover={{ y: -8, scale: 1.05 }}
                className="group"
              >
                <motion.div
                  className="p-6 hover-glow rounded-lg transition-all duration-300 group-hover:bg-card/20"
                  whileHover={{ backgroundColor: "rgba(255, 255, 255, 0.05)" }}
                >
                  <motion.div
                    whileHover={{ rotate: 360, scale: 1.2 }}
                    transition={{ duration: 0.6 }}
                  >
                    <item.icon
                      className={`w-8 h-8 ${item.color} mx-auto mb-4`}
                    />
                  </motion.div>
                  <motion.h3
                    className="font-semibold mb-2 group-hover:text-primary transition-colors"
                    whileHover={{ scale: 1.05 }}
                  >
                    {item.title}
                  </motion.h3>
                  <p className="text-sm text-muted-foreground group-hover:text-foreground transition-colors">
                    {item.description}
                  </p>
                </motion.div>
              </motion.div>
            ))}
          </motion.div>

          <motion.div
            className="mt-12"
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            transition={{ duration: 0.8, delay: 0.4 }}
            viewport={{ once: true }}
          >
            <motion.div whileHover={{ scale: 1.05 }} whileTap={{ scale: 0.95 }}>
              <Button
                size="lg"
                variant="outline"
                className="button-hover hover-glow"
              >
                <Link href="/about" className="flex items-center">
                  Learn More About Us
                  <ArrowRight className="ml-2 h-5 w-5" />
                </Link>
              </Button>
            </motion.div>
          </motion.div>
        </div>
      </section>

      {/* Enhanced FAQs Section */}
      <section className="py-24">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            className="text-center mb-12"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
          >
            <motion.h2
              className="text-4xl md:text-5xl font-bold mb-6"
              whileHover={{ scale: 1.02 }}
            >
              Frequently Asked Questions
            </motion.h2>
            <p className="text-xl text-muted-foreground">
              Everything you need to know about Siphere
            </p>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.2 }}
            viewport={{ once: true }}
          >
            <Accordion type="single" collapsible className="space-y-4">
              {[
                {
                  question: "What is a Crypto SIP?",
                  answer:
                    "A Crypto SIP (Systematic Investment Plan) is an automated investment strategy where you invest a fixed amount at regular intervals into cryptocurrency assets. This approach helps reduce the impact of market volatility through dollar-cost averaging.",
                },
                {
                  question: "How is my money invested?",
                  answer:
                    "Your funds are automatically deployed into selected DeFi strategies including staking protocols (like Marinade for SOL) and lending platforms (like Solend for stablecoins). You can choose between staking-only, lending-only, or split strategies.",
                },
                {
                  question: "What if the protocol fails?",
                  answer:
                    "With optional insurance coverage, you're protected against smart contract failures, execution errors, and protocol exploits. Claims are reviewed by our DAO governance system with oracle-based verification for fair and transparent resolution.",
                },
                {
                  question: "How does insurance work?",
                  answer:
                    "Insurance requires a small premium (1-2% of each investment) that goes into a community-managed vault. If you experience losses due to protocol failures or execution errors, you can file a claim that will be reviewed by token holders through our DAO governance system.",
                },
                {
                  question: "Can I cancel my SIP anytime?",
                  answer:
                    "Yes, you have full control over your SIP. You can pause, modify, or cancel your investment plan at any time. Your existing investments will remain in the protocols earning yield, and you can withdraw them whenever you choose.",
                },
              ].map((faq, index) => (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.6, delay: index * 0.1 }}
                  viewport={{ once: true }}
                  whileHover={{ scale: 1.01 }}
                >
                  <AccordionItem
                    value={`item-${index}`}
                    className="glass-card px-6 border-2 hover:border-primary/30 transition-all duration-300 card-hover"
                  >
                    <AccordionTrigger className="text-left hover:text-primary transition-colors group">
                      <motion.span whileHover={{ x: 5 }}>
                        {faq.question}
                      </motion.span>
                    </AccordionTrigger>
                    <AccordionContent className="text-muted-foreground">
                      <motion.div
                        initial={{ opacity: 0 }}
                        animate={{ opacity: 1 }}
                        transition={{ duration: 0.5 }}
                      >
                        {faq.answer}
                      </motion.div>
                    </AccordionContent>
                  </AccordionItem>
                </motion.div>
              ))}
            </Accordion>
          </motion.div>

          <motion.div
            className="text-center mt-12"
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            transition={{ duration: 0.8, delay: 0.4 }}
            viewport={{ once: true }}
          >
            <motion.div whileHover={{ scale: 1.05 }} whileTap={{ scale: 0.95 }}>
              <Button
                size="lg"
                variant="outline"
                className="button-hover hover-glow"
              >
                <Link href="/faq" className="flex items-center">
                  View All FAQs
                  <ArrowRight className="ml-2 h-5 w-5" />
                </Link>
              </Button>
            </motion.div>
          </motion.div>
        </div>
      </section>

      {/* Enhanced Footer Section */}
      <footer className="bg-muted/20 border-t border-border/50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
          <motion.div
            className="grid md:grid-cols-4 gap-8"
            variants={containerVariants}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
          >
            <motion.div variants={itemVariants}>
              <motion.div
                className="flex items-center space-x-3 mb-4"
                whileHover={{ scale: 1.05 }}
              >
                <motion.img
                  src="/logo2-removebg.png"
                  alt="Siphere Logo"
                  className="h-12 w-12"
                  whileHover={{ rotate: 360 }}
                  transition={{ duration: 0.6 }}
                />
                <span className="text-xl font-bold gradient-text">Siphere</span>
              </motion.div>
              <p className="text-muted-foreground text-sm">
                Automated DeFi investment platform for systematic crypto
                investing with optional insurance protection.
              </p>
            </motion.div>

            {[
              {
                title: "Platform",
                links: [
                  { name: "Dashboard", href: "/dashboard" },
                  { name: "Create SIP", href: "/create-sip" },
                  { name: "Insurance", href: "/insurance" },
                  { name: "Claims", href: "/claims" },
                ],
              },
              {
                title: "Resources",
                links: [
                  { name: "How It Works", href: "/how-it-works" },
                  { name: "Features", href: "/features" },
                  { name: "About Us", href: "/about" },
                  { name: "FAQ", href: "/faq" },
                ],
              },
              {
                title: "Community",
                links: [],
              },
            ].map((section, sectionIndex) => (
              <motion.div key={sectionIndex} variants={itemVariants}>
                <motion.h3
                  className="font-semibold mb-4"
                  whileHover={{ scale: 1.05, color: "hsl(var(--primary))" }}
                >
                  {section.title}
                </motion.h3>
                {section.title === "Community" ? (
                  <div>
                    <div className="flex space-x-4 mb-4">
                      {[
                        { icon: Twitter, href: "https://x.com/Siphere03" },
                        {
                          icon: Github,
                          href: "https://github.com/NileshRP010/Siphere",
                        },
                        { icon: MessageCircle, href: "https://discord.com/" },
                        {
                          icon: Mail,
                          href: "mailto:nileshpathak781@gmail.com",
                        },
                      ].map((social, index) => (
                        <motion.div
                          key={index}
                          whileHover={{ scale: 1.2, y: -2 }}
                          whileTap={{ scale: 0.9 }}
                        >
                          <Link
                            href={social.href}
                            className="text-muted-foreground hover:text-primary transition-colors hover-glow"
                          >
                            <social.icon className="h-5 w-5" />
                          </Link>
                        </motion.div>
                      ))}
                    </div>
                    <p className="text-sm text-muted-foreground">
                      Join our Discord for support and community discussions.
                    </p>
                  </div>
                ) : (
                  <ul className="space-y-2 text-sm text-muted-foreground">
                    {section.links.map((link, linkIndex) => (
                      <motion.li key={linkIndex} whileHover={{ x: 5 }}>
                        <Link
                          href={link.href}
                          className="hover:text-primary transition-colors hover-glow"
                        >
                          {link.name}
                        </Link>
                      </motion.li>
                    ))}
                  </ul>
                )}
              </motion.div>
            ))}
          </motion.div>

          <motion.div
            className="border-t border-border/50 mt-8 pt-8 text-center text-sm text-muted-foreground"
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            transition={{ duration: 0.6, delay: 0.4 }}
            viewport={{ once: true }}
          >
            <motion.p whileHover={{ scale: 1.02 }}>
              &copy; 2025 Siphere. All rights reserved. Built on TON blockchain.
            </motion.p>
          </motion.div>
        </div>
      </footer>
    </div>
  );
}
