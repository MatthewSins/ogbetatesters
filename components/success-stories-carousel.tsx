"use client"

import type React from "react"

import { useState, useEffect, useCallback } from "react"
import { ChevronLeft, ChevronRight } from "lucide-react"
import { Button } from "@/components/ui/button"
import { GlassTile } from "@/components/glass-tile"
import { AppShowcase } from "@/components/app-showcase"

interface SuccessStory {
  appName: string
  developerName: string
  developerTitle?: string
  description: string
  testimonial: string
  playStoreLink: string
  websiteLink?: string
  imageSrc: string
}

interface SuccessStoriesCarouselProps {
  stories: SuccessStory[]
}

export function SuccessStoriesCarousel({ stories }: SuccessStoriesCarouselProps) {
  const [currentIndex, setCurrentIndex] = useState(0)
  const [isAutoPlaying, setIsAutoPlaying] = useState(true)
  const [touchStart, setTouchStart] = useState<number | null>(null)
  const [touchEnd, setTouchEnd] = useState<number | null>(null)

  const nextSlide = useCallback(() => {
    setCurrentIndex((prevIndex) => (prevIndex === stories.length - 1 ? 0 : prevIndex + 1))
  }, [stories.length])

  const prevSlide = useCallback(() => {
    setCurrentIndex((prevIndex) => (prevIndex === 0 ? stories.length - 1 : prevIndex - 1))
  }, [stories.length])

  // Auto-slide functionality
  useEffect(() => {
    let interval: NodeJS.Timeout

    if (isAutoPlaying) {
      interval = setInterval(() => {
        nextSlide()
      }, 8000) // Change slide every 8 seconds
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
        {stories.map((story, index) => (
          <div key={index} className="w-full flex-shrink-0 px-4">
            <GlassTile gradient={index % 2 === 0 ? "purple-to-blue" : "blue-to-purple"}>
              <AppShowcase
                appName={story.appName}
                developerName={story.developerName}
                developerTitle={story.developerTitle}
                description={story.description}
                playStoreLink={story.playStoreLink}
                websiteLink={story.websiteLink}
                imageSrc={story.imageSrc}
                testimonial={story.testimonial}
              />
            </GlassTile>
          </div>
        ))}
      </div>

      {/* Navigation Arrows */}
      {stories.length > 1 && (
        <>
          <Button
            variant="outline"
            size="icon"
            className="absolute left-2 top-1/2 -translate-y-1/2 bg-black/50 border-white/10 text-white hover:bg-primary/20 hover:text-primary z-10"
            onClick={(e) => {
              e.preventDefault()
              prevSlide()
            }}
            aria-label="Previous success story"
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
            aria-label="Next success story"
          >
            <ChevronRight className="h-5 w-5" />
          </Button>

          {/* Dots Indicator */}
          <div className="flex justify-center mt-6 gap-2">
            {stories.map((_, index) => (
              <button
                key={index}
                className={`w-2.5 h-2.5 rounded-full transition-all ${
                  index === currentIndex ? "bg-primary w-5" : "bg-zinc-600 hover:bg-zinc-400"
                }`}
                onClick={() => setCurrentIndex(index)}
                aria-label={`Go to success story ${index + 1}`}
              />
            ))}
          </div>
        </>
      )}
    </div>
  )
}
