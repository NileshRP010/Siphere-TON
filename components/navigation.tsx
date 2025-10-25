"use client";

import { useState } from "react";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { Button } from "@/components/ui/button";
import { motion } from "framer-motion";
import {
  BarChart3,
  DollarSign,
  Shield,
  Settings,
  History,
  Menu,
  X,
  TrendingUp,
  HelpCircle,
  Users,
  Layers,
  ChevronDown,
} from "lucide-react";
import { useTonWallet } from "@/components/ton-wallet-provider";
import { cn } from "@/lib/utils";
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu";

const navItems = [
  { name: "Dashboard", href: "/dashboard", icon: BarChart3 },
  { name: "Create SIP", href: "/create-sip", icon: DollarSign },
  { name: "Insurance", href: "/insurance", icon: Shield },
  { name: "Claims", href: "/claims", icon: History },
];

const learnItems = [
  { name: "How It Works", href: "/how-it-works", icon: Settings },
  { name: "Features", href: "/features", icon: Layers },
  { name: "About Us", href: "/about", icon: Users },
  { name: "FAQ", href: "/faq", icon: HelpCircle },
];

export function Navigation() {
  const [isOpen, setIsOpen] = useState(false);
  const pathname = usePathname();
  const { isConnected, address, connect, disconnect } = useTonWallet();

  return (
    <motion.nav
      className="glass-card border-b border-border/50 sticky top-0 z-50"
      initial={{ y: -100 }}
      animate={{ y: 0 }}
      transition={{ duration: 0.6, ease: "easeOut" }}
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between h-16">
          <div className="flex items-center">
            <motion.div whileHover={{ scale: 1.05 }} whileTap={{ scale: 0.95 }}>
              <Link href="/" className="flex items-center space-x-3 hover-glow">
                <motion.img
                  src="/logo2-removebg.png"
                  alt="Siphere Logo"
                  className="h-12 w-12"
                  whileHover={{ rotate: 360 }}
                  transition={{ duration: 0.6 }}
                />
                <span className="text-xl font-bold ton-gradient-text">
                  Siphere
                </span>
              </Link>
            </motion.div>
          </div>

          {/* Desktop Navigation */}
          <div className="hidden md:flex items-center space-x-8">
            {navItems.map((item, index) => {
              const Icon = item.icon;
              return (
                <motion.div
                  key={item.name}
                  initial={{ opacity: 0, y: -20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.6, delay: index * 0.1 }}
                  whileHover={{ scale: 1.05 }}
                >
                  <Link
                    href={item.href}
                    className={cn(
                      "flex items-center space-x-2 px-3 py-2 rounded-lg text-sm font-medium transition-all duration-300 hover-glow",
                      pathname === item.href
                        ? "bg-primary/20 text-primary shadow-lg shadow-primary/20"
                        : "text-muted-foreground hover:text-primary hover:bg-primary/10"
                    )}
                  >
                    <motion.div
                      whileHover={{ rotate: 5 }}
                      transition={{ duration: 0.2 }}
                    >
                      <Icon className="h-4 w-4" />
                    </motion.div>
                    <span>{item.name}</span>
                  </Link>
                </motion.div>
              );
            })}

            {/* Learn Dropdown */}
            <DropdownMenu>
              <DropdownMenuTrigger asChild>
                <motion.div
                  whileHover={{ scale: 1.05 }}
                  whileTap={{ scale: 0.95 }}
                >
                  <Button
                    variant="ghost"
                    className={cn(
                      "flex items-center space-x-2 px-3 py-2 rounded-lg text-sm font-medium transition-all duration-300 hover-glow",
                      learnItems.some((item) => pathname === item.href)
                        ? "bg-primary/20 text-primary shadow-lg shadow-primary/20"
                        : "text-muted-foreground hover:text-primary hover:bg-primary/10"
                    )}
                  >
                    <span>Learn</span>
                    <motion.div
                      animate={{ rotate: 0 }}
                      whileHover={{ rotate: 180 }}
                      transition={{ duration: 0.3 }}
                    >
                      <ChevronDown className="h-4 w-4" />
                    </motion.div>
                  </Button>
                </motion.div>
              </DropdownMenuTrigger>
              <DropdownMenuContent
                align="end"
                className="w-48 glass-card border-primary/20"
              >
                {learnItems.map((item, index) => {
                  const Icon = item.icon;
                  return (
                    <motion.div
                      key={item.name}
                      initial={{ opacity: 0, x: -10 }}
                      animate={{ opacity: 1, x: 0 }}
                      transition={{ duration: 0.3, delay: index * 0.05 }}
                    >
                      <DropdownMenuItem asChild>
                        <Link
                          href={item.href}
                          className={cn(
                            "flex items-center space-x-2 w-full hover-glow transition-all duration-300",
                            pathname === item.href &&
                              "bg-primary/10 text-primary"
                          )}
                        >
                          <motion.div
                            whileHover={{ rotate: 5, scale: 1.1 }}
                            transition={{ duration: 0.2 }}
                          >
                            <Icon className="h-4 w-4" />
                          </motion.div>
                          <span>{item.name}</span>
                        </Link>
                      </DropdownMenuItem>
                    </motion.div>
                  );
                })}
              </DropdownMenuContent>
            </DropdownMenu>
          </div>

          <div className="flex items-center space-x-4">
            {/* Join Waitlist CTA (desktop) */}
            <motion.div
              className="hidden md:block"
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
            >
              <Button
                variant="secondary"
                size="sm"
                className="hover-glow"
                asChild
              >
                <Link href="/waitlist" className="flex items-center">
                  <TrendingUp className="h-4 w-4 mr-2" />
                  Join Waitlist
                </Link>
              </Button>
            </motion.div>
            {isConnected ? (
              <motion.div
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                className="flex items-center space-x-2"
              >
                <div className="text-sm text-muted-foreground">
                  {address?.slice(0, 6)}...{address?.slice(-4)}
                </div>
                <Button
                  onClick={disconnect}
                  variant="outline"
                  size="sm"
                  className="hover-glow"
                >
                  Disconnect
                </Button>
              </motion.div>
            ) : (
              <motion.div
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
              >
                <Button onClick={connect} className="ton-button">
                  Connect TON Wallet
                </Button>
              </motion.div>
            )}

            {/* Mobile menu button */}
            <motion.div whileHover={{ scale: 1.1 }} whileTap={{ scale: 0.9 }}>
              <Button
                variant="ghost"
                size="sm"
                className="md:hidden hover-glow"
                onClick={() => setIsOpen(!isOpen)}
              >
                <motion.div
                  animate={{ rotate: isOpen ? 180 : 0 }}
                  transition={{ duration: 0.3 }}
                >
                  {isOpen ? (
                    <X className="h-5 w-5" />
                  ) : (
                    <Menu className="h-5 w-5" />
                  )}
                </motion.div>
              </Button>
            </motion.div>
          </div>
        </div>
      </div>

      {/* Mobile Navigation */}
      <motion.div
        initial={{ height: 0, opacity: 0 }}
        animate={{
          height: isOpen ? "auto" : 0,
          opacity: isOpen ? 1 : 0,
        }}
        transition={{ duration: 0.3 }}
        className="md:hidden overflow-hidden"
      >
        <div className="px-2 pt-2 pb-3 space-y-1 border-t border-border/50 bg-card/50 backdrop-blur-sm">
          {/* Mobile Join Waitlist CTA */}
          <div className="px-1 pb-2">
            <Button
              className="w-full ton-button"
              asChild
              onClick={() => setIsOpen(false)}
            >
              <Link
                href="/waitlist"
                className="flex items-center justify-center"
              >
                <TrendingUp className="h-4 w-4 mr-2" /> Join Waitlist
              </Link>
            </Button>
          </div>
          {navItems.map((item, index) => {
            const Icon = item.icon;
            return (
              <motion.div
                key={item.name}
                initial={{ opacity: 0, x: -20 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.3, delay: index * 0.05 }}
              >
                <Link
                  href={item.href}
                  className={cn(
                    "flex items-center space-x-2 px-3 py-2 rounded-lg text-sm font-medium transition-all duration-300 hover-glow",
                    pathname === item.href
                      ? "bg-primary/20 text-primary"
                      : "text-muted-foreground hover:text-primary hover:bg-primary/10"
                  )}
                  onClick={() => setIsOpen(false)}
                >
                  <motion.div
                    whileHover={{ rotate: 5 }}
                    transition={{ duration: 0.2 }}
                  >
                    <Icon className="h-4 w-4" />
                  </motion.div>
                  <span>{item.name}</span>
                </Link>
              </motion.div>
            );
          })}

          {/* Mobile Learn Section */}
          <div className="pt-2 border-t border-border/50 mt-2">
            <div className="px-3 py-2 text-xs font-semibold text-muted-foreground uppercase tracking-wider">
              Learn
            </div>
            {learnItems.map((item, index) => {
              const Icon = item.icon;
              return (
                <motion.div
                  key={item.name}
                  initial={{ opacity: 0, x: -20 }}
                  animate={{ opacity: 1, x: 0 }}
                  transition={{
                    duration: 0.3,
                    delay: (navItems.length + index) * 0.05,
                  }}
                >
                  <Link
                    href={item.href}
                    className={cn(
                      "flex items-center space-x-2 px-3 py-2 rounded-lg text-sm font-medium transition-all duration-300 hover-glow",
                      pathname === item.href
                        ? "bg-primary/20 text-primary"
                        : "text-muted-foreground hover:text-primary hover:bg-primary/10"
                    )}
                    onClick={() => setIsOpen(false)}
                  >
                    <motion.div
                      whileHover={{ rotate: 5 }}
                      transition={{ duration: 0.2 }}
                    >
                      <Icon className="h-4 w-4" />
                    </motion.div>
                    <span>{item.name}</span>
                  </Link>
                </motion.div>
              );
            })}
          </div>
        </div>
      </motion.div>
    </motion.nav>
  );
}
