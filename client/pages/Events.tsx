import { motion, AnimatePresence } from "framer-motion";
import { useState } from "react";
import { Link } from "react-router-dom";
import Image from "@/components/ui/image";
import {
  Search,
  Filter,
  MapPin,
  Calendar,
  Users,
  Star,
  Grid,
  List,
  SlidersHorizontal,
} from "lucide-react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Card, CardContent } from "@/components/ui/card";
import { Badge, getCategoryBadgeVariant } from "@/components/ui/badge";
import { Sparkles, Confetti, AnimatedCard } from "@/components/AnimatedEffects";
import { Slider } from "@/components/ui/slider";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";
import { Checkbox } from "@/components/ui/checkbox";
import { GenZParticles } from "@/components/GenZParticles";
import { useTheme } from "next-themes";

// Expanded mock event data
const allEvents = [
  {
    id: 1,
    title: "Summer Music Festival 2024",
    location: "Central Park, NYC",
    date: "Jul 15, 2024",
    price: 89,
    image:
      "https://images.unsplash.com/photo-1493225457124-a3eb161ffa5f?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=2340&q=80",
    attendees: 2500,
    rating: 4.8,
    category: "Music",
    featured: true,
  },
  {
    id: 2,
    title: "Tech Innovation Summit",
    location: "Silicon Valley, CA",
    date: "Aug 22, 2024",
    price: 299,
    image:
      "https://images.unsplash.com/photo-1540575467063-178a50c2df87?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=2340&q=80",
    attendees: 800,
    rating: 4.9,
    category: "Technology",
    featured: true,
  },
  {
    id: 3,
    title: "Food & Wine Experience",
    location: "Napa Valley, CA",
    date: "Sep 10, 2024",
    price: 149,
    image:
      "https://images.unsplash.com/photo-1414235077428-338989a2e8c0?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=2340&q=80",
    attendees: 300,
    rating: 4.7,
    category: "Food & Drink",
    featured: false,
  },
  {
    id: 4,
    title: "Digital Marketing Masterclass",
    location: "Chicago, IL",
    date: "Jul 28, 2024",
    price: 199,
    image:
      "https://images.unsplash.com/photo-1552664730-d307ca884978?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=2340&q=80",
    attendees: 500,
    rating: 4.6,
    category: "Business",
    featured: false,
  },
  {
    id: 5,
    title: "Classical Music Evening",
    location: "Carnegie Hall, NYC",
    date: "Aug 5, 2024",
    price: 75,
    image:
      "https://images.unsplash.com/photo-1493225457124-a3eb161ffa5f?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=2340&q=80",
    attendees: 1200,
    rating: 4.9,
    category: "Music",
    featured: false,
  },
  {
    id: 6,
    title: "Startup Pitch Competition",
    location: "Austin, TX",
    date: "Sep 18, 2024",
    price: 35,
    image:
      "https://images.unsplash.com/photo-1515187029135-18ee286d815b?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=2340&q=80",
    attendees: 300,
    rating: 4.5,
    category: "Business",
    featured: false,
  },
  {
    id: 7,
    title: "Art Gallery Opening",
    location: "SoHo, NYC",
    date: "Oct 5, 2024",
    price: 45,
    image:
      "https://images.unsplash.com/photo-1578662996442-48f60103fc96?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=2340&q=80",
    attendees: 150,
    rating: 4.6,
    category: "Art",
    featured: false,
  },
  {
    id: 8,
    title: "Yoga & Meditation Retreat",
    location: "Sedona, AZ",
    date: "Oct 15, 2024",
    price: 299,
    image:
      "https://images.unsplash.com/photo-1506905925346-21bda4d32df4?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=2340&q=80",
    attendees: 50,
    rating: 4.8,
    category: "Wellness",
    featured: false,
  },
];

const categories = [
  "All",
  "Music",
  "Technology",
  "Food & Drink",
  "Business",
  "Art",
  "Wellness",
];

