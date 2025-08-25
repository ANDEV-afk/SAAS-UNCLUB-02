import { motion } from "framer-motion";
import { useState } from "react";
import { Link } from "react-router-dom";
import {
  Search,
  MapPin,
  Calendar,
  Users,
  Star,
  ArrowRight,
} from "lucide-react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Card, CardContent } from "@/components/ui/card";
import { Badge, getCategoryBadgeVariant } from "@/components/ui/badge";
import { Sparkles, Confetti, AnimatedCard } from "@/components/AnimatedEffects";
import { GenZFloatingElements } from "@/components/GenZFloatingElements";
import { FunctionalSearch } from "@/components/FunctionalSearch";
import { useTheme } from "next-themes";

// Mock event data
const featuredEvents = [
  {
    id: 1,
    title: "Summer Music Festival 2024",
    location: "Central Park, NYC",
    date: "Jul 15, 2024",
    price: "$89",
    image:
      "https://images.unsplash.com/photo-1493225457124-a3eb161ffa5f?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=2340&q=80",
    attendees: 2500,
    rating: 4.8,
    category: "Music",
  },
  {
    id: 2,
    title: "Tech Innovation Summit",
    location: "Silicon Valley, CA",
    date: "Aug 22, 2024",
    price: "$299",
    image:
      "https://images.unsplash.com/photo-1540575467063-178a50c2df87?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=2340&q=80",
    attendees: 800,
    rating: 4.9,
    category: "Technology",
  },
  {
    id: 3,
    title: "Food & Wine Experience",
    location: "Napa Valley, CA",
    date: "Sep 10, 2024",
    price: "$149",
    image:
      "https://images.unsplash.com/photo-1414235077428-338989a2e8c0?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=2340&q=80",
    attendees: 300,
    rating: 4.7,
    category: "Food & Drink",
  },
  {
    id: 4,
    title: "Art Gallery Opening",
    location: "SoHo, NYC",
    date: "Oct 5, 2024",
    price: "$45",
    image:
      "https://images.unsplash.com/photo-1578662996442-48f60103fc96?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=2340&q=80",
    attendees: 150,
    rating: 4.6,
    category: "Art",
  },
  {
    id: 5,
    title: "Startup Networking Night",
    location: "Austin, TX",
    date: "Nov 12, 2024",
    price: "$25",
    image:
      "https://images.unsplash.com/photo-1515187029135-18ee286d815b?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=2340&q=80",
    attendees: 200,
    rating: 4.5,
    category: "Business",
  },
  {
    id: 6,
    title: "Wellness Retreat Weekend",
    location: "Big Sur, CA",
    date: "Dec 3, 2024",
    price: "$399",
    image:
      "https://images.unsplash.com/photo-1506905925346-21bda4d32df4?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=2340&q=80",
    attendees: 50,
    rating: 4.9,
    category: "Wellness",
  },
];

