"use client"

import { ThemeProvider } from "@/providers/ThemeProvider";
import NavbarLayoutFloatingOverlay from '@/components/navbar/NavbarLayoutFloatingOverlay/NavbarLayoutFloatingOverlay';
import HeroSplit from '@/components/sections/hero/HeroSplit';
import TextSplitAbout from '@/components/sections/about/TextSplitAbout';
import ProductCardTwo from '@/components/sections/product/ProductCardTwo';
import FeatureCardOne from '@/components/sections/feature/FeatureCardOne';
import PricingCardOne from '@/components/sections/pricing/PricingCardOne';
import MetricCardTwo from '@/components/sections/metrics/MetricCardTwo';
import TeamCardTwo from '@/components/sections/team/TeamCardTwo';
import TestimonialCardOne from '@/components/sections/testimonial/TestimonialCardOne';
import SocialProofOne from '@/components/sections/socialProof/SocialProofOne';
import FaqBase from '@/components/sections/faq/FaqBase';
import BlogCardOne from '@/components/sections/blog/BlogCardOne';
import ContactCenterForm from '@/components/sections/contact/ContactCenterForm';
import FooterBase from '@/components/sections/footer/FooterBase';
import { Star, Award } from 'lucide-react';

export default function Home() {
  return (
    <ThemeProvider
      defaultButtonVariant="hover-magnetic"
      defaultTextAnimation="background-highlight"
      borderRadius="pill"
    >
      <div id="nav" data-section="nav">
        <NavbarLayoutFloatingOverlay
          navItems={[
            { name: "Rooms", id: "rooms" },
            { name: "Amenities", id: "amenities" },
            { name: "About", id: "about" },
            { name: "Reviews", id: "testimonials" },
            { name: "Contact", id: "contact" }
          ]}
          brandName="Grand Vista Hotel"
          button={{
            text: "Book Now",
            href: "contact"
          }}
        />
      </div>

      <div id="hero" data-section="hero">
        <HeroSplit
          title="Experience Luxury at Grand Vista"
          description="Indulge in world-class hospitality with breathtaking views, premium amenities, and exceptional service in the heart of the city."
          tag="5-Star Hotel"
          tagIcon={Star}
          imageSrc="https://images.pexels.com/photos/189295/pexels-photo-189295.jpeg?auto=compress&cs=tinysrgb&h=650&w=940"
          imageAlt="Elegant hotel lobby interior"
          imagePosition="right"
          buttons={[
            {
              text: "Book Your Stay",
              href: "contact"
            },
            {
              text: "Explore Rooms",
              href: "rooms"
            }
          ]}
        />
      </div>

      <div id="about" data-section="about">
        <TextSplitAbout
          title="Grand Vista Hotel"
          description={[
            "Experience unparalleled luxury and sophistication in our iconic downtown hotel, where timeless elegance meets modern comfort.",
            "With 50 years of hospitality excellence, we've been creating unforgettable memories for discerning travelers from around the world."
          ]}
          buttons={[
            {
              text: "Our Story",
              href: "about"
            }
          ]}
        />
      </div>

      <div id="rooms" data-section="rooms">
        <ProductCardTwo
          title="Luxurious Accommodations"
          description="Choose from our collection of elegantly appointed rooms and suites, each designed to provide the ultimate comfort and style."
          tag="Premium Rooms"
          products={[
            {
              id: "1",
              brand: "Grand Vista",
              name: "Deluxe King Room",
              price: "$299/night",
              rating: 5,
              reviewCount: "2.1k",
              imageSrc: "https://images.pexels.com/photos/3659683/pexels-photo-3659683.jpeg?auto=compress&cs=tinysrgb&h=650&w=940",
              imageAlt: "Deluxe King Room with city view"
            },
            {
              id: "2",
              brand: "Grand Vista",
              name: "Executive Suite",
              price: "$599/night",
              rating: 5,
              reviewCount: "1.8k",
              imageSrc: "https://images.pexels.com/photos/14917460/pexels-photo-14917460.jpeg?auto=compress&cs=tinysrgb&h=650&w=940",
              imageAlt: "Executive Suite with living area"
            },
            {
              id: "3",
              brand: "Grand Vista",
              name: "Presidential Suite",
              price: "$1299/night",
              rating: 5,
              reviewCount: "892",
              imageSrc: "https://images.pexels.com/photos/271639/pexels-photo-271639.jpeg?auto=compress&cs=tinysrgb&h=650&w=940",
              imageAlt: "Presidential Suite luxury interior"
            }
          ]}
        />
      </div>

      <div id="amenities" data-section="amenities">
        <FeatureCardOne
          title="World-Class Amenities"
          description="Discover our extensive collection of luxury amenities designed to enhance every moment of your stay."
          tag="Premium Services"
          features={[
            {
              title: "Luxury Spa & Wellness",
              description: "Rejuvenate your senses at our award-winning spa featuring signature treatments and wellness programs.",
              imageSrc: "https://images.pexels.com/photos/6957079/pexels-photo-6957079.jpeg?auto=compress&cs=tinysrgb&h=650&w=940",
              imageAlt: "Spa and wellness center"
            },
            {
              title: "Fine Dining Restaurant",
              description: "Experience culinary excellence at our Michelin-starred restaurant with panoramic city views.",
              imageSrc: "https://images.pexels.com/photos/2291636/pexels-photo-2291636.jpeg?auto=compress&cs=tinysrgb&h=650&w=940",
              imageAlt: "Fine dining restaurant interior"
            },
            {
              title: "Rooftop Pool & Lounge",
              description: "Unwind at our infinity pool with breathtaking skyline views and premium poolside service.",
              imageSrc: "https://images.pexels.com/photos/2403017/pexels-photo-2403017.jpeg?auto=compress&cs=tinysrgb&h=650&w=940",
              imageAlt: "Rooftop swimming pool"
            },
            {
              title: "Fitness & Recreation",
              description: "Stay active in our state-of-the-art fitness center equipped with the latest exercise technology.",
              imageSrc: "https://images.pexels.com/photos/4498574/pexels-photo-4498574.jpeg?auto=compress&cs=tinysrgb&h=650&w=940",
              imageAlt: "Modern fitness center"
            }
          ]}
        />
      </div>

      <div id="pricing" data-section="pricing">
        <PricingCardOne
          title="Stay Packages"
          description="Choose from our carefully curated packages designed to make your stay exceptional."
          tag="Special Offers"
          plans={[
            {
              id: "1",
              badge: "Popular",
              badgeIcon: Star,
              price: "$449/night",
              subtitle: "Perfect for romantic getaways",
              features: [
                "Deluxe King Room",
                "Welcome champagne",
                "Late checkout until 2 PM",
                "Complimentary breakfast",
                "Access to spa facilities"
              ]
            },
            {
              id: "2",
              badge: "Best Value",
              badgeIcon: Award,
              price: "$849/night",
              subtitle: "Ideal for special occasions",
              features: [
                "Executive Suite",
                "Personal concierge service",
                "Private balcony with city views",
                "Dinner for two at our restaurant",
                "Priority spa reservations",
                "Airport transfer service"
              ]
            }
          ]}
        />
      </div>

      <div id="metrics" data-section="metrics">
        <MetricCardTwo
          title="Award-Winning Excellence"
          description="Recognized globally for our commitment to luxury hospitality and exceptional guest experiences."
          tag="Our Achievements"
          metrics={[
            {
              id: "1",
              value: "98%",
              description: "Guest Satisfaction Rate"
            },
            {
              id: "2",
              value: "50+",
              description: "Years of Excellence"
            },
            {
              id: "3",
              value: "15",
              description: "International Awards"
            },
            {
              id: "4",
              value: "24/7",
              description: "Concierge Service"
            }
          ]}
        />
      </div>

      <div id="team" data-section="team">
        <TeamCardTwo
          title="Meet Our Team"
          description="Our dedicated hospitality professionals are committed to making your stay unforgettable."
          tag="Leadership"
          members={[
            {
              id: "1",
              name: "James Morrison",
              role: "General Manager",
              description: "With over 20 years in luxury hospitality, James ensures every guest receives world-class service.",
              imageSrc: "https://images.pexels.com/photos/12885861/pexels-photo-12885861.jpeg?auto=compress&cs=tinysrgb&h=650&w=940",
              imageAlt: "James Morrison, General Manager"
            },
            {
              id: "2",
              name: "Sophie Chen",
              role: "Guest Relations Director",
              description: "Sophie leads our guest experience team, creating personalized stays that exceed expectations.",
              imageSrc: "https://images.pexels.com/photos/1036622/pexels-photo-1036622.jpeg?auto=compress&cs=tinysrgb&h=650&w=940",
              imageAlt: "Sophie Chen, Guest Relations Director"
            }
          ]}
        />
      </div>

      <div id="testimonials" data-section="testimonials">
        <TestimonialCardOne
          title="Guest Experiences"
          description="Discover what our guests say about their unforgettable stays at Grand Vista Hotel."
          tag="Reviews"
          testimonials={[
            {
              id: "1",
              name: "Sarah Johnson",
              role: "CEO",
              company: "TechVision Inc",
              rating: 5,
              imageSrc: "https://images.pexels.com/photos/789822/pexels-photo-789822.jpeg?auto=compress&cs=tinysrgb&h=650&w=940",
              imageAlt: "Sarah Johnson, satisfied guest"
            },
            {
              id: "2",
              name: "Michael Chen",
              role: "Investment Partner",
              company: "Capital Ventures",
              rating: 5,
              imageSrc: "https://images.pexels.com/photos/12885861/pexels-photo-12885861.jpeg?auto=compress&cs=tinysrgb&h=650&w=940",
              imageAlt: "Michael Chen, satisfied guest"
            },
            {
              id: "3",
              name: "Emily Rodriguez",
              role: "Creative Director",
              company: "Design Studio",
              rating: 5,
              imageSrc: "https://images.pexels.com/photos/1036622/pexels-photo-1036622.jpeg?auto=compress&cs=tinysrgb&h=650&w=940",
              imageAlt: "Emily Rodriguez, satisfied guest"
            },
            {
              id: "4",
              name: "David Kim",
              role: "Entrepreneur",
              company: "Innovation Labs",
              rating: 5,
              imageSrc: "https://images.pexels.com/photos/5716037/pexels-photo-5716037.jpeg?auto=compress&cs=tinysrgb&h=650&w=940",
              imageAlt: "David Kim, satisfied guest"
            }
          ]}
        />
      </div>

      <div id="socialProof" data-section="socialProof">
        <SocialProofOne
          title="Trusted by Leading Organizations"
          description="Corporate partners and luxury travelers choose Grand Vista for exceptional hospitality experiences."
          tag="Partners"
          logos={[
            "/placeholders/placeholder1.webp",
            "/placeholders/placeholder1.webp",
            "/placeholders/placeholder1.webp",
            "/placeholders/placeholder1.webp",
            "/placeholders/placeholder1.webp",
            "/placeholders/placeholder1.webp",
            "/placeholders/placeholder1.webp"
          ]}
        />
      </div>

      <div id="faq" data-section="faq">
        <FaqBase
          title="Frequently Asked Questions"
          description="Find answers to common questions about your stay at Grand Vista Hotel."
          tag="Help"
          faqs={[
            {
              id: "1",
              title: "What time is check-in and check-out?",
              content: "Check-in begins at 3:00 PM and check-out is at 12:00 PM. Early check-in and late check-out may be available upon request and subject to availability."
            },
            {
              id: "2",
              title: "Do you offer airport transportation?",
              content: "Yes, we provide luxury airport transfer service. Please contact our concierge team to arrange pickup and drop-off times for your convenience."
            },
            {
              id: "3",
              title: "What dining options are available?",
              content: "Grand Vista features a Michelin-starred restaurant, casual lounge, rooftop bar, and 24-hour room service. Reservations are recommended for our fine dining restaurant."
            },
            {
              id: "4",
              title: "Is parking available at the hotel?",
              content: "Yes, we offer valet parking service for $35 per night. Self-parking is also available in our secure garage for $25 per night."
            }
          ]}
        />
      </div>

      <div id="blog" data-section="blog">
        <BlogCardOne
          title="Hotel Stories & Updates"
          description="Stay informed about Grand Vista's latest news, travel insights, and luxury hospitality trends."
          tag="News"
          blogs={[
            {
              id: "1",
              category: "Travel",
              title: "Top 10 City Attractions Near Grand Vista",
              excerpt: "Discover the best cultural sites, shopping, and entertainment within walking distance of our hotel.",
              imageSrc: "https://images.pexels.com/photos/34428372/pexels-photo-34428372.jpeg?auto=compress&cs=tinysrgb&h=650&w=940",
              imageAlt: "City attractions near hotel",
              authorName: "Travel Team",
              authorAvatar: "https://images.pexels.com/photos/789822/pexels-photo-789822.jpeg?auto=compress&cs=tinysrgb&h=650&w=940",
              date: "15 Jan 2025"
            },
            {
              id: "2",
              category: "Dining",
              title: "Seasonal Menu Launch at Azure Restaurant",
              excerpt: "Our executive chef unveils a new collection of dishes featuring locally sourced ingredients.",
              imageSrc: "https://images.pexels.com/photos/2291636/pexels-photo-2291636.jpeg?auto=compress&cs=tinysrgb&h=650&w=940",
              imageAlt: "New seasonal menu dishes",
              authorName: "Culinary Team",
              authorAvatar: "https://images.pexels.com/photos/12885861/pexels-photo-12885861.jpeg?auto=compress&cs=tinysrgb&h=650&w=940",
              date: "10 Jan 2025"
            }
          ]}
        />
      </div>

      <div id="contact" data-section="contact">
        <ContactCenterForm
          title="Book Your Stay"
          description="Ready to experience luxury at Grand Vista Hotel? Contact our reservations team to plan your perfect getaway."
          inputs={[
            {
              name: "name",
              type: "text",
              placeholder: "Your Name",
              required: true
            },
            {
              name: "email",
              type: "email",
              placeholder: "Email Address",
              required: true
            },
            {
              name: "phone",
              type: "tel",
              placeholder: "Phone Number",
              required: false
            },
            {
              name: "checkin",
              type: "date",
              placeholder: "Check-in Date",
              required: true
            },
            {
              name: "checkout",
              type: "date",
              placeholder: "Check-out Date",
              required: true
            }
          ]}
          textarea={{
            name: "message",
            placeholder: "Special requests or preferences...",
            rows: 4,
            required: false
          }}
          buttonText="Submit Reservation"
        />
      </div>

      <div id="footer" data-section="footer">
        <FooterBase
          columns={[
            {
              title: "Hotel",
              items: [
                {
                  label: "Rooms & Suites",
                  href: "rooms"
                },
                {
                  label: "Amenities",
                  href: "amenities"
                },
                {
                  label: "About Us",
                  href: "about"
                }
              ]
            },
            {
              title: "Services",
              items: [
                {
                  label: "Concierge",
                  href: "concierge"
                },
                {
                  label: "Spa & Wellness",
                  href: "spa"
                },
                {
                  label: "Dining",
                  href: "dining"
                }
              ]
            },
            {
              title: "Contact",
              items: [
                {
                  label: "Reservations",
                  href: "contact"
                },
                {
                  label: "Guest Services",
                  href: "services"
                },
                {
                  label: "Location",
                  href: "location"
                }
              ]
            }
          ]}
          copyrightText="© 2025 | Grand Vista Hotel"
        />
      </div>
    </ThemeProvider>
  );
}