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

// Party-focused event data
const allEvents = [
  {
    id: 1,
    title: "Epic Birthday Bash 2024 🎉",
    location: "Downtown Party Venue, NYC",
    date: "Jul 15, 2024",
    price: 45,
    image:
      "https://images.unsplash.com/photo-1530103862676-de8c9debad1d?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=2340&q=80",
    attendees: 150,
    rating: 4.9,
    category: "Party",
    featured: true,
    ageRestriction: 18,
  },
  {
    id: 2,
    title: "Rooftop Dance Party 💃",
    location: "Sky Lounge, Miami",
    date: "Aug 22, 2024",
    price: 65,
    image:
      "https://images.unsplash.com/photo-1470229722913-7c0e2dbbafd3?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=2340&q=80",
    attendees: 200,
    rating: 4.8,
    category: "Party",
    featured: true,
    ageRestriction: 21,
  },
  {
    id: 3,
    title: "Pool Party Extravaganza 🏊‍♀️",
    location: "Luxury Resort, LA",
    date: "Sep 10, 2024",
    price: 55,
    image:
      "https://images.unsplash.com/photo-1544551763-46a013bb70d5?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=2340&q=80",
    attendees: 180,
    rating: 4.7,
    category: "Party",
    featured: false,
    ageRestriction: 18,
  },
  {
    id: 4,
    title: "Costume Party Madness 🎭",
    location: "Grand Ballroom, Chicago",
    date: "Oct 28, 2024",
    price: 40,
    image:
      "https://images.unsplash.com/photo-1492684223066-81342ee5ff30?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=2340&q=80",
    attendees: 250,
    rating: 4.6,
    category: "Party",
    featured: false,
    ageRestriction: 18,
  },
  {
    id: 5,
    title: "New Year's Eve Celebration 🎆",
    location: "Times Square View, NYC",
    date: "Dec 31, 2024",
    price: 120,
    image:
      "https://images.unsplash.com/photo-1467810563316-b5476525c0f9?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=2340&q=80",
    attendees: 500,
    rating: 4.9,
    category: "Party",
    featured: true,
    ageRestriction: 21,
  },
  {
    id: 6,
    title: "College Graduation Party 🎓",
    location: "University Club, Boston",
    date: "May 18, 2024",
    price: 35,
    image:
      "https://images.unsplash.com/photo-1523580494863-6f3031224c94?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=2340&q=80",
    attendees: 120,
    rating: 4.5,
    category: "Party",
    featured: false,
    ageRestriction: 18,
  },
  {
    id: 7,
    title: "Beach Bonfire Party 🔥",
    location: "Malibu Beach, CA",
    date: "Jul 5, 2024",
    price: 30,
    image:
      "https://images.unsplash.com/photo-1507525428034-b723cf961d3e?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=2340&q=80",
    attendees: 80,
    rating: 4.8,
    category: "Party",
    featured: false,
    ageRestriction: 18,
  },
  {
    id: 8,
    title: "House Warming Party 🏠",
    location: "Private Residence, Austin",
    date: "Jun 15, 2024",
    price: 25,
    image:
      "https://images.unsplash.com/photo-1574391884720-bbc5b58f955d?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=2340&q=80",
    attendees: 60,
    rating: 4.7,
    category: "Party",
    featured: false,
    ageRestriction: null,
  },
];

