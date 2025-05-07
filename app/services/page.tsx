import Link from "next/link"
import { Button } from "@/components/ui/button"
import { Badge } from "@/components/ui/badge"
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from "@/components/ui/card"
import { ArrowRight, CheckCircle } from "lucide-react"
import { ContactCta } from "@/components/sections/contact-cta"
import { Separator } from "@/components/ui/separator"

export const metadata = {
  title: 'Services - Delhi\'s Premier SEO & Digital Marketing Specialist',
  description: 'Comprehensive SEO and digital marketing services in Delhi. From technical SEO and content strategy to PPC and social media marketing.',
}

export default function ServicesPage() {
  return (
    <div className="flex flex-col min-h-screen">
      {/* Hero Section */}
      <section className="py-16 md:py-24 bg-muted">
        <div className="container px-4 md:px-6">
          <div className="flex flex-col items-center text-center">
            <Badge variant="outline" className="mb-4">SERVICES</Badge>
            <h1 className="text-3xl sm:text-4xl md:text-5xl font-bold tracking-tight mb-4">
              Comprehensive Digital Marketing Solutions
            </h1>
            <p className="max-w-[800px] text-muted-foreground md:text-xl mb-8">
              Tailored strategies to elevate your online presence and drive sustainable business growth in Delhi and beyond
            </p>
            <Button size="lg" asChild>
              <Link href="/contact">
                Get a Free Consultation <ArrowRight className="ml-2 h-4 w-4" />
              </Link>
            </Button>
          </div>
        </div>
      </section>

      {/* Main Services Section */}
      <section className="py-16 md:py-24">
        <div className="container px-4 md:px-6">
          <div className="grid gap-12">
            {/* SEO Service */}
            <div className="grid gap-6 lg:grid-cols-2 lg:gap-12 items-center">
              <div className="space-y-4">
                <Badge className="bg-blue-100 text-blue-800 hover:bg-blue-200 dark:bg-blue-900 dark:text-blue-300 dark:hover:bg-blue-800">
                  Search Engine Optimization
                </Badge>
                <h2 className="text-3xl font-bold tracking-tight">
                  Drive Organic Traffic & Improve Rankings
                </h2>
                <p className="text-muted-foreground">
                  Comprehensive SEO strategies that improve your website's visibility in search results, attract more qualified visitors, and convert them into customers.
                </p>
                
                <div className="grid grid-cols-1 md:grid-cols-2 gap-3 pt-4">
                  <div className="flex items-center space-x-2">
                    <CheckCircle className="h-5 w-5 text-green-500" />
                    <span>Technical SEO Audits</span>
                  </div>
                  <div className="flex items-center space-x-2">
                    <CheckCircle className="h-5 w-5 text-green-500" />
                    <span>Keyword Research & Analysis</span>
                  </div>
                  <div className="flex items-center space-x-2">
                    <CheckCircle className="h-5 w-5 text-green-500" />
                    <span>On-Page Optimization</span>
                  </div>
                  <div className="flex items-center space-x-2">
                    <CheckCircle className="h-5 w-5 text-green-500" />
                    <span>Link Building Strategies</span>
                  </div>
                  <div className="flex items-center space-x-2">
                    <CheckCircle className="h-5 w-5 text-green-500" />
                    <span>Content Optimization</span>
                  </div>
                  <div className="flex items-center space-x-2">
                    <CheckCircle className="h-5 w-5 text-green-500" />
                    <span>Competitor Analysis</span>
                  </div>
                </div>
                
                <div className="pt-4">
                  <Button size="lg" asChild>
                    <Link href="/services/seo">
                      Learn More <ArrowRight className="ml-2 h-4 w-4" />
                    </Link>
                  </Button>
                </div>
              </div>
              
              <div className="lg:pl-10 xl:pl-16 order-first lg:order-last">
                <div className="relative rounded-lg overflow-hidden">
                  <img
                    src="https://images.pexels.com/photos/265087/pexels-photo-265087.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2"
                    alt="SEO and search engine optimization concept"
                    className="w-full h-auto aspect-video object-cover rounded-lg"
                  />
                </div>
              </div>
            </div>
            
            <Separator />
            
            {/* Content Marketing Service */}
            <div className="grid gap-6 lg:grid-cols-2 lg:gap-12 items-center">
              <div className="space-y-4">
                <Badge className="bg-emerald-100 text-emerald-800 hover:bg-emerald-200 dark:bg-emerald-900 dark:text-emerald-300 dark:hover:bg-emerald-800">
                  Content Marketing
                </Badge>
                <h2 className="text-3xl font-bold tracking-tight">
                  Engage Your Audience with Quality Content
                </h2>
                <p className="text-muted-foreground">
                  Strategic content creation and promotion that establishes your brand as an industry authority, attracts your target audience, and drives conversions.
                </p>
                
                <div className="grid grid-cols-1 md:grid-cols-2 gap-3 pt-4">
                  <div className="flex items-center space-x-2">
                    <CheckCircle className="h-5 w-5 text-green-500" />
                    <span>Content Strategy Development</span>
                  </div>
                  <div className="flex items-center space-x-2">
                    <CheckCircle className="h-5 w-5 text-green-500" />
                    <span>Blog Writing & Management</span>
                  </div>
                  <div className="flex items-center space-x-2">
                    <CheckCircle className="h-5 w-5 text-green-500" />
                    <span>Long-form Content Creation</span>
                  </div>
                  <div className="flex items-center space-x-2">
                    <CheckCircle className="h-5 w-5 text-green-500" />
                    <span>Infographic Design</span>
                  </div>
                  <div className="flex items-center space-x-2">
                    <CheckCircle className="h-5 w-5 text-green-500" />
                    <span>Content Distribution</span>
                  </div>
                  <div className="flex items-center space-x-2">
                    <CheckCircle className="h-5 w-5 text-green-500" />
                    <span>Content Performance Analysis</span>
                  </div>
                </div>
                
                <div className="pt-4">
                  <Button size="lg" asChild>
                    <Link href="/services/content-marketing">
                      Learn More <ArrowRight className="ml-2 h-4 w-4" />
                    </Link>
                  </Button>
                </div>
              </div>
              
              <div className="lg:pl-10 xl:pl-16">
                <div className="relative rounded-lg overflow-hidden">
                  <img
                    src="https://images.pexels.com/photos/6476808/pexels-photo-6476808.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2"
                    alt="Content creation and marketing"
                    className="w-full h-auto aspect-video object-cover rounded-lg"
                  />
                </div>
              </div>
            </div>
            
            <Separator />
            
            {/* PPC Service */}
            <div className="grid gap-6 lg:grid-cols-2 lg:gap-12 items-center">
              <div className="space-y-4">
                <Badge className="bg-amber-100 text-amber-800 hover:bg-amber-200 dark:bg-amber-900 dark:text-amber-300 dark:hover:bg-amber-800">
                  Pay-Per-Click Advertising
                </Badge>
                <h2 className="text-3xl font-bold tracking-tight">
                  Maximize ROI with Targeted Ad Campaigns
                </h2>
                <p className="text-muted-foreground">
                  Results-driven PPC campaigns that deliver immediate visibility, drive qualified traffic, and generate leads or sales with measurable ROI.
                </p>
                
                <div className="grid grid-cols-1 md:grid-cols-2 gap-3 pt-4">
                  <div className="flex items-center space-x-2">
                    <CheckCircle className="h-5 w-5 text-green-500" />
                    <span>Google Ads Management</span>
                  </div>
                  <div className="flex items-center space-x-2">
                    <CheckCircle className="h-5 w-5 text-green-500" />
                    <span>Campaign Structure Optimization</span>
                  </div>
                  <div className="flex items-center space-x-2">
                    <CheckCircle className="h-5 w-5 text-green-500" />
                    <span>Ad Copy Creation & Testing</span>
                  </div>
                  <div className="flex items-center space-x-2">
                    <CheckCircle className="h-5 w-5 text-green-500" />
                    <span>Landing Page Optimization</span>
                  </div>
                  <div className="flex items-center space-x-2">
                    <CheckCircle className="h-5 w-5 text-green-500" />
                    <span>Bid Management & Optimization</span>
                  </div>
                  <div className="flex items-center space-x-2">
                    <CheckCircle className="h-5 w-5 text-green-500" />
                    <span>Conversion Tracking Setup</span>
                  </div>
                </div>
                
                <div className="pt-4">
                  <Button size="lg" asChild>
                    <Link href="/services/ppc">
                      Learn More <ArrowRight className="ml-2 h-4 w-4" />
                    </Link>
                  </Button>
                </div>
              </div>
              
              <div className="lg:pl-10 xl:pl-16 order-first lg:order-last">
                <div className="relative rounded-lg overflow-hidden">
                  <img
                    src="https://images.pexels.com/photos/927629/pexels-photo-927629.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2"
                    alt="Pay per click advertising concept"
                    className="w-full h-auto aspect-video object-cover rounded-lg"
                  />
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Additional Services Section */}
      <section className="py-16 md:py-24 bg-accent/10">
        <div className="container px-4 md:px-6">
          <div className="flex flex-col items-center text-center mb-12">
            <Badge variant="outline" className="mb-4">MORE SERVICES</Badge>
            <h2 className="text-3xl md:text-4xl font-bold tracking-tight mb-4">
              Specialized Digital Marketing Solutions
            </h2>
            <p className="max-w-[800px] text-muted-foreground md:text-lg">
              Complementary services to enhance your digital marketing strategy
            </p>
          </div>
          
          <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
            <Card>
              <CardHeader>
                <div className="w-12 h-12 rounded-lg bg-primary/10 flex items-center justify-center mb-2">
                  <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="h-6 w-6 text-primary"><path d="M17 3a2.85 2.83 0 1 1 4 4L7.5 20.5 2 22l1.5-5.5Z"/><path d="m15 5 4 4"/></svg>
                </div>
                <CardTitle>Social Media Marketing</CardTitle>
                <CardDescription>
                  Build your brand and engage with your audience on social platforms.
                </CardDescription>
              </CardHeader>
              <CardContent>
                <ul className="space-y-2 text-sm">
                  <li className="flex items-center">
                    <CheckCircle className="h-4 w-4 mr-2 text-green-500" />
                    <span>Social media strategy development</span>
                  </li>
                  <li className="flex items-center">
                    <CheckCircle className="h-4 w-4 mr-2 text-green-500" />
                    <span>Content creation & scheduling</span>
                  </li>
                  <li className="flex items-center">
                    <CheckCircle className="h-4 w-4 mr-2 text-green-500" />
                    <span>Community management</span>
                  </li>
                  <li className="flex items-center">
                    <CheckCircle className="h-4 w-4 mr-2 text-green-500" />
                    <span>Paid social advertising</span>
                  </li>
                </ul>
              </CardContent>
              <CardFooter>
                <Button variant="secondary" className="w-full" asChild>
                  <Link href="/services/social-media">Learn More</Link>
                </Button>
              </CardFooter>
            </Card>
            
            <Card>
              <CardHeader>
                <div className="w-12 h-12 rounded-lg bg-primary/10 flex items-center justify-center mb-2">
                  <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="h-6 w-6 text-primary"><path d="M12 22s8-4 8-10V5l-8-3-8 3v7c0 6 8 10 8 10"/><path d="m12 8 1 1 2-2"/></svg>
                </div>
                <CardTitle>Local SEO</CardTitle>
                <CardDescription>
                  Dominate local search results and attract nearby customers.
                </CardDescription>
              </CardHeader>
              <CardContent>
                <ul className="space-y-2 text-sm">
                  <li className="flex items-center">
                    <CheckCircle className="h-4 w-4 mr-2 text-green-500" />
                    <span>Google Business Profile optimization</span>
                  </li>
                  <li className="flex items-center">
                    <CheckCircle className="h-4 w-4 mr-2 text-green-500" />
                    <span>Local citation building</span>
                  </li>
                  <li className="flex items-center">
                    <CheckCircle className="h-4 w-4 mr-2 text-green-500" />
                    <span>Review management</span>
                  </li>
                  <li className="flex items-center">
                    <CheckCircle className="h-4 w-4 mr-2 text-green-500" />
                    <span>Local content strategy</span>
                  </li>
                </ul>
              </CardContent>
              <CardFooter>
                <Button variant="secondary" className="w-full" asChild>
                  <Link href="/services/local-seo">Learn More</Link>
                </Button>
              </CardFooter>
            </Card>
            
            <Card>
              <CardHeader>
                <div className="w-12 h-12 rounded-lg bg-primary/10 flex items-center justify-center mb-2">
                  <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="h-6 w-6 text-primary"><polygon points="13 2 3 14 12 14 11 22 21 10 12 10 13 2"/></svg>
                </div>
                <CardTitle>Conversion Rate Optimization</CardTitle>
                <CardDescription>
                  Turn more visitors into customers with data-driven improvements.
                </CardDescription>
              </CardHeader>
              <CardContent>
                <ul className="space-y-2 text-sm">
                  <li className="flex items-center">
                    <CheckCircle className="h-4 w-4 mr-2 text-green-500" />
                    <span>Conversion funnel analysis</span>
                  </li>
                  <li className="flex items-center">
                    <CheckCircle className="h-4 w-4 mr-2 text-green-500" />
                    <span>A/B testing</span>
                  </li>
                  <li className="flex items-center">
                    <CheckCircle className="h-4 w-4 mr-2 text-green-500" />
                    <span>User experience improvements</span>
                  </li>
                  <li className="flex items-center">
                    <CheckCircle className="h-4 w-4 mr-2 text-green-500" />
                    <span>Landing page optimization</span>
                  </li>
                </ul>
              </CardContent>
              <CardFooter>
                <Button variant="secondary" className="w-full" asChild>
                  <Link href="/services/cro">Learn More</Link>
                </Button>
              </CardFooter>
            </Card>
            
            <Card>
              <CardHeader>
                <div className="w-12 h-12 rounded-lg bg-primary/10 flex items-center justify-center mb-2">
                  <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="h-6 w-6 text-primary"><rect width="20" height="14" x="2" y="3" rx="2"/><line x1="8" x2="16" y1="21" y2="21"/><line x1="12" x2="12" y1="17" y2="21"/></svg>
                </div>
                <CardTitle>Web Design & Development</CardTitle>
                <CardDescription>
                  Create SEO-friendly websites that convert visitors into customers.
                </CardDescription>
              </CardHeader>
              <CardContent>
                <ul className="space-y-2 text-sm">
                  <li className="flex items-center">
                    <CheckCircle className="h-4 w-4 mr-2 text-green-500" />
                    <span>Responsive website design</span>
                  </li>
                  <li className="flex items-center">
                    <CheckCircle className="h-4 w-4 mr-2 text-green-500" />
                    <span>SEO-focused development</span>
                  </li>
                  <li className="flex items-center">
                    <CheckCircle className="h-4 w-4 mr-2 text-green-500" />
                    <span>Performance optimization</span>
                  </li>
                  <li className="flex items-center">
                    <CheckCircle className="h-4 w-4 mr-2 text-green-500" />
                    <span>CMS implementation</span>
                  </li>
                </ul>
              </CardContent>
              <CardFooter>
                <Button variant="secondary" className="w-full" asChild>
                  <Link href="/services/web-design">Learn More</Link>
                </Button>
              </CardFooter>
            </Card>
            
            <Card>
              <CardHeader>
                <div className="w-12 h-12 rounded-lg bg-primary/10 flex items-center justify-center mb-2">
                  <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="h-6 w-6 text-primary"><path d="M16 21v-2a4 4 0 0 0-4-4H6a4 4 0 0 0-4 4v2"/><circle cx="9" cy="7" r="4"/><path d="M22 21v-2a4 4 0 0 0-3-3.87"/><path d="M16 3.13a4 4 0 0 1 0 7.75"/></svg>
                </div>
                <CardTitle>E-commerce SEO</CardTitle>
                <CardDescription>
                  Optimize your online store to increase product visibility and sales.
                </CardDescription>
              </CardHeader>
              <CardContent>
                <ul className="space-y-2 text-sm">
                  <li className="flex items-center">
                    <CheckCircle className="h-4 w-4 mr-2 text-green-500" />
                    <span>Product page optimization</span>
                  </li>
                  <li className="flex items-center">
                    <CheckCircle className="h-4 w-4 mr-2 text-green-500" />
                    <span>Category structure improvements</span>
                  </li>
                  <li className="flex items-center">
                    <CheckCircle className="h-4 w-4 mr-2 text-green-500" />
                    <span>Schema markup implementation</span>
                  </li>
                  <li className="flex items-center">
                    <CheckCircle className="h-4 w-4 mr-2 text-green-500" />
                    <span>Conversion optimization</span>
                  </li>
                </ul>
              </CardContent>
              <CardFooter>
                <Button variant="secondary" className="w-full" asChild>
                  <Link href="/services/ecommerce-seo">Learn More</Link>
                </Button>
              </CardFooter>
            </Card>
            
            <Card>
              <CardHeader>
                <div className="w-12 h-12 rounded-lg bg-primary/10 flex items-center justify-center mb-2">
                  <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="h-6 w-6 text-primary"><path d="M3 3v18h18"/><path d="m19 9-5 5-4-4-3 3"/></svg>
                </div>
                <CardTitle>Analytics & Reporting</CardTitle>
                <CardDescription>
                  Gain insights from your data to make informed marketing decisions.
                </CardDescription>
              </CardHeader>
              <CardContent>
                <ul className="space-y-2 text-sm">
                  <li className="flex items-center">
                    <CheckCircle className="h-4 w-4 mr-2 text-green-500" />
                    <span>Custom dashboard setup</span>
                  </li>
                  <li className="flex items-center">
                    <CheckCircle className="h-4 w-4 mr-2 text-green-500" />
                    <span>Conversion tracking</span>
                  </li>
                  <li className="flex items-center">
                    <CheckCircle className="h-4 w-4 mr-2 text-green-500" />
                    <span>KPI monitoring</span>
                  </li>
                  <li className="flex items-center">
                    <CheckCircle className="h-4 w-4 mr-2 text-green-500" />
                    <span>Regular performance reports</span>
                  </li>
                </ul>
              </CardContent>
              <CardFooter>
                <Button variant="secondary" className="w-full" asChild>
                  <Link href="/services/analytics">Learn More</Link>
                </Button>
              </CardFooter>
            </Card>
          </div>
        </div>
      </section>
      
      {/* Process Section */}
      <section className="py-16 md:py-24">
        <div className="container px-4 md:px-6">
          <div className="flex flex-col items-center text-center mb-12">
            <Badge variant="outline" className="mb-4">OUR PROCESS</Badge>
            <h2 className="text-3xl md:text-4xl font-bold tracking-tight mb-4">
              How We Work
            </h2>
            <p className="max-w-[800px] text-muted-foreground md:text-lg">
              Our proven methodology ensures consistent, measurable success for every client
            </p>
          </div>
          
          <div className="relative">
            <div className="hidden lg:block absolute left-1/2 top-0 bottom-0 w-0.5 bg-border -translate-x-1/2"></div>
            
            <div className="space-y-12 relative">
              <div className="grid gap-6 lg:grid-cols-2 lg:gap-12 items-center">
                <div className="lg:text-right space-y-4">
                  <div className="inline-flex items-center justify-center w-12 h-12 rounded-full bg-primary text-primary-foreground font-bold text-lg lg:ml-auto">1</div>
                  <h3 className="text-2xl font-bold">Discovery & Audit</h3>
                  <p className="text-muted-foreground">
                    We begin by understanding your business goals, target audience, and current digital presence. Our comprehensive audit identifies strengths, weaknesses, and opportunities for improvement.
                  </p>
                </div>
                <div className="lg:pl-10 xl:pl-16 order-first lg:order-last">
                  <div className="relative rounded-lg overflow-hidden">
                    <img
                      src="https://images.pexels.com/photos/147413/twitter-facebook-together-exchange-of-information-147413.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2"
                      alt="Digital marketing audit and discovery process"
                      className="w-full h-auto aspect-video object-cover rounded-lg"
                    />
                  </div>
                </div>
              </div>
              
              <div className="grid gap-6 lg:grid-cols-2 lg:gap-12 items-center">
                <div className="space-y-4">
                  <div className="inline-flex items-center justify-center w-12 h-12 rounded-full bg-primary text-primary-foreground font-bold text-lg">2</div>
                  <h3 className="text-2xl font-bold">Strategy Development</h3>
                  <p className="text-muted-foreground">
                    Based on our findings, we develop a customized strategy aligned with your business goals. This includes clear KPIs, timelines, and deliverables to ensure measurable results.
                  </p>
                </div>
                <div className="lg:pl-10 xl:pl-16">
                  <div className="relative rounded-lg overflow-hidden">
                    <img
                      src="https://images.pexels.com/photos/7688460/pexels-photo-7688460.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2"
                      alt="Digital marketing strategy development"
                      className="w-full h-auto aspect-video object-cover rounded-lg"
                    />
                  </div>
                </div>
              </div>
              
              <div className="grid gap-6 lg:grid-cols-2 lg:gap-12 items-center">
                <div className="lg:text-right space-y-4">
                  <div className="inline-flex items-center justify-center w-12 h-12 rounded-full bg-primary text-primary-foreground font-bold text-lg lg:ml-auto">3</div>
                  <h3 className="text-2xl font-bold">Implementation</h3>
                  <p className="text-muted-foreground">
                    Our team executes the strategy with precision, focusing on quick wins while building for long-term success. We maintain transparent communication throughout the implementation process.
                  </p>
                </div>
                <div className="lg:pl-10 xl:pl-16 order-first lg:order-last">
                  <div className="relative rounded-lg overflow-hidden">
                    <img
                      src="https://images.pexels.com/photos/6476783/pexels-photo-6476783.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2"
                      alt="Digital marketing implementation"
                      className="w-full h-auto aspect-video object-cover rounded-lg"
                    />
                  </div>
                </div>
              </div>
              
              <div className="grid gap-6 lg:grid-cols-2 lg:gap-12 items-center">
                <div className="space-y-4">
                  <div className="inline-flex items-center justify-center w-12 h-12 rounded-full bg-primary text-primary-foreground font-bold text-lg">4</div>
                  <h3 className="text-2xl font-bold">Monitor & Optimize</h3>
                  <p className="text-muted-foreground">
                    We continuously track performance against KPIs, making data-driven adjustments to optimize results. Regular reporting keeps you informed of progress and ROI.
                  </p>
                </div>
                <div className="lg:pl-10 xl:pl-16">
                  <div className="relative rounded-lg overflow-hidden">
                    <img
                      src="https://images.pexels.com/photos/905163/pexels-photo-905163.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2"
                      alt="Digital marketing monitoring and optimization"
                      className="w-full h-auto aspect-video object-cover rounded-lg"
                    />
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <ContactCta />
    </div>
  )
}