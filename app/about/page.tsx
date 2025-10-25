"use client";

import { useState } from "react";
import { motion } from "framer-motion";
import {
  Users,
  Target,
  Shield,
  Globe,
  TrendingUp,
  CheckCircle,
  ArrowRight,
  Linkedin,
  Twitter,
  Github,
  Calendar,
  Award,
  Zap,
  Heart,
  Lightbulb,
  Rocket,
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

export default function About() {
  const [activeTeamMember, setActiveTeamMember] = useState(0);

  const teamMembers = [
    {
      name: "Sameer Kumar Mishra",
      role: "Co-Founder & CEO",
      bio: "Former DeFi protocol architect with 1+ years in blockchain technology. Led development teams at major web2 platforms.",
      image: "https://avatars.githubusercontent.com/u/101687422?v=4",
      social: {
        linkedin: "https://www.linkedin.com/in/sameer-mishra-967412239/",
        twitter: "https://x.com/bytewolf_eth",
        github: "https://github.com/Itssam06",
      },
      expertise: [
        "Blockchain Architecture",
        "DeFi Protocols",
        "Team Leadership",
      ],
    },
    {
      name: "Nilesh Pathak",
      role: "Co-Founder ",
      bio: "Smart contract security expert and former Community Builder.",
      image: "https://avatars.githubusercontent.com/u/171451738?v=4",
      social: {
        linkedin: "https://www.linkedin.com/in/nilesh-pathak-334848255",
        twitter: "https://x.com/Nilesh_417",
        github: "https://github.com/NileshRP010",
      },
      expertise: ["Smart Contracts", "Security Auditing", "Solana Development"],
    },
    {
      name: "Aniket Sahu",
      role: "Head of Product",
      bio: "Product strategist with fintech background. Previously led product teams at ZeroSwap traditional investment platforms before transitioning to DeFi.",
      image: "https://avatars.githubusercontent.com/u/116273831?v=4",
      social: {
        linkedin: "https://www.linkedin.com/in/aniketsahu115/",
        twitter: "https://twitter.com/aniketsahu_115",
      },
      expertise: ["Product Strategy", "User Experience", "Financial Services"],
    },
    {
      name: "Harsh Sharma",
      role: "Head of Engineering",
      bio: "Full-stack engineer with expertise in distributed systems. Former senior engineer at major tech companies with focus on scalable infrastructure.",
      image: "https://avatars.githubusercontent.com/u/165451996?v=4",
      social: {
        linkedin: "#",
        twitter: "https://x.com/harsh_sharmaa9",
        github: "https://github.com/harshdev2909",
      },
      expertise: ["Distributed Systems", "Backend Architecture", "DevOps"],
    },
  ];

  const roadmapItems = [
    {
      quarter: "Q2 2025",
      title: "Platform Launch",
      status: "in-Progress",
      items: [
        "Core SIP functionality",
        "Marinade staking integration",
        "Basic insurance system",
        "Web interface launch",
      ],
    },
    {
      quarter: "Q3 2025",
      title: "Protocol Expansion",
      status: "in-Progress",
      items: [
        "Solend lending integration",
        "Jupiter swap integration",
        "Mobile-responsive design",
        "Advanced analytics dashboard",
      ],
    },
    {
      quarter: "Q4 2025",
      title: "DAO Governance",
      status: "in-progress",
      items: [
        "Governance token launch",
        "DAO voting mechanisms",
        "Community-driven claims",
        "Protocol parameter voting",
      ],
    },
    {
      quarter: "Q1 2026",
      title: "Advanced Features",
      status: "In-Progress",
      items: [
        "Multi-chain support",
        "Advanced strategy builder",
        "Institutional features",
        "API for developers",
      ],
    },
    {
      quarter: "Q2 2026",
      title: "Global Expansion",
      status: "In-Progress",
      items: [
        "Regulatory compliance",
        "Fiat on-ramps",
        "International markets",
        "Enterprise solutions",
      ],
    },
  ];

  const values = [
    {
      icon: Shield,
      title: "Security First",
      description:
        "We prioritize the security of user funds above all else, with multiple audits and insurance coverage.",
    },
    {
      icon: Globe,
      title: "Transparency",
      description:
        "All operations are transparent and verifiable on-chain, building trust through openness.",
    },
    {
      icon: Users,
      title: "Community Driven",
      description:
        "Our platform evolves based on community feedback and governance decisions.",
    },
    {
      icon: Lightbulb,
      title: "Innovation",
      description:
        "We continuously innovate to provide the best automated investing experience.",
    },
  ];

  return (
    <div className="min-h-screen">
      <Navigation />

      <div className="pt-20">
        {/* Hero Section */}
        <section className="py-24 bg-gradient-to-br from-background via-muted/20 to-background">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <motion.div
              className="text-center mb-16"
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8 }}
            >
              <Badge
                variant="secondary"
                className="mb-6 bg-primary/10 text-primary border-primary/20"
              >
                <Heart className="w-4 h-4 mr-2" />
                Our Story
              </Badge>
              <h1 className="text-5xl md:text-6xl font-bold mb-6">
                About
                <span className="gradient-text block">Siphere</span>
              </h1>
              <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
                We&apos;re democratizing long-term crypto investing through
                automation, transparency, and community governance. Our mission
                is to make DeFi accessible to everyone.
              </p>
            </motion.div>
          </div>
        </section>

        {/* Mission & Vision */}
        <section className="py-24">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="grid lg:grid-cols-2 gap-16 items-center">
              <motion.div
                initial={{ opacity: 0, x: -30 }}
                whileInView={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.8 }}
                viewport={{ once: true }}
              >
                <h2 className="text-4xl md:text-5xl font-bold mb-6">
                  Our Mission
                </h2>
                <p className="text-lg text-muted-foreground mb-8 leading-relaxed">
                  Siphere was born from the belief that everyone should have
                  access to sophisticated investment strategies, regardless of
                  their technical knowledge or investment size. We&apos;re
                  building the infrastructure to make systematic crypto
                  investing as simple as setting up a traditional savings
                  account.
                </p>
                <div className="space-y-4">
                  {[
                    "Democratize access to DeFi investing",
                    "Eliminate complexity through automation",
                    "Provide transparency and security",
                    "Build community-governed protocols",
                  ].map((item, index) => (
                    <motion.div
                      key={index}
                      initial={{ opacity: 0, x: 20 }}
                      whileInView={{ opacity: 1, x: 0 }}
                      transition={{ duration: 0.6, delay: index * 0.1 }}
                      viewport={{ once: true }}
                      className="flex items-center space-x-3"
                    >
                      <CheckCircle className="w-5 h-5 text-green-400 flex-shrink-0" />
                      <span>{item}</span>
                    </motion.div>
                  ))}
                </div>
              </motion.div>

              <motion.div
                initial={{ opacity: 0, x: 30 }}
                whileInView={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.8, delay: 0.2 }}
                viewport={{ once: true }}
              >
                <Card className="glass-card border-2 border-primary/20">
                  <CardHeader>
                    <div className="w-16 h-16 bg-primary/10 rounded-xl flex items-center justify-center mb-4">
                      <Target className="w-8 h-8 text-primary" />
                    </div>
                    <CardTitle className="text-2xl">Our Vision</CardTitle>
                  </CardHeader>
                  <CardContent>
                    <p className="text-muted-foreground leading-relaxed">
                      We envision a future where automated crypto investing is
                      the norm, not the exception. Where anyone can participate
                      in the growing DeFi ecosystem with confidence, knowing
                      their investments are protected, optimized, and
                      transparent.
                    </p>
                  </CardContent>
                </Card>
              </motion.div>
            </div>
          </div>
        </section>

        {/* Values Section */}
        <section className="py-24 bg-muted/10">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <motion.div
              className="text-center mb-16"
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8 }}
              viewport={{ once: true }}
            >
              <h2 className="text-4xl md:text-5xl font-bold mb-6">
                Our Values
              </h2>
              <p className="text-xl text-muted-foreground">
                The principles that guide everything we do
              </p>
            </motion.div>

            <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
              {values.map((value, index) => (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, y: 30 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.6, delay: index * 0.1 }}
                  viewport={{ once: true }}
                  whileHover={{ y: -5 }}
                >
                  <Card className="glass-card hover:bg-card/70 transition-all duration-300 h-full text-center">
                    <CardHeader>
                      <div className="w-16 h-16 bg-primary/10 rounded-xl flex items-center justify-center mx-auto mb-4">
                        <value.icon className="w-8 h-8 text-primary" />
                      </div>
                      <CardTitle className="text-xl">{value.title}</CardTitle>
                    </CardHeader>
                    <CardContent>
                      <p className="text-muted-foreground">
                        {value.description}
                      </p>
                    </CardContent>
                  </Card>
                </motion.div>
              ))}
            </div>
          </div>
        </section>

        {/* Team Section */}
        <section className="py-24">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <motion.div
              className="text-center mb-16"
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8 }}
              viewport={{ once: true }}
            >
              <h2 className="text-4xl md:text-5xl font-bold mb-6">
                Meet Our Team
              </h2>
              <p className="text-xl text-muted-foreground">
                Experienced professionals building the future of DeFi investing
              </p>
            </motion.div>

            <div className="grid lg:grid-cols-2 gap-12 items-start">
              {/* Team Grid */}
              <div className="grid md:grid-cols-2 gap-6">
                {teamMembers.map((member, index) => (
                  <motion.div
                    key={index}
                    initial={{ opacity: 0, y: 30 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.6, delay: index * 0.1 }}
                    viewport={{ once: true }}
                  >
                    <Card
                      className={`glass-card cursor-pointer transition-all duration-300 ${
                        activeTeamMember === index
                          ? "border-primary/50 bg-primary/5"
                          : "hover:border-primary/30"
                      }`}
                      onClick={() => setActiveTeamMember(index)}
                    >
                      <CardHeader className="text-center">
                        <div className="w-24 h-24 mx-auto mb-4 rounded-full overflow-hidden">
                          <img
                            src={member.image}
                            alt={member.name}
                            className="w-full h-full object-cover"
                          />
                        </div>
                        <CardTitle className="text-lg">{member.name}</CardTitle>
                        <CardDescription>{member.role}</CardDescription>
                      </CardHeader>
                    </Card>
                  </motion.div>
                ))}
              </div>

              {/* Team Member Details */}
              <motion.div
                key={activeTeamMember}
                initial={{ opacity: 0, x: 30 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.6 }}
                className="lg:sticky lg:top-24"
              >
                <Card className="glass-card border-2 border-primary/20">
                  <CardHeader>
                    <div className="flex items-center space-x-4 mb-4">
                      <div className="w-16 h-16 rounded-full overflow-hidden">
                        <img
                          src={teamMembers[activeTeamMember].image}
                          alt={teamMembers[activeTeamMember].name}
                          className="w-full h-full object-cover"
                        />
                      </div>
                      <div>
                        <CardTitle className="text-xl">
                          {teamMembers[activeTeamMember].name}
                        </CardTitle>
                        <CardDescription className="text-lg">
                          {teamMembers[activeTeamMember].role}
                        </CardDescription>
                      </div>
                    </div>
                  </CardHeader>
                  <CardContent className="space-y-6">
                    <p className="text-muted-foreground leading-relaxed">
                      {teamMembers[activeTeamMember].bio}
                    </p>

                    <div>
                      <h4 className="font-semibold mb-3">Expertise</h4>
                      <div className="flex flex-wrap gap-2">
                        {teamMembers[activeTeamMember].expertise.map(
                          (skill, index) => (
                            <Badge
                              key={index}
                              variant="secondary"
                              className="bg-primary/10 text-primary"
                            >
                              {skill}
                            </Badge>
                          )
                        )}
                      </div>
                    </div>

                    <div>
                      <h4 className="font-semibold mb-3">Connect</h4>
                      <div className="flex space-x-4">
                        {teamMembers[activeTeamMember].social.linkedin && (
                          <Link
                            href={
                              teamMembers[activeTeamMember].social.linkedin!
                            }
                            className="text-muted-foreground hover:text-primary transition-colors"
                          >
                            <Linkedin className="w-5 h-5" />
                          </Link>
                        )}
                        {teamMembers[activeTeamMember].social.twitter && (
                          <Link
                            href={teamMembers[activeTeamMember].social.twitter!}
                            className="text-muted-foreground hover:text-primary transition-colors"
                          >
                            <Twitter className="w-5 h-5" />
                          </Link>
                        )}
                        {teamMembers[activeTeamMember].social.github && (
                          <Link
                            href={teamMembers[activeTeamMember].social.github!}
                            className="text-muted-foreground hover:text-primary transition-colors"
                          >
                            <Github className="w-5 h-5" />
                          </Link>
                        )}
                      </div>
                    </div>
                  </CardContent>
                </Card>
              </motion.div>
            </div>
          </div>
        </section>

        {/* Roadmap Section */}
        <section className="py-24 bg-muted/10">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <motion.div
              className="text-center mb-16"
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8 }}
              viewport={{ once: true }}
            >
              <h2 className="text-4xl md:text-5xl font-bold mb-6">
                Our Roadmap
              </h2>
              <p className="text-xl text-muted-foreground">
                The journey ahead for Siphere
              </p>
            </motion.div>

            <div className="relative">
              {/* Timeline Line */}
              <div className="absolute left-1/2 transform -translate-x-1/2 w-1 h-full bg-gradient-to-b from-green-400 via-primary to-muted rounded-full hidden lg:block" />

              <div className="space-y-16">
                {roadmapItems.map((item, index) => (
                  <motion.div
                    key={index}
                    initial={{ opacity: 0, y: 30 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.8, delay: index * 0.1 }}
                    viewport={{ once: true }}
                    className={`flex items-center ${
                      index % 2 === 1 ? "lg:flex-row-reverse" : ""
                    }`}
                  >
                    <div
                      className={`lg:w-1/2 ${
                        index % 2 === 1 ? "lg:pl-16" : "lg:pr-16"
                      }`}
                    >
                      <Card className="glass-card border-2 hover:border-primary/30 transition-colors">
                        <CardHeader>
                          <div className="flex items-center justify-between mb-4">
                            <Badge
                              variant="secondary"
                              className="bg-primary/10 text-primary"
                            >
                              {item.quarter}
                            </Badge>
                            <Badge
                              variant={
                                item.status === "completed"
                                  ? "secondary"
                                  : item.status === "in-progress"
                                  ? "default"
                                  : "outline"
                              }
                              className={
                                item.status === "completed"
                                  ? "bg-green-500/10 text-green-400"
                                  : item.status === "in-progress"
                                  ? "bg-primary/10 text-primary"
                                  : ""
                              }
                            >
                              {item.status === "completed"
                                ? "Completed"
                                : item.status === "in-progress"
                                ? "In Progress"
                                : "In Progress"}
                            </Badge>
                          </div>
                          <CardTitle className="text-xl">
                            {item.title}
                          </CardTitle>
                        </CardHeader>
                        <CardContent>
                          <ul className="space-y-2">
                            {item.items.map((feature, featureIndex) => (
                              <li
                                key={featureIndex}
                                className="flex items-center space-x-2 text-sm"
                              >
                                {item.status === "completed" ? (
                                  <CheckCircle className="w-4 h-4 text-green-400" />
                                ) : item.status === "in-progress" ? (
                                  <Zap className="w-4 h-4 text-primary" />
                                ) : (
                                  <Calendar className="w-4 h-4 text-muted-foreground" />
                                )}
                                <span
                                  className={
                                    item.status === "completed"
                                      ? "text-foreground"
                                      : "text-muted-foreground"
                                  }
                                >
                                  {feature}
                                </span>
                              </li>
                            ))}
                          </ul>
                        </CardContent>
                      </Card>
                    </div>

                    {/* Timeline Node */}
                    <div className="hidden lg:block relative">
                      <div
                        className={`w-6 h-6 rounded-full border-4 border-background shadow-lg ${
                          item.status === "completed"
                            ? "bg-green-400"
                            : item.status === "in-progress"
                            ? "bg-primary"
                            : "bg-muted"
                        }`}
                      />
                    </div>

                    <div className="lg:w-1/2" />
                  </motion.div>
                ))}
              </div>
            </div>
          </div>
        </section>

        {/* CTA Section */}
        <section className="py-24">
          <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8 }}
              viewport={{ once: true }}
            >
              <h2 className="text-4xl md:text-5xl font-bold mb-6">
                Join Our Mission
              </h2>
              <p className="text-xl text-muted-foreground mb-8">
                Be part of the future of automated DeFi investing. Start your
                journey with Siphere today.
              </p>
              <div className="flex flex-col sm:flex-row gap-4 justify-center">
                <Button
                  size="lg"
                  className="bg-primary hover:bg-primary/90"
                  asChild
                >
                  <Link href="/create-sip" className="flex items-center">
                    Start Investing
                    <ArrowRight className="ml-2 h-5 w-5" />
                  </Link>
                </Button>
                <Button size="lg" variant="outline" asChild>
                  <Link href="/how-it-works" className="flex items-center">
                    Learn More
                    <Rocket className="ml-2 h-5 w-5" />
                  </Link>
                </Button>
              </div>
            </motion.div>
          </div>
        </section>
      </div>
    </div>
  );
}
