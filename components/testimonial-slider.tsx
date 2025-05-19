"use client"

import type React from "react"

import { useState, useEffect, useCallback } from "react"
import { ChevronLeft, ChevronRight } from "lucide-react"
import { TestimonialCard } from "./testimonial-card"
import { Button } from "@/components/ui/button"

interface Testimonial {
  quote: string
  author: string
  company: string
  image: string
}

interface TestimonialSliderProps {
  testimonials: Testimonial[]
}

export function TestimonialSlider({ testimonials }: TestimonialSliderProps) {
  const [currentIndex, setCurrentIndex] = useState(0)
  const [isAutoPlaying, setIsAutoPlaying] = useState(true)
  const [touchStart, setTouchStart] = useState<number | null>(null)
  const [touchEnd, setTouchEnd] = useState<number | null>(null)

  const nextSlide = useCallback(() => {
    setCurrentIndex((prevIndex) => (prevIndex === testimonials.length - 1 ? 0 : prevIndex + 1))
  }, [testimonials.length])

  const prevSlide = useCallback(() => {
    setCurrentIndex((prevIndex) => (prevIndex === 0 ? testimonials.length - 1 : prevIndex - 1))
  }, [testimonials.length])

  // Auto-slide functionality
  useEffect(() => {
    let interval: NodeJS.Timeout

    if (isAutoPlaying) {
      interval = setInterval(() => {
        nextSlide()
      }, 5000) // Change slide every 5 seconds
    }

    return () => {
      if (interval) clearInterval(interval)
    }
  }, [isAutoPlaying, nextSlide])

  // Pause auto-slide on hover
  const handleMouseEnter = () => setIsAutoPlaying(false)
  const handleMouseLeave = () => setIsAutoPlaying(true)

  // Touch controls for mobile
  const handleTouchStart = (e: React.TouchEvent) => {
    setTouchStart(e.targetTouches[0].clientX)
  }

  const handleTouchMove = (e: React.TouchEvent) => {
    setTouchEnd(e.targetTouches[0].clientX)
  }

  const handleTouchEnd = () => {
    if (!touchStart || !touchEnd) return
    const distance = touchStart - touchEnd
    const isLeftSwipe = distance > 50
    const isRightSwipe = distance < -50

    if (isLeftSwipe) {
      nextSlide()
    }
    if (isRightSwipe) {
      prevSlide()
    }

    setTouchStart(null)
    setTouchEnd(null)
  }

  return (
    <div
      className="relative w-full max-w-4xl mx-auto overflow-hidden"
      onMouseEnter={handleMouseEnter}
      onMouseLeave={handleMouseLeave}
      onTouchStart={handleTouchStart}
      onTouchMove={handleTouchMove}
      onTouchEnd={handleTouchEnd}
    >
      <div
        className="flex transition-transform duration-500 ease-in-out"
        style={{ transform: `translateX(-${currentIndex * 100}%)` }}
      >
        {testimonials.map((testimonial, index) => (
          <div key={index} className="w-full flex-shrink-0 px-4">
            <TestimonialCard
              quote={testimonial.quote}
              author={testimonial.author}
              company={testimonial.company}
              image={testimonial.image}
            />
          </div>
        ))}
      </div>

      {/* Navigation Arrows */}
      <Button
        variant="outline"
        size="icon"
        className="absolute left-2 top-1/2 -translate-y-1/2 bg-black/50 border-white/10 text-white hover:bg-primary/20 hover:text-primary z-10"
        onClick={(e) => {
          e.preventDefault()
          prevSlide()
        }}
        aria-label="Previous testimonial"
      >
        <ChevronLeft className="h-5 w-5" />
      </Button>

      <Button
        variant="outline"
        size="icon"
        className="absolute right-2 top-1/2 -translate-y-1/2 bg-black/50 border-white/10 text-white hover:bg-primary/20 hover:text-primary z-10"
        onClick={(e) => {
          e.preventDefault()
          nextSlide()
        }}
        aria-label="Next testimonial"
      >
        <ChevronRight className="h-5 w-5" />
      </Button>

      {/* Dots Indicator */}
      <div className="flex justify-center mt-6 gap-2">
        {testimonials.map((_, index) => (
          <button
            key={index}
            className={`w-2.5 h-2.5 rounded-full transition-all ${
              index === currentIndex ? "bg-primary w-5" : "bg-zinc-600 hover:bg-zinc-400"
            }`}
            onClick={() => setCurrentIndex(index)}
            aria-label={`Go to testimonial ${index + 1}`}
          />
        ))}
      </div>
    </div>
  )
}
