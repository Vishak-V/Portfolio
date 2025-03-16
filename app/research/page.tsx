"use client"

import type React from "react"

import { Calendar, FileText, Database, Brain } from "lucide-react"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { motion } from "framer-motion"

export default function ResearchPage() {
  return (
    <div className="container mx-auto max-w-4xl py-16 px-4">
      <motion.div initial={{ opacity: 0, y: -20 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.5 }}>
        <h1 className="text-4xl md:text-5xl font-bold mb-12 gradient-heading">Research Experience</h1>
      </motion.div>

      <div className="space-y-12">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.2 }}
        >
          <ResearchCard
            title="Database Management"
            period="January 2024 – June 2024"
            technologies={["R"]}
            description={[
              "Managed a database of marine organism data to develop a website using R Shiny to visualize and derive insights",
              "Led the automation of a data pipeline to process marine microorganism data collected along the East Coast",
            ]}
            skills={["R", "Data Visualization", "Database Management", "R Shiny"]}
          />
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.4 }}
        >
          <ResearchCard
            title="EEG Data analysis using LLMs"
            period="August 2023 - Present"
            technologies={["Python"]}
            description={[
              "Utilizing Microsoft Autogen and LIDA to develop software agents for automating EEG data analysis",
              "Collaborated with health experts to fine-tune the OpenAI GPT-3.5 model, developing an SMS software to track eating habits through tailored prompts",
            ]}
            skills={["Python", "Machine Learning", "LLMs", "EEG Analysis", "Microsoft Autogen"]}
          />
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.4 }}
        >
          <ResearchCard
            title="Combinatorics Research"
            period="August 2022 - May 2023"
            technologies={["Python", "SageMath"]}
            description={[
              "Developed a construction method for all quivers mutation equivalent to zero non-forks. Presented at AMS special session at Georgia Tech",
              "Studied C-matrices and L-matrices to find new methods to represent quivers in Cluster Algebra",
            ]}
            skills={["Python", "SageMath", "Combinatorics", "LaTeX", "Mathematics"]}
          />
        </motion.div>
      </div>

      <div className="mt-20">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.6 }}
        >
          <h2 className="text-2xl md:text-3xl font-bold mb-8 gradient-heading">Research Highlights</h2>
        </motion.div>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          <motion.div
            initial={{ opacity: 0, x: -20 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.5, delay: 0.7 }}
          >
            <HighlightCard
              icon={<Database className="h-8 w-8 text-primary" />}
              title="Marine Data Pipeline"
              description="Automated processing of marine microorganism data collected along the East Coast"
            />
          </motion.div>
          <motion.div
            initial={{ opacity: 0, x: 20 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.5, delay: 0.8 }}
          >
            <HighlightCard
              icon={<Brain className="h-8 w-8 text-primary" />}
              title="AI-Powered EEG Analysis"
              description="Developed software agents for automating complex EEG data analysis using LLMs"
            />
          </motion.div>
        </div>
      </div>
    </div>
  )
}

function ResearchCard({
  title,
  period,
  technologies,
  description,
  skills,
}: {
  title: string
  period: string
  technologies: string[]
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
          <FileText className="h-4 w-4 mr-2 text-primary" />
          <span>Technologies: {technologies.join(", ")}</span>
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
          <h4 className="text-sm font-semibold mb-3 text-gradient">Skills Applied</h4>
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

function HighlightCard({
  icon,
  title,
  description,
}: {
  icon: React.ReactNode
  title: string
  description: string
}) {
  return (
    <Card className="h-full border border-primary/10 shadow-lg card-hover bg-gradient-to-br from-secondary/50 to-secondary/30">
      <CardHeader>
        <div className="flex items-center gap-3">
          <div className="animate-pulse-slow">{icon}</div>
          <CardTitle className="text-xl text-gradient">{title}</CardTitle>
        </div>
      </CardHeader>
      <CardContent>
        <p className="text-muted-foreground">{description}</p>
      </CardContent>
    </Card>
  )
}

