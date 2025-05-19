"use client"

import { useState, useEffect } from "react"
import Link from "next/link"
import Image from "next/image"
import { Button } from "@/components/ui/button"
import { Menu, X } from "lucide-react"

export function Navbar() {
  const [isMenuOpen, setIsMenuOpen] = useState(false)
  const [scrolled, setScrolled] = useState(false)

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen)
  }

  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 50) {
        setScrolled(true)
      } else {
        setScrolled(false)
      }
    }

    window.addEventListener("scroll", handleScroll, { passive: true })
    return () => {
      window.removeEventListener("scroll", handleScroll)
    }
  }, [])

  return (
    <header
      className={`fixed top-0 z-50 w-full transition-all duration-300 ${
        scrolled ? "bg-black/80 backdrop-blur-md border-b border-white/10" : "bg-transparent"
      }`}
    >
      <div className="container flex h-16 items-center justify-between">
        <div className="flex items-center gap-2 font-bold text-xl">
          <Image
            src="/images/beta-testers-logo.png"
            alt="Beta Testers Logo"
            width={32}
            height={32}
            className="rounded-full"
          />
          <span className="text-white">Beta Testers</span>
        </div>

        {/* Desktop Navigation */}
        <nav className="hidden md:flex gap-6">
          <Link href="#services" className="text-sm font-medium text-zinc-300 hover:text-primary">
            Services
          </Link>
          <Link href="#process" className="text-sm font-medium text-zinc-300 hover:text-primary">
            Process
          </Link>
          <Link href="#pricing" className="text-sm font-medium text-zinc-300 hover:text-primary">
            Pricing
          </Link>
        </nav>

        <div className="hidden md:block">
          <Button className="bg-primary hover:bg-primary/90" asChild>
            <Link href="#contact">Get Started</Link>
          </Button>
        </div>

        {/* Mobile Menu Button */}
        <button className="md:hidden text-white p-2" onClick={toggleMenu} aria-label="Toggle menu">
          {isMenuOpen ? <X size={24} /> : <Menu size={24} />}
        </button>
      </div>

      {/* Mobile Menu */}
      {isMenuOpen && (
        <div className="md:hidden bg-black/90 backdrop-blur-md border-b border-white/10">
          <div className="container py-4 flex flex-col space-y-4">
            <Link
              href="#services"
              className="text-sm font-medium text-zinc-300 hover:text-primary py-2"
              onClick={toggleMenu}
            >
              Services
            </Link>
            <Link
              href="#process"
              className="text-sm font-medium text-zinc-300 hover:text-primary py-2"
              onClick={toggleMenu}
            >
              Process
            </Link>
            <Link
              href="#pricing"
              className="text-sm font-medium text-zinc-300 hover:text-primary py-2"
              onClick={toggleMenu}
            >
              Pricing
            </Link>
            <Button className="bg-primary hover:bg-primary/90 w-full" asChild>
              <Link href="#contact" onClick={toggleMenu}>
                Get Started
              </Link>
            </Button>
          </div>
        </div>
      )}
    </header>
  )
}
