"use client"

import * as React from "react"
import Link from "next/link"
import { usePathname } from "next/navigation"
import { cn } from "@/lib/utils"
import { Button } from "@/components/ui/button"
import {
  NavigationMenu,
  NavigationMenuContent,
  NavigationMenuItem,
  NavigationMenuLink,
  NavigationMenuList,
  NavigationMenuTrigger,
  navigationMenuTriggerStyle,
} from "@/components/ui/navigation-menu"
import { Sheet, SheetContent, SheetTrigger } from "@/components/ui/sheet"
import { Menu } from "lucide-react"

const navigationLinks = [
  { href: "/", label: "Home" },
  { href: "/about", label: "About" },
  { href: "/services", label: "Services" },
  { href: "/portfolio", label: "Portfolio" },
  { href: "/blog", label: "Blog" },
  { href: "/contact", label: "Contact" },
]

export function Header() {
  const [isScrolled, setIsScrolled] = React.useState(false)
  const pathname = usePathname()

  React.useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 10) {
        setIsScrolled(true)
      } else {
        setIsScrolled(false)
      }
    }
    
    window.addEventListener("scroll", handleScroll)
    return () => window.removeEventListener("scroll", handleScroll)
  }, [])

  return (
    <header className={cn(
      "sticky top-0 z-50 w-full transition-all duration-300",
      isScrolled 
        ? "bg-background/90 backdrop-blur-md shadow-sm" 
        : "bg-transparent"
    )}>
      <div className="container flex h-16 items-center justify-between space-x-4 sm:space-x-0">
        <Link href="/" className="flex items-center space-x-2">
          <span className="font-bold text-xl">nevweb<span className="text-primary">SEO</span></span>
        </Link>
        
        {/* Desktop Navigation */}
        <div className="hidden md:flex md:items-center md:space-x-4">
          <NavigationMenu>
            <NavigationMenuList>
              {navigationLinks.map((link) => (
                <NavigationMenuItem key={link.href}>
                  <Link href={link.href} legacyBehavior passHref>
                    <NavigationMenuLink 
                      className={navigationMenuTriggerStyle()}
                      active={pathname === link.href}
                    >
                      {link.label}
                    </NavigationMenuLink>
                  </Link>
                </NavigationMenuItem>
              ))}
            </NavigationMenuList>
          </NavigationMenu>
          
          <Button asChild>
            <Link href="/contact">Get Started</Link>
          </Button>
        </div>
        
        {/* Mobile Navigation */}
        <div className="md:hidden">
          <Sheet>
            <SheetTrigger asChild>
              <Button variant="ghost" size="icon">
                <Menu className="h-6 w-6" />
                <span className="sr-only">Toggle menu</span>
              </Button>
            </SheetTrigger>
            <SheetContent side="right">
              <nav className="flex flex-col gap-4 mt-8">
                {navigationLinks.map((link) => (
                  <Link
                    key={link.href}
                    href={link.href}
                    className={cn(
                      "text-lg font-medium transition-colors hover:text-primary",
                      pathname === link.href ? "text-primary" : "text-muted-foreground"
                    )}
                  >
                    {link.label}
                  </Link>
                ))}
                <Button className="mt-4" asChild>
                  <Link href="/contact">Get Started</Link>
                </Button>
              </nav>
            </SheetContent>
          </Sheet>
        </div>
      </div>
    </header>
  )
}