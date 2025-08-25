import { motion, AnimatePresence } from "framer-motion";
import { useState } from "react";
import {
  Crown,
  Star,
  Zap,
  Shield,
  Users,
  Calendar,
  Trophy,
  Rocket,
  Check,
  Sparkles,
  DollarSign,
  Clock,
  Target,
  Heart,
  Music,
  Camera,
  MapPin,
  TrendingUp,
  Award,
  Flame,
  Gauge,
  Lock,
  Unlock,
} from "lucide-react";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Switch } from "@/components/ui/switch";
import { Progress } from "@/components/ui/progress";
import { GenZParticles } from "@/components/GenZParticles";
import { AnimatedCard } from "@/components/AnimatedEffects";

const licenseTypes = [
  {
    id: "starter",
    name: "Starter Club",
    icon: Users,
    price: "Free",
    monthlyPrice: 0,
    color: "from-aesthetic-electric to-aesthetic-cyan",
    description: "Perfect for small gatherings and casual events",
    features: [
      "Up to 50 attendees per event",
      "Basic event creation tools",
      "Standard analytics",
      "Community support",
      "Mobile app access",
      "Social media integration",
    ],
    limitations: [
      "No premium themes",
      "Limited customization",
      "Basic support only",
    ],
    popular: false,
  },
  {
    id: "professional",
    name: "Professional Club",
    icon: Crown,
    price: "$49/month",
    monthlyPrice: 49,
    color: "from-aesthetic-violet to-aesthetic-electric",
    description: "Ideal for serious event organizers and small venues",
    features: [
      "Up to 500 attendees per event",
      "Advanced event creation tools",
      "Detailed analytics & insights",
      "Priority customer support",
      "Custom branding options",
      "Payment processing integration",
      "Email marketing tools",
      "VIP guest management",
      "Live streaming capabilities",
    ],
    limitations: ["No white-label solution", "Limited API access"],
    popular: true,
  },
  {
    id: "premium",
    name: "Premium Club",
    icon: Star,
    price: "$149/month",
    monthlyPrice: 149,
    color: "from-aesthetic-magenta to-aesthetic-violet",
    description: "Advanced features for established venues and brands",
    features: [
      "Unlimited attendees",
      "Full-featured event platform",
      "Advanced analytics & reporting",
      "24/7 priority support",
      "Complete white-label solution",
      "Full API access",
      "Multi-location management",
      "Advanced security features",
      "Custom integrations",
      "Dedicated account manager",
      "Marketing automation",
    ],
    limitations: [],
    popular: false,
  },
  {
    id: "enterprise",
    name: "Enterprise Club",
    icon: Trophy,
    price: "Custom",
    monthlyPrice: 0,
    color: "from-aesthetic-cyan to-aesthetic-magenta",
    description: "Tailored solutions for large organizations and enterprises",
    features: [
      "Everything in Premium",
      "Custom development",
      "On-premise deployment option",
      "Advanced compliance features",
      "Multi-tenant architecture",
      "Custom SLA agreements",
      "Dedicated infrastructure",
      "Training & onboarding",
      "Custom reporting dashboards",
      "Global support team",
    ],
    limitations: [],
    popular: false,
  },
];

const addOns = [
  {
    id: "analytics-pro",
    name: "Analytics Pro",
    icon: TrendingUp,
    price: "$19/month",
    description: "Advanced analytics and business intelligence",
    features: [
      "Real-time attendance tracking",
      "Revenue analytics",
      "Customer behavior insights",
      "Custom report builder",
      "Data export capabilities",
    ],
  },
  {
    id: "marketing-suite",
    name: "Marketing Suite",
    icon: Target,
    price: "$29/month",
    description: "Complete marketing automation platform",
    features: [
      "Email campaign management",
      "Social media scheduling",
      "Influencer outreach tools",
      "Automated follow-ups",
      "A/B testing capabilities",
    ],
  },
  {
    id: "premium-support",
    name: "Premium Support",
    icon: Heart,
    price: "$39/month",
    description: "White-glove support and consultation",
    features: [
      "Dedicated support agent",
      "Phone support priority",
      "Event planning consultation",
      "Marketing strategy sessions",
      "Technical implementation help",
    ],
  },
];

