import { Card, CardContent, CardHeader } from "@/components/ui/card"
import { Clock, Zap } from "lucide-react"

interface BetaTesterProfileProps {
  name: string
  role: string
  experience: string
  specialty: string
  image: string
}

export function BetaTesterProfile({ name, role, experience, specialty, image }: BetaTesterProfileProps) {
  return (
    <Card className="overflow-hidden">
      <CardHeader className="p-0">
        <div className="aspect-square relative overflow-hidden">
          <img src={image || "/placeholder.svg"} alt={name} className="object-cover w-full h-full" />
        </div>
      </CardHeader>
      <CardContent className="p-4">
        <h3 className="font-bold">{name}</h3>
        <p className="text-sm text-muted-foreground">{role}</p>
        <div className="mt-2 space-y-1">
          <div className="flex items-center gap-2 text-sm">
            <Clock className="h-4 w-4 text-primary" />
            <span>{experience}</span>
          </div>
          <div className="flex items-center gap-2 text-sm">
            <Zap className="h-4 w-4 text-primary" />
            <span>{specialty}</span>
          </div>
        </div>
      </CardContent>
    </Card>
  )
}
