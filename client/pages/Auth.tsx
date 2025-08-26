import { motion, AnimatePresence } from "framer-motion";
import { useState } from "react";
import { useNavigate } from "react-router-dom";
import {
  Eye,
  EyeOff,
  Mail,
  Lock,
  User,
  Heart,
  Star,
  Sparkles,
  Camera,
  Calendar,
} from "lucide-react";
import { useAuth } from "../contexts/AuthContext";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Card, CardContent } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Checkbox } from "@/components/ui/checkbox";
import { Separator } from "@/components/ui/separator";

const floatingElements = [
  { icon: Heart, delay: 0, color: "instagram-pink" },
  { icon: Star, delay: 1, color: "instagram-yellow" },
  { icon: Sparkles, delay: 2, color: "instagram-purple" },
  { icon: Camera, delay: 0.5, color: "instagram-orange" },
];

const socialProviders = [
  {
    name: "Google",
    icon: "🔥",
    gradient: "from-red-500 to-orange-500",
    hoverGradient: "from-red-600 to-orange-600",
    textColor: "text-white",
  },
  {
    name: "Instagram",
    icon: "📸",
    gradient: "from-pink-500 via-purple-500 to-orange-500",
    hoverGradient: "from-pink-600 via-purple-600 to-orange-600",
    textColor: "text-white",
  },
  {
    name: "TikTok",
    icon: "🎵",
    gradient: "from-gray-900 to-red-500",
    hoverGradient: "from-black to-red-600",
    textColor: "text-white",
  },
];

