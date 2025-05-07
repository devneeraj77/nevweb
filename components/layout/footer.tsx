import Link from "next/link"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Facebook, Instagram, Linkedin, Mail, MapPin, Phone, Twitter } from "lucide-react"

export function Footer() {
  return (
    <footer className="bg-muted/50">
      <div className="container px-4 py-16 md:px-6 lg:px-8">
        <div className="grid gap-8 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4">
          <div className="space-y-4">
            <Link href="/" className="flex items-center space-x-2">
              <span className="font-bold text-xl">Delhi<span className="text-primary">SEO</span></span>
            </Link>
            <p className="text-muted-foreground">
              Premium SEO and digital marketing services in Delhi to boost your online presence and grow your business.
            </p>
            <div className="flex space-x-3">
              <Button size="icon" variant="ghost" aria-label="Facebook">
                <Facebook className="h-5 w-5" />
              </Button>
              <Button size="icon" variant="ghost" aria-label="Twitter">
                <Twitter className="h-5 w-5" />
              </Button>
              <Button size="icon" variant="ghost" aria-label="Instagram">
                <Instagram className="h-5 w-5" />
              </Button>
              <Button size="icon" variant="ghost" aria-label="LinkedIn">
                <Linkedin className="h-5 w-5" />
              </Button>
            </div>
          </div>
          <div className="space-y-4">
            <h3 className="text-lg font-semibold">Quick Links</h3>
            <ul className="space-y-2">
              <li>
                <Link className="text-muted-foreground hover:text-primary transition-colors" href="/">
                  Home
                </Link>
              </li>
              <li>
                <Link className="text-muted-foreground hover:text-primary transition-colors" href="/about">
                  About
                </Link>
              </li>
              <li>
                <Link className="text-muted-foreground hover:text-primary transition-colors" href="/services">
                  Services
                </Link>
              </li>
              <li>
                <Link className="text-muted-foreground hover:text-primary transition-colors" href="/portfolio">
                  Portfolio
                </Link>
              </li>
              <li>
                <Link className="text-muted-foreground hover:text-primary transition-colors" href="/blog">
                  Blog
                </Link>
              </li>
              <li>
                <Link className="text-muted-foreground hover:text-primary transition-colors" href="/contact">
                  Contact
                </Link>
              </li>
            </ul>
          </div>
          <div className="space-y-4">
            <h3 className="text-lg font-semibold">Services</h3>
            <ul className="space-y-2">
              <li>
                <Link className="text-muted-foreground hover:text-primary transition-colors" href="/services/seo">
                  Search Engine Optimization
                </Link>
              </li>
              <li>
                <Link className="text-muted-foreground hover:text-primary transition-colors" href="/services/content-marketing">
                  Content Marketing
                </Link>
              </li>
              <li>
                <Link className="text-muted-foreground hover:text-primary transition-colors" href="/services/ppc">
                  Pay-Per-Click Advertising
                </Link>
              </li>
              <li>
                <Link className="text-muted-foreground hover:text-primary transition-colors" href="/services/social-media">
                  Social Media Marketing
                </Link>
              </li>
              <li>
                <Link className="text-muted-foreground hover:text-primary transition-colors" href="/services/local-seo">
                  Local SEO
                </Link>
              </li>
            </ul>
          </div>
          <div className="space-y-4">
            <h3 className="text-lg font-semibold">Contact Information</h3>
            <ul className="space-y-2">
              <li className="flex items-start space-x-2">
                <MapPin className="h-5 w-5 text-primary shrink-0" />
                <span className="text-muted-foreground">Delhi, India</span>
              </li>
              <li className="flex items-start space-x-2">
                <Phone className="h-5 w-5 text-primary shrink-0" />
                <span className="text-muted-foreground">+91 98765 43210</span>
              </li>
              <li className="flex items-start space-x-2">
                <Mail className="h-5 w-5 text-primary shrink-0" />
                <span className="text-muted-foreground">info@delhiseo.com</span>
              </li>
            </ul>
            <div className="space-y-2">
              <h4 className="font-medium">Subscribe to our newsletter</h4>
              <div className="flex space-x-2">
                <Input placeholder="Your email" type="email" />
                <Button type="submit">Subscribe</Button>
              </div>
            </div>
          </div>
        </div>
        <div className="mt-12 border-t border-border pt-6 text-center text-sm text-muted-foreground">
          <p>© {new Date().getFullYear()} Delhi SEO. All rights reserved.</p>
        </div>
      </div>
    </footer>
  )
}