const EventCard = ({
  event,
  index,
}: {
  event: (typeof featuredEvents)[0];
  index: number;
}) => {
  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ delay: index * 0.1, duration: 0.5 }}
      whileHover={{ y: -8, transition: { duration: 0.2 } }}
      className="group"
    >
      <AnimatedCard
        effects={["sparkles", "confetti"]}
        intensity="high"
        className="group"
      >
        <Card
          variant="neon"
          glow="strong"
          className="overflow-hidden rounded-2xl border-0"
        >
          <div className="relative overflow-hidden">
            <motion.img
              src={event.image}
              alt={event.title}
              className="w-full h-48 object-cover"
              whileHover={{ scale: 1.05 }}
              transition={{ duration: 0.3 }}
            />
            <div className="absolute top-4 left-4">
              <Badge
                variant={getCategoryBadgeVariant(event.category) as any}
                size="xl"
                glow="strong"
                className="animate-neon-pulse"
              >
                {event.category}
              </Badge>
            </div>
            <div className="absolute top-4 right-4">
              <motion.div
                className="bg-white/90 dark:bg-gray-800/90 rounded-full p-2"
                whileHover={{ scale: 1.1 }}
                whileTap={{ scale: 0.95 }}
              >
                <Star className="w-4 h-4 text-yellow-500 fill-current" />
              </motion.div>
            </div>
          </div>

          <CardContent className="p-6">
            <div className="flex items-center gap-2 text-sm text-gray-600 dark:text-gray-400 mb-2">
              <Calendar className="w-4 h-4" />
              {event.date}
            </div>

            <h3 className="font-bold text-lg text-gray-900 dark:text-white mb-2 group-hover:text-aesthetic-violet dark:group-hover:text-aesthetic-cyan transition-colors">
              {event.title}
            </h3>

            <div className="flex items-center gap-2 text-sm text-gray-600 dark:text-gray-400 mb-4">
              <MapPin className="w-4 h-4" />
              {event.location}
            </div>

            <div className="flex items-center justify-between">
              <div className="flex items-center gap-4">
                <span className="font-bold text-xl text-gray-900 dark:text-gray-100">
                  {event.price}
                </span>
                <div className="flex items-center gap-1 text-sm text-gray-600 dark:text-gray-400">
                  <Users className="w-4 h-4" />
                  {event.attendees}
                </div>
              </div>

              <motion.div
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                className="flex-shrink-0"
              >
                <Link to={`/event/${event.id}`}>
                  <Button
                    size="sm"
                    className="bg-gradient-to-r from-aesthetic-violet via-aesthetic-electric to-aesthetic-cyan hover:from-aesthetic-electric hover:via-aesthetic-cyan hover:to-aesthetic-violet text-white rounded-lg shadow-md font-semibold transition-all duration-200 whitespace-nowrap text-xs px-3 py-1.5"
                  >
                    🎟️ Get Tickets
                  </Button>
                </Link>
              </motion.div>
            </div>
          </CardContent>
        </Card>
      </AnimatedCard>
    </motion.div>
  );
};

