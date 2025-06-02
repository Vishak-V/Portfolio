"use client"

import type React from "react"

import { Trophy, Award, Medal } from "lucide-react"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { motion } from "framer-motion"

export default function AwardsPage() {
  return (
    <div className="container mx-auto max-w-4xl py-16 px-4">
      <motion.div initial={{ opacity: 0, y: -20 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.5 }}>
        <h1 className="text-4xl md:text-5xl font-bold mb-12 gradient-heading">Awards & Achievements</h1>
      </motion.div>

      <div className="grid grid-cols-1 gap-8">
      <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.2 }}
        >
          <AwardCard
            icon={<Trophy className="h-10 w-10 text-yellow-500" />}
            title="UA Innovate"
            description="First Place in Full Stack Development"
            details="•	Built an office supply and request management platform using agentic workflows to automate tasks and significantly reduce administrative overhead."
          />
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.2 }}
        >
          <AwardCard
            icon={<Trophy className="h-10 w-10 text-yellow-500" />}
            title="HackPrinceton"
            description="Best Hack in Health Management track and Best Tech-Enabled Patient Safety Solution"
            details="Developed an innovative solution ro help patients with early stage dementia that impressed judges with its technical implementation and potential impact."
          />
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.4 }}
        >
          <AwardCard
            icon={<Medal className="h-10 w-10 text-gray-400" />}
            title="International Collegiate Programming Contest"
            description="2nd place at Southeast Regional Division 2 – 2023"
            details="Competed against top programming teams from universities across the Southeast region, solving complex algorithmic problems under time pressure."
          />
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.4 }}
        >
          <AwardCard
            icon={<Trophy className="h-10 w-10 text-gray-400" />}
            title="Auburn Hacks"
            description="2nd place at Auburn Hackathon – 2023"
            details="Developed a educational game that thought users about mars exploration featuring NPC interactions powered by LLMs and realistic weather conditions using NASA weather API"
          />
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.6 }}
        >
          <AwardCard
            icon={<Award className="h-10 w-10 text-primary" />}
            title="Academic Excellence"
            description="Perfect 4.0 GPA throughout all semesters"
            details="Maintained academic excellence while pursuing dual degrees in Computer Science and Mathematics with a minor in Actuarial Science."
          />
        </motion.div>
      </div>

      <div className="mt-20">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.8 }}
        >
          <h2 className="text-2xl md:text-3xl font-bold mb-8 gradient-heading">Other Recognitions</h2>
        </motion.div>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          <motion.div
            initial={{ opacity: 0, x: -20 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.5, delay: 0.9 }}
          >
            <RecognitionCard
              title="President's List"
              period="2022-2024"
              description="Recognized for outstanding academic achievement every semester"
            />
          </motion.div>
          <motion.div
            initial={{ opacity: 0, x: 20 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.5, delay: 1 }}
          >
            <RecognitionCard
              title="Crimson Crossover"
              period="2023"
              description="Placed 2nd at the annual cybersecurity and competitive programming competition at the University of Alabama"
            />
          </motion.div>
        </div>
      </div>
    </div>
  )
}

function AwardCard({
  icon,
  title,
  description,
  details,
}: {
  icon: React.ReactNode
  title: string
  description: string
  details: string
}) {
  return (
    <Card className="border border-primary/10 shadow-lg card-hover bg-gradient-to-br from-card to-card/80">
      <CardHeader>
        <div className="flex items-start gap-4">
          <div className="mt-1 animate-pulse-slow">{icon}</div>
          <div>
            <CardTitle className="text-2xl text-gradient">{title}</CardTitle>
            <p className="text-lg font-medium mt-2">{description}</p>
          </div>
        </div>
      </CardHeader>
      <CardContent>
        <p className="text-muted-foreground">{details}</p>
      </CardContent>
    </Card>
  )
}

function RecognitionCard({
  title,
  period,
  description,
}: {
  title: string
  period: string
  description: string
}) {
  return (
    <Card className="h-full border border-primary/10 shadow-lg card-hover bg-gradient-to-br from-secondary/50 to-secondary/30">
      <CardHeader>
        <CardTitle className="text-gradient">{title}</CardTitle>
        <p className="text-sm text-muted-foreground">{period}</p>
      </CardHeader>
      <CardContent>
        <p>{description}</p>
      </CardContent>
    </Card>
  )
}

