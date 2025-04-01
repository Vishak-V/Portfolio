"use client"

import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { motion } from "framer-motion"
import { useState, useEffect } from "react"
import * as LucideIcons from "lucide-react"

export default function SkillsPage() {
  const [mounted, setMounted] = useState(false)

  useEffect(() => {
    setMounted(true)
  }, [])

  const skillCategories = [
    {
      title: "Languages",
      skills: [
        { name: "Python", icon: "FileCode" },
        { name: "Java", icon: "Coffee" },
        { name: "Go", icon: "Workflow" },
        { name: "C/C++", icon: "Code" },
        { name: "SQL", icon: "Database" },
        { name: "NoSQL", icon: "Database" },
        { name: "R", icon: "BarChart" },
        { name: "C#", icon: "Hash" },
        { name: "JavaScript", icon: "FileJson" },
        { name: "HTML", icon: "FileCode2" },
        { name: "CSS", icon: "Paintbrush" },
      ],
    },
    {
      title: "Developer Tools",
      skills: [
        { name: "Docker", icon: "Container" },
        { name: "Kafka", icon: "MessageSquare" },
        { name: "Google Cloud Platform", icon: "Cloud" },
        { name: "Kubernetes", icon: "Network" },
        { name: "Postman", icon: "Send" },
        { name: "Unity", icon: "Gamepad2" },
        { name: "Terraform", icon: "ServerCog" },
        { name: ".NET", icon: "Grid" },
        { name: "Node.js", icon: "Server" },
      ],
    },
    {
      title: "Libraries",
      skills: [
        { name: "FastAPI", icon: "Zap" },
        { name: "SQLAlchemy", icon: "Database" },
        { name: "NumPy", icon: "Calculator" },
        { name: "Scikit-Learn", icon: "Brain" },
        { name: "Pandas", icon: "Table" },
        { name: "PyTorch", icon: "Flame" },
        { name: "TensorFlow", icon: "Network" },
        { name: "Hugging Face", icon: "Bot" },
        { name: "CUDA", icon: "Cpu" },
        { name: "React", icon: "Atom" },
      ],
    },
    {
      title: "Other Technologies",
      skills: [
        { name: "Git", icon: "GitBranch" },
        { name: "REST APIs", icon: "Webhook" },
        { name: "Linux", icon: "Terminal" },
        { name: "Unix", icon: "Terminal" },
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
            <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 gap-4">
              {category.skills.map((skill, skillIndex) => (
                <motion.div
                  key={skillIndex}
                  initial={{ opacity: 0, scale: 0.9 }}
                  animate={{ opacity: 1, scale: 1 }}
                  transition={{ duration: 0.3, delay: 0.1 * index + 0.05 * skillIndex }}
                >
                  <SkillCard name={skill.name} icon={skill.icon} />
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

function SkillCard({ name, icon }: { name: string; icon: string }) {
  // Dynamically get the icon from Lucide
  const Icon = LucideIcons[icon as keyof typeof LucideIcons] || LucideIcons.Code

  return (
    <Card className="h-full border border-primary/10 shadow-md hover:shadow-lg transition-all duration-300 group bg-gradient-to-br from-card to-card/80 hover:from-card/90 hover:to-card/70">
      <CardContent className="p-4 flex flex-col items-center justify-center text-center h-full">
        <div className="mb-3 p-3 rounded-full bg-primary/10 group-hover:bg-primary/20 transition-colors duration-300">
          <Icon className="h-6 w-6 text-primary group-hover:text-primary-foreground transition-colors duration-300" />
        </div>
        <span className="font-medium">{name}</span>
      </CardContent>
    </Card>
  )
}

