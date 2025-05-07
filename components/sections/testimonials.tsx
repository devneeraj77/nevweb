"use client"

import * as React from "react"
import { Badge } from "@/components/ui/badge"
import { Card, CardContent } from "@/components/ui/card"
import { 
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselNext,
  CarouselPrevious,
} from "@/components/ui/carousel"
import { Star } from "lucide-react"

const testimonials = [
  {
    id: 1,
    name: "Rahul Sharma",
    role: "CEO, TechVision India",
    testimonial: "Working with Delhi SEO has been transformative for our business. Their data-driven approach to SEO has significantly improved our online visibility and lead generation in just a few months.",
    stars: 5,
    image: "https://images.pexels.com/photos/220453/pexels-photo-220453.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2"
  },
  {
    id: 2,
    name: "Priya Patel",
    role: "Marketing Director, Delhi Eats",
    testimonial: "The expertise and dedication shown by the team is exceptional. They've helped us rank for the most competitive keywords in the food delivery space, increasing our organic traffic by 85%.",
    stars: 5,
    image: "https://images.pexels.com/photos/774909/pexels-photo-774909.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2"
  },
  {
    id: 3,
    name: "Arjun Kapoor",
    role: "Owner, Delhi Properties",
    testimonial: "I was struggling to get leads for my real estate business until I partnered with this amazing SEO specialist. The local SEO strategy they implemented has completely changed my business.",
    stars: 5,
    image: "https://images.pexels.com/photos/614810/pexels-photo-614810.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2"
  },
  {
    id: 4,
    name: "Sneha Gupta",
    role: "Founder, Wellness Hub",
    testimonial: "The content marketing strategy they developed has positioned us as thought leaders in the wellness industry. We're now getting consistent organic traffic and high-quality leads.",
    stars: 5,
    image: "https://images.pexels.com/photos/415829/pexels-photo-415829.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2"
  },
]

export default function Testimonials() {
  return (
    <section className="py-16 md:py-24 bg-muted/30">
      <div className="container px-4 md:px-6">
        <div className="flex flex-col items-center text-center mb-12">
          <Badge variant="outline" className="mb-4">TESTIMONIALS</Badge>
          <h2 className="text-3xl md:text-4xl font-bold tracking-tight mb-4">What Our Clients Say</h2>
          <p className="max-w-[800px] text-muted-foreground md:text-lg">
            Hear from businesses across Delhi who have transformed their digital presence with our services
          </p>
        </div>
        
        <Carousel
          opts={{
            align: "center",
            loop: true,
          }}
          className="w-full"
        >
          <CarouselContent className="-ml-2 md:-ml-4">
            {testimonials.map((testimonial) => (
              <CarouselItem key={testimonial.id} className="pl-2 md:pl-4 md:basis-1/2 lg:basis-1/3">
                <Card className="h-full flex flex-col">
                  <CardContent className="p-6 flex flex-col items-center text-center flex-1">
                    <div className="flex items-center justify-center space-x-1 mb-4">
                      {Array.from({ length: testimonial.stars }).map((_, i) => (
                        <Star key={i} className="h-5 w-5 fill-yellow-400 text-yellow-400" />
                      ))}
                    </div>
                    <blockquote className="text-muted-foreground mb-4">
                      "{testimonial.testimonial}"
                    </blockquote>
                    <div className="flex flex-col items-center mt-auto">
                      <div className="w-12 h-12 rounded-full overflow-hidden mb-4">
                        <img
                          src={testimonial.image}
                          alt={testimonial.name}
                          className="w-full h-full object-cover"
                        />
                      </div>
                      <div className="text-center">
                        <div className="font-semibold">{testimonial.name}</div>
                        <div className="text-sm text-muted-foreground">{testimonial.role}</div>
                      </div>
                    </div>
                  </CardContent>
                </Card>
              </CarouselItem>
            ))}
          </CarouselContent>
          <div className="flex justify-center mt-8">
            <CarouselPrevious className="relative static md:absolute" />
            <CarouselNext className="relative static md:absolute" />
          </div>
        </Carousel>
      </div>
    </section>
  )
}