const categories = [
  "All",
  "Birthday Party",
  "Dance Party",
  "Pool Party",
  "Costume Party",
  "Celebration",
  "House Party",
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
                  className="lg:hidden text-muted-foreground hover:text-foreground transition-colors duration-300"
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
                          className="text-sm text-foreground cursor-pointer font-medium transition-colors duration-300"
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
                    <div className="flex justify-between text-sm text-muted-foreground transition-colors duration-300">
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
                    <SelectTrigger className="border-border bg-background text-foreground transition-colors duration-300">
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
                          className="text-sm text-foreground cursor-pointer flex items-center transition-colors duration-300"
                        >
                          {rating}+
                          <div className="flex ml-1">
                            {[...Array(5)].map((_, i) => (
                              <Star
                                key={i}
                                className={`w-3 h-3 ${i < rating ? "text-yellow-400 fill-current" : "text-muted-foreground"}`}
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
        <Card className="bg-card/90 backdrop-blur-sm rounded-2xl overflow-hidden border border-border/50 hover:border-border transition-all duration-300">
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
                    <Badge className="bg-party-pink text-white font-bold px-3 py-1 text-xs rounded-full mb-2">
                      🎉 {event.category}
                    </Badge>
                    <h3 className="font-bold text-lg text-white group-hover:text-party-pink transition-colors duration-300">
                      {event.title}
                    </h3>
                  </div>
                  <div className="text-right">
                    <div className="font-bold text-xl text-white">
                      ${event.price}
                    </div>
                    <div className="flex items-center gap-1 text-sm text-muted-foreground transition-colors duration-300">
                      <Star className="w-4 h-4 text-yellow-500 fill-current" />
                      {event.rating}
                    </div>
                  </div>
                </div>

                <div className="flex items-center gap-4 text-sm text-muted-foreground transition-colors duration-300 mb-4">
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
                      className="bg-gradient-to-r from-party-pink to-party-blue hover:from-party-blue hover:to-party-pink text-white font-semibold px-4 py-2 rounded-lg transition-all duration-300"
                    >
                      JOIN PARTY 🎉
                    </Button>
                  </Link>
                </motion.div>
              </div>
            </div>
          </CardContent>
        </Card>
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
      <div className="relative bg-card/90 backdrop-blur-sm rounded-2xl overflow-hidden border border-border/50 hover:border-border transition-all duration-300 shadow-xl hover:shadow-2xl">
        {/* Image Section */}
        <div className="relative overflow-hidden h-48">
          <Image
            src={event.image}
            alt={event.title}
            className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
          />

          {/* Category Badge */}
          <div className="absolute top-4 left-4">
            <Badge className="bg-party-pink text-white font-bold px-3 py-1.5 text-xs rounded-full">
              🎉 {event.category}
            </Badge>
          </div>

          {/* Age Restriction Badge */}
          {event.ageRestriction && (
            <div className="absolute top-4 right-4">
              <Badge className="bg-red-600 text-white font-bold px-2 py-1 rounded-full text-xs">
                🔞 {event.ageRestriction}+
              </Badge>
            </div>
          )}

          {/* Gradient Overlay */}
          <div className="absolute inset-0 bg-gradient-to-t from-gray-900/80 via-transparent to-transparent" />
        </div>

        {/* Content Section */}
        <div className="p-6 space-y-4">
          {/* Date */}
          <div className="flex items-center gap-2 text-muted-foreground text-sm transition-colors duration-300">
            <Calendar className="w-4 h-4" />
            <span>{event.date}</span>
          </div>

          {/* Title */}
          <h3 className="text-white font-bold text-xl leading-tight group-hover:text-party-pink transition-colors duration-300">
            {event.title}
          </h3>

          {/* Location */}
          <div className="flex items-center gap-2 text-muted-foreground text-sm transition-colors duration-300">
            <MapPin className="w-4 h-4" />
            <span>{event.location}</span>
          </div>

          {/* Bottom Section */}
          <div className="flex items-center justify-between pt-2">
            {/* Price and Stats */}
            <div className="space-y-2">
              <div className="text-2xl font-bold text-white">
                ${event.price}
              </div>
              <div className="flex items-center gap-4 text-muted-foreground text-sm transition-colors duration-300">
                <div className="flex items-center gap-1">
                  <Users className="w-4 h-4" />
                  <span>{event.attendees}</span>
                </div>
                <div className="flex items-center gap-1">
                  <Star className="w-4 h-4 text-yellow-400 fill-current" />
                  <span>{event.rating}</span>
                </div>
              </div>
            </div>

            {/* Book Button */}
            <Link to={`/event/${event.id}`}>
              <motion.div
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
              >
                <Button className="bg-gradient-to-r from-party-pink to-party-blue hover:from-party-blue hover:to-party-pink text-white font-semibold px-6 py-2 rounded-xl transition-all duration-300">
                  JOIN PARTY 🎉
                </Button>
              </motion.div>
            </Link>
          </div>
        </div>
      </div>
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
    <div className="min-h-screen bg-background transition-colors duration-500">
      {/* Subtle background pattern */}
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_50%_50%,rgba(120,119,198,0.05),transparent_50%)]" />

      {/* Header */}
      <motion.div
        className="relative bg-card/80 backdrop-blur-md border-b border-border/50 mt-16 sm:mt-20 transition-colors duration-300"
        initial={{ y: -100 }}
        animate={{ y: 0 }}
        transition={{ duration: 0.5 }}
      >
        <div className="max-w-7xl mx-auto px-6 py-8">
          <div className="flex flex-col lg:flex-row lg:items-center lg:justify-between gap-4">
            <div className="flex-1">
              <h1 className="text-3xl lg:text-4xl font-bold text-foreground mb-2 leading-tight transition-colors duration-300">
                🎉 Discover Parties
              </h1>
              <p className="text-muted-foreground text-base lg:text-lg leading-relaxed transition-colors duration-300">
                Find your next epic party experience
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
                  className="lg:hidden bg-secondary/50 border-border/50 text-muted-foreground hover:bg-secondary hover:text-foreground transition-colors duration-300"
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
                    className={`rounded-xl ${
                      viewMode === "grid"
                        ? "bg-blue-600 text-white"
                        : "border-border text-muted-foreground hover:text-foreground transition-colors duration-300"
                    }`}
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
                    className={`rounded-xl ${
                      viewMode === "list"
                        ? "bg-blue-600 text-white"
                        : "border-border text-muted-foreground hover:text-foreground transition-colors duration-300"
                    }`}
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
          className="relative bg-card/60 backdrop-blur-sm border border-border/50 rounded-2xl p-6 lg:p-8 mb-8 mt-4 overflow-hidden transition-colors duration-300"
        >
          <div className="relative z-10 flex flex-col md:flex-row items-center justify-between gap-6">
            <div className="text-center md:text-left">
              <h2 className="text-2xl font-bold text-white mb-2">
                Ready to Host Your Own Party? 🎊
              </h2>
              <p className="text-muted-foreground text-lg transition-colors duration-300">
                Join thousands of successful hosts creating epic party
                experiences
              </p>
            </div>

            <div className="flex flex-col sm:flex-row gap-3">
              <motion.div
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
              >
                <Button
                  onClick={() => (window.location.href = "/dashboard")}
                  className="bg-blue-600 hover:bg-blue-700 text-white px-8 py-3 rounded-xl font-semibold transition-all duration-300"
                >
                  Start Hosting
                </Button>
              </motion.div>
              <motion.div
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
              >
                <Button
                  variant="outline"
                  className="border-border text-muted-foreground hover:bg-accent hover:text-accent-foreground px-6 py-3 rounded-xl font-semibold transition-colors duration-300"
                >
                  Learn More
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
                  <Search className="absolute left-3 top-3 w-5 h-5 text-muted-foreground transition-colors duration-300" />
                  <Input
                    placeholder="Search events, locations..."
                    value={searchQuery}
                    onChange={(e) => setSearchQuery(e.target.value)}
                    className="pl-10 bg-background/80 border border-border/50 backdrop-blur-sm focus:border-border transition-colors rounded-xl text-foreground placeholder:text-muted-foreground duration-300"
                  />
                </div>

                <Select value={sortBy} onValueChange={setSortBy}>
                  <SelectTrigger className="w-48 bg-background/80 border border-border/50 backdrop-blur-sm rounded-xl text-foreground transition-colors duration-300">
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
                      className={`px-4 py-2 rounded-xl font-medium transition-all duration-300 ${
                        selectedCategory === category
                          ? "bg-blue-600 text-white"
                          : "bg-secondary/50 text-muted-foreground hover:bg-secondary hover:text-foreground border border-border/50 transition-colors duration-300"
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
              <p className="text-muted-foreground text-sm transition-colors duration-300">
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
                <div className="w-24 h-24 bg-muted rounded-full flex items-center justify-center mx-auto mb-4 transition-colors duration-300">
                  <Search className="w-8 h-8 text-muted-foreground transition-colors duration-300" />
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