const AuthForm = ({
  isLogin,
  onToggle,
}: {
  isLogin: boolean;
  onToggle: () => void;
}) => {
  const [showPassword, setShowPassword] = useState(false);
  const [isLoading, setIsLoading] = useState(false);
  const [error, setError] = useState<string | null>(null);
  const { login, signup } = useAuth();
  const navigate = useNavigate();

  const [formData, setFormData] = useState({
    firstName: "",
    lastName: "",
    email: "",
    password: "",
    confirmPassword: "",
    dateOfBirth: "",
    agreeToTerms: false,
    ageVerified: false,
  });

  const handleInputChange = (field: string, value: string | boolean) => {
    setFormData((prev) => ({ ...prev, [field]: value }));
    setError(null); // Clear error when user types
  };

  return (
    <motion.div
      key={isLogin ? "login" : "signup"}
      initial={{ opacity: 0, x: isLogin ? -20 : 20 }}
      animate={{ opacity: 1, x: 0 }}
      exit={{ opacity: 0, x: isLogin ? 20 : -20 }}
      transition={{ duration: 0.3 }}
      className="w-full max-w-md mx-auto"
    >
      <Card className="bg-white/90 backdrop-blur-xl rounded-3xl border-0 shadow-2xl overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-br from-instagram-pink/10 via-instagram-purple/10 to-instagram-orange/10" />

        <CardContent className="relative p-8">
          {/* Header */}
          <motion.div
            className="text-center mb-8"
            initial={{ opacity: 0, y: -20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.2 }}
          >
            <motion.div
              className="w-20 h-20 bg-gradient-to-br from-instagram-pink via-instagram-purple to-instagram-orange rounded-3xl flex items-center justify-center mx-auto mb-4 shadow-2xl"
              whileHover={{
                rotate: [0, -5, 5, 0],
                scale: 1.05,
              }}
              transition={{ duration: 0.3 }}
            >
              <motion.span
                className="text-3xl"
                animate={{
                  rotate: [0, 360],
                }}
                transition={{
                  duration: 10,
                  repeat: Infinity,
                  ease: "linear",
                }}
              >
                ✨
              </motion.span>
            </motion.div>

            <h1 className="text-3xl font-black bg-gradient-to-r from-instagram-pink via-instagram-purple to-instagram-orange bg-clip-text text-transparent mb-2">
              {isLogin ? "Welcome Back!" : "Join the Vibe"}
            </h1>
            <p className="text-gray-600">
              {isLogin
                ? "Ready to discover amazing events? 🎉"
                : "Create your account and start exploring! 🚀"}
            </p>
          </motion.div>

          {/* Social Login */}
          <motion.div
            className="space-y-3 mb-6"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.3 }}
          >
            {socialProviders.map((provider, index) => (
              <motion.div
                key={provider.name}
                initial={{ opacity: 0, x: -20 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ delay: 0.4 + index * 0.1 }}
                whileHover={{ scale: 1.02, y: -2 }}
                whileTap={{ scale: 0.98 }}
              >
                <Button
                  variant="outline"
                  className={`w-full h-12 bg-gradient-to-r ${provider.gradient} hover:${provider.hoverGradient} ${provider.textColor} border-0 rounded-2xl font-semibold shadow-lg transition-all duration-300 hover:shadow-xl hover:scale-[1.02]`}
                >
                  <span className="text-xl mr-3">{provider.icon}</span>
                  Continue with {provider.name}
                </Button>
              </motion.div>
            ))}
          </motion.div>

          {/* Divider */}
          <motion.div
            className="flex items-center gap-4 mb-6"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.8 }}
          >
            <Separator className="flex-1" />
            <span className="text-gray-500 text-sm font-medium">
              or continue with email
            </span>
            <Separator className="flex-1" />
          </motion.div>

          {/* Error Message */}
          {error && (
            <motion.div
              initial={{ opacity: 0, y: -10 }}
              animate={{ opacity: 1, y: 0 }}
              className="bg-red-100 border border-red-400 text-red-700 px-4 py-3 rounded-2xl text-sm"
            >
              {error}
            </motion.div>
          )}

          {/* Form */}
          <motion.form
            className="space-y-4"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.9 }}
            onSubmit={async (e) => {
              e.preventDefault();
              setError(null);
              setIsLoading(true);

              try {
                if (!isLogin) {
                  // Age verification for signup
                  if (!formData.ageVerified) {
                    setError(
                      "🔞 You must be 18 years or older to create an account.",
                    );
                    setIsLoading(false);
                    return;
                  }

                  // Check date of birth if provided
                  if (formData.dateOfBirth) {
                    const birthDate = new Date(formData.dateOfBirth);
                    const today = new Date();
                    let age = today.getFullYear() - birthDate.getFullYear();
                    const monthDiff = today.getMonth() - birthDate.getMonth();

                    if (
                      monthDiff < 0 ||
                      (monthDiff === 0 && today.getDate() < birthDate.getDate())
                    ) {
                      age--;
                    }

                    if (age < 18) {
                      setError(
                        "🔞 You must be 18 years or older to create an account. Please come back when you're older!",
                      );
                      setIsLoading(false);
                      return;
                    }
                  }

                  if (!formData.agreeToTerms) {
                    setError(
                      "📋 Please agree to the Terms of Service and Privacy Policy.",
                    );
                    setIsLoading(false);
                    return;
                  }

                  if (formData.password !== formData.confirmPassword) {
                    setError("🔐 Passwords don't match. Please try again.");
                    setIsLoading(false);
                    return;
                  }

                  // Sign up user
                  await signup(formData);
                  navigate("/profile"); // Redirect to profile after signup
                } else {
                  // Log in user
                  await login(formData.email, formData.password);
                  navigate("/profile"); // Redirect to profile after login
                }
              } catch (error: any) {
                setError(
                  error.message || "Something went wrong. Please try again.",
                );
              } finally {
                setIsLoading(false);
              }
            }}
          >
            {!isLogin && (
              <div className="grid grid-cols-2 gap-3">
                <motion.div
                  initial={{ opacity: 0, x: -20 }}
                  animate={{ opacity: 1, x: 0 }}
                  transition={{ delay: 1 }}
                >
                  <div className="relative">
                    <User className="absolute left-3 top-3 w-5 h-5 text-gray-400" />
                    <Input
                      placeholder="First name"
                      value={formData.firstName}
                      onChange={(e) =>
                        handleInputChange("firstName", e.target.value)
                      }
                      className="pl-10 border-0 bg-gray-50 focus:bg-white transition-colors rounded-2xl h-12"
                    />
                  </div>
                </motion.div>
                <motion.div
                  initial={{ opacity: 0, x: 20 }}
                  animate={{ opacity: 1, x: 0 }}
                  transition={{ delay: 1.1 }}
                >
                  <div className="relative">
                    <User className="absolute left-3 top-3 w-5 h-5 text-gray-400" />
                    <Input
                      placeholder="Last name"
                      value={formData.lastName}
                      onChange={(e) =>
                        handleInputChange("lastName", e.target.value)
                      }
                      className="pl-10 border-0 bg-gray-50 focus:bg-white transition-colors rounded-2xl h-12"
                    />
                  </div>
                </motion.div>
              </div>
            )}

            <motion.div
              initial={{ opacity: 0, y: 10 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: isLogin ? 1 : 1.2 }}
            >
              <div className="relative">
                <Mail className="absolute left-3 top-3 w-5 h-5 text-gray-400" />
                <Input
                  type="email"
                  placeholder="Email address"
                  value={formData.email}
                  onChange={(e) => handleInputChange("email", e.target.value)}
                  className="pl-10 border-0 bg-gray-50 focus:bg-white transition-colors rounded-2xl h-12"
                />
              </div>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, y: 10 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: isLogin ? 1.1 : 1.3 }}
            >
              <div className="relative">
                <Lock className="absolute left-3 top-3 w-5 h-5 text-gray-400" />
                <Input
                  type={showPassword ? "text" : "password"}
                  placeholder="Password"
                  value={formData.password}
                  onChange={(e) =>
                    handleInputChange("password", e.target.value)
                  }
                  className="pl-10 pr-10 border-0 bg-gray-50 focus:bg-white transition-colors rounded-2xl h-12"
                />
                <motion.button
                  type="button"
                  onClick={() => setShowPassword(!showPassword)}
                  className="absolute right-3 top-3 text-gray-400 hover:text-gray-600"
                  whileHover={{ scale: 1.1 }}
                  whileTap={{ scale: 0.9 }}
                >
                  {showPassword ? (
                    <EyeOff className="w-5 h-5" />
                  ) : (
                    <Eye className="w-5 h-5" />
                  )}
                </motion.button>
              </div>
            </motion.div>

            {!isLogin && (
              <motion.div
                initial={{ opacity: 0, y: 10 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 1.4 }}
              >
                <div className="relative">
                  <Lock className="absolute left-3 top-3 w-5 h-5 text-gray-400" />
                  <Input
                    type="password"
                    placeholder="Confirm password"
                    value={formData.confirmPassword}
                    onChange={(e) =>
                      handleInputChange("confirmPassword", e.target.value)
                    }
                    className="pl-10 border-0 bg-gray-50 focus:bg-white transition-colors rounded-2xl h-12"
                  />
                </div>
              </motion.div>
            )}

            {!isLogin && (
              <motion.div
                initial={{ opacity: 0, y: 10 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 1.5 }}
              >
                <div className="relative">
                  <Calendar className="absolute left-3 top-3 w-5 h-5 text-gray-400" />
                  <Input
                    type="date"
                    placeholder="Date of Birth"
                    value={formData.dateOfBirth}
                    onChange={(e) =>
                      handleInputChange("dateOfBirth", e.target.value)
                    }
                    className="pl-10 border-0 bg-gray-50 focus:bg-white transition-colors rounded-2xl h-12"
                    max={
                      new Date(
                        new Date().setFullYear(new Date().getFullYear() - 13),
                      )
                        .toISOString()
                        .split("T")[0]
                    }
                  />
                </div>
              </motion.div>
            )}

            {!isLogin && (
              <motion.div
                initial={{ opacity: 0, y: 10 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 1.6 }}
                className="space-y-3"
              >
                <div className="flex items-center space-x-2">
                  <Checkbox
                    id="age-verification"
                    checked={formData.ageVerified}
                    onCheckedChange={(checked) =>
                      handleInputChange("ageVerified", checked as boolean)
                    }
                  />
                  <label
                    htmlFor="age-verification"
                    className="text-sm text-gray-600"
                  >
                    <span className="font-semibold text-red-600">
                      🔞 I confirm that I am 18 years old or older
                    </span>
                  </label>
                </div>

                <div className="flex items-center space-x-2">
                  <Checkbox
                    id="terms"
                    checked={formData.agreeToTerms}
                    onCheckedChange={(checked) =>
                      handleInputChange("agreeToTerms", checked as boolean)
                    }
                  />
                  <label htmlFor="terms" className="text-sm text-gray-600">
                    I agree to the{" "}
                    <span className="text-instagram-purple font-semibold cursor-pointer hover:underline">
                      Terms of Service
                    </span>{" "}
                    and{" "}
                    <span className="text-instagram-purple font-semibold cursor-pointer hover:underline">
                      Privacy Policy
                    </span>
                  </label>
                </div>
              </motion.div>
            )}

            {isLogin && (
              <motion.div
                className="flex items-center justify-between"
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ delay: 1.2 }}
              >
                <div className="flex items-center space-x-2">
                  <Checkbox id="remember" />
                  <label htmlFor="remember" className="text-sm text-gray-600">
                    Remember me
                  </label>
                </div>
                <motion.button
                  type="button"
                  className="text-sm text-instagram-purple font-semibold hover:underline"
                  whileHover={{ scale: 1.05 }}
                >
                  Forgot password?
                </motion.button>
              </motion.div>
            )}

            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: isLogin ? 1.3 : 1.6 }}
              whileHover={{ scale: 1.02 }}
              whileTap={{ scale: 0.98 }}
            >
              <Button
                type="submit"
                disabled={isLoading}
                className="w-full h-12 bg-gradient-to-r from-instagram-pink via-instagram-purple to-instagram-orange hover:from-instagram-purple hover:to-instagram-pink text-white rounded-2xl font-bold text-lg shadow-2xl disabled:opacity-50 disabled:cursor-not-allowed"
              >
                {isLoading ? (
                  <span className="flex items-center gap-2">
                    <div className="w-5 h-5 border-2 border-white border-t-transparent rounded-full animate-spin"></div>
                    {isLogin ? "Signing In..." : "Creating Account..."}
                  </span>
                ) : (
                  <motion.span
                    animate={{
                      backgroundPosition: ["0% 50%", "100% 50%", "0% 50%"],
                    }}
                    transition={{
                      duration: 3,
                      repeat: Infinity,
                      ease: "easeInOut",
                    }}
                  >
                    {isLogin ? "Sign In & Explore 🚀" : "Create Account 🎉"}
                  </motion.span>
                )}
              </Button>
            </motion.div>
          </motion.form>

          {/* Toggle */}
          <motion.div
            className="text-center mt-6"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: isLogin ? 1.4 : 1.7 }}
          >
            <span className="text-gray-600">
              {isLogin ? "New to EventVibe?" : "Already have an account?"}
            </span>{" "}
            <motion.button
              onClick={onToggle}
              className="text-instagram-purple font-bold hover:underline"
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
            >
              {isLogin ? "Join the community" : "Sign in"}
            </motion.button>
          </motion.div>
        </CardContent>
      </Card>
    </motion.div>
  );
};

