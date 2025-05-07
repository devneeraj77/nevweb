import { Button } from "@/components/ui/button"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { ContactCta } from "@/components/sections/contact-cta"
import { FeaturedPosts } from "@/components/sections/featured-posts"
import { StatCard } from "@/components/sections/stat-card"
import Testimonials from "@/components/sections/testimonials"

export default function Home() {
  return (
    <main className="min-h-screen">
      {/* Hero Section */}
      <section className="py-20 px-4 bg-gradient-to-r from-primary/10 via-primary/5 to-background">
        <div className="container mx-auto text-center">
          <h1 className="text-5xl font-bold tracking-tighter mb-6">
            Welcome to Our Platform
          </h1>
          <p className="text-xl text-muted-foreground max-w-2xl mx-auto mb-8">
            Experience the future of digital solutions with our innovative platform.
          </p>
          <Button size="lg" className="mr-4">Get Started</Button>
          <Button variant="outline" size="lg">Learn More</Button>
        </div>
      </section>

      {/* Stats Section */}
      <section className="py-16 bg-background">
        <div className="container mx-auto grid md:grid-cols-3 gap-6">
          <StatCard 
            title="Active Users" 
            value="10K+" 
            description="Trusted by thousands"
          />
          <StatCard 
            title="Success Rate" 
            value="99.9%" 
            description="Reliable performance"
          />
          <StatCard 
            title="Global Reach" 
            value="150+" 
            description="Countries served"
          />
        </div>
      </section>

      {/* Featured Content */}
      <FeaturedPosts />

      {/* Testimonials */}
      <Testimonials />

      {/* CTA Section */}
      <ContactCta />
    </main>
  )
}