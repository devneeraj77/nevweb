import Link from "next/link"
import { Button } from "@/components/ui/button"
import { Badge } from "@/components/ui/badge"
import { ArrowRight, Calendar } from "lucide-react"
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from "@/components/ui/card"

const blogPosts = [
  {
    id: 1,
    title: "10 SEO Strategies to Outrank Your Competitors in Delhi",
    excerpt: "Learn the latest SEO techniques to help your Delhi business climb to the top of Google search results.",
    date: "April 15, 2025",
    category: "SEO",
    image: "https://images.pexels.com/photos/265087/pexels-photo-265087.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2"
  },
  {
    id: 2,
    title: "Why Content Marketing Is Essential for Delhi Businesses",
    excerpt: "Discover how content marketing can help local Delhi businesses connect with their target audience effectively.",
    date: "April 8, 2025",
    category: "Content Marketing",
    image: "https://images.pexels.com/photos/6476808/pexels-photo-6476808.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2"
  },
  {
    id: 3,
    title: "Local SEO Guide: Dominating Delhi's Digital Landscape",
    excerpt: "A comprehensive guide to optimizing your business for local searches in Delhi's competitive market.",
    date: "April 1, 2025",
    category: "Local SEO",
    image: "https://images.pexels.com/photos/1796735/pexels-photo-1796735.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2"
  }
]

export function FeaturedPosts() {
  return (
    <section className="py-16 md:py-24">
      <div className="container px-4 md:px-6">
        <div className="flex flex-col items-center text-center mb-12">
          <Badge variant="outline" className="mb-4">INSIGHTS</Badge>
          <h2 className="text-3xl md:text-4xl font-bold tracking-tight mb-4">Latest from Our Blog</h2>
          <p className="max-w-[800px] text-muted-foreground md:text-lg">
            Actionable insights and guides to help you navigate the digital marketing landscape
          </p>
        </div>
        
        <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3 place-items-center">
          {blogPosts.map((post) => (
            <Card key={post.id} className="overflow-hidden group w-full max-w-sm">
              <div className="aspect-video w-full overflow-hidden">
                <img 
                  src={post.image} 
                  alt={post.title}
                  className="object-cover w-full h-full transition-transform duration-300 group-hover:scale-105"
                />
              </div>
              <CardHeader className="p-6 pb-3 text-center">
                <div className="flex items-center justify-center gap-2 mb-2">
                  <Badge variant="secondary">{post.category}</Badge>
                  <div className="flex items-center text-xs text-muted-foreground">
                    <Calendar className="h-3 w-3 mr-1" />
                    {post.date}
                  </div>
                </div>
                <CardTitle className="line-clamp-2">{post.title}</CardTitle>
              </CardHeader>
              <CardContent className="p-6 pt-0 text-center">
                <CardDescription className="line-clamp-3">
                  {post.excerpt}
                </CardDescription>
              </CardContent>
              <CardFooter className="p-6 pt-0 flex justify-center">
                <Button variant="link" className="px-0 font-medium" asChild>
                  <Link href={`/blog/${post.id}`}>
                    Read More <ArrowRight className="ml-1 h-4 w-4" />
                  </Link>
                </Button>
              </CardFooter>
            </Card>
          ))}
        </div>
        
        <div className="flex justify-center mt-12">
          <Button size="lg" variant="outline" asChild>
            <Link href="/blog">
              View All Articles <ArrowRight className="ml-2 h-4 w-4" />
            </Link>
          </Button>
        </div>
      </div>
    </section>
  )
}