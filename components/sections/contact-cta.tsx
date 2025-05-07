import Link from "next/link"
import { Button } from "@/components/ui/button"
import { ArrowRight } from "lucide-react"

export function ContactCta() {
  return (
    <section className="py-16 md:py-24 bg-primary text-primary-foreground">
      <div className="container px-4 md:px-6">
        <div className="flex flex-col md:flex-row items-center justify-between gap-8">
          <div className="flex-1 space-y-4 text-center md:text-left">
            <h2 className="text-3xl md:text-4xl font-bold tracking-tight">Ready to Transform Your Online Presence?</h2>
            <p className="text-primary-foreground/90 md:text-lg max-w-[600px]">
              Get in touch today for a free consultation and discover how our SEO and digital marketing expertise can help your Delhi business grow.
            </p>
          </div>
          <div className="flex gap-4">
            <Button size="lg" variant="secondary" asChild>
              <Link href="/contact">
                Get Started <ArrowRight className="ml-2 h-4 w-4" />
              </Link>
            </Button>
            <Button size="lg" variant="outline" className="border-primary-foreground/20 hover:bg-primary-foreground/10" asChild>
              <Link href="/services">
                Our Services
              </Link>
            </Button>
          </div>
        </div>
      </div>
    </section>
  )
}