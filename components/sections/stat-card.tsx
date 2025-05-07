import { cn } from "@/lib/utils"
import { Card, CardContent } from "@/components/ui/card"
import { ReactNode } from "react"

interface StatCardProps {
  title: string
  description: string
  icon: ReactNode
  className?: string
}

export function StatCard({ title, description, icon, className }: StatCardProps) {
  return (
    <Card className={cn("overflow-hidden transition-all duration-200 hover:shadow-md", className)}>
      <CardContent className="p-6">
        <div className="flex items-center space-x-4">
          <div className="shrink-0">{icon}</div>
          <div>
            <p className="text-3xl font-bold">{title}</p>
            <p className="text-sm text-muted-foreground">{description}</p>
          </div>
        </div>
      </CardContent>
    </Card>
  )
}