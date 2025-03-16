import Link from "next/link"
import { Github, Linkedin, Mail, Phone } from "lucide-react"
import { Button } from "@/components/ui/button"

export default function Footer() {
  return (
    <footer className="border-t border-primary/10 py-12 md:py-16 relative">
      <div className="absolute inset-0 bg-dots opacity-10 -z-10"></div>
      <div className="container mx-auto max-w-6xl px-4">
        <div className="flex flex-col md:flex-row justify-between items-center">
          <div className="mb-8 md:mb-0">
            <h2 className="text-xl font-bold text-gradient">Vishak Vikranth</h2>
            <p className="text-muted-foreground mt-2">Computer Science & Mathematics Student</p>
          </div>
          <div className="flex flex-col items-center md:items-end">
            <div className="flex space-x-4 mb-4">
              <Link href="https://www.linkedin.com/in/vishakvikranth" target="_blank" rel="noopener noreferrer">
                <Button variant="ghost" size="icon" className="rounded-full hover:bg-primary/20 hover:text-primary">
                  <Linkedin className="h-5 w-5" />
                </Button>
              </Link>
              <Link href="mailto:vvikranth@crimson.ua.edu">
                <Button variant="ghost" size="icon" className="rounded-full hover:bg-primary/20 hover:text-primary">
                  <Mail className="h-5 w-5" />
                </Button>
              </Link>
              <Link href="tel:2058879866">
                <Button variant="ghost" size="icon" className="rounded-full hover:bg-primary/20 hover:text-primary">
                  <Phone className="h-5 w-5" />
                </Button>
              </Link>
              <Link href="https://github.com/Vishak-V" target="_blank" rel="noopener noreferrer">
                <Button variant="ghost" size="icon" className="rounded-full hover:bg-primary/20 hover:text-primary">
                  <Github className="h-5 w-5" />
                </Button>
              </Link>
            </div>
            <p className="text-sm text-muted-foreground">
              © {new Date().getFullYear()} Vishak Vikranth. All rights reserved.
            </p>
          </div>
        </div>
      </div>
    </footer>
  )
}

