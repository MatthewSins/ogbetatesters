import type { ReactNode } from "react"

interface RGBGlowCardProps {
  children: ReactNode
  className?: string
  glowIntensity?: "low" | "medium" | "high"
  glowColor?: "primary" | "blue" | "green" | "rainbow"
}

export function RGBGlowCard({
  children,
  className = "",
  glowIntensity = "medium",
  glowColor = "primary",
}: RGBGlowCardProps) {
  const getGlowStyles = () => {
    const intensityMap = {
      low: "opacity-10 blur-md",
      medium: "opacity-20 blur-lg",
      high: "opacity-30 blur-xl",
    }

    const colorMap = {
      primary: "bg-primary",
      blue: "bg-blue-500",
      green: "bg-green-500",
      rainbow: "bg-gradient-to-r from-purple-500 via-blue-500 to-pink-500",
    }

    return `${intensityMap[glowIntensity]} ${colorMap[glowColor]}`
  }

  return (
    <div className={`relative group ${className}`}>
      <div
        className={`absolute -inset-0.5 rounded-lg ${getGlowStyles()} group-hover:opacity-40 transition-all duration-300`}
        style={{ filter: "blur(16px)" }}
      ></div>
      <div className="relative bg-zinc-800/80 backdrop-blur-sm rounded-lg border border-zinc-700/50 p-4 transition-all duration-300 group-hover:bg-zinc-800/90 group-hover:translate-y-[-5px]">
        {children}
      </div>
    </div>
  )
}
