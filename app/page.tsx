"use client"

import { useEffect, useRef } from "react"
import Link from "next/link"
import Image from "next/image"
import { Button } from "@/components/ui/button"
import { CheckCircle, Clock, Mail, Users } from "lucide-react"
import { PricingCard } from "@/components/pricing-card"
import { ContactForm } from "@/components/contact-form"
import { Navbar } from "@/components/navbar"
import { GlassTile } from "@/components/glass-tile"
import { ParallaxSection } from "@/components/parallax-scroll"
import { SuccessStoriesCarousel } from "@/components/success-stories-carousel"

export default function Home() {
  const mainRef = useRef<HTMLDivElement>(null)

  // Enable smooth scrolling
  useEffect(() => {
    document.documentElement.style.scrollBehavior = "smooth"

    // Setup intersection observers for section animations with reduced effects
    const sections = document.querySelectorAll(".content-section")
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            entry.target.classList.add("in-view")
          }
        })
      },
      { threshold: 0.1, rootMargin: "0px 0px -10% 0px" },
    )

    sections.forEach((section) => {
      observer.observe(section)
    })

    return () => {
      document.documentElement.style.scrollBehavior = "auto"
      sections.forEach((section) => {
        observer.unobserve(section)
      })
    }
  }, [])

  // Success stories data
  const successStories = [
    {
      appName: "Grocery Genius",
      developerName: "Brad",
      description:
        "A smart shopping list app that helps you organize your grocery shopping efficiently with AI-powered suggestions and categorization.",
      testimonial:
        "OG Beta Testers provided a friendly yet highly professional testing experience for Grocery Genius. Their process was smooth, and the insights were valuable. I highly recommend their service—and I'll definitely be using them again.",
      playStoreLink: "https://play.google.com/store/apps/details?id=bti.app.grocerygenius",
      imageSrc: "/images/grocery-genius-icon.png",
    },
    {
      appName: "Wheelie King 7 Lite",
      developerName: "Kimble Games",
      developerTitle: "Developer",
      description:
        "An action-packed motorcycle stunt game where players perform wheelies and other extreme stunts across challenging tracks.",
      testimonial:
        "OG Beta Testers helped us identify and resolve critical bugs in Wheelie King 7 Lite within just 14 days. Their detailed reports and real-device feedback gave us the confidence to push to production.",
      playStoreLink: "https://play.google.com/store/apps/details?id=com.kimblegames.wheeliekinglite2025",
      websiteLink: "https://www.kimblegames.com",
      socialType: "website",
      imageSrc: "/images/wheelie-king-lite.png",
    },
    {
      appName: "Sort",
      developerName: "Danish",
      developerTitle: "Developer",
      description:
        "A powerful organization app that helps users categorize, prioritize, and manage their tasks and information efficiently.",
      testimonial:
        "The team delivered outstanding testing services for Sort app with impressive attention to detail and efficiency. Their work exceeded expectations.",
      playStoreLink: "https://play.google.com/store/apps/details?id=com.sortapps.sort",
      imageSrc: "/images/sort-app-icon.png",
    },
    {
      appName: "Skibi-di",
      developerName: "Vi Nguyen",
      developerTitle: "Developer",
      description:
        "An innovative interactive app featuring animated characters and engaging content for entertainment and creative expression.",
      testimonial:
        "The testing team demonstrated exceptional engagement, provided insightful feedback, and maintained a courteous and professional approach throughout the process.",
      playStoreLink: "https://play.google.com/store/apps/details?id=com.live2d.demo",
      websiteLink: "https://x.com/ViNguyen29881",
      socialType: "twitter",
      imageSrc: "/images/skibidi-app-icon.png",
    },
  ]

  return (
    <div className="flex flex-col min-h-screen bg-black text-white overflow-hidden">
      <Navbar />

      {/* Fixed Background Logo with 3D Effect */}
      <div className="fixed inset-0 w-full h-full z-0 flex items-center justify-center pointer-events-none">
        <div className="absolute inset-0 bg-black"></div>

        {/* RGB glow effects */}
        <div className="absolute w-[80%] h-[80%] rounded-full bg-purple-600/20 blur-[100px] opacity-60"></div>
        <div className="absolute w-[60%] h-[60%] rounded-full bg-blue-600/20 blur-[100px] opacity-50 animate-pulse-slow"></div>

        {/* 3D Logo background with rounded edges */}
        <div className="relative w-[90%] max-w-3xl aspect-square rounded-[30%] overflow-hidden transform-gpu perspective-1000 rotate-y-3 rotate-x-2 animate-float">
          {/* Shadow layers for 3D effect */}
          <div className="absolute inset-0 bg-gradient-to-br from-purple-900/40 to-transparent"></div>
          <div className="absolute inset-0 bg-gradient-to-tl from-blue-900/30 to-transparent"></div>

          {/* Highlight effect */}
          <div className="absolute -inset-full bg-gradient-to-tr from-white/10 to-transparent opacity-70 animate-shine"></div>

          {/* Main logo */}
          <div className="absolute inset-0 transform-gpu translate-z-10">
            <Image src="/images/beta-testers-logo.png" alt="Beta Testers Logo" fill className="object-cover" priority />
          </div>

          {/* Edge highlight */}
          <div className="absolute inset-0 rounded-[30%] border border-white/10"></div>

          {/* Depth shadow */}
          <div className="absolute -bottom-10 -right-10 -left-10 h-20 bg-purple-800/20 blur-2xl"></div>
        </div>
      </div>

      {/* Hero Section with Parallax Text */}
      <section className="relative min-h-screen flex items-center py-20 z-10">
        <ParallaxSection speed={0.4} direction="up" className="container px-4 md:px-6 relative">
          <div className="max-w-3xl backdrop-blur-sm bg-black/30 p-8 rounded-xl border border-white/10">
            <h1 className="text-4xl font-bold tracking-tighter sm:text-5xl md:text-6xl mb-6 bg-clip-text text-transparent bg-gradient-to-r from-white via-purple-200 to-white">
              Tested by experts,
              <br />
              Trusted by developers
            </h1>
            <p className="text-2xl font-semibold text-white max-w-[600px] mb-8">
              Launch With Confidence — Bug-Free in 14 Days, Guaranteed...
            </p>
            <div className="flex flex-col sm:flex-row gap-4">
              <Button size="lg" className="bg-primary hover:bg-primary/90 text-lg" asChild>
                <Link href="#contact">Start Beta Testing</Link>
              </Button>
              <Button
                size="lg"
                variant="outline"
                className="border-primary text-primary hover:bg-primary/10 text-lg"
                asChild
              >
                <Link href="#process">How It Works</Link>
              </Button>
            </div>
          </div>
        </ParallaxSection>
      </section>

      {/* Main content that slides over the fixed background */}
      <div className="relative z-10">
        {/* Features Section with Glass Tiles */}
        <section id="services" className="content-section py-16 relative">
          {/* RGB background glow */}
          <div className="absolute inset-0 bg-gradient-to-b from-black via-purple-950/20 to-black"></div>

          <div className="container px-4 md:px-6 relative z-10">
            <div className="flex flex-col items-center justify-center space-y-4 text-center mb-12">
              <div className="space-y-2">
                <h2 className="text-3xl font-bold tracking-tighter sm:text-4xl md:text-5xl">Our Services</h2>
                <p className="max-w-[900px] text-zinc-400 md:text-xl/relaxed lg:text-base/relaxed xl:text-xl/relaxed">
                  We provide comprehensive beta testing services to ensure your Android app is ready for launch.
                </p>
              </div>
            </div>
            <div className="mx-auto grid max-w-5xl grid-cols-1 gap-6 md:grid-cols-3 lg:gap-8">
              <GlassTile gradient="purple">
                <div className="flex flex-col items-center text-center h-full">
                  <div className="mb-4">
                    <div className="flex h-16 w-16 items-center justify-center rounded-full bg-primary/20 mb-4">
                      <Users className="h-8 w-8 text-primary" />
                    </div>
                    <h3 className="text-xl font-bold text-white">Expert Testers</h3>
                  </div>
                  <p className="text-zinc-300">
                    Our team of 12 experienced Google Android beta testers will thoroughly test your app.
                  </p>
                </div>
              </GlassTile>
              <GlassTile gradient="blue">
                <div className="flex flex-col items-center text-center h-full">
                  <div className="mb-4">
                    <div className="flex h-16 w-16 items-center justify-center rounded-full bg-primary/20 mb-4">
                      <Clock className="h-8 w-8 text-primary" />
                    </div>
                    <h3 className="text-xl font-bold text-white">Fast Turnaround</h3>
                  </div>
                  <p className="text-zinc-300">
                    Get your app ready for publication in just 14 days with our streamlined process.
                  </p>
                </div>
              </GlassTile>
              <GlassTile gradient="pink">
                <div className="flex flex-col items-center text-center h-full">
                  <div className="mb-4">
                    <div className="flex h-16 w-16 items-center justify-center rounded-full bg-primary/20 mb-4">
                      <CheckCircle className="h-8 w-8 text-primary" />
                    </div>
                    <h3 className="text-xl font-bold text-white">Quality Assurance</h3>
                  </div>
                  <p className="text-zinc-300">
                    Comprehensive bug reports, usability feedback, and performance analysis.
                  </p>
                </div>
              </GlassTile>
            </div>
          </div>
        </section>

        {/* Success Stories Section */}
        <section id="success-stories" className="content-section py-16 relative">
          {/* RGB background glow */}
          <div className="absolute inset-0 bg-gradient-to-b from-black via-purple-950/20 to-black"></div>

          <div className="container px-4 md:px-6 relative z-10">
            <div className="flex flex-col items-center justify-center space-y-4 text-center mb-12">
              <div className="space-y-2">
                <h2 className="text-3xl font-bold tracking-tighter sm:text-4xl md:text-5xl">Success Stories</h2>
                <p className="max-w-[900px] text-zinc-400 md:text-xl/relaxed lg:text-base/relaxed xl:text-xl/relaxed">
                  Apps we've helped launch successfully on Google Play
                </p>
              </div>
            </div>
            <div className="mx-auto max-w-4xl">
              <SuccessStoriesCarousel stories={successStories} />
            </div>
          </div>
        </section>

        {/* Process Section with Glass Tiles */}
        <section id="process" className="content-section py-16 relative">
          {/* RGB background glow */}
          <div className="absolute inset-0 bg-gradient-to-b from-black via-blue-950/20 to-black"></div>

          <div className="container px-4 md:px-6 relative z-10">
            <div className="flex flex-col items-center justify-center space-y-4 text-center mb-12">
              <div className="space-y-2">
                <h2 className="text-3xl font-bold tracking-tighter sm:text-4xl md:text-5xl">Our Process</h2>
                <p className="max-w-[900px] text-zinc-400 md:text-xl/relaxed lg:text-base/relaxed xl:text-xl/relaxed">
                  How we help you launch your Android app in just 14 days
                </p>
              </div>
            </div>
            <div className="mx-auto grid max-w-5xl grid-cols-1 gap-8 md:grid-cols-2 lg:gap-12">
              <GlassTile gradient="purple-to-blue">
                <div className="flex flex-col items-start gap-2 h-full">
                  <div className="flex h-12 w-12 items-center justify-center rounded-full bg-primary text-white">1</div>
                  <h3 className="text-xl font-bold">Initial Consultation</h3>
                  <p className="text-zinc-300">
                    We discuss your app, target audience, and specific testing requirements to create a tailored testing
                    plan.
                  </p>
                </div>
              </GlassTile>
              <GlassTile gradient="blue-to-cyan">
                <div className="flex flex-col items-start gap-2 h-full">
                  <div className="flex h-12 w-12 items-center justify-center rounded-full bg-primary text-white">2</div>
                  <h3 className="text-xl font-bold">App Onboarding</h3>
                  <p className="text-zinc-300">
                    Our team gets access to your app through Google Play's closed beta testing program.
                  </p>
                </div>
              </GlassTile>
              <GlassTile gradient="cyan-to-blue">
                <div className="flex flex-col items-start gap-2 h-full">
                  <div className="flex h-12 w-12 items-center justify-center rounded-full bg-primary text-white">3</div>
                  <h3 className="text-xl font-bold">Comprehensive Testing</h3>
                  <p className="text-zinc-300">
                    Our 12 expert testers thoroughly test your app across different devices, Android versions, and
                    scenarios.
                  </p>
                </div>
              </GlassTile>
              <GlassTile gradient="blue-to-purple">
                <div className="flex flex-col items-start gap-2 h-full">
                  <div className="flex h-12 w-12 items-center justify-center rounded-full bg-primary text-white">4</div>
                  <h3 className="text-xl font-bold">Detailed Reporting</h3>
                  <p className="text-zinc-300">
                    Receive comprehensive bug reports, usability feedback, and performance analysis.
                  </p>
                </div>
              </GlassTile>
              <GlassTile gradient="purple-to-pink">
                <div className="flex flex-col items-start gap-2 h-full">
                  <div className="flex h-12 w-12 items-center justify-center rounded-full bg-primary text-white">5</div>
                  <h3 className="text-xl font-bold">Iteration & Fixes</h3>
                  <p className="text-zinc-300">
                    Make necessary improvements based on our feedback and resubmit for verification testing.
                  </p>
                </div>
              </GlassTile>
              <GlassTile gradient="pink-to-purple">
                <div className="flex flex-col items-start gap-2 h-full">
                  <div className="flex h-12 w-12 items-center justify-center rounded-full bg-primary text-white">6</div>
                  <h3 className="text-xl font-bold">Launch Ready</h3>
                  <p className="text-zinc-300">
                    Within 14 days, your app will be thoroughly tested and ready for public launch on Google Play.
                  </p>
                </div>
              </GlassTile>
            </div>
          </div>
        </section>

        {/* Pricing Section with Glass Tiles */}
        <section id="pricing" className="content-section py-16 relative">
          {/* RGB background glow */}
          <div className="absolute inset-0 bg-gradient-to-b from-black via-purple-950/20 to-black"></div>

          <div className="container px-4 md:px-6 relative z-10">
            <div className="flex flex-col items-center justify-center space-y-4 text-center mb-12">
              <div className="space-y-2">
                <h2 className="text-3xl font-bold tracking-tighter sm:text-4xl md:text-5xl">Pricing Plans</h2>
                <p className="max-w-[900px] text-zinc-400 md:text-xl/relaxed lg:text-base/relaxed xl:text-xl/relaxed">
                  Choose the right testing package for your Android app
                </p>
              </div>
            </div>
            <div className="mx-auto grid max-w-6xl grid-cols-1 gap-6 md:grid-cols-2 lg:grid-cols-4 lg:gap-6">
              
              {/* Custom Plan */}
              <GlassTile gradient="purple-dark">
                <PricingCard
                  title="Custom"
                  price="$3/tester or $5/hour"
                  description="We will provide testers at $2.5/tester for 14 days or $5/tester per hour with Think-aloud video commentary"
                  features={[
                    "Custom Expert Testers Available For Both Android & Ios",
                    "14-Day Turnaround & Hourly Base Available",
                    "In-depth Test With Video Bug Reporting",
                    "Think Aloud Video Commentary For Hourly Base",
                    "Chat Support",
                  ]}
                  buttonText="Get Started"
                  popular={false}
                />
              </GlassTile>

            {/* Standard Plan with Highlight */}
            <div className="border-4 border-purple-500 rounded-2xl shadow-lg">
              <GlassTile gradient="purple-bright">
                <PricingCard
                  title="Standard"
                  price="$25"
                  description="Comprehensive testing for most apps"
                  features={[
                    "12 Expert Beta Testers",
                    "14-Day Turnaround",
                    "Detailed Bug Reports",
                    "Comprehensive Usability Analysis",
                    "Performance Testing",
                    "Priority Support",
                  ]}
                  buttonText="Get Started"
                  popular={true}
                />
              </GlassTile>
            </div>

              {/* Premium Plan with Recommended Badge */}
              <GlassTile gradient="blue-dark">
                <PricingCard
                  title="Premium"
                  price="$60"
                  description="Advanced testing for complex apps"
                  features={[
                    "20 Expert Beta Testers",
                    "14-Day Turnaround",
                    "Detailed Bug Reports",
                    "In-depth Usability Analysis",
                    "Performance Optimization",
                    "Security Assessment",
                    "VIP Chat Support",
                    "Post-Launch Follow-up",
                  ]}
                  buttonText="Get Started"
                  popular={false}
                  badgeText="Recommended"
                />
              </GlassTile>

              {/* Enterprise Plan */}
              <GlassTile gradient="rainbow">
                <PricingCard
                  title="Enterprise"
                  price="$80"
                  description="Maximum coverage for enterprise apps"
                  features={[
                    "30 Expert Beta Testers",
                    "14-Day Turnaround",
                    "Comprehensive Bug Reports",
                    "In-depth Usability Analysis",
                    "Performance Optimization",
                    "Security Assessment",
                    "VIP Chat Support",
                    "Dedicated Account Manager",
                    "Custom Testing Scenarios",
                  ]}
                  buttonText="Get Started"
                  popular={false}
                />
              </GlassTile>

            </div>
          </div>
        </section>


        {/* CTA Section */}
        <section id="contact" className="content-section py-16 relative">
          {/* RGB background glow */}
          <div className="absolute inset-0 bg-gradient-to-b from-purple-950/30 via-purple-900/20 to-black"></div>

          <div className="container px-4 md:px-6 relative z-10">
            <div className="grid gap-6 lg:grid-cols-2 lg:gap-12 items-center">
              <div className="space-y-4">
                <h2 className="text-3xl font-bold tracking-tighter sm:text-4xl md:text-5xl">
                  Ready to Launch Your App?
                </h2>
                <p className="max-w-[600px] md:text-xl/relaxed">
                  Get your Android app thoroughly tested by our team of 12 expert beta testers and be ready for launch
                  in just 14 days.
                </p>
                <div className="flex flex-col space-y-2">
                  <div className="flex items-center gap-2">
                    <CheckCircle className="h-5 w-5 text-primary" />
                    <span>12 Experienced Google Android Beta Testers</span>
                  </div>
                  <div className="flex items-center gap-2">
                    <CheckCircle className="h-5 w-5 text-primary" />
                    <span>14-Day Turnaround Time</span>
                  </div>
                  <div className="flex items-center gap-2">
                    <CheckCircle className="h-5 w-5 text-primary" />
                    <span>Comprehensive Bug Reports</span>
                  </div>
                  <div className="flex items-center gap-2">
                    <CheckCircle className="h-5 w-5 text-primary" />
                    <span>Usability & Performance Analysis</span>
                  </div>
              <GlassTile gradient="purple-dark">
                <ContactForm />
              </GlassTile>
            </div>
          </div>
        </section>

        <footer className="border-t border-zinc-800 py-6 md:py-8 bg-black">
          <div className="container flex flex-col gap-4 md:flex-row md:items-center md:justify-between">
            <div className="flex items-center gap-2 font-bold">
              <Image
                src="/images/beta-testers-logo.png"
                alt="OG Beta Testers Logo"
                width={40}
                height={40}
                className="rounded-full"
              />
              <span>OG Beta Testers</span>
            </div>
            <div className="flex items-center gap-4 text-sm text-zinc-400">
              <Link href="#" className="hover:text-white transition-colors">
                Terms
              </Link>
              <Link href="#" className="hover:text-white transition-colors">
                Privacy
              </Link>
              <Link href="#contact" className="hover:text-white transition-colors">
                Contact
              </Link>
                <Mail className="h-3.5 w-3.5" />
                ogbetatesters@proton.me
              </a>
            </div>
            <p className="text-sm text-zinc-400">© {new Date().getFullYear()} OG Beta Testers. All rights reserved.</p>
          </div>
        </footer>
      </div>
    </div>
  )
}
