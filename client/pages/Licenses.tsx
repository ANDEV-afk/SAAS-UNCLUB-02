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
  X,
  AlertCircle,
  CheckCircle,
  Settings,
  UserCheck,
  Eye,
  Edit,
  Share2,
  BarChart3,
  Megaphone,
  Building,
  Globe,
} from "lucide-react";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Switch } from "@/components/ui/switch";
import { Progress } from "@/components/ui/progress";
import { GenZParticles } from "@/components/GenZParticles";
import { AnimatedCard } from "@/components/AnimatedEffects";
import {
  Dialog,
  DialogContent,
  DialogTrigger,
  DialogHeader,
  DialogTitle,
  DialogDescription,
} from "@/components/ui/dialog";
import { Separator } from "@/components/ui/separator";

// Club Manager Permission Licenses
const managerLicenses = [
  {
    id: "club-starter",
    name: "Club Starter",
    icon: Users,
    price: "FREE",
    monthlyPrice: 0,
    color: "from-aesthetic-electric to-aesthetic-cyan",
    description: "Perfect for small club managers getting started",
    badge: "Most Popular",
    badgeColor: "bg-green-500",
    permissions: [
      {
        id: "basic-events",
        name: "Create Basic Events",
        granted: true,
        description: "Host up to 5 events per month",
      },
      {
        id: "member-management",
        name: "Member Management",
        granted: true,
        description: "Manage up to 50 club members",
      },
      {
        id: "basic-analytics",
        name: "Basic Analytics",
        granted: true,
        description: "View event attendance and engagement metrics",
      },
      {
        id: "social-sharing",
        name: "Social Media Sharing",
        granted: true,
        description: "Share events on social platforms",
      },
      {
        id: "mobile-access",
        name: "Mobile App Access",
        granted: true,
        description: "Manage club on the go",
      },
      {
        id: "premium-themes",
        name: "Premium Themes",
        granted: false,
        description: "Access to custom branding options",
      },
      {
        id: "advanced-analytics",
        name: "Advanced Analytics",
        granted: false,
        description: "Detailed insights and reports",
      },
      {
        id: "payment-processing",
        name: "Payment Processing",
        granted: false,
        description: "Accept payments for events",
      },
      {
        id: "api-access",
        name: "API Access",
        granted: false,
        description: "Integrate with third-party tools",
      },
    ],
    limits: {
      events: "5/month",
      members: "50",
      storage: "1GB",
      support: "Community",
    },
    features: [
      "🎉 Host up to 5 events monthly",
      "👥 Manage 50 club members",
      "📊 Basic event analytics",
      "📱 Mobile app access",
      "🔗 Social media integration",
      "💬 Community support",
    ],
  },
  {
    id: "club-professional",
    name: "Club Professional",
    icon: Crown,
    price: "$29/month",
    monthlyPrice: 29,
    color: "from-aesthetic-violet to-aesthetic-electric",
    description: "Advanced permissions for serious club managers",
    badge: "Recommended",
    badgeColor: "bg-purple-500",
    permissions: [
      {
        id: "basic-events",
        name: "Create Basic Events",
        granted: true,
        description: "Host unlimited events per month",
      },
      {
        id: "member-management",
        name: "Member Management",
        granted: true,
        description: "Manage up to 500 club members",
      },
      {
        id: "basic-analytics",
        name: "Basic Analytics",
        granted: true,
        description: "View detailed event metrics",
      },
      {
        id: "social-sharing",
        name: "Social Media Sharing",
        granted: true,
        description: "Advanced social media tools",
      },
      {
        id: "mobile-access",
        name: "Mobile App Access",
        granted: true,
        description: "Full mobile functionality",
      },
      {
        id: "premium-themes",
        name: "Premium Themes",
        granted: true,
        description: "Custom branding and themes",
      },
      {
        id: "advanced-analytics",
        name: "Advanced Analytics",
        granted: true,
        description: "Comprehensive insights dashboard",
      },
      {
        id: "payment-processing",
        name: "Payment Processing",
        granted: true,
        description: "Accept payments with 2.9% fee",
      },
      {
        id: "priority-support",
        name: "Priority Support",
        granted: true,
        description: "24/7 priority customer support",
      },
      {
        id: "api-access",
        name: "API Access",
        granted: false,
        description: "Limited API access",
      },
      {
        id: "white-label",
        name: "White Label",
        granted: false,
        description: "Remove UnClub branding",
      },
    ],
    limits: {
      events: "Unlimited",
      members: "500",
      storage: "10GB",
      support: "Priority 24/7",
    },
    features: [
      "🚀 Unlimited events",
      "👥 Manage 500 members",
      "💳 Payment processing",
      "🎨 Custom branding",
      "📈 Advanced analytics",
      "🔥 Priority support",
    ],
  },
  {
    id: "club-enterprise",
    name: "Club Enterprise",
    icon: Building,
    price: "$99/month",
    monthlyPrice: 99,
    color: "from-aesthetic-magenta to-aesthetic-violet",
    description: "Full permissions for large organizations and venues",
    badge: "Enterprise",
    badgeColor: "bg-gold-500",
    permissions: [
      {
        id: "basic-events",
        name: "Create Basic Events",
        granted: true,
        description: "Unlimited events with premium features",
      },
      {
        id: "member-management",
        name: "Member Management",
        granted: true,
        description: "Unlimited member management",
      },
      {
        id: "basic-analytics",
        name: "Basic Analytics",
        granted: true,
        description: "Advanced reporting suite",
      },
      {
        id: "social-sharing",
        name: "Social Media Sharing",
        granted: true,
        description: "Automated marketing campaigns",
      },
      {
        id: "mobile-access",
        name: "Mobile App Access",
        granted: true,
        description: "White-label mobile app",
      },
      {
        id: "premium-themes",
        name: "Premium Themes",
        granted: true,
        description: "Unlimited custom designs",
      },
      {
        id: "advanced-analytics",
        name: "Advanced Analytics",
        granted: true,
        description: "AI-powered insights",
      },
      {
        id: "payment-processing",
        name: "Payment Processing",
        granted: true,
        description: "Accept payments with 1.9% fee",
      },
      {
        id: "priority-support",
        name: "Priority Support",
        granted: true,
        description: "Dedicated account manager",
      },
      {
        id: "api-access",
        name: "API Access",
        granted: true,
        description: "Full API access and webhooks",
      },
      {
        id: "white-label",
        name: "White Label",
        granted: true,
        description: "Complete white-label solution",
      },
      {
        id: "multi-location",
        name: "Multi-location",
        granted: true,
        description: "Manage multiple venues",
      },
    ],
    limits: {
      events: "Unlimited",
      members: "Unlimited",
      storage: "100GB",
      support: "Dedicated Manager",
    },
    features: [
      "🏢 Multi-location management",
      "👥 Unlimited everything",
      "💰 Reduced payment fees",
      "🏷️ White-label solution",
      "🤖 AI-powered insights",
      "👨‍💼 Dedicated manager",
    ],
  },
  {
    id: "club-global",
    name: "Club Global",
    icon: Globe,
    price: "Custom",
    monthlyPrice: 0,
    color: "from-aesthetic-cyan to-aesthetic-magenta",
    description: "Enterprise-grade permissions for global operations",
    badge: "Custom",
    badgeColor: "bg-gradient-to-r from-purple-500 to-pink-500",
    permissions: [
      {
        id: "basic-events",
        name: "Create Basic Events",
        granted: true,
        description: "Global event management platform",
      },
      {
        id: "member-management",
        name: "Member Management",
        granted: true,
        description: "Multi-tenant member systems",
      },
      {
        id: "basic-analytics",
        name: "Basic Analytics",
        granted: true,
        description: "Enterprise reporting suite",
      },
      {
        id: "social-sharing",
        name: "Social Media Sharing",
        granted: true,
        description: "Global marketing automation",
      },
      {
        id: "mobile-access",
        name: "Mobile App Access",
        granted: true,
        description: "Custom mobile applications",
      },
      {
        id: "premium-themes",
        name: "Premium Themes",
        granted: true,
        description: "Unlimited design flexibility",
      },
      {
        id: "advanced-analytics",
        name: "Advanced Analytics",
        granted: true,
        description: "Custom analytics solutions",
      },
      {
        id: "payment-processing",
        name: "Payment Processing",
        granted: true,
        description: "Global payment solutions",
      },
      {
        id: "priority-support",
        name: "Priority Support",
        granted: true,
        description: "Global support team",
      },
      {
        id: "api-access",
        name: "API Access",
        granted: true,
        description: "Enterprise API suite",
      },
      {
        id: "white-label",
        name: "White Label",
        granted: true,
        description: "Complete platform customization",
      },
      {
        id: "multi-location",
        name: "Multi-location",
        granted: true,
        description: "Global venue network",
      },
      {
        id: "compliance",
        name: "Compliance & Security",
        granted: true,
        description: "SOC2, GDPR, HIPAA compliance",
      },
    ],
    limits: {
      events: "Unlimited",
      members: "Unlimited",
      storage: "Unlimited",
      support: "Global Team",
    },
    features: [
      "🌍 Global operations",
      "🔒 Enterprise security",
      "⚡ Custom development",
      "🏛️ Compliance ready",
      "🎯 Dedicated solutions",
      "🌟 Everything included",
    ],
  },
];