const clubStats = [
  {
    label: "Active Clubs",
    value: "2,847",
    icon: Users,
    color: "text-aesthetic-violet",
  },
  {
    label: "Events Created",
    value: "125K+",
    icon: Calendar,
    color: "text-aesthetic-electric",
  },
  {
    label: "Success Rate",
    value: "98.2%",
    icon: Trophy,
    color: "text-aesthetic-cyan",
  },
  {
    label: "Revenue Generated",
    value: "$12.8M",
    icon: DollarSign,
    color: "text-aesthetic-magenta",
  },
];

export default function AdvancedLicenses() {
  const [selectedLicense, setSelectedLicense] = useState("professional");
  const [selectedAddOns, setSelectedAddOns] = useState<string[]>([]);
  const [billingCycle, setBillingCycle] = useState<"monthly" | "yearly">(
    "monthly",
  );

  const handleAddOnToggle = (addOnId: string) => {
    setSelectedAddOns((prev) =>
      prev.includes(addOnId)
        ? prev.filter((id) => id !== addOnId)
        : [...prev, addOnId],
    );
  };

  const calculateTotal = () => {
    const selectedLicenseData = licenseTypes.find(
      (l) => l.id === selectedLicense,
    );
    const licensePrice = selectedLicenseData?.monthlyPrice || 0;
    const addOnPrice = selectedAddOns.reduce((total, addOnId) => {
      const addOn = addOns.find((a) => a.id === addOnId);
      const price = parseInt(
        addOn?.price.replace("$", "").replace("/month", "") || "0",
      );
      return total + price;
    }, 0);

    const monthly = licensePrice + addOnPrice;
    return billingCycle === "yearly" ? monthly * 12 * 0.8 : monthly; // 20% discount for yearly
  };

  return (
    <div className="min-h-screen bg-gradient-to-br from-aesthetic-violet/10 via-aesthetic-electric/10 to-aesthetic-cyan/10">
      <GenZParticles />

      {/* Hero Section */}
      <div className="relative bg-gradient-to-br from-aesthetic-violet via-aesthetic-electric to-aesthetic-cyan overflow-hidden">
        <div className="absolute inset-0 overflow-hidden">
          {[...Array(15)].map((_, i) => (
            <motion.div
              key={i}
              className="absolute rounded-full bg-white/10"
              style={{
                left: `${Math.random() * 100}%`,
                top: `${Math.random() * 100}%`,
                width: `${10 + Math.random() * 30}px`,
                height: `${10 + Math.random() * 30}px`,
              }}
              animate={{
                y: [0, -20, 0],
                opacity: [0.3, 0.8, 0.3],
                scale: [1, 1.2, 1],
              }}
              transition={{
                duration: 3 + Math.random() * 4,
                repeat: Infinity,
                delay: Math.random() * 2,
              }}
            />
          ))}
        </div>

        <div className="relative max-w-7xl mx-auto px-6 py-20 text-center">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
          >
            <motion.h1
              className="text-6xl lg:text-7xl font-black text-white mb-6 leading-tight"
              animate={{
                textShadow: [
                  "0 0 20px rgba(255,255,255,0.5)",
                  "0 0 40px rgba(255,255,255,0.8)",
                  "0 0 20px rgba(255,255,255,0.5)",
                ],
              }}
              transition={{
                duration: 2,
                repeat: Infinity,
              }}
            >
              CLUB
              <br />
              <span className="bg-gradient-to-r from-aesthetic-cyan to-white bg-clip-text text-transparent">
                LICENSES
              </span>
              <br />
              🏆 UNLOCK POWER!
            </motion.h1>

            <p className="text-2xl text-white/90 mb-8 leading-relaxed max-w-4xl mx-auto">
              Take your event business to the{" "}
              <span className="font-bold text-aesthetic-cyan">next level</span>{" "}
              with our advanced club licensing system. Unlock premium features,
              advanced analytics, and enterprise-grade tools!
            </p>

            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <motion.div
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
              >
                <Button className="bg-gradient-to-r from-aesthetic-cyan to-white hover:from-white hover:to-aesthetic-cyan text-black px-12 py-6 rounded-3xl text-xl font-black shadow-2xl">
                  🚀 START FREE TRIAL
                </Button>
              </motion.div>

              <motion.div
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
              >
                <Button
                  variant="outline"
                  className="border-3 border-white/50 text-white hover:bg-white/10 px-8 py-6 rounded-3xl text-lg font-bold backdrop-blur-sm"
                >
                  📊 View Demo
                </Button>
              </motion.div>
            </div>
          </motion.div>
        </div>
      </div>

      {/* Stats Section */}
      <div className="max-w-7xl mx-auto px-6 py-16">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.3 }}
          className="text-center mb-12"
        >
          <h2 className="text-4xl font-black bg-gradient-to-r from-aesthetic-violet to-aesthetic-cyan bg-clip-text text-transparent mb-4">
            Trusted by Event Professionals 💪
          </h2>
          <p className="text-xl text-gray-700 dark:text-gray-300">
            Join thousands of successful clubs and venues worldwide
          </p>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 mb-16">
          {clubStats.map((stat, index) => (
            <motion.div
              key={stat.label}
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.4 + index * 0.1 }}
              whileHover={{ y: -5, scale: 1.02 }}
            >
              <Card className="bg-white/80 dark:bg-gray-800/80 backdrop-blur-sm rounded-3xl border-0 shadow-xl">
                <CardContent className="p-6 text-center">
                  <motion.div
                    className={`inline-flex items-center justify-center w-16 h-16 bg-gradient-to-br from-aesthetic-violet to-aesthetic-cyan rounded-2xl mb-4 shadow-lg`}
                    whileHover={{ rotate: 5, scale: 1.1 }}
                  >
                    <stat.icon className="w-8 h-8 text-white" />
                  </motion.div>
                  <h3 className={`text-3xl font-black ${stat.color} mb-2`}>
                    {stat.value}
                  </h3>
                  <p className="text-gray-600 dark:text-gray-400">
                    {stat.label}
                  </p>
                </CardContent>
              </Card>
            </motion.div>
          ))}
        </div>

        {/* Billing Toggle */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.6 }}
          className="flex items-center justify-center gap-4 mb-12"
        >
          <span
            className={`font-semibold ${billingCycle === "monthly" ? "text-aesthetic-violet" : "text-gray-500"}`}
          >
            Monthly
          </span>
          <Switch
            checked={billingCycle === "yearly"}
            onCheckedChange={(checked) =>
              setBillingCycle(checked ? "yearly" : "monthly")
            }
            className="data-[state=checked]:bg-aesthetic-violet"
          />
          <span
            className={`font-semibold ${billingCycle === "yearly" ? "text-aesthetic-violet" : "text-gray-500"}`}
          >
            Yearly
          </span>
          {billingCycle === "yearly" && (
            <Badge className="bg-gradient-to-r from-aesthetic-magenta to-aesthetic-electric text-white ml-2">
              Save 20%!
            </Badge>
          )}
        </motion.div>

        {/* License Plans */}
        <div className="grid grid-cols-1 lg:grid-cols-2 xl:grid-cols-4 gap-6 mb-16">
          {licenseTypes.map((license, index) => (
            <motion.div
              key={license.id}
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.7 + index * 0.1 }}
              whileHover={{ y: -8, scale: 1.02 }}
              className="relative"
            >
              {license.popular && (
                <div className="absolute -top-4 left-1/2 transform -translate-x-1/2 z-10">
                  <Badge className="bg-gradient-to-r from-aesthetic-magenta to-aesthetic-electric text-white px-4 py-2 rounded-full font-bold">
                    🔥 Most Popular
                  </Badge>
                </div>
              )}

              <AnimatedCard
                effects={["sparkles", "floating"]}
                intensity="medium"
                className="h-full"
              >
                <Card
                  className={`h-full rounded-3xl border-2 transition-all duration-300 cursor-pointer ${
                    selectedLicense === license.id
                      ? "border-aesthetic-violet bg-gradient-to-br from-aesthetic-violet/10 to-aesthetic-cyan/10 shadow-2xl"
                      : "border-gray-200 hover:border-aesthetic-electric/50 hover:shadow-xl bg-white/90 dark:bg-gray-800/90"
                  }`}
                  onClick={() => setSelectedLicense(license.id)}
                >
                  <CardHeader className="text-center pb-4">
                    <motion.div
                      className={`w-20 h-20 bg-gradient-to-br ${license.color} rounded-3xl flex items-center justify-center mx-auto mb-4 shadow-lg`}
                      whileHover={{ rotate: 10, scale: 1.1 }}
                    >
                      <license.icon className="w-10 h-10 text-white" />
                    </motion.div>

                    <CardTitle className="text-2xl font-black text-gray-900 dark:text-white mb-2">
                      {license.name}
                    </CardTitle>

                    <div className="text-center mb-4">
                      <div className="text-4xl font-black bg-gradient-to-r from-aesthetic-violet to-aesthetic-cyan bg-clip-text text-transparent">
                        {license.price}
                      </div>
                      {billingCycle === "yearly" &&
                        license.monthlyPrice > 0 && (
                          <div className="text-sm text-gray-500 line-through">
                            ${license.monthlyPrice}/month
                          </div>
                        )}
                    </div>

                    <p className="text-gray-600 dark:text-gray-400 text-sm">
                      {license.description}
                    </p>
                  </CardHeader>

                  <CardContent className="space-y-4">
                    <div className="space-y-3">
                      {license.features.map((feature, idx) => (
                        <div key={idx} className="flex items-start gap-3">
                          <Check className="w-5 h-5 text-aesthetic-electric mt-0.5 flex-shrink-0" />
                          <span className="text-sm text-gray-700 dark:text-gray-300">
                            {feature}
                          </span>
                        </div>
                      ))}
                    </div>

                    {license.limitations.length > 0 && (
                      <div className="space-y-2 pt-4 border-t border-gray-200 dark:border-gray-600">
                        <p className="text-xs font-semibold text-gray-500 uppercase tracking-wide">
                          Limitations:
                        </p>
                        {license.limitations.map((limitation, idx) => (
                          <div key={idx} className="flex items-start gap-3">
                            <Lock className="w-4 h-4 text-gray-400 mt-0.5 flex-shrink-0" />
                            <span className="text-xs text-gray-500">
                              {limitation}
                            </span>
                          </div>
                        ))}
                      </div>
                    )}

                    <motion.div
                      whileHover={{ scale: 1.02 }}
                      whileTap={{ scale: 0.98 }}
                      className="pt-4"
                    >
                      <Button
                        className={`w-full rounded-2xl font-bold py-3 ${
                          selectedLicense === license.id
                            ? "bg-gradient-to-r from-aesthetic-violet to-aesthetic-cyan text-white"
                            : "bg-gray-100 hover:bg-gray-200 text-gray-800"
                        }`}
                      >
                        {license.price === "Custom"
                          ? "Contact Sales"
                          : "Select Plan"}
                      </Button>
                    </motion.div>
                  </CardContent>
                </Card>
              </AnimatedCard>
            </motion.div>
          ))}
        </div>

        {/* Add-ons Section */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 1 }}
          className="mb-16"
        >
          <h3 className="text-3xl font-black bg-gradient-to-r from-aesthetic-violet to-aesthetic-cyan bg-clip-text text-transparent text-center mb-8">
            🔥 Power-Up Your License
          </h3>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {addOns.map((addOn, index) => (
              <motion.div
                key={addOn.id}
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 1.1 + index * 0.1 }}
                whileHover={{ y: -5, scale: 1.02 }}
              >
                <Card
                  className={`rounded-3xl border-2 transition-all duration-300 cursor-pointer ${
                    selectedAddOns.includes(addOn.id)
                      ? "border-aesthetic-electric bg-gradient-to-br from-aesthetic-electric/10 to-aesthetic-cyan/10 shadow-xl"
                      : "border-gray-200 hover:border-aesthetic-violet/50 hover:shadow-lg bg-white/90 dark:bg-gray-800/90"
                  }`}
                  onClick={() => handleAddOnToggle(addOn.id)}
                >
                  <CardContent className="p-6">
                    <div className="flex items-center justify-between mb-4">
                      <motion.div
                        className={`w-12 h-12 bg-gradient-to-br from-aesthetic-electric to-aesthetic-cyan rounded-2xl flex items-center justify-center shadow-lg`}
                        whileHover={{ rotate: 10 }}
                      >
                        <addOn.icon className="w-6 h-6 text-white" />
                      </motion.div>
                      <Switch
                        checked={selectedAddOns.includes(addOn.id)}
                        onCheckedChange={() => handleAddOnToggle(addOn.id)}
                        className="data-[state=checked]:bg-aesthetic-electric"
                      />
                    </div>

                    <h4 className="text-xl font-bold text-gray-900 dark:text-white mb-2">
                      {addOn.name}
                    </h4>

                    <div className="text-2xl font-black text-aesthetic-electric mb-3">
                      {addOn.price}
                    </div>

                    <p className="text-gray-600 dark:text-gray-400 text-sm mb-4">
                      {addOn.description}
                    </p>

                    <div className="space-y-2">
                      {addOn.features.map((feature, idx) => (
                        <div key={idx} className="flex items-start gap-2">
                          <Check className="w-4 h-4 text-aesthetic-electric mt-0.5 flex-shrink-0" />
                          <span className="text-xs text-gray-600 dark:text-gray-400">
                            {feature}
                          </span>
                        </div>
                      ))}
                    </div>
                  </CardContent>
                </Card>
              </motion.div>
            ))}
          </div>
        </motion.div>

        {/* Total Cost Summary */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 1.3 }}
          className="max-w-2xl mx-auto"
        >
          <Card className="bg-gradient-to-br from-aesthetic-violet/10 to-aesthetic-cyan/10 backdrop-blur-sm rounded-3xl border-0 shadow-2xl">
            <CardContent className="p-8">
              <h3 className="text-2xl font-black text-center mb-6 bg-gradient-to-r from-aesthetic-violet to-aesthetic-cyan bg-clip-text text-transparent">
                💰 Your Investment Summary
              </h3>

              <div className="space-y-4 mb-6">
                <div className="flex justify-between items-center">
                  <span className="font-semibold text-gray-700 dark:text-gray-300">
                    {licenseTypes.find((l) => l.id === selectedLicense)?.name}{" "}
                    License
                  </span>
                  <span className="font-bold text-aesthetic-violet">
                    {licenseTypes.find((l) => l.id === selectedLicense)?.price}
                  </span>
                </div>

                {selectedAddOns.map((addOnId) => {
                  const addOn = addOns.find((a) => a.id === addOnId);
                  return addOn ? (
                    <div
                      key={addOnId}
                      className="flex justify-between items-center"
                    >
                      <span className="text-gray-600 dark:text-gray-400">
                        {addOn.name}
                      </span>
                      <span className="font-semibold text-aesthetic-electric">
                        {addOn.price}
                      </span>
                    </div>
                  ) : null;
                })}

                {billingCycle === "yearly" && calculateTotal() > 0 && (
                  <div className="flex justify-between items-center text-green-600">
                    <span>Yearly Discount (20%)</span>
                    <span>-${((calculateTotal() / 0.8) * 0.2).toFixed(0)}</span>
                  </div>
                )}
              </div>

              <div className="border-t border-gray-200 dark:border-gray-600 pt-4 mb-6">
                <div className="flex justify-between items-center">
                  <span className="text-xl font-black text-gray-900 dark:text-white">
                    Total {billingCycle === "yearly" ? "per year" : "per month"}
                    :
                  </span>
                  <span className="text-3xl font-black bg-gradient-to-r from-aesthetic-violet to-aesthetic-cyan bg-clip-text text-transparent">
                    {calculateTotal() > 0
                      ? `$${calculateTotal().toFixed(0)}`
                      : "Custom"}
                  </span>
                </div>
              </div>

              <div className="space-y-3">
                <motion.div
                  whileHover={{ scale: 1.02 }}
                  whileTap={{ scale: 0.98 }}
                >
                  <Button className="w-full bg-gradient-to-r from-aesthetic-violet via-aesthetic-electric to-aesthetic-cyan hover:from-aesthetic-electric hover:via-aesthetic-cyan hover:to-aesthetic-violet text-white py-4 rounded-2xl text-lg font-bold shadow-xl">
                    🚀 Start Free 14-Day Trial
                  </Button>
                </motion.div>

                <motion.div
                  whileHover={{ scale: 1.02 }}
                  whileTap={{ scale: 0.98 }}
                >
                  <Button
                    variant="outline"
                    className="w-full border-2 border-aesthetic-violet text-aesthetic-violet hover:bg-aesthetic-violet hover:text-white py-4 rounded-2xl font-bold"
                  >
                    💬 Talk to Sales
                  </Button>
                </motion.div>
              </div>

              <p className="text-center text-xs text-gray-500 mt-4">
                No credit card required • Cancel anytime • Full feature access
                during trial
              </p>
            </CardContent>
          </Card>
        </motion.div>
      </div>
    </div>
  );
}
