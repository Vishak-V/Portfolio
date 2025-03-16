"use client"

import Link from "next/link"
import { ExternalLink, Github } from "lucide-react"
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { Button } from "@/components/ui/button"
import { motion } from "framer-motion"

export default function ProjectsPage() {
  return (
    <div className="container mx-auto max-w-4xl py-16 px-4">
      <motion.div initial={{ opacity: 0, y: -20 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.5 }}>
        <h1 className="text-4xl md:text-5xl font-bold mb-12 gradient-heading">Projects</h1>
      </motion.div>

      <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.4 }}
        >
          <ProjectCard
            title="ReCall"
            description="An innovative software solution using smart glasses for early-stage dementia patients, enabling users to store details and receive reminders about people they meet, fostering social connectivity. Reduces functional decline in users by 10% through interaction. Includes a medical professional dashboard using React that offers real-time user data and insights, enhancing diagnostic accuracy and personalized care."
            image="/ReCall.jfif?height=300&width=600"
            technologies={["Python", "SQL", "React", "Smart Glasses Integration"]}
            links={{
              github: "https://github.com/theVedanta/ReCall-backend",
              demo: "https://www.youtube.com/watch?v=dxmZnS_8mQE",
            }}
          />
        </motion.div>

      <div className="grid grid-cols-1 gap-12">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.2 }}
        >
          <ProjectCard
            title="Courage, The Not So Cowardly Rover"
            description="An educational game that simulates controlling a Mars rover with realistic weather and terrain conditions using NASA's API. Features unique NPC interactions using large language models (LLMs) and prompt engineering."
            image="/Courage.jfif?height=300&width=600"
            technologies={["C#", "Python", "Unity", "NASA API", "LLMs"]}
            links={{
              github: "https://github.com/abearinatrap/auburnhack2024",
              demo: "https://demo-link.com",
            }}
          />
        </motion.div>

        

        <div className="mt-8">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.6 }}
          >
            <h2 className="text-2xl md:text-3xl font-bold mb-8 gradient-heading">Other Projects</h2>
          </motion.div>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            <motion.div
              initial={{ opacity: 0, x: -20 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.5, delay: 0.7 }}
            >
              <SmallProjectCard
                title="ACE Backend"
                description="A backend server for ACE, a web application that helps students rideshare to airports during breaks"
                technologies={["Python", "Fast-API", "PostgreSQL"]}
              />
            </motion.div>
            <motion.div
              initial={{ opacity: 0, x: 20 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.5, delay: 0.8 }}
            >
              <SmallProjectCard
                title="Golf Tournament Simulator"
                description="A simulator that predicts the outcome of golf tournaments using machine learning"
                technologies={["Python", "Scikit-learn", "Pandas","Numpy"]}
              />
            </motion.div>
          </div>
        </div>
      </div>
    </div>
  )
}

function ProjectCard({
  title,
  description,
  image,
  technologies,
  links,
}: {
  title: string
  description: string
  image: string
  technologies: string[]
  links: { github?: string; demo?: string }
}) {
  return (
    <Card className="overflow-hidden border border-primary/10 shadow-lg card-hover bg-gradient-to-br from-card to-card/80">
      <div className="w-full h-64 overflow-hidden">
        <img
          src={image || "/placeholder.svg"}
          alt={title}
          className="w-full h-full object-cover transition-transform hover:scale-105"
        />
      </div>
      <CardHeader>
        <CardTitle className="text-2xl text-gradient">{title}</CardTitle>
        <CardDescription className="mt-2 text-muted-foreground">{description}</CardDescription>
      </CardHeader>
      <CardContent>
        <div className="flex flex-wrap gap-2 mt-2">
          {technologies.map((tech, index) => (
            <Badge key={index} variant="secondary" className="bg-primary/10 hover:bg-primary/20 transition-colors">
              {tech}
            </Badge>
          ))}
        </div>
      </CardContent>
      <CardFooter className="flex gap-4">
        {links.github && (
          <Button variant="outline" size="sm" className="border-primary/20" asChild>
            <Link href={links.github} target="_blank" rel="noopener noreferrer">
              <Github className="h-4 w-4 mr-2" />
              Code
            </Link>
          </Button>
        )}
        {links.demo && (
          <Button variant="gradient" size="sm" asChild>
            <Link href={links.demo} target="_blank" rel="noopener noreferrer">
              <ExternalLink className="h-4 w-4 mr-2" />
              Live Demo
            </Link>
          </Button>
        )}
      </CardFooter>
    </Card>
  )
}

function SmallProjectCard({
  title,
  description,
  technologies,
}: {
  title: string
  description: string
  technologies: string[]
}) {
  return (
    <Card className="h-full border border-primary/10 shadow-lg card-hover bg-gradient-to-br from-secondary/50 to-secondary/30">
      <CardHeader>
        <CardTitle className="text-gradient">{title}</CardTitle>
      </CardHeader>
      <CardContent>
        <p className="text-muted-foreground mb-4">{description}</p>
        <div className="flex flex-wrap gap-2">
          {technologies.map((tech, index) => (
            <Badge key={index} variant="outline" className="border-primary/20 bg-primary/5">
              {tech}
            </Badge>
          ))}
        </div>
      </CardContent>
    </Card>
  )
}

