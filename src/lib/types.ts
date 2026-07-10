export interface Destination {
  slug: string;
  name: string;
  region: string;
  tagline: string;
  description: string;
  image: string;
  featured?: boolean;
  duration: string;
  startingPrice: string;
  includes: string[];
}

export interface Service {
  title: string;
  description: string;
  image: string;
  features: string[];
}

export interface Testimonial {
  id: string;
  quote: string;
  author: string;
  location: string;
  trip: string;
  image?: string;
}

export interface JournalPost {
  slug: string;
  title: string;
  excerpt: string;
  content: string;
  image: string;
  category: string;
  date: string;
  readTime: string;
  author: string;
}

export interface TeamMember {
  name: string;
  role: string;
  bio: string;
  image: string;
  linkedin: string;
}

export interface FeaturedJourney {
  slug: string;
  title: string;
  subtitle: string;
  heroImage: string;
  duration: string;
  startingPrice: string;
  highlights: string[];
  itinerary: ItineraryDay[];
  gallery: string[];
  description: string;
}

export interface ItineraryDay {
  day: number;
  title: string;
  description: string;
  image?: string;
}
