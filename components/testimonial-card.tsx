import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar"
import { Quote, ExternalLink } from "lucide-react"
import Link from "next/link"
import Image from "next/image"

interface TestimonialCardProps {
  quote: string
  author: string
  company: string
  image: string
  appLink?: string
  appImage?: string
}

export function TestimonialCard({ quote, author, company, image, appLink, appImage }: TestimonialCardProps) {
  return (
    <div className="h-full">
      <div className="p-6 h-full flex flex-col">
        <div className="flex flex-col gap-4 flex-grow">
          <Quote className="h-8 w-8 text-primary/60" />
          <p className="text-lg text-white flex-grow">{quote}</p>

          {appImage && appLink && (
            <div className="flex items-center gap-3 my-2">
              <Link
                href={appLink}
                target="_blank"
                rel="noopener noreferrer"
                className="relative w-16 h-16 rounded-xl overflow-hidden border border-white/10 hover:border-primary/50 transition-all duration-300 hover:scale-105 hover:shadow-md hover:shadow-primary/20"
              >
                <Image
                  src={appImage || "/placeholder.svg"}
                  alt={`${company} app`}
                  width={64}
                  height={64}
                  className="w-full h-full object-cover"
                />
              </Link>
              <div>
                <Link
                  href={appLink}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-primary hover:text-primary/80 flex items-center gap-1 transition-colors font-medium"
                >
                  {company}
                  <ExternalLink className="h-3 w-3 ml-1" />
                </Link>
                <p className="text-xs text-zinc-400">View on Google Play</p>
              </div>
            </div>
          )}

          <div className="flex items-center gap-4 pt-4">
            <Avatar>
              <AvatarImage src={image || "/placeholder.svg"} alt={author} />
              <AvatarFallback className="bg-zinc-700 text-white">
                {author
                  .split(" ")
                  .map((n) => n[0])
                  .join("")}
              </AvatarFallback>
            </Avatar>
            <div>
              <p className="font-medium text-white">{author}</p>
              {!appImage && appLink ? (
                <a
                  href={appLink}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-sm text-primary hover:text-primary/80 flex items-center gap-1 transition-colors"
                >
                  {company}
                  <ExternalLink className="h-3 w-3 ml-1" />
                </a>
              ) : !appImage ? (
                <p className="text-sm text-zinc-400">{company}</p>
              ) : null}
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}
