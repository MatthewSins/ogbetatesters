"use client"

import { useEffect, useRef } from "react"
import Image from "next/image"

export function HeroGlowEffect() {
  const containerRef = useRef<HTMLDivElement>(null)

  useEffect(() => {
    const container = containerRef.current
    if (!container) return

    const handleMouseMove = (e: MouseEvent) => {
      const { left, top, width, height } = container.getBoundingClientRect()
      const x = e.clientX - left
      const y = e.clientY - top

      const centerX = width / 2
      const centerY = height / 2

      const moveX = (x - centerX) / 25
      const moveY = (y - centerY) / 25

      const glowElement = container.querySelector(".glow-effect") as HTMLElement
      if (glowElement) {
        glowElement.style.transform = `translate(${moveX}px, ${moveY}px)`
      }
    }

    window.addEventListener("mousemove", handleMouseMove)

    return () => {
      window.removeEventListener("mousemove", handleMouseMove)
    }
  }, [])

  return (
    <div ref={containerRef} className="relative flex justify-center items-center h-full w-full">
      {/* Background glow */}
      <div
        className="absolute w-[150%] h-[150%] bg-primary/5 rounded-full animate-pulse"
        style={{ filter: "blur(80px)" }}
      ></div>

      {/* Interactive glow effect */}
      <div
        className="glow-effect absolute w-[80%] h-[80%] bg-primary/10 rounded-full"
        style={{ filter: "blur(50px)", transition: "transform 0.2s ease" }}
      ></div>

      {/* Logo container with glow */}
      <div className="relative">
        <div className="absolute -inset-1 bg-primary/20 rounded-full blur-2xl"></div>
        <div className="absolute -inset-1 bg-gradient-to-r from-primary/40 to-purple-500/40 rounded-full blur-xl animate-pulse"></div>
        <Image
          src="/images/logo.png"
          alt="OG Beta Testers Logo"
          width={500}
          height={500}
          className="relative rounded-full scale-100 md:scale-125 lg:scale-150"
          priority
        />
      </div>

      {/* Orbiting elements */}
      <div
        className="absolute w-full h-full animate-spin-slow pointer-events-none"
        style={{ animationDuration: "30s" }}
      >
        <div className="absolute top-0 left-1/2 -translate-x-1/2 w-4 h-4 bg-primary/30 rounded-full blur-sm"></div>
      </div>
      <div
        className="absolute w-full h-full animate-spin-slow pointer-events-none"
        style={{ animationDuration: "20s", animationDirection: "reverse" }}
      >
        <div className="absolute bottom-0 right-1/4 w-6 h-6 bg-primary/40 rounded-full blur-sm"></div>
      </div>
    </div>
  )
}
