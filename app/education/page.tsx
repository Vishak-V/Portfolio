"use client"

import { GraduationCap, MapPin, Calendar } from "lucide-react"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { motion } from "framer-motion"

export default function EducationPage() {
  return (
    <div className="container mx-auto max-w-4xl py-16 px-4">
      <motion.div initial={{ opacity: 0, y: -20 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.5 }}>
        <h1 className="text-4xl md:text-5xl font-bold mb-12 gradient-heading">Education</h1>
      </motion.div>

      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5, delay: 0.2 }}
      >
        <Card className="mb-12 border border-primary/10 shadow-lg card-hover">
          <CardHeader className="pb-2">
            <CardTitle className="text-2xl md:text-3xl gradient-heading">The University of Alabama</CardTitle>
          </CardHeader>
          <CardContent>
            <div className="flex flex-col space-y-6">
              <div className="flex items-center text-muted-foreground">
                <MapPin className="h-4 w-4 mr-2 text-primary" />
                <span>Tuscaloosa, AL</span>
              </div>

              <div className="flex items-center text-muted-foreground">
                <Calendar className="h-4 w-4 mr-2 text-primary" />
                <span>Expected Graduation: December 2025</span>
              </div>

              <div className="mt-4">
                <h3 className="text-lg font-semibold flex items-center">
                  <GraduationCap className="h-5 w-5 mr-2 text-primary" />
                  Bachelor of Science in Computer Science
                </h3>
              </div>

              <div className="mt-2">
                <h3 className="text-lg font-semibold flex items-center">
                  <GraduationCap className="h-5 w-5 mr-2 text-primary" />
                  Bachelor of Science in Mathematics
                </h3>
              </div>

              <div className="mt-2">
                <h3 className="text-lg font-semibold">Minor: Actuarial Science</h3>
              </div>

              <div className="mt-4 p-6 bg-gradient-to-r from-primary/10 to-purple-500/10 rounded-xl">
                <div className="flex justify-between items-center">
                  <span className="font-semibold text-lg">GPA</span>
                  <span className="text-2xl font-bold text-gradient">4.0</span>
                </div>
              </div>

              <div className="mt-6">
                <h3 className="text-lg font-semibold mb-4 text-gradient">Relevant Coursework</h3>
                <div className="grid grid-cols-1 md:grid-cols-2 gap-3">
                  <div className="bg-secondary/50 p-3 rounded-lg border border-primary/10 hover:border-primary/30 transition-colors">
                    Data Structures & Algorithms
                  </div>
                  <div className="bg-secondary/50 p-3 rounded-lg border border-primary/10 hover:border-primary/30 transition-colors">
                    High Performance Computing
                  </div>
                  <div className="bg-secondary/50 p-3 rounded-lg border border-primary/10 hover:border-primary/30 transition-colors">
                    Data Science
                  </div>
                  <div className="bg-secondary/50 p-3 rounded-lg border border-primary/10 hover:border-primary/30 transition-colors">
                    Math Stats With Applications
                  </div>
                  <div className="bg-secondary/50 p-3 rounded-lg border border-primary/10 hover:border-primary/30 transition-colors">
                    Machine Learning
                  </div>
                  <div className="bg-secondary/50 p-3 rounded-lg border border-primary/10 hover:border-primary/30 transition-colors">
                    Software Engineering
                  </div>
                </div>
              </div>
            </div>
          </CardContent>
        </Card>
      </motion.div>

      <div className="mt-16">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.4 }}
        >
          <h2 className="text-2xl md:text-3xl font-bold mb-8 gradient-heading">Academic Achievements</h2>
        </motion.div>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          <motion.div
            initial={{ opacity: 0, x: -20 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.5, delay: 0.5 }}
          >
            <AchievementCard title="President's List" description="Maintained a perfect 4.0 GPA throughout all semesters" />
          </motion.div>
          <motion.div
            initial={{ opacity: 0, x: 20 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.5, delay: 0.6 }}
          >
            <AchievementCard
              title="Programming Competition"
              description="2nd place at International Collegiate Programming Contest Southeast Regional Division 2 – 2023"
            />
          </motion.div>
        </div>
      </div>
    </div>
  )
}

function AchievementCard({ title, description }: { title: string; description: string }) {
  return (
    <Card className="h-full border border-primary/10 shadow-lg bg-gradient-to-br from-card to-card/80 card-hover">
      <CardHeader>
        <CardTitle className="text-xl text-gradient">{title}</CardTitle>
      </CardHeader>
      <CardContent>
        <p className="text-muted-foreground">{description}</p>
      </CardContent>
    </Card>
  )
}