const LicenseModal = ({
  license,
  isOpen,
  onClose,
}: {
  license: (typeof managerLicenses)[0];
  isOpen: boolean;
  onClose: () => void;
}) => {
  const [selectedPermissions, setSelectedPermissions] = useState<string[]>(
    license.permissions.filter((p) => p.granted).map((p) => p.id),
  );

  const togglePermission = (permissionId: string) => {
    const permission = license.permissions.find((p) => p.id === permissionId);
    if (!permission?.granted) return; // Can't toggle denied permissions

    setSelectedPermissions((prev) =>
      prev.includes(permissionId)
        ? prev.filter((id) => id !== permissionId)
        : [...prev, permissionId],
    );
  };

  return (
    <Dialog open={isOpen} onOpenChange={onClose}>
      <DialogContent className="max-w-4xl h-[80vh] overflow-hidden bg-gradient-to-br from-gray-900/95 via-purple-900/95 to-gray-900/95 backdrop-blur-xl border-0 rounded-3xl">
        <DialogHeader className="pb-6">
          <div className="flex items-center justify-between">
            <div className="flex items-center gap-4">
              <motion.div
                className={`w-16 h-16 bg-gradient-to-br ${license.color} rounded-2xl flex items-center justify-center shadow-lg`}
                whileHover={{ rotate: 5, scale: 1.05 }}
              >
                <license.icon className="w-8 h-8 text-white" />
              </motion.div>
              <div>
                <DialogTitle className="text-3xl font-black bg-gradient-to-r from-white to-gray-300 bg-clip-text text-transparent">
                  {license.name}
                </DialogTitle>
                <div className="flex items-center gap-2 mt-1">
                  <Badge
                    className={`${license.badgeColor} text-white px-3 py-1`}
                  >
                    {license.badge}
                  </Badge>
                  <span className="text-2xl font-bold text-aesthetic-cyan">
                    {license.price}
                  </span>
                </div>
              </div>
            </div>
            <Button
              variant="ghost"
              size="sm"
              onClick={onClose}
              className="text-gray-400 hover:text-white rounded-full"
            >
              <X className="w-5 h-5" />
            </Button>
          </div>
          <DialogDescription className="text-gray-300 text-lg">
            {license.description}
          </DialogDescription>
        </DialogHeader>

        <div className="flex-1 overflow-y-auto space-y-6 pr-2">
          {/* License Limits */}
          <Card className="bg-white/5 border-white/10 rounded-2xl">
            <CardHeader>
              <CardTitle className="text-white flex items-center gap-2">
                <Gauge className="w-5 h-5" />
                License Limits
              </CardTitle>
            </CardHeader>
            <CardContent>
              <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
                {Object.entries(license.limits).map(([key, value]) => (
                  <div
                    key={key}
                    className="text-center p-3 bg-white/5 rounded-xl"
                  >
                    <div className="text-2xl font-bold text-aesthetic-cyan">
                      {value}
                    </div>
                    <div className="text-gray-400 text-sm capitalize">
                      {key}
                    </div>
                  </div>
                ))}
              </div>
            </CardContent>
          </Card>

          {/* Manager Permissions */}
          <Card className="bg-white/5 border-white/10 rounded-2xl">
            <CardHeader>
              <CardTitle className="text-white flex items-center gap-2">
                <Shield className="w-5 h-5" />
                Club Manager Permissions
              </CardTitle>
              <p className="text-gray-400 text-sm">
                Control what this license allows club managers to do
              </p>
            </CardHeader>
            <CardContent>
              <div className="space-y-4">
                {license.permissions.map((permission) => (
                  <motion.div
                    key={permission.id}
                    className={`p-4 rounded-xl border transition-all duration-300 ${
                      permission.granted
                        ? "bg-green-500/10 border-green-500/30 hover:bg-green-500/20"
                        : "bg-red-500/10 border-red-500/30"
                    }`}
                    whileHover={{ scale: 1.02 }}
                  >
                    <div className="flex items-start justify-between">
                      <div className="flex items-start gap-3 flex-1">
                        <div
                          className={`mt-0.5 ${permission.granted ? "text-green-400" : "text-red-400"}`}
                        >
                          {permission.granted ? (
                            <CheckCircle className="w-5 h-5" />
                          ) : (
                            <AlertCircle className="w-5 h-5" />
                          )}
                        </div>
                        <div className="flex-1">
                          <div className="flex items-center gap-2">
                            <h4 className="font-semibold text-white">
                              {permission.name}
                            </h4>
                            {!permission.granted && (
                              <Badge
                                variant="outline"
                                className="text-xs text-red-400 border-red-400"
                              >
                                Upgrade Required
                              </Badge>
                            )}
                          </div>
                          <p className="text-gray-400 text-sm mt-1">
                            {permission.description}
                          </p>
                        </div>
                      </div>

                      <Switch
                        checked={selectedPermissions.includes(permission.id)}
                        onCheckedChange={() => togglePermission(permission.id)}
                        disabled={!permission.granted}
                        className="data-[state=checked]:bg-green-500"
                      />
                    </div>
                  </motion.div>
                ))}
              </div>
            </CardContent>
          </Card>

          {/* Key Features */}
          <Card className="bg-white/5 border-white/10 rounded-2xl">
            <CardHeader>
              <CardTitle className="text-white flex items-center gap-2">
                <Sparkles className="w-5 h-5" />
                Key Features
              </CardTitle>
            </CardHeader>
            <CardContent>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-3">
                {license.features.map((feature, index) => (
                  <motion.div
                    key={index}
                    className="flex items-center gap-3 p-3 bg-white/5 rounded-xl"
                    initial={{ opacity: 0, x: -20 }}
                    animate={{ opacity: 1, x: 0 }}
                    transition={{ delay: index * 0.1 }}
                  >
                    <div className="w-2 h-2 bg-aesthetic-cyan rounded-full" />
                    <span className="text-gray-300">{feature}</span>
                  </motion.div>
                ))}
              </div>
            </CardContent>
          </Card>
        </div>

        {/* Action Buttons */}
        <div className="flex gap-3 pt-6 border-t border-white/10">
          <motion.div
            whileHover={{ scale: 1.02 }}
            whileTap={{ scale: 0.98 }}
            className="flex-1"
          >
            <Button className="w-full bg-gradient-to-r from-aesthetic-violet via-aesthetic-electric to-aesthetic-cyan hover:from-aesthetic-electric hover:via-aesthetic-cyan hover:to-aesthetic-violet text-white py-3 rounded-2xl text-lg font-bold shadow-xl">
              {license.price === "Custom"
                ? "Contact Sales"
                : "Activate License"}
            </Button>
          </motion.div>

          <motion.div whileHover={{ scale: 1.02 }} whileTap={{ scale: 0.98 }}>
            <Button
              variant="outline"
              className="border-2 border-aesthetic-violet text-aesthetic-violet hover:bg-aesthetic-violet hover:text-white py-3 px-6 rounded-2xl font-bold"
            >
              {license.price === "Custom" ? "Get Quote" : "Free Trial"}
            </Button>
          </motion.div>
        </div>
      </DialogContent>
    </Dialog>
  );
};

