"use client"

import { useEffect, useState, type ReactNode } from "react"

interface ParallaxProps {
  children: ReactNode
  speed?: number
  className?: string
  direction?: "up" | "down" | "left" | "right"
}

export function ParallaxSection({ children, speed = 0.5, className = "", direction = "up" }: ParallaxProps) {
  const [offset, setOffset] = useState(0)

  useEffect(() => {
    const handleScroll = () => {
      setOffset(window.scrollY)
    }

    window.addEventListener("scroll", handleScroll, { passive: true })

    return () => {
      window.removeEventListener("scroll", handleScroll)
    }
  }, [])

  const getTransform = () => {
    switch (direction) {
      case "up":
        return `translateY(${offset * speed * -1}px)`
      case "down":
        return `translateY(${offset * speed}px)`
      case "left":
        return `translateX(${offset * speed * -1}px)`
      case "right":
        return `translateX(${offset * speed}px)`
      default:
        return `translateY(${offset * speed * -1}px)`
    }
  }

  return (
    <div
      className={`transition-transform will-change-transform ${className}`}
      style={{
        transform: getTransform(),
      }}
    >
      {children}
    </div>
  )
}

export function ParallaxBackground({ children, speed = 0.2, className = "" }: ParallaxProps) {
  const [offset, setOffset] = useState(0)

  useEffect(() => {
    const handleScroll = () => {
      setOffset(window.scrollY)
    }

    window.addEventListener("scroll", handleScroll, { passive: true })

    return () => {
      window.removeEventListener("scroll", handleScroll)
    }
  }, [])

  return (
    <div className={`relative overflow-hidden ${className}`}>
      <div
        className="absolute inset-0 w-full h-full"
        style={{
          transform: `translateY(${offset * speed}px)`,
        }}
      />
      {children}
    </div>
  )
}
