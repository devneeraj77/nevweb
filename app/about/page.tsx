import Image from "next/image"
import Link from "next/link"
import { Button } from "@/components/ui/button"
import { Badge } from "@/components/ui/badge"
import { Card, CardContent } from "@/components/ui/card"
import { ArrowRight, Award, CheckCircle, Clock, FileCheck, Lightbulb, Users } from "lucide-react"
import { Separator } from "@/components/ui/separator"
import { ContactCta } from "@/components/sections/contact-cta"

export const metadata = {
  title: 'About - Delhi\'s Premier SEO & Digital Marketing Specialist',
  description: 'Learn about Delhi\'s leading SEO specialist and digital marketing expert. Discover our approach, expertise, and why clients trust us with their online success.',
}

export default function AboutPage() {
  return (
    <div className="flex flex-col min-h-screen">
      {/* Hero Section */}
      <section className="py-16 md:py-24 bg-muted">
        <div className="container px-4 md:px-6">
          <div className="grid gap-6 lg:grid-cols-2 lg:gap-12 items-center">
            <div className="space-y-4">
              <Badge variant="outline">ABOUT US</Badge>
              <h1 className="text-3xl sm:text-4xl md:text-5xl font-bold tracking-tight">
                Delhi's Digital Marketing Expert With Proven Results
              </h1>
              <p className="text-muted-foreground md:text-xl">
                With over 8 years of experience, I've helped 500+ businesses in Delhi transform their online presence and achieve tangible growth through strategic SEO and digital marketing.
              </p>
            </div>
            <div className="lg:pl-10 xl:pl-16">
              <div className="relative rounded-lg overflow-hidden">
                <img
                  src="https://images.pexels.com/photos/3184338/pexels-photo-3184338.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2"
                  alt="SEO Specialist working at desk"
                  className="w-full h-auto object-cover rounded-lg"
                />
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* My Story Section */}
      <section className="py-16 md:py-24">
        <div className="container px-4 md:px-6">
          <div className="flex flex-col items-center text-center mb-12">
            <Badge variant="outline" className="mb-4">MY STORY</Badge>
            <h2 className="text-3xl md:text-4xl font-bold tracking-tight mb-4">The Journey to Becoming Delhi's SEO Expert</h2>
          </div>
          
          <div className="grid gap-8 lg:grid-cols-2 items-center">
            <div className="space-y-6">
              <div className="prose prose-lg max-w-none">
                <p>
                  My journey in digital marketing began in 2016 when I recognized the growing need for data-driven SEO strategies among Delhi businesses. After completing my Master's in Digital Marketing from Delhi University and working with leading agencies, I decided to offer my specialized expertise directly to businesses that need it most.
                </p>
                <p>
                  What sets me apart is my deep understanding of both the technical aspects of SEO and the creative elements of digital marketing. I believe in transparent, results-focused strategies tailored to each client's unique goals and industry challenges.
                </p>
                <p>
                  Over the years, I've helped businesses across various sectors—from e-commerce and hospitality to professional services and manufacturing—achieve significant improvements in their online visibility, traffic, and conversion rates.
                </p>
                <p>
                  My approach combines proven SEO techniques with innovative digital marketing strategies to deliver sustainable, long-term results that drive real business growth.
                </p>
              </div>
              
              <div className="flex items-center pt-4">
                <Button size="lg" asChild>
                  <Link href="/contact">
                    Work With Me <ArrowRight className="ml-2 h-4 w-4" />
                  </Link>
                </Button>
              </div>
            </div>
            
            <div className="space-y-6">
              <div className="grid grid-cols-2 gap-4">
                <Card>
                  <CardContent className="p-6">
                    <div className="flex flex-col items-center text-center">
                      <Clock className="h-8 w-8 text-primary mb-2" />
                      <h3 className="text-xl font-bold">8+ Years</h3>
                      <p className="text-sm text-muted-foreground">Experience</p>
                    </div>
                  </CardContent>
                </Card>
                <Card>
                  <CardContent className="p-6">
                    <div className="flex flex-col items-center text-center">
                      <Users className="h-8 w-8 text-primary mb-2" />
                      <h3 className="text-xl font-bold">500+</h3>
                      <p className="text-sm text-muted-foreground">Clients</p>
                    </div>
                  </CardContent>
                </Card>
                <Card>
                  <CardContent className="p-6">
                    <div className="flex flex-col items-center text-center">
                      <FileCheck className="h-8 w-8 text-primary mb-2" />
                      <h3 className="text-xl font-bold">120+</h3>
                      <p className="text-sm text-muted-foreground">Projects</p>
                    </div>
                  </CardContent>
                </Card>
                <Card>
                  <CardContent className="p-6">
                    <div className="flex flex-col items-center text-center">
                      <Award className="h-8 w-8 text-primary mb-2" />
                      <h3 className="text-xl font-bold">15+</h3>
                      <p className="text-sm text-muted-foreground">Awards</p>
                    </div>
                  </CardContent>
                </Card>
              </div>
              
              <Card>
                <CardContent className="p-6">
                  <div className="flex items-start space-x-4">
                    <div className="bg-primary/10 p-2 rounded-full">
                      <Lightbulb className="h-6 w-6 text-primary" />
                    </div>
                    <div>
                      <h3 className="font-medium mb-1">My Philosophy</h3>
                      <p className="text-sm text-muted-foreground">
                        I believe in building long-term partnerships with my clients, focusing on strategies that deliver sustained growth rather than quick fixes. Every business deserves a customized approach that aligns with their unique goals and challenges.
                      </p>
                    </div>
                  </div>
                </CardContent>
              </Card>
            </div>
          </div>
        </div>
      </section>

      {/* Expertise Section */}
      <section className="py-16 md:py-24 bg-accent/10">
        <div className="container px-4 md:px-6">
          <div className="flex flex-col items-center text-center mb-12">
            <Badge variant="outline" className="mb-4">EXPERTISE</Badge>
            <h2 className="text-3xl md:text-4xl font-bold tracking-tight mb-4">My Core Competencies</h2>
            <p className="max-w-[800px] text-muted-foreground md:text-lg">
              Specialized skills and knowledge areas that help businesses succeed online
            </p>
          </div>
          
          <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
            <Card className="border-l-4 border-l-primary">
              <CardContent className="p-6">
                <h3 className="text-xl font-semibold mb-3">Technical SEO</h3>
                <p className="text-muted-foreground mb-4">
                  Comprehensive site audits, performance optimization, and structured data implementation to improve search visibility.
                </p>
                <ul className="space-y-2">
                  <li className="flex items-center">
                    <CheckCircle className="h-4 w-4 mr-2 text-green-500" />
                    <span className="text-sm">Site architecture optimization</span>
                  </li>
                  <li className="flex items-center">
                    <CheckCircle className="h-4 w-4 mr-2 text-green-500" />
                    <span className="text-sm">Mobile optimization</span>
                  </li>
                  <li className="flex items-center">
                    <CheckCircle className="h-4 w-4 mr-2 text-green-500" />
                    <span className="text-sm">Page speed improvements</span>
                  </li>
                </ul>
              </CardContent>
            </Card>
            
            <Card className="border-l-4 border-l-primary">
              <CardContent className="p-6">
                <h3 className="text-xl font-semibold mb-3">Content Strategy</h3>
                <p className="text-muted-foreground mb-4">
                  Data-driven content creation and optimization that resonates with your audience and ranks in search.
                </p>
                <ul className="space-y-2">
                  <li className="flex items-center">
                    <CheckCircle className="h-4 w-4 mr-2 text-green-500" />
                    <span className="text-sm">Keyword research & analysis</span>
                  </li>
                  <li className="flex items-center">
                    <CheckCircle className="h-4 w-4 mr-2 text-green-500" />
                    <span className="text-sm">Content gap analysis</span>
                  </li>
                  <li className="flex items-center">
                    <CheckCircle className="h-4 w-4 mr-2 text-green-500" />
                    <span className="text-sm">Competitor content benchmarking</span>
                  </li>
                </ul>
              </CardContent>
            </Card>
            
            <Card className="border-l-4 border-l-primary">
              <CardContent className="p-6">
                <h3 className="text-xl font-semibold mb-3">Local SEO</h3>
                <p className="text-muted-foreground mb-4">
                  Specialized strategies to improve visibility in Delhi and surrounding areas for location-based searches.
                </p>
                <ul className="space-y-2">
                  <li className="flex items-center">
                    <CheckCircle className="h-4 w-4 mr-2 text-green-500" />
                    <span className="text-sm">Google Business Profile optimization</span>
                  </li>
                  <li className="flex items-center">
                    <CheckCircle className="h-4 w-4 mr-2 text-green-500" />
                    <span className="text-sm">Local citation building</span>
                  </li>
                  <li className="flex items-center">
                    <CheckCircle className="h-4 w-4 mr-2 text-green-500" />
                    <span className="text-sm">Local link building</span>
                  </li>
                </ul>
              </CardContent>
            </Card>
            
            <Card className="border-l-4 border-l-primary">
              <CardContent className="p-6">
                <h3 className="text-xl font-semibold mb-3">E-commerce SEO</h3>
                <p className="text-muted-foreground mb-4">
                  Specialized optimization for online stores to increase product visibility and drive sales.
                </p>
                <ul className="space-y-2">
                  <li className="flex items-center">
                    <CheckCircle className="h-4 w-4 mr-2 text-green-500" />
                    <span className="text-sm">Product page optimization</span>
                  </li>
                  <li className="flex items-center">
                    <CheckCircle className="h-4 w-4 mr-2 text-green-500" />
                    <span className="text-sm">Category page structure</span>
                  </li>
                  <li className="flex items-center">
                    <CheckCircle className="h-4 w-4 mr-2 text-green-500" />
                    <span className="text-sm">Schema markup implementation</span>
                  </li>
                </ul>
              </CardContent>
            </Card>
            
            <Card className="border-l-4 border-l-primary">
              <CardContent className="p-6">
                <h3 className="text-xl font-semibold mb-3">PPC Management</h3>
                <p className="text-muted-foreground mb-4">
                  Strategic paid advertising campaigns that maximize ROI and complement organic efforts.
                </p>
                <ul className="space-y-2">
                  <li className="flex items-center">
                    <CheckCircle className="h-4 w-4 mr-2 text-green-500" />
                    <span className="text-sm">Campaign structure optimization</span>
                  </li>
                  <li className="flex items-center">
                    <CheckCircle className="h-4 w-4 mr-2 text-green-500" />
                    <span className="text-sm">Ad copy creation & testing</span>
                  </li>
                  <li className="flex items-center">
                    <CheckCircle className="h-4 w-4 mr-2 text-green-500" />
                    <span className="text-sm">Conversion tracking setup</span>
                  </li>
                </ul>
              </CardContent>
            </Card>
            
            <Card className="border-l-4 border-l-primary">
              <CardContent className="p-6">
                <h3 className="text-xl font-semibold mb-3">Analytics & Reporting</h3>
                <p className="text-muted-foreground mb-4">
                  Comprehensive performance tracking and actionable insights to drive continuous improvement.
                </p>
                <ul className="space-y-2">
                  <li className="flex items-center">
                    <CheckCircle className="h-4 w-4 mr-2 text-green-500" />
                    <span className="text-sm">Custom dashboard setup</span>
                  </li>
                  <li className="flex items-center">
                    <CheckCircle className="h-4 w-4 mr-2 text-green-500" />
                    <span className="text-sm">Conversion tracking</span>
                  </li>
                  <li className="flex items-center">
                    <CheckCircle className="h-4 w-4 mr-2 text-green-500" />
                    <span className="text-sm">Regular performance reports</span>
                  </li>
                </ul>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>
      
      {/* Values Section */}
      <section className="py-16 md:py-24">
        <div className="container px-4 md:px-6">
          <div className="flex flex-col items-center text-center mb-12">
            <Badge variant="outline" className="mb-4">VALUES</Badge>
            <h2 className="text-3xl md:text-4xl font-bold tracking-tight mb-4">What Drives My Work</h2>
            <p className="max-w-[800px] text-muted-foreground md:text-lg">
              The core principles that guide my approach to digital marketing
            </p>
          </div>
          
          <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-4">
            <Card className="text-center">
              <CardContent className="p-6">
                <div className="h-12 w-12 rounded-full bg-primary/10 flex items-center justify-center mx-auto mb-4">
                  <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="h-6 w-6 text-primary"><path d="m12 14 4-4"/><path d="M3.34 19a10 10 0 1 1 17.32 0"/></svg>
                </div>
                <h3 className="text-xl font-semibold mb-2">Transparency</h3>
                <p className="text-muted-foreground">
                  Clear communication and honest reporting about what's working and what needs improvement.
                </p>
              </CardContent>
            </Card>
            
            <Card className="text-center">
              <CardContent className="p-6">
                <div className="h-12 w-12 rounded-full bg-primary/10 flex items-center justify-center mx-auto mb-4">
                  <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="h-6 w-6 text-primary"><path d="M8.5 14.5A2.5 2.5 0 0 0 11 12c0-1.38-.5-2-1-3-1.072-2.143-.224-4.054 2-6 .5 2.5 2 4.9 4 6.5 2 1.6 3 3.5 3 5.5a7 7 0 1 1-14 0c0-1.153.433-2.294 1-3a2.5 2.5 0 0 0 2.5 2.5z"/></svg>
                </div>
                <h3 className="text-xl font-semibold mb-2">Innovation</h3>
                <p className="text-muted-foreground">
                  Staying ahead of industry trends and algorithm updates to deliver cutting-edge strategies.
                </p>
              </CardContent>
            </Card>
            
            <Card className="text-center">
              <CardContent className="p-6">
                <div className="h-12 w-12 rounded-full bg-primary/10 flex items-center justify-center mx-auto mb-4">
                  <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="h-6 w-6 text-primary"><path d="M6 9H4.5a2.5 2.5 0 0 1 0-5H6"/><path d="M18 9h1.5a2.5 2.5 0 0 0 0-5H18"/><path d="M4 22h16"/><path d="M10 14.66V17c0 .55-.47.98-.97 1.21C7.85 18.75 7 20.24 7 22"/><path d="M14 14.66V17c0 .55.47.98.97 1.21C16.15 18.75 17 20.24 17 22"/><path d="M18 2H6v7a6 6 0 0 0 12 0V2Z"/></svg>
                </div>
                <h3 className="text-xl font-semibold mb-2">Results-Focused</h3>
                <p className="text-muted-foreground">
                  Commitment to delivering tangible, measurable outcomes that impact your bottom line.
                </p>
              </CardContent>
            </Card>
            
            <Card className="text-center">
              <CardContent className="p-6">
                <div className="h-12 w-12 rounded-full bg-primary/10 flex items-center justify-center mx-auto mb-4">
                  <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="h-6 w-6 text-primary"><path d="M16 21v-2a4 4 0 0 0-4-4H6a4 4 0 0 0-4 4v2"/><circle cx="9" cy="7" r="4"/><path d="M22 21v-2a4 4 0 0 0-3-3.87"/><path d="M16 3.13a4 4 0 0 1 0 7.75"/></svg>
                </div>
                <h3 className="text-xl font-semibold mb-2">Partnership</h3>
                <p className="text-muted-foreground">
                  Working collaboratively with clients to understand their business and align strategies with goals.
                </p>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      {/* Certifications Section */}
      <section className="py-16 md:py-24 bg-muted/30">
        <div className="container px-4 md:px-6">
          <div className="flex flex-col items-center text-center mb-12">
            <Badge variant="outline" className="mb-4">CREDENTIALS</Badge>
            <h2 className="text-3xl md:text-4xl font-bold tracking-tight mb-4">Certifications & Education</h2>
            <p className="max-w-[800px] text-muted-foreground md:text-lg">
              Professional qualifications that back my expertise
            </p>
          </div>
          
          <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
            <Card>
              <CardContent className="p-6">
                <div className="flex flex-col items-center text-center">
                  <div className="w-16 h-16 rounded-full bg-primary/10 flex items-center justify-center mb-4">
                    <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="h-8 w-8 text-primary"><path d="M5.5 8.5 9 12l-1.5 1.5"/><path d="m11.5 6.5 3.5 3.5-7 7"/><path d="M16.5 4.5 19 7l-4 4"/><path d="m4 22 7-7"/><path d="M7 2h11v11"/></svg>
                  </div>
                  <h3 className="text-xl font-semibold mb-2">Google Ads Certification</h3>
                  <p className="text-muted-foreground">
                    Certified in Search, Display, Video, and Shopping campaigns.
                  </p>
                </div>
              </CardContent>
            </Card>
            
            <Card>
              <CardContent className="p-6">
                <div className="flex flex-col items-center text-center">
                  <div className="w-16 h-16 rounded-full bg-primary/10 flex items-center justify-center mb-4">
                    <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="h-8 w-8 text-primary"><path d="M12 22a10 10 0 1 0 0-20 10 10 0 0 0 0 20z"/><path d="M6 12h12"/><path d="M12 6v12"/></svg>
                  </div>
                  <h3 className="text-xl font-semibold mb-2">Google Analytics Certification</h3>
                  <p className="text-muted-foreground">
                    Expert in data analysis and performance tracking.
                  </p>
                </div>
              </CardContent>
            </Card>
            
            <Card>
              <CardContent className="p-6">
                <div className="flex flex-col items-center text-center">
                  <div className="w-16 h-16 rounded-full bg-primary/10 flex items-center justify-center mb-4">
                    <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="h-8 w-8 text-primary"><path d="m3 9 9-7 9 7v11a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2z"/><polyline points="9 22 9 12 15 12 15 22"/></svg>
                  </div>
                  <h3 className="text-xl font-semibold mb-2">Master's in Digital Marketing</h3>
                  <p className="text-muted-foreground">
                    Delhi University, Class of 2016
                  </p>
                </div>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <ContactCta />
    </div>
  )
}