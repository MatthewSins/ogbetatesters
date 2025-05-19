import { Button } from "@/components/ui/button"
import { CheckCircle } from "lucide-react"
import Link from "next/link"

interface PricingCardProps {
  title: string
  price: string
  description: string
  features: string[]
  buttonText: string
  popular?: boolean
}

export function PricingCard({ title, price, description, features, buttonText, popular = false }: PricingCardProps) {
  return (
    <div className={`flex flex-col h-full ${popular ? "relative z-10" : ""}`}>
      {popular && (
        <div className="absolute -top-4 left-0 right-0 bg-primary text-white text-center py-1 text-sm font-medium rounded-t-lg">
          Most Popular
        </div>
      )}
      <div className="flex flex-col flex-grow pt-4">
        <div className="px-2 pt-2 pb-4">
          <h3 className="text-xl font-bold text-white">{title}</h3>
          <p className="text-zinc-400 text-sm mt-1">{description}</p>
          <div className="mt-4">
            <span className="text-4xl font-bold text-white">{price}</span>
            <span className="text-zinc-400 ml-1">/project</span>
          </div>
        </div>
        <div className="px-2 py-4 flex-grow">
          <ul className="space-y-2">
            {features.map((feature, index) => (
              <li key={index} className="flex items-start gap-2 text-zinc-300">
                <CheckCircle className="h-5 w-5 text-primary shrink-0 mt-0.5" />
                <span>{feature}</span>
              </li>
            ))}
          </ul>
        </div>
        <div className="px-2 pb-2 pt-4">
          <Button className="w-full bg-primary hover:bg-primary/90" asChild>
            <Link href="#contact">{buttonText}</Link>
          </Button>
        </div>
      </div>
    </div>
  )
}