export default function Index() {
  const { theme } = useTheme();

  return (
    <div className="min-h-screen bg-gradient-to-br from-unclub-blue/15 via-unclub-pink/15 to-unclub-red/15 dark:from-gray-900 dark:via-unclub-blue/20 dark:to-unclub-pink/15">
      {/* GenZ Floating Elements */}
      <GenZFloatingElements />

      {/* Animated Background Elements */}
      <div className="fixed inset-0 overflow-hidden pointer-events-none">
        <motion.div
          className="absolute -top-40 -right-40 w-80 h-80 bg-gradient-to-br from-unclub-blue/40 to-unclub-pink/40 dark:from-unclub-blue/30 dark:to-unclub-pink/30 rounded-full blur-3xl"
          animate={{
            x: [0, 50, 0],
            y: [0, -30, 0],
            rotate: [0, 180, 360],
          }}
          transition={{
            duration: 20,
            repeat: Infinity,
            ease: "linear",
          }}
        />
        <motion.div
          className="absolute -bottom-40 -left-40 w-80 h-80 bg-gradient-to-br from-unclub-red/40 to-party-pink/40 dark:from-unclub-red/30 dark:to-party-pink/30 rounded-full blur-3xl"
          animate={{
            x: [0, -50, 0],
            y: [0, 30, 0],
            rotate: [360, 180, 0],
          }}
          transition={{
            duration: 25,
            repeat: Infinity,
            ease: "linear",
          }}
        />
      </div>

      {/* Hero Section */}
      <section className="relative px-6 pt-24 sm:pt-28 pb-16">
        <div className="max-w-7xl mx-auto text-center">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
          >
            <h1 className="display-text text-5xl md:text-7xl font-black bg-gradient-to-r from-aesthetic-violet via-aesthetic-electric to-aesthetic-cyan bg-clip-text text-transparent mb-6">
              Discover Epic
              <br />
              <span className="relative">
                <motion.span
                  className="display-text"
                  animate={{
                    textShadow: [
                      "0 0 20px rgba(115, 115, 175, 0.4)",
                      "0 0 40px rgba(100, 200, 255, 0.6)",
                      "0 0 20px rgba(120, 180, 220, 0.4)",
                    ],
                  }}
                  transition={{
                    duration: 2,
                    repeat: Infinity,
                    ease: "easeInOut",
                  }}
                >
                  Events! 🎉
                </motion.span>
                <motion.div
                  className="absolute -bottom-2 left-0 right-0 h-2 bg-gradient-to-r from-aesthetic-violet via-aesthetic-electric to-aesthetic-cyan rounded-full"
                  initial={{ scaleX: 0 }}
                  animate={{ scaleX: 1 }}
                  transition={{ delay: 1, duration: 0.8 }}
                />
              </span>
            </h1>
          </motion.div>

          <motion.p
            className="body-text text-xl text-gray-600 dark:text-gray-400 mb-8 max-w-3xl mx-auto"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.2, duration: 0.6 }}
          >
            Join thousands discovering{" "}
            <span className="font-bold text-aesthetic-violet">
              amazing events
            </span>{" "}
            and creating
            <span className="font-bold text-aesthetic-electric">
              {" "}
              unforgettable memories
            </span>{" "}
            every day! Whether you want to{" "}
            <span className="font-bold text-aesthetic-cyan">
              attend
            </span> or{" "}
            <span className="font-bold text-aesthetic-electric">host</span> -
            we've got you covered! ✨
          </motion.p>

          <motion.div
            className="flex flex-col sm:flex-row gap-4 justify-center mb-12"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.4, duration: 0.6 }}
          >
            <motion.div whileHover={{ scale: 1.05 }} whileTap={{ scale: 0.95 }}>
              <Link to="/events">
                <Button
                  size="lg"
                  className="bg-gradient-to-r from-aesthetic-violet via-aesthetic-electric to-aesthetic-cyan hover:from-aesthetic-electric hover:via-aesthetic-cyan hover:to-aesthetic-violet text-white px-12 py-6 text-xl font-black rounded-3xl shadow-2xl"
                >
                  🎟️ FIND EVENTS
                </Button>
              </Link>
            </motion.div>

            <motion.div whileHover={{ scale: 1.05 }} whileTap={{ scale: 0.95 }}>
              <Link to="/dashboard">
                <Button
                  size="lg"
                  className="bg-gradient-to-r from-aesthetic-cyan to-aesthetic-electric hover:from-aesthetic-electric hover:to-aesthetic-cyan text-black px-12 py-6 text-xl font-black rounded-3xl shadow-2xl"
                >
                  🚀 HOST EVENT
                </Button>
              </Link>
            </motion.div>
          </motion.div>

          <FunctionalSearch />
        </div>
      </section>

      {/* Featured Events Section */}
      <section className="relative px-6 py-16">
        <div className="max-w-7xl mx-auto">
          <motion.div
            className="text-center mb-12"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.5, duration: 0.6 }}
          >
            <h2 className="display-text text-4xl font-black bg-gradient-to-r from-aesthetic-violet to-aesthetic-cyan bg-clip-text text-transparent mb-4">
              ���� Trending Events Right Now
            </h2>
            <p className="accent-text text-lg text-gray-700 dark:text-gray-300 max-w-2xl mx-auto">
              Discover the hottest events in your area! From exclusive VIP
              experiences to community gatherings - these events are selling out
              fast! 💫
            </p>
            <motion.div
              className="flex flex-wrap justify-center gap-3 mt-6"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.7, duration: 0.6 }}
            >
              {[
                "🎵 Live Music",
                "🍷 Food & Wine",
                "🎨 Art Shows",
                "💻 Tech Meetups",
                "🏃‍♀️ Fitness",
                "🎭 Entertainment",
              ].map((tag, index) => (
                <motion.div
                  key={tag}
                  whileHover={{ scale: 1.1, y: -2 }}
                  whileTap={{ scale: 0.95 }}
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ delay: 0.8 + index * 0.1 }}
                  className="px-4 py-2 bg-gradient-to-r from-aesthetic-violet/20 to-aesthetic-cyan/20 rounded-full text-sm font-semibold text-aesthetic-violet cursor-pointer hover:from-aesthetic-violet/30 hover:to-aesthetic-cyan/30 transition-all duration-300"
                >
                  {tag}
                </motion.div>
              ))}
            </motion.div>
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {featuredEvents.map((event, index) => (
              <EventCard key={event.id} event={event} index={index} />
            ))}
          </div>

          <motion.div
            className="text-center mt-12"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 1, duration: 0.6 }}
          >
            <motion.div whileHover={{ scale: 1.05 }} whileTap={{ scale: 0.95 }}>
              <Link to="/events">
                <Button
                  size="lg"
                  className="bg-gradient-to-r from-aesthetic-violet via-aesthetic-electric to-aesthetic-cyan hover:from-aesthetic-electric hover:to-aesthetic-cyan text-white px-8 py-3 rounded-2xl font-semibold shadow-xl"
                >
                  Find More Parties
                  <ArrowRight className="w-5 h-5 ml-2" />
                </Button>
              </Link>
            </motion.div>
          </motion.div>
        </div>
      </section>

      {/* Enhanced CTA Section */}
      <section className="relative px-6 py-16 bg-gradient-to-br from-aesthetic-violet/10 via-aesthetic-electric/10 to-aesthetic-cyan/10">
        <div className="max-w-7xl mx-auto text-center">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 1.2, duration: 0.8 }}
            className="mb-12"
          >
            <h2 className="text-4xl font-black bg-gradient-to-r from-aesthetic-violet to-aesthetic-cyan bg-clip-text text-transparent mb-6">
              🚀 Ready to Create Your Own Event?
            </h2>
            <p className="text-xl text-gray-700 dark:text-gray-300 max-w-3xl mx-auto mb-8">
              Join thousands of successful hosts who've turned their ideas into
              <span className="font-bold text-aesthetic-electric">
                {" "}
                unforgettable experiences
              </span>
              ! Start your journey today and become part of the event
              revolution.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <motion.div
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
              >
                <Link to="/dashboard">
                  <Button className="bg-gradient-to-r from-aesthetic-violet via-aesthetic-electric to-aesthetic-cyan hover:from-aesthetic-electric hover:via-aesthetic-cyan hover:to-aesthetic-violet text-white px-12 py-6 rounded-3xl text-xl font-black shadow-2xl">
                    ✨ CREATE EVENT NOW
                  </Button>
                </Link>
              </motion.div>
              <motion.div
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
              >
                <Link to="/licenses">
                  <Button
                    variant="outline"
                    className="border-3 border-aesthetic-violet text-aesthetic-violet hover:bg-aesthetic-violet hover:text-white px-8 py-6 rounded-3xl text-lg font-bold"
                  >
                    👑 Upgrade to Pro
                  </Button>
                </Link>
              </motion.div>
            </div>
          </motion.div>
        </div>
      </section>

      {/* Stats Section */}
      <section className="relative px-6 py-16 bg-white/50 dark:bg-gray-800/50 backdrop-blur-sm">
        <div className="max-w-7xl mx-auto">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 1.4, duration: 0.8 }}
            className="text-center mb-12"
          >
            <h2 className="text-3xl font-black bg-gradient-to-r from-aesthetic-violet to-aesthetic-cyan bg-clip-text text-transparent mb-4">
              💪 Trusted by Event Professionals
            </h2>
            <p className="text-lg text-gray-700 dark:text-gray-300">
              Join the community that's revolutionizing how events are
              discovered and created
            </p>
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
            {[
              {
                number: "50K+",
                label: "Events Listed",
                icon: Calendar,
                color: "text-aesthetic-violet",
              },
              {
                number: "1M+",
                label: "Happy Attendees",
                icon: Users,
                color: "text-aesthetic-electric",
              },
              {
                number: "500+",
                label: "Cities Covered",
                icon: MapPin,
                color: "text-aesthetic-cyan",
              },
              {
                number: "4.9",
                label: "Average Rating",
                icon: Star,
                color: "text-aesthetic-magenta",
              },
            ].map((stat, index) => (
              <motion.div
                key={stat.label}
                className="text-center"
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 1.5 + index * 0.1, duration: 0.6 }}
                whileHover={{ y: -8, scale: 1.05 }}
              >
                <motion.div
                  className="inline-flex items-center justify-center w-16 h-16 bg-gradient-to-br from-aesthetic-violet via-aesthetic-electric to-aesthetic-cyan text-white rounded-2xl mb-4 shadow-lg"
                  whileHover={{ scale: 1.15, rotate: 10 }}
                  transition={{ duration: 0.3 }}
                >
                  <stat.icon className="w-8 h-8" />
                </motion.div>
                <h3 className={`text-3xl font-bold ${stat.color} mb-2`}>
                  {stat.number}
                </h3>
                <p className="text-gray-700 dark:text-gray-300 font-semibold">
                  {stat.label}
                </p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>
    </div>
  );
}