export default function Auth() {
  const [isLogin, setIsLogin] = useState(true);

  return (
    <div className="min-h-screen bg-gradient-to-br from-background via-background to-background dark:from-gray-950 dark:via-gray-900 dark:to-gray-950 flex items-center justify-center p-6 relative overflow-hidden transition-colors duration-500">
      {/* Animated Background Elements */}
      <div className="fixed inset-0 overflow-hidden pointer-events-none">
        {floatingElements.map((element, index) => (
          <motion.div
            key={index}
            className="absolute"
            style={{
              left: `${10 + index * 20}%`,
              top: `${15 + index * 15}%`,
            }}
            animate={{
              y: [-30, 30, -30],
              x: [-20, 20, -20],
              rotate: [0, 180, 360],
              scale: [1, 1.2, 1],
            }}
            transition={{
              duration: 8 + index * 2,
              repeat: Infinity,
              delay: element.delay,
              ease: "easeInOut",
            }}
          >
            <motion.div
              className={`w-16 h-16 bg-gradient-to-br from-${element.color}/30 to-${element.color}/10 rounded-3xl flex items-center justify-center backdrop-blur-sm`}
              whileHover={{ scale: 1.2, rotate: 45 }}
            >
              <element.icon className={`w-8 h-8 text-${element.color}`} />
            </motion.div>
          </motion.div>
        ))}
      </div>

      {/* Floating Success Stories */}
      <div className="fixed inset-0 overflow-hidden pointer-events-none">
        {[
          { text: "Just booked my first festival! 🎵", delay: 0, side: "left" },
          {
            text: "Made 50+ friends at EventVibe meetups! 👥",
            delay: 2,
            side: "right",
          },
          {
            text: "Found the best food truck events! 🌮",
            delay: 4,
            side: "left",
          },
          {
            text: "Discovered my new favorite artist! ⭐",
            delay: 6,
            side: "right",
          },
        ].map((story, index) => (
          <motion.div
            key={index}
            className={`absolute ${story.side === "left" ? "left-4" : "right-4"} bg-white/90 backdrop-blur-md rounded-2xl p-3 shadow-xl max-w-xs`}
            style={{
              top: `${20 + index * 15}%`,
            }}
            initial={{
              opacity: 0,
              x: story.side === "left" ? -100 : 100,
              scale: 0.8,
            }}
            animate={{
              opacity: [0, 1, 1, 0],
              x: 0,
              scale: [0.8, 1, 1, 0.8],
            }}
            transition={{
              duration: 4,
              repeat: Infinity,
              delay: story.delay,
              ease: "easeInOut",
            }}
          >
            <div className="flex items-center gap-3">
              <div className="w-8 h-8 bg-gradient-to-br from-instagram-pink to-instagram-purple rounded-full flex items-center justify-center">
                <span className="text-white text-xs font-bold">
                  {String.fromCharCode(65 + index)}
                </span>
              </div>
              <p className="text-sm font-medium text-gray-800">{story.text}</p>
            </div>
          </motion.div>
        ))}
      </div>

      {/* Main Content */}
      <div className="relative z-10 w-full max-w-md">
        <AnimatePresence mode="wait">
          <AuthForm isLogin={isLogin} onToggle={() => setIsLogin(!isLogin)} />
        </AnimatePresence>

        {/* Fun Stats */}
        <motion.div
          className="mt-8 text-center space-y-2"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 1 }}
        >
          <div className="flex justify-center gap-6 text-sm">
            {[
              { number: "50K+", label: "Events", icon: "🎉" },
              { number: "1M+", label: "Members", icon: "👥" },
              { number: "500+", label: "Cities", icon: "🌍" },
            ].map((stat, index) => (
              <motion.div
                key={stat.label}
                className="text-center"
                initial={{ opacity: 0, y: 10 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 1.2 + index * 0.1 }}
                whileHover={{ scale: 1.1, y: -5 }}
              >
                <div className="text-lg font-bold text-gray-900 flex items-center gap-1">
                  <span>{stat.icon}</span>
                  {stat.number}
                </div>
                <div className="text-xs text-gray-600">{stat.label}</div>
              </motion.div>
            ))}
          </div>

          <motion.p
            className="text-xs text-gray-500 max-w-sm mx-auto"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 1.5 }}
          >
            Join the fastest-growing community of event enthusiasts!
            <br />
            <span className="text-instagram-purple font-semibold">
              ✨ Your next adventure awaits ✨
            </span>
          </motion.p>
        </motion.div>
      </div>
    </div>
  );
}