const FilterPanel = ({
  isOpen,
  onClose,
  priceRange,
  setPriceRange,
  selectedCategories,
  setSelectedCategories,
  selectedDateRange,
  setSelectedDateRange,
  selectedRating,
  setSelectedRating,
  onApplyFilters,
}: {
  isOpen: boolean;
  onClose: () => void;
  priceRange: number[];
  setPriceRange: (range: number[]) => void;
  selectedCategories: string[];
  setSelectedCategories: (categories: string[]) => void;
  selectedDateRange: string;
  setSelectedDateRange: (range: string) => void;
  selectedRating: number;
  setSelectedRating: (rating: number) => void;
  onApplyFilters: () => void;
}) => {
  const handleCategoryChange = (category: string, checked: boolean) => {
    if (checked) {
      setSelectedCategories([...selectedCategories, category]);
    } else {
      setSelectedCategories(selectedCategories.filter((c) => c !== category));
    }
  };

  const handleRatingChange = (rating: number, checked: boolean) => {
    setSelectedRating(checked ? rating : 0);
  };

  return (
    <AnimatePresence>
      {isOpen && (
        <>
          <motion.div
            className="fixed inset-0 bg-black/50 z-40 lg:hidden"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            onClick={onClose}
          />
          <motion.div
            className="fixed lg:static top-0 left-0 w-80 h-full lg:h-auto bg-black/80 backdrop-blur-md rounded-none lg:rounded-2xl shadow-xl z-50 border-r lg:border border-white/20 overflow-y-auto"
            initial={{ x: -320 }}
            animate={{ x: 0 }}
            exit={{ x: -320 }}
            transition={{ type: "spring", damping: 20, stiffness: 300 }}
          >
            <div className="p-6">
              <div className="flex items-center justify-between mb-6">
                <h3 className="subheading-text text-lg font-semibold">
                  Filters
                </h3>
                <Button
                  variant="ghost"
                  size="sm"
                  onClick={onClose}
                  className="lg:hidden text-gray-600 dark:text-gray-400 hover:text-gray-900 dark:hover:text-gray-100"
                >
                  ×
                </Button>
              </div>

              <div className="space-y-6">
                {/* Category Filter */}
                <div>
                  <h4 className="subheading-text font-medium mb-3">
                    Categories
                  </h4>
                  <div className="space-y-3">
                    {categories.slice(1).map((category) => (
                      <motion.div
                        key={category}
                        className="flex items-center space-x-2"
                        whileHover={{ x: 2 }}
                        transition={{ duration: 0.1 }}
                      >
                        <Checkbox
                          id={category}
                          checked={selectedCategories.includes(category)}
                          onCheckedChange={(checked) =>
                            handleCategoryChange(category, checked as boolean)
                          }
                        />
                        <label
                          htmlFor={category}
                          className="text-sm text-gray-700 dark:text-gray-200 cursor-pointer font-medium"
                        >
                          {category}
                        </label>
                      </motion.div>
                    ))}
                  </div>
                </div>

                {/* Price Range */}
                <div>
                  <h4 className="subheading-text font-medium mb-3">
                    Price Range
                  </h4>
                  <div className="px-2">
                    <Slider
                      value={priceRange}
                      onValueChange={setPriceRange}
                      max={500}
                      min={0}
                      step={10}
                      className="mb-3"
                    />
                    <div className="flex justify-between text-sm text-gray-600 dark:text-gray-400">
                      <span>${priceRange[0]}</span>
                      <span>${priceRange[1]}</span>
                    </div>
                  </div>
                </div>

                {/* Date Filter */}
                <div>
                  <h4 className="subheading-text font-medium mb-3">Date</h4>
                  <Select
                    value={selectedDateRange}
                    onValueChange={setSelectedDateRange}
                  >
                    <SelectTrigger className="border-gray-200 dark:border-gray-600 bg-white dark:bg-gray-800 text-gray-900 dark:text-gray-100">
                      <SelectValue placeholder="Select date range" />
                    </SelectTrigger>
                    <SelectContent>
                      <SelectItem value="all">All Dates</SelectItem>
                      <SelectItem value="today">Today</SelectItem>
                      <SelectItem value="week">This Week</SelectItem>
                      <SelectItem value="month">This Month</SelectItem>
                      <SelectItem value="3months">Next 3 Months</SelectItem>
                    </SelectContent>
                  </Select>
                </div>

                {/* Rating Filter */}
                <div>
                  <h4 className="subheading-text font-medium mb-3">Rating</h4>
                  <div className="space-y-2">
                    {[5, 4, 3].map((rating) => (
                      <motion.div
                        key={rating}
                        className="flex items-center space-x-2 cursor-pointer"
                        whileHover={{ x: 2 }}
                        transition={{ duration: 0.1 }}
                      >
                        <Checkbox
                          id={`rating-${rating}`}
                          checked={selectedRating === rating}
                          onCheckedChange={(checked) =>
                            handleRatingChange(rating, checked as boolean)
                          }
                        />
                        <label
                          htmlFor={`rating-${rating}`}
                          className="text-sm text-gray-700 dark:text-gray-300 cursor-pointer flex items-center"
                        >
                          {rating}+
                          <div className="flex ml-1">
                            {[...Array(5)].map((_, i) => (
                              <Star
                                key={i}
                                className={`w-3 h-3 ${i < rating ? "text-yellow-400 fill-current" : "text-gray-300 dark:text-gray-600"}`}
                              />
                            ))}
                          </div>
                        </label>
                      </motion.div>
                    ))}
                  </div>
                </div>

                <motion.div
                  whileHover={{ scale: 1.02 }}
                  whileTap={{ scale: 0.98 }}
                >
                  <Button
                    onClick={onApplyFilters}
                    className="w-full genz-button"
                  >
                    Apply Filters
                  </Button>
                </motion.div>
              </div>
            </div>
          </motion.div>
        </>
      )}
    </AnimatePresence>
  );
};

