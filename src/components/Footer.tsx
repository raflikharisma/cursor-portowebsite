import { Instagram, Twitter, Linkedin, MessageCircle } from 'lucide-react'

export default function Footer() {
  const socialLinks = [
    { 
      icon: Instagram, 
      href: "https://instagram.com", 
      label: "Instagram" 
    },
    { 
      icon: Twitter, 
      href: "https://twitter.com", 
      label: "Twitter" 
    },
    { 
      icon: Linkedin, 
      href: "https://linkedin.com", 
      label: "LinkedIn" 
    },
    { 
      icon: MessageCircle, 
      href: "https://wa.me", 
      label: "WhatsApp" 
    }
  ]

  return (
    <footer className="container mx-auto px-6 py-16">
      <div className="flex justify-center items-center gap-4">
        {socialLinks.map((social, index) => {
          const IconComponent = social.icon
          return (
            <a
              key={index}
              href={social.href}
              target="_blank"
              rel="noopener noreferrer"
              className="p-2 text-text-primary hover:text-primary transition-colors duration-200"
              aria-label={social.label}
            >
              <IconComponent size={24} />
            </a>
          )
        })}
      </div>
    </footer>
  )
} 