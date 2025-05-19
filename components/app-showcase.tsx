import Image from "next/image"
import { ExternalLink, Globe, Quote } from "lucide-react"

interface AppShowcaseProps {
  appName: string
  developerName: string
  developerTitle?: string
  description: string
  playStoreLink: string
  websiteLink?: string
  socialType?: "website" | "twitter" | "instagram" | "facebook"
  imageSrc: string
  testimonial?: string
}

export function AppShowcase({
  appName,
  developerName,
  developerTitle,
  description,
  playStoreLink,
  websiteLink,
  socialType = "website",
  imageSrc,
  testimonial,
}: AppShowcaseProps) {
  const getSocialIcon = () => {
    switch (socialType) {
      case "twitter":
        return (
          <svg
            xmlns="http://www.w3.org/2000/svg"
            width="16"
            height="16"
            viewBox="0 0 24 24"
            fill="currentColor"
            className="h-4 w-4"
          >
            <path d="M13.6823 10.6218L20.2391 3H18.6854L12.9921 9.61788L8.44486 3H3.2002L10.0765 13.0074L3.2002 21H4.75404L10.7663 14.0113L15.5685 21H20.8131L13.6819 10.6218H13.6823ZM11.5541 13.0956L10.8574 12.0991L5.31391 4.16971H7.70053L12.1742 10.5689L12.8709 11.5655L18.6861 19.8835H16.2995L11.5541 13.096V13.0956Z" />
          </svg>
        )
      case "instagram":
        return (
          <svg
            xmlns="http://www.w3.org/2000/svg"
            width="16"
            height="16"
            viewBox="0 0 24 24"
            fill="none"
            stroke="currentColor"
            strokeWidth="2"
            strokeLinecap="round"
            strokeLinejoin="round"
            className="h-4 w-4"
          >
            <rect width="20" height="20" x="2" y="2" rx="5" ry="5" />
            <path d="M16 11.37A4 4 0 1 1 12.63 8 4 4 0 0 1 16 11.37z" />
            <line x1="17.5" x2="17.51" y1="6.5" y2="6.5" />
          </svg>
        )
      case "facebook":
        return (
          <svg
            xmlns="http://www.w3.org/2000/svg"
            width="16"
            height="16"
            viewBox="0 0 24 24"
            fill="none"
            stroke="currentColor"
            strokeWidth="2"
            strokeLinecap="round"
            strokeLinejoin="round"
            className="h-4 w-4"
          >
            <path d="M18 2h-3a5 5 0 0 0-5 5v3H7v4h3v8h4v-8h3l1-4h-4V7a1 1 0 0 1 1-1h3z" />
          </svg>
        )
      default:
        return <Globe className="h-4 w-4" />
    }
  }

  const getSocialText = () => {
    switch (socialType) {
      case "twitter":
        return "Follow on X"
      case "instagram":
        return "Follow on Instagram"
      case "facebook":
        return "Follow on Facebook"
      default:
        return "Visit Website"
    }
  }

  return (
    <div className="flex flex-col gap-6 p-4">
      <div className="flex flex-col md:flex-row gap-6 items-center">
        <a
          href={playStoreLink}
          target="_blank"
          rel="noopener noreferrer"
          className="relative w-[120px] h-[120px] md:w-[150px] md:h-[150px] rounded-2xl overflow-hidden flex-shrink-0 border border-white/10 hover:border-primary/50 transition-all duration-300 hover:scale-105 hover:shadow-lg hover:shadow-primary/20"
        >
          <Image src={imageSrc || "/placeholder.svg"} alt={`${appName} app icon`} fill className="object-cover" />
        </a>
        <div className="flex-1">
          <div className="flex items-center gap-2">
            <h3 className="text-xl font-bold">{appName}</h3>
            <a
              href={playStoreLink}
              target="_blank"
              rel="noopener noreferrer"
              className="text-primary hover:text-primary/80 transition-colors"
            >
              <ExternalLink className="h-4 w-4" />
              <span className="sr-only">View on Play Store</span>
            </a>
          </div>
          <p className="text-sm text-zinc-400 mb-2">
            Developed by {developerName}
            {developerTitle && `, ${developerTitle}`}
          </p>
          <p className="text-zinc-300">{description}</p>

          {websiteLink && (
            <a
              href={websiteLink}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-1 text-sm font-medium text-primary hover:text-primary/80 transition-colors mt-2"
            >
              {getSocialIcon()}
              {getSocialText()}
            </a>
          )}
        </div>
      </div>

      {testimonial && (
        <div className="mt-2 border-t border-white/10 pt-6">
          <div className="flex items-start gap-3">
            <Quote className="h-6 w-6 text-primary/60 flex-shrink-0 mt-1" />
            <p className="text-zinc-200 italic">{testimonial}</p>
          </div>
        </div>
      )}
    </div>
  )
}
