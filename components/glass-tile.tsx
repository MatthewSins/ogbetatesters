import type { ReactNode } from "react"

type GradientType =
  | "purple"
  | "blue"
  | "pink"
  | "purple-to-blue"
  | "blue-to-cyan"
  | "cyan-to-blue"
  | "blue-to-purple"
  | "purple-to-pink"
  | "pink-to-purple"
  | "purple-dark"
  | "purple-bright"
  | "blue-dark"
  | "rainbow"

interface GlassTileProps {
  children: ReactNode
  className?: string
  gradient: GradientType
}

export function GlassTile({ children, className = "", gradient }: GlassTileProps) {
  const getGradientStyle = () => {
    const gradients = {
      purple: "from-purple-600/20 to-purple-800/10",
      blue: "from-blue-600/20 to-blue-800/10",
      pink: "from-pink-600/20 to-pink-800/10",
      "purple-to-blue": "from-purple-600/20 to-blue-600/10",
      "blue-to-cyan": "from-blue-600/20 to-cyan-600/10",
      "cyan-to-blue": "from-cyan-600/20 to-blue-600/10",
      "blue-to-purple": "from-blue-600/20 to-purple-600/10",
      "purple-to-pink": "from-purple-600/20 to-pink-600/10",
      "pink-to-purple": "from-pink-600/20 to-purple-600/10",
      "purple-dark": "from-purple-800/20 to-purple-900/10",
      "purple-bright": "from-purple-500/20 to-purple-700/10",
      "blue-dark": "from-blue-800/20 to-blue-900/10",
      rainbow: "from-purple-600/20 via-blue-600/15 to-pink-600/10",
    }

    return gradients[gradient]
  }

  return (
    <div className={`relative h-full ${className}`}>
      {/* RGB glow effect */}
      <div
        className={`absolute inset-0 rounded-xl bg-gradient-to-br ${getGradientStyle()} opacity-70 blur-[10px]`}
      ></div>

      {/* Glass panel */}
      <div className="relative h-full rounded-xl border border-white/10 bg-black/30 backdrop-blur-md p-6 overflow-hidden">
        {/* Subtle RGB border */}
        <div className="absolute inset-0 rounded-xl border border-white/5 overflow-hidden">
          <div className="absolute inset-0 opacity-20 bg-gradient-to-r from-purple-500 via-blue-500 to-pink-500"></div>
        </div>

        {/* Content */}
        <div className="relative z-10">{children}</div>
      </div>
    </div>
  )
}