const EventCard = ({
  event,
  index,
  viewMode,
}: {
  event: (typeof allEvents)[0];
  index: number;
  viewMode: "grid" | "list";
}) => {
  if (viewMode === "list") {
    return (
      <motion.div
        initial={{ opacity: 0, x: -20 }}
        animate={{ opacity: 1, x: 0 }}
        transition={{ delay: index * 0.05, duration: 0.3 }}
        whileHover={{ x: 4 }}
        className="group"
      >
        <AnimatedCard
          effects={["sparkles", "confetti"]}
          intensity="medium"
          className="group"
        >
          <Card className="genz-event-card overflow-hidden">
            <CardContent className="p-6">
              <div className="flex gap-6">
                <motion.div
                  className="flex-shrink-0 w-24 h-24 rounded-xl overflow-hidden"
                  whileHover={{ scale: 1.05 }}
                >
                  <Image
                    src={event.image}
                    alt={event.title}
                    className="w-full h-full object-cover"
                  />
                </motion.div>

                <div className="flex-1 min-w-0">
                  <div className="flex items-start justify-between mb-2">
                    <div>
                      <Badge
                        variant={getCategoryBadgeVariant(event.category) as any}
                        size="lg"
                        glow="medium"
                        className="mb-2"
                      >
                        {event.category}
                      </Badge>
                      <h3 className="font-bold text-lg text-white group-hover:text-aesthetic-cyan transition-colors duration-300">
                        {event.title}
                      </h3>
                    </div>
                    <div className="text-right">
                      <div className="font-bold text-xl text-gray-900 dark:text-gray-100">
                        ${event.price}
                      </div>
                      <div className="flex items-center gap-1 text-sm text-gray-600 dark:text-gray-400">
                        <Star className="w-4 h-4 text-yellow-500 fill-current" />
                        {event.rating}
                      </div>
                    </div>
                  </div>

                  <div className="flex items-center gap-4 text-sm text-gray-600 dark:text-gray-400 mb-4">
                    <div className="flex items-center gap-1">
                      <Calendar className="w-4 h-4" />
                      {event.date}
                    </div>
                    <div className="flex items-center gap-1">
                      <MapPin className="w-4 h-4" />
                      {event.location}
                    </div>
                    <div className="flex items-center gap-1">
                      <Users className="w-4 h-4" />
                      {event.attendees}
                    </div>
                  </div>

                  <motion.div
                    whileHover={{ scale: 1.02 }}
                    whileTap={{ scale: 0.98 }}
                    className="inline-block flex-shrink-0"
                  >
                    <Link to={`/event/${event.id}`}>
                      <Button
                        size="sm"
                        className="genz-button text-xs px-3 py-1.5 whitespace-nowrap"
                      >
                        🎟️ Get Tickets
                      </Button>
                    </Link>
                  </motion.div>
                </div>
              </div>
            </CardContent>
          </Card>
        </AnimatedCard>
      </motion.div>
    );
  }

  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ delay: index * 0.1, duration: 0.5 }}
      whileHover={{ y: -8, transition: { duration: 0.2 } }}
      className="group"
    >
      <AnimatedCard
        effects={["sparkles", "shimmer"]}
        intensity="medium"
        className="group"
      >
        <Card className="genz-event-card overflow-hidden">
          <div className="relative overflow-hidden">
            <Image
              src={event.image}
              alt={event.title}
              className="w-full h-48 object-cover"
              animated={true}
              whileHover={{ scale: 1.05 }}
              transition={{ duration: 0.3 }}
            />
            <div className="absolute top-4 left-4">
              <Badge
                variant={getCategoryBadgeVariant(event.category) as any}
                size="lg"
                glow="strong"
                className="shimmer-effect"
              >
                {event.category}
              </Badge>
            </div>
            {event.featured && (
              <div className="absolute top-4 right-4">
                <Badge
                  variant="neon-party"
                  size="lg"
                  glow="strong"
                  className="animate-float"
                >
                  ⭐ Featured
                </Badge>
              </div>
            )}
          </div>

          <CardContent className="p-6">
            <div className="flex items-center gap-2 text-sm text-gray-600 dark:text-gray-400 mb-2">
              <Calendar className="w-4 h-4" />
              {event.date}
            </div>

            <h3 className="font-bold text-lg text-white mb-2 group-hover:text-aesthetic-cyan transition-colors duration-300">
              {event.title}
            </h3>

            <div className="flex items-center gap-2 text-sm text-gray-600 dark:text-gray-400 mb-4">
              <MapPin className="w-4 h-4" />
              {event.location}
            </div>

            <div className="flex items-center justify-between">
              <div className="flex items-center gap-4">
                <span className="font-bold text-xl text-gray-900 dark:text-gray-100">
                  ${event.price}
                </span>
                <div className="flex items-center gap-1 text-sm text-gray-600 dark:text-gray-400">
                  <Users className="w-4 h-4" />
                  {event.attendees}
                </div>
                <div className="flex items-center gap-1 text-sm text-gray-600 dark:text-gray-400">
                  <Star className="w-4 h-4 text-yellow-500 fill-current" />
                  {event.rating}
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
                    className="genz-button text-xs px-3 py-1.5 whitespace-nowrap"
                  >
                    🎟️ Book Now
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

