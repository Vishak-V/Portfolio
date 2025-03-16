"use client"

import { Calendar, Building, ArrowUpRight } from "lucide-react"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { motion } from "framer-motion"

export default function ExperiencePage() {
  return (
    <div className="container mx-auto max-w-4xl py-16 px-4">
      <motion.div initial={{ opacity: 0, y: -20 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.5 }}>
        <h1 className="text-4xl md:text-5xl font-bold mb-12 gradient-heading">Work Experience</h1>
      </motion.div>

      <div className="space-y-12">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.2 }}
        >
          <ExperienceCard
            title="Backend Engineering Intern"
            company="Shipt, Inc."
            location="Birmingham, AL"
            period="June 2024 - August 2024"
            description={[
              "Designed and developed a GoLang backend to manage delivery windows, providing exclusive visibility to delivery routes from over 10 Target sortation centers across the US",
              "Migrated scheduling service to a standalone service, enhancing flexibility by transitioning scheduling from zones to individual stores",
              "Resolved bugs to ensure accurate consumption of multiple Kafka topics, enabling the program to effectively handle Delivery Service Partner orders",
            ]}
            skills={["GoLang", "Kafka", "Microservices", "Backend Development"]}
          />
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.4 }}
        >
          <ExperienceCard
            title="Data Analyst Intern"
            company="Mal Moore Athletic Facility, University of Alabama"
            location="Tuscaloosa, AL"
            period="September 2023 - May 2024"
            description={[
              "Led the simulation of NCAA golf tournaments using Python, involving over 200 Division 1 athletes, and created visualizations in Tableau to provide coaches with optimal strategies for the SEC and NCAA championships",
              "Conducted analysis on ticket transfer data to identify broker activity, uncovering insights projected to drive over $3 million in additional revenue through increased ticket sales",
            ]}
            skills={["Python", "Tableau", "Data Analysis", "Statistical Modeling"]}
          />
        </motion.div>
      </div>

      <div className="mt-20">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.6 }}
        >
          <h2 className="text-2xl md:text-3xl font-bold mb-8 gradient-heading">Key Accomplishments</h2>
        </motion.div>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          <motion.div
            initial={{ opacity: 0, x: -20 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.5, delay: 0.7 }}
          >
            <AccomplishmentCard
              title="Backend System Design"
              description="Designed and implemented a scalable backend system for managing delivery windows across multiple sortation centers"
            />
          </motion.div>
          <motion.div
            initial={{ opacity: 0, x: 20 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.5, delay: 0.8 }}
          >
            <AccomplishmentCard
              title="Revenue Impact"
              description="Data analysis uncovered insights projected to drive over $3 million in additional revenue through increased ticket sales"
            />
          </motion.div>
        </div>
      </div>
    </div>
  )
}

function ExperienceCard({
  title,
  company,
  location,
  period,
  description,
  skills,
}: {
  title: string
  company: string
  location: string
  period: string
  description: string[]
  skills: string[]
}) {
  return (
    <Card className="border border-primary/10 shadow-lg card-hover bg-gradient-to-br from-card to-card/80">
      <CardHeader>
        <div className="flex flex-col md:flex-row md:justify-between md:items-center gap-2">
          <CardTitle className="text-2xl text-gradient">{title}</CardTitle>
          <Badge variant="outline" className="w-fit border-primary/20 bg-primary/5">
            <Calendar className="h-3 w-3 mr-1 text-primary" />
            {period}
          </Badge>
        </div>
        <div className="flex items-center text-muted-foreground mt-2">
          <Building className="h-4 w-4 mr-2 text-primary" />
          <span>
            {company} | {location}
          </span>
        </div>
      </CardHeader>
      <CardContent>
        <ul className="space-y-4 mb-6">
          {description.map((item, index) => (
            <li key={index} className="flex">
              <span className="mr-2 text-primary">•</span>
              <span>{item}</span>
            </li>
          ))}
        </ul>

        <div className="mt-6">
          <h4 className="text-sm font-semibold mb-3 text-gradient">Skills Used</h4>
          <div className="flex flex-wrap gap-2">
            {skills.map((skill, index) => (
              <Badge key={index} variant="secondary" className="bg-primary/10 hover:bg-primary/20 transition-colors">
                {skill}
              </Badge>
            ))}
          </div>
        </div>
      </CardContent>
    </Card>
  )
}

function AccomplishmentCard({ title, description }: { title: string; description: string }) {
  return (
    <Card className="h-full border border-primary/10 shadow-lg bg-gradient-to-br from-secondary/50 to-secondary/30 card-hover">
      <CardHeader>
        <CardTitle className="text-xl flex items-center">
          <ArrowUpRight className="h-5 w-5 mr-2 text-primary" />
          <span className="text-gradient">{title}</span>
        </CardTitle>
      </CardHeader>
      <CardContent>
        <p className="text-muted-foreground">{description}</p>
      </CardContent>
    </Card>
  )
}

