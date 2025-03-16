"use client"

import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Progress } from "@/components/ui/progress"
import { motion } from "framer-motion"
import { useState, useEffect } from "react"

export default function SkillsPage() {
  const [mounted, setMounted] = useState(false)

  useEffect(() => {
    setMounted(true)
  }, [])

  const skillCategories = [
    {
      title: "Languages",
      skills: [
        { name: "Python", level: 95 },
        { name: "Java", level: 90 },
        { name: "Go", level: 85 },
        { name: "C/C++", level: 80 },
        { name: "SQL", level: 90 },
        { name: "NoSQL", level: 85 },
        { name: "R", level: 80 },
        { name: "C#", level: 85 },
        { name: "JavaScript", level: 85 },
        { name: "HTML", level: 90 },
        { name: "CSS", level: 85 },
      ],
    },
    {
      title: "Developer Tools",
      skills: [
        { name: "Docker", level: 90 },
        { name: "Kafka", level: 85 },
        { name: "Google Cloud Platform", level: 80 },
        { name: "Kubernetes", level: 75 },
        { name: "Postman", level: 90 },
        { name: "Unity", level: 80 },
        { name: "Terraform", level: 75 },
        { name: ".NET", level: 80 },
        { name: "Node.js", level: 85 },
      ],
    },
    {
      title: "Libraries",
      skills: [
        { name: "FastAPI", level: 90 },
        { name: "SQLAlchemy", level: 85 },
        { name: "NumPy", level: 90 },
        { name: "Scikit-Learn", level: 85 },
        { name: "Pandas", level: 90 },
        { name: "PyTorch", level: 80 },
        { name: "TensorFlow", level: 80 },
        { name: "Hugging Face", level: 75 },
        { name: "CUDA", level: 70 },
        { name: "React", level: 85 },
      ],
    },
    {
      title: "Other Technologies",
      skills: [
        { name: "Git", level: 95 },
        { name: "REST APIs", level: 90 },
        { name: "Linux", level: 85 },
        { name: "Unix", level: 85 },
      ],
    },
  ]

  if (!mounted) return null

  return (
    <div className="container mx-auto max-w-4xl py-16 px-4">
      <motion.div initial={{ opacity: 0, y: -20 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.5 }}>
        <h1 className="text-4xl md:text-5xl font-bold mb-12 gradient-heading">Skills</h1>
      </motion.div>

      <div className="space-y-16">
        {skillCategories.map((category, index) => (
          <motion.div
            key={index}
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.1 * index }}
          >
            <h2 className="text-2xl md:text-3xl font-bold mb-8 gradient-heading">{category.title}</h2>
            <div className="grid grid-cols-1 gap-6">
              {category.skills.map((skill, skillIndex) => (
                <motion.div
                  key={skillIndex}
                  initial={{ opacity: 0, x: -20 }}
                  animate={{ opacity: 1, x: 0 }}
                  transition={{ duration: 0.3, delay: 0.1 * index + 0.05 * skillIndex }}
                >
                  <SkillBar name={skill.name} level={skill.level} />
                </motion.div>
              ))}
            </div>
          </motion.div>
        ))}
      </div>

      <div className="mt-20">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.8 }}
        >
          <h2 className="text-2xl md:text-3xl font-bold mb-8 gradient-heading">Additional Skills</h2>
        </motion.div>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          <motion.div
            initial={{ opacity: 0, x: -20 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.5, delay: 0.9 }}
          >
            <Card className="h-full border border-primary/10 shadow-lg card-hover bg-gradient-to-br from-card to-card/80">
              <CardHeader>
                <CardTitle className="text-gradient">Soft Skills</CardTitle>
              </CardHeader>
              <CardContent>
                <ul className="space-y-3">
                  <li className="flex items-center">
                    <span className="w-2 h-2 rounded-full bg-primary mr-3"></span>
                    <span>Problem Solving</span>
                  </li>
                  <li className="flex items-center">
                    <span className="w-2 h-2 rounded-full bg-primary mr-3"></span>
                    <span>Team Collaboration</span>
                  </li>
                  <li className="flex items-center">
                    <span className="w-2 h-2 rounded-full bg-primary mr-3"></span>
                    <span>Technical Communication</span>
                  </li>
                  <li className="flex items-center">
                    <span className="w-2 h-2 rounded-full bg-primary mr-3"></span>
                    <span>Project Management</span>
                  </li>
                </ul>
              </CardContent>
            </Card>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, x: 20 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.5, delay: 1 }}
          >
            <Card className="h-full border border-primary/10 shadow-lg card-hover bg-gradient-to-br from-card to-card/80">
              <CardHeader>
                <CardTitle className="text-gradient">Certifications</CardTitle>
              </CardHeader>
              <CardContent>
                <ul className="space-y-3">
                  <li className="flex items-center">
                    <span className="w-2 h-2 rounded-full bg-primary mr-3"></span>
                    <span>Google Cloud Associate Engineer</span>
                  </li>
                  <li className="flex items-center">
                    <span className="w-2 h-2 rounded-full bg-primary mr-3"></span>
                    <span>Microsoft Azure Fundamentals</span>
                  </li>
                </ul>
              </CardContent>
            </Card>
          </motion.div>
        </div>
      </div>
    </div>
  )
}

function SkillBar({ name, level }: { name: string; level: number }) {
  const [progress, setProgress] = useState(0)

  useEffect(() => {
    const timer = setTimeout(() => setProgress(level), 300)
    return () => clearTimeout(timer)
  }, [level])

  return (
    <div className="group">
      <div className="flex justify-between items-center mb-2">
        <span className="font-medium">{name}</span>
        <span className="text-sm text-muted-foreground group-hover:text-primary transition-colors">{level}%</span>
      </div>
      <Progress
        value={progress}
        className="h-2 bg-secondary group-hover:bg-secondary/80 transition-colors"
        indicatorClassName="bg-gradient-to-r from-primary to-purple-500"
      />
    </div>
  )
}