export default function Events() {
  const [searchQuery, setSearchQuery] = useState("");
  const [selectedCategory, setSelectedCategory] = useState("All");
  const [viewMode, setViewMode] = useState<"grid" | "list">("grid");
  const [isFilterOpen, setIsFilterOpen] = useState(false);
  const [sortBy, setSortBy] = useState("featured");
  const { theme } = useTheme();

  // Advanced filter states
  const [priceRange, setPriceRange] = useState([0, 500]);
  const [selectedCategories, setSelectedCategories] = useState<string[]>([]);
  const [selectedDateRange, setSelectedDateRange] = useState("all");
  const [selectedRating, setSelectedRating] = useState(0);
  const [filtersApplied, setFiltersApplied] = useState(false);

  const filteredEvents = allEvents.filter((event) => {
    const matchesSearch =
      event.title.toLowerCase().includes(searchQuery.toLowerCase()) ||
      event.location.toLowerCase().includes(searchQuery.toLowerCase());

    const matchesCategory =
      selectedCategory === "All" || event.category === selectedCategory;

    // Advanced filter logic
    const matchesPrice =
      !filtersApplied ||
      (event.price >= priceRange[0] && event.price <= priceRange[1]);

    const matchesAdvancedCategories =
      !filtersApplied ||
      selectedCategories.length === 0 ||
      selectedCategories.includes(event.category);

    const matchesRating =
      !filtersApplied || selectedRating === 0 || event.rating >= selectedRating;

    // Note: Date filtering would need proper date parsing in a real app
    const matchesDate = !filtersApplied || selectedDateRange === "all";

    return (
      matchesSearch &&
      matchesCategory &&
      matchesPrice &&
      matchesAdvancedCategories &&
      matchesRating &&
      matchesDate
    );
  });

  const handleApplyFilters = () => {
    setFiltersApplied(true);
    setIsFilterOpen(false);
  };

  const sortedEvents = [...filteredEvents].sort((a, b) => {
    switch (sortBy) {
      case "price-low":
        return a.price - b.price;
      case "price-high":
        return b.price - a.price;
      case "rating":
        return b.rating - a.rating;
      case "date":
        return new Date(a.date).getTime() - new Date(b.date).getTime();
      default:
        return b.featured ? 1 : -1;
    }
  });

  return (
    <div className="min-h-screen" style={{ backgroundColor: "#0D0D0D" }}>
      {/* GenZ Particles */}
      <GenZParticles />

      {/* Header */}
      <motion.div
        className="bg-black/20 backdrop-blur-md border-b border-white/10 mt-16 sm:mt-20"
        initial={{ y: -100 }}
        animate={{ y: 0 }}
        transition={{ duration: 0.5 }}
      >
        <div className="max-w-7xl mx-auto px-6 py-6">
          <div className="flex flex-col lg:flex-row lg:items-center lg:justify-between gap-4">
            <div className="flex-1">
              <h1 className="neon-heading text-3xl lg:text-4xl mb-2 leading-tight">
                🎉 Discover Epic Events 🎉
              </h1>
              <p className="body-text text-base lg:text-lg leading-relaxed">
                Find your next unforgettable experience!
              </p>
            </div>

            <div className="flex items-center gap-4 flex-shrink-0">
              <motion.div
                whileHover={{ scale: 1.02 }}
                whileTap={{ scale: 0.98 }}
              >
                <Button
                  variant="outline"
                  size="sm"
                  onClick={() => setIsFilterOpen(true)}
                  className="lg:hidden neon-cyan-bg"
                >
                  <SlidersHorizontal className="w-4 h-4 mr-2" />
                  Filters
                </Button>
              </motion.div>

              <div className="flex items-center gap-2">
                <motion.div
                  whileHover={{ scale: 1.05 }}
                  whileTap={{ scale: 0.95 }}
                >
                  <Button
                    variant={viewMode === "grid" ? "default" : "outline"}
                    size="sm"
                    onClick={() => setViewMode("grid")}
                    className={`rounded-xl ${viewMode === "grid" ? "neon-cyan-bg" : ""}`}
                  >
                    <Grid className="w-4 h-4" />
                  </Button>
                </motion.div>
                <motion.div
                  whileHover={{ scale: 1.05 }}
                  whileTap={{ scale: 0.95 }}
                >
                  <Button
                    variant={viewMode === "list" ? "default" : "outline"}
                    size="sm"
                    onClick={() => setViewMode("list")}
                    className={`rounded-xl ${viewMode === "list" ? "neon-cyan-bg" : ""}`}
                  >
                    <List className="w-4 h-4" />
                  </Button>
                </motion.div>
              </div>
            </div>
          </div>
        </div>
      </motion.div>

      <div className="max-w-7xl mx-auto px-6 pt-8 pb-8">
        {/* Host Event CTA Banner */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className="bg-gradient-to-r from-aesthetic-violet via-aesthetic-electric to-aesthetic-cyan rounded-3xl p-6 lg:p-8 mb-8 mt-4 text-white overflow-hidden relative shadow-2xl"
        >
          <div className="absolute inset-0 overflow-hidden">
            {[...Array(15)].map((_, i) => (
              <motion.div
                key={i}
                className="absolute rounded-full bg-white/10"
                style={{
                  left: `${Math.random() * 100}%`,
                  top: `${Math.random() * 100}%`,
                  width: `${10 + Math.random() * 20}px`,
                  height: `${10 + Math.random() * 20}px`,
                }}
                animate={{
                  y: [0, -20, 0],
                  opacity: [0.3, 0.8, 0.3],
                }}
                transition={{
                  duration: 2 + Math.random() * 3,
                  repeat: Infinity,
                  delay: Math.random() * 2,
                }}
              />
            ))}
          </div>

          <div className="relative z-10 flex flex-col md:flex-row items-center justify-between gap-6">
            <div className="text-center md:text-left">
              <h2 className="neon-heading text-3xl mb-2">
                🌟 Ready to Host Your Own Epic Event? 🌟
              </h2>
              <p className="body-text text-lg text-white/90">
                Join thousands of successful hosts earning money while creating
                amazing experiences!
              </p>
              <div className="flex items-center gap-6 mt-4 text-sm">
                <div className="flex items-center gap-2">
                  <div className="w-8 h-8 bg-yellow-400 rounded-full flex items-center justify-center">
                    <span className="text-black font-bold">$</span>
                  </div>
                  <span>Earn $1K+ per event</span>
                </div>
                <div className="flex items-center gap-2">
                  <div className="w-8 h-8 bg-green-400 rounded-full flex items-center justify-center">
                    <span className="text-black font-bold">⭐</span>
                  </div>
                  <span>98% success rate</span>
                </div>
              </div>
            </div>

            <div className="flex flex-col sm:flex-row gap-3">
              <motion.div
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
              >
                <Button
                  onClick={() => (window.location.href = "/dashboard")}
                  className="genz-button px-8 py-4 text-lg font-black"
                >
                  🚀 START HOSTING NOW!
                </Button>
              </motion.div>
              <motion.div
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
              >
                <Button
                  variant="outline"
                  className="border-white/50 text-white hover:bg-white/10 px-6 py-4 rounded-2xl font-bold backdrop-blur-sm"
                >
                  📖 Learn More
                </Button>
              </motion.div>
            </div>
          </div>
        </motion.div>

        <div className="flex gap-8">
          {/* Filter Panel */}
          <div className="hidden lg:block flex-shrink-0">
            <FilterPanel
              isOpen={true}
              onClose={() => {}}
              priceRange={priceRange}
              setPriceRange={setPriceRange}
              selectedCategories={selectedCategories}
              setSelectedCategories={setSelectedCategories}
              selectedDateRange={selectedDateRange}
              setSelectedDateRange={setSelectedDateRange}
              selectedRating={selectedRating}
              setSelectedRating={setSelectedRating}
              onApplyFilters={handleApplyFilters}
            />
          </div>
          <FilterPanel
            isOpen={isFilterOpen}
            onClose={() => setIsFilterOpen(false)}
            priceRange={priceRange}
            setPriceRange={setPriceRange}
            selectedCategories={selectedCategories}
            setSelectedCategories={setSelectedCategories}
            selectedDateRange={selectedDateRange}
            setSelectedDateRange={setSelectedDateRange}
            selectedRating={selectedRating}
            setSelectedRating={setSelectedRating}
            onApplyFilters={handleApplyFilters}
          />

          {/* Main Content */}
          <div className="flex-1">
            {/* Search and Controls */}
            <motion.div
              className="mb-8"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5 }}
            >
              <div className="flex flex-col md:flex-row gap-4 mb-6">
                <div className="relative flex-1">
                  <Search className="absolute left-3 top-3 w-5 h-5 text-gray-400 dark:text-gray-500" />
                  <Input
                    placeholder="Search events, locations..."
                    value={searchQuery}
                    onChange={(e) => setSearchQuery(e.target.value)}
                    className="pl-10 border-0 bg-white/90 dark:bg-gray-800/90 backdrop-blur-sm focus:bg-white dark:focus:bg-gray-800 transition-colors rounded-xl shadow-md text-gray-900 dark:text-gray-100 placeholder:text-gray-500 dark:placeholder:text-gray-400"
                  />
                </div>

                <Select value={sortBy} onValueChange={setSortBy}>
                  <SelectTrigger className="w-48 border-0 bg-white/90 dark:bg-gray-800/90 backdrop-blur-sm rounded-xl shadow-md text-gray-900 dark:text-gray-100">
                    <SelectValue />
                  </SelectTrigger>
                  <SelectContent>
                    <SelectItem value="featured">Featured First</SelectItem>
                    <SelectItem value="date">Date</SelectItem>
                    <SelectItem value="price-low">
                      Price: Low to High
                    </SelectItem>
                    <SelectItem value="price-high">
                      Price: High to Low
                    </SelectItem>
                    <SelectItem value="rating">Highest Rated</SelectItem>
                  </SelectContent>
                </Select>
              </div>

              {/* Category Pills */}
              <div className="flex flex-wrap gap-2">
                {categories.map((category) => (
                  <motion.div
                    key={category}
                    whileHover={{ scale: 1.05 }}
                    whileTap={{ scale: 0.95 }}
                  >
                    <Button
                      variant="ghost"
                      size="sm"
                      onClick={() => setSelectedCategory(category)}
                      className={`category-pill ${
                        selectedCategory === category ? "active" : ""
                      }`}
                    >
                      {category}
                    </Button>
                  </motion.div>
                ))}
              </div>
            </motion.div>

            {/* Results Count */}
            <motion.div
              className="mb-6"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ delay: 0.2 }}
            >
              <p className="body-text">
                Found {sortedEvents.length} events
                {selectedCategory !== "All" && ` in ${selectedCategory}`}
              </p>
            </motion.div>

            {/* Events Grid/List */}
            <div
              className={
                viewMode === "grid"
                  ? "grid grid-cols-1 md:grid-cols-2 xl:grid-cols-3 gap-6"
                  : "space-y-4"
              }
            >
              <AnimatePresence mode="wait">
                {sortedEvents.map((event, index) => (
                  <EventCard
                    key={`${event.id}-${viewMode}`}
                    event={event}
                    index={index}
                    viewMode={viewMode}
                  />
                ))}
              </AnimatePresence>
            </div>

            {sortedEvents.length === 0 && (
              <motion.div
                className="text-center py-16"
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
              >
                <div className="w-24 h-24 bg-gray-200 rounded-full flex items-center justify-center mx-auto mb-4">
                  <Search className="w-8 h-8 text-gray-400" />
                </div>
                <h3 className="subheading-text text-xl font-semibold mb-2">
                  No events found
                </h3>
                <p className="body-text">
                  Try adjusting your search or filters
                </p>
              </motion.div>
            )}
          </div>
        </div>
      </div>
    </div>
  );
}