export default function Licenses() {
  const [selectedLicense, setSelectedLicense] = useState<string | null>(null);
  const [activeModalLicense, setActiveModalLicense] = useState<
    (typeof managerLicenses)[0] | null
  >(null);

  const openLicenseModal = (license: (typeof managerLicenses)[0]) => {
    setActiveModalLicense(license);
  };

  const closeLicenseModal = () => {
    setActiveModalLicense(null);
  };

  return (
    <div className="min-h-screen bg-gradient-to-br from-aesthetic-violet/10 via-aesthetic-electric/10 to-aesthetic-cyan/10">
      <GenZParticles />

      {/* Hero Section */}
      <div className="relative bg-gradient-to-br from-aesthetic-violet via-aesthetic-electric to-aesthetic-cyan overflow-hidden">
        <div className="absolute inset-0 overflow-hidden">
          {[...Array(20)].map((_, i) => (
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
              className="text-5xl lg:text-6xl font-black text-white mb-6 leading-tight"
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
              CLUB MANAGER
              <br />
              <span className="bg-gradient-to-r from-aesthetic-cyan to-white bg-clip-text text-transparent">
                LICENSES
              </span>
              <br />
              🏆 OFFICIAL PERMISSIONS
            </motion.h1>

            <p className="text-xl text-white/90 mb-8 leading-relaxed max-w-4xl mx-auto">
              Get official club management permissions approved by platform
              administrators. Each license grants specific capabilities for
              managing events, members, and operations.
            </p>

            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <motion.div
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
              >
                <Button className="bg-gradient-to-r from-aesthetic-cyan to-white hover:from-white hover:to-aesthetic-cyan text-black px-12 py-4 rounded-3xl text-lg font-black shadow-2xl">
                  🚀 VIEW LICENSES
                </Button>
              </motion.div>

              <motion.div
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
              >
                <Button
                  variant="outline"
                  className="border-3 border-white/50 text-white hover:bg-white/10 px-8 py-4 rounded-3xl text-lg font-bold backdrop-blur-sm"
                >
                  💬 Contact Support
                </Button>
              </motion.div>
            </div>
          </motion.div>
        </div>
      </div>

      {/* License Cards Grid */}
      <div className="max-w-7xl mx-auto px-6 py-16">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.3 }}
          className="text-center mb-12"
        >
          <h2 className="text-4xl font-black bg-gradient-to-r from-aesthetic-violet to-aesthetic-cyan bg-clip-text text-transparent mb-4">
            Official Club Manager Licenses 🎯
          </h2>
          <p className="text-xl text-gray-700 dark:text-gray-300">
            Choose the license that matches your club management needs
          </p>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-2 xl:grid-cols-4 gap-6">
          {managerLicenses.map((license, index) => (
            <motion.div
              key={license.id}
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.4 + index * 0.1 }}
              whileHover={{ y: -8, scale: 1.02 }}
            >
              <AnimatedCard
                effects={["sparkles", "floating"]}
                intensity="medium"
                className="h-full"
              >
                <Card
                  className="h-full rounded-3xl border-2 transition-all duration-300 cursor-pointer bg-white/90 dark:bg-gray-800/90 hover:border-aesthetic-electric/50 hover:shadow-2xl"
                  onClick={() => openLicenseModal(license)}
                >
                  <CardHeader className="text-center pb-4">
                    <div className="relative">
                      <motion.div
                        className={`w-20 h-20 bg-gradient-to-br ${license.color} rounded-3xl flex items-center justify-center mx-auto mb-4 shadow-lg`}
                        whileHover={{ rotate: 10, scale: 1.1 }}
                      >
                        <license.icon className="w-10 h-10 text-white" />
                      </motion.div>

                      <Badge
                        className={`absolute -top-2 left-1/2 transform -translate-x-1/2 ${license.badgeColor} text-white px-3 py-1`}
                      >
                        {license.badge}
                      </Badge>
                    </div>

                    <CardTitle className="text-2xl font-black text-gray-900 dark:text-white mb-2">
                      {license.name}
                    </CardTitle>

                    <div className="text-center mb-4">
                      <div className="text-4xl font-black bg-gradient-to-r from-aesthetic-violet to-aesthetic-cyan bg-clip-text text-transparent">
                        {license.price}
                      </div>
                      {license.monthlyPrice > 0 && (
                        <div className="text-sm text-gray-500">per month</div>
                      )}
                    </div>

                    <p className="text-gray-600 dark:text-gray-400 text-sm">
                      {license.description}
                    </p>
                  </CardHeader>

                  <CardContent className="space-y-4">
                    {/* Key Features Preview */}
                    <div className="space-y-2">
                      {license.features.slice(0, 4).map((feature, idx) => (
                        <div
                          key={idx}
                          className="flex items-center gap-2 text-sm"
                        >
                          <div className="w-2 h-2 bg-aesthetic-electric rounded-full" />
                          <span className="text-gray-700 dark:text-gray-300">
                            {feature}
                          </span>
                        </div>
                      ))}
                      {license.features.length > 4 && (
                        <div className="text-center pt-2">
                          <span className="text-aesthetic-violet font-semibold text-sm">
                            +{license.features.length - 4} more features
                          </span>
                        </div>
                      )}
                    </div>

                    <Separator />

                    {/* Permission Preview */}
                    <div>
                      <div className="flex items-center gap-2 mb-2">
                        <Shield className="w-4 h-4 text-aesthetic-violet" />
                        <span className="font-semibold text-sm text-gray-900 dark:text-white">
                          Permissions
                        </span>
                      </div>
                      <div className="text-xs text-gray-600 dark:text-gray-400">
                        {license.permissions.filter((p) => p.granted).length} of{" "}
                        {license.permissions.length} permissions granted
                      </div>
                      <Progress
                        value={
                          (license.permissions.filter((p) => p.granted).length /
                            license.permissions.length) *
                          100
                        }
                        className="mt-2"
                      />
                    </div>

                    <motion.div
                      whileHover={{ scale: 1.02 }}
                      whileTap={{ scale: 0.98 }}
                      className="pt-4"
                    >
                      <Button
                        className="w-full bg-gradient-to-r from-aesthetic-violet to-aesthetic-cyan text-white rounded-2xl font-bold py-3"
                        onClick={(e) => {
                          e.stopPropagation();
                          openLicenseModal(license);
                        }}
                      >
                        View Details
                      </Button>
                    </motion.div>
                  </CardContent>
                </Card>
              </AnimatedCard>
            </motion.div>
          ))}
        </div>

        {/* Features Comparison */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.8 }}
          className="mt-16 text-center"
        >
          <h3 className="text-2xl font-black bg-gradient-to-r from-aesthetic-violet to-aesthetic-cyan bg-clip-text text-transparent mb-6">
            ✨ All licenses include official administrator approval
          </h3>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6 max-w-4xl mx-auto">
            <div className="p-6 bg-white/80 dark:bg-gray-800/80 backdrop-blur-sm rounded-3xl">
              <UserCheck className="w-12 h-12 text-aesthetic-violet mx-auto mb-4" />
              <h4 className="font-bold text-lg mb-2">Official Approval</h4>
              <p className="text-gray-600 dark:text-gray-400 text-sm">
                All licenses are reviewed and approved by platform
                administrators
              </p>
            </div>

            <div className="p-6 bg-white/80 dark:bg-gray-800/80 backdrop-blur-sm rounded-3xl">
              <Shield className="w-12 h-12 text-aesthetic-electric mx-auto mb-4" />
              <h4 className="font-bold text-lg mb-2">Secure Permissions</h4>
              <p className="text-gray-600 dark:text-gray-400 text-sm">
                Granular permission control ensures secure club management
              </p>
            </div>

            <div className="p-6 bg-white/80 dark:bg-gray-800/80 backdrop-blur-sm rounded-3xl">
              <Rocket className="w-12 h-12 text-aesthetic-cyan mx-auto mb-4" />
              <h4 className="font-bold text-lg mb-2">Instant Activation</h4>
              <p className="text-gray-600 dark:text-gray-400 text-sm">
                Start managing your club immediately after license approval
              </p>
            </div>
          </div>
        </motion.div>
      </div>

      {/* License Detail Modal */}
      {activeModalLicense && (
        <LicenseModal
          license={activeModalLicense}
          isOpen={!!activeModalLicense}
          onClose={closeLicenseModal}
        />
      )}
    </div>
  );
}
