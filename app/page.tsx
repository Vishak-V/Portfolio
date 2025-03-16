"use client"

import type React from "react"

import Link from "next/link"
import { ArrowRight, Github, Linkedin, Mail, Phone, Code, Database, Server } from "lucide-react"
import { Button } from "@/components/ui/button"
import { motion } from "framer-motion"
import { useEffect, useState } from "react"

export default function Home() {
  const [mounted, setMounted] = useState(false)

  useEffect(() => {
    setMounted(true)
  }, [])

  if (!mounted) return null

  return (
    <div className="min-h-screen">
      {/* Background Elements */}
      <div className="fixed inset-0 bg-grid -z-10 opacity-20"></div>
      <div className="fixed top-20 -left-32 w-64 h-64 bg-primary/20 rounded-full blur-3xl -z-10"></div>
      <div className="fixed bottom-20 -right-32 w-80 h-80 bg-purple-500/20 rounded-full blur-3xl -z-10"></div>

      {/* Hero Section */}
      <section className="py-20 md:py-32 px-4 relative overflow-hidden">
        <div className="container mx-auto max-w-6xl relative z-10">
          <div className="flex flex-col md:flex-row items-center gap-12">
            <motion.div
              initial={{ opacity: 0, x: -50 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.8, ease: "easeOut" }}
              className="flex-1"
            >
              <h1 className="text-5xl md:text-7xl font-bold tracking-tight gradient-heading mb-4">Vishak Vikranth</h1>
              <p className="mt-6 text-xl text-muted-foreground">
                Computer Science & Mathematics Student at The University of Alabama
              </p>
              <div className="mt-8 flex flex-wrap gap-4">
                <Button variant="glow" asChild>
                  <Link href="/contact">
                    Get in Touch <ArrowRight className="ml-2 h-4 w-4" />
                  </Link>
                </Button>
                <Button variant="outline" className="border-primary/50" asChild>
                  <Link href="/resume">View Resume</Link>
                </Button>
              </div>
              <div className="mt-8 flex items-center gap-4">
                <Link href="https://www.linkedin.com/in/vishakvikranth" target="_blank" rel="noopener noreferrer">
                  <Button variant="ghost" size="icon" className="rounded-full hover:bg-primary/20 hover:text-primary">
                    <Linkedin className="h-5 w-5" />
                  </Button>
                </Link>
                <Link href="mailto:vvikranth@crimson.ua.edu">
                  <Button variant="ghost" size="icon" className="rounded-full hover:bg-primary/20 hover:text-primary">
                    <Mail className="h-5 w-5" />
                  </Button>
                </Link>
                <Link href="tel:2058879866">
                  <Button variant="ghost" size="icon" className="rounded-full hover:bg-primary/20 hover:text-primary">
                    <Phone className="h-5 w-5" />
                  </Button>
                </Link>
                <Link href="https://github.com" target="_blank" rel="noopener noreferrer">
                  <Button variant="ghost" size="icon" className="rounded-full hover:bg-primary/20 hover:text-primary">
                    <Github className="h-5 w-5" />
                  </Button>
                </Link>
              </div>
            </motion.div>
            <motion.div
              initial={{ opacity: 0, scale: 0.8 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.8, ease: "easeOut" }}
              className="flex-1 flex justify-center"
            >
              <div className="relative w-64 h-64 md:w-56 md:h-56 rounded-full overflow-hidden border-4 border-primary/20 glow animate-float">
                <img src="/profile_pic.jpg" alt="Vishak Vikranth" className="object-cover object-top w-full h-full" />
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Highlights Section */}
      <section className="py-20 relative">
        <div className="absolute inset-0 bg-dots opacity-30 -z-10"></div>
        <div className="container mx-auto max-w-6xl px-4">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
            viewport={{ once: true }}
          >
            <h2 className="text-3xl md:text-4xl font-bold mb-12 text-center gradient-heading">
              Professional Highlights
            </h2>
          </motion.div>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <HighlightCard
              icon={<Server className="h-10 w-10 text-primary" />}
              title="Backend Engineering Intern"
              description="Developed GoLang backend for Shipt Inc. to manage delivery windows and routes."
              link="/experience"
              delay={0.1}
            />
            <HighlightCard
              icon={<Database className="h-10 w-10 text-primary" />}
              title="Data Analyst Intern"
              description="Led NCAA golf tournament simulations and analyzed ticket transfer data at University of Alabama."
              link="/experience"
              delay={0.3}
            />
            <HighlightCard
              icon={<Code className="h-10 w-10 text-primary" />}
              title="Full Stack Developer"
              description="Built projects using Python, React, SQL, and more across various domains."
              link="/projects"
              delay={0.5}
            />
          </div>
        </div>
      </section>

      {/* Skills Overview */}
      <section className="py-20 relative">
        <div className="container mx-auto max-w-6xl px-4">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
            viewport={{ once: true }}
          >
            <h2 className="text-3xl md:text-4xl font-bold mb-12 text-center gradient-heading">Skills Overview</h2>
          </motion.div>
          <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-6">
            <SkillCategory
              title="Languages"
              skills={["Python", "Java", "Go", "C/C++", "SQL", "R", "C#", "JavaScript"]}
              delay={0.1}
            />
            <SkillCategory
              title="Developer Tools"
              skills={["Docker", "Kafka", "GCP", "Kubernetes", "Terraform", ".NET"]}
              delay={0.2}
            />
            <SkillCategory
              title="Libraries"
              skills={["FastAPI", "SQLAlchemy", "NumPy", "Pandas", "PyTorch", "TensorFlow"]}
              delay={0.3}
            />
            <SkillCategory title="Other" skills={["Git", "REST APIs", "Linux", "Unix"]} delay={0.4} />
          </div>
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.6 }}
            viewport={{ once: true }}
            className="mt-10 text-center"
          >
            <Button variant="gradient" asChild>
              <Link href="/skills">
                View All Skills <ArrowRight className="ml-2 h-4 w-4" />
              </Link>
            </Button>
          </motion.div>
        </div>
      </section>

      {/* Call to Action */}
      <section className="py-24 relative">
        <div className="absolute inset-0 bg-gradient-to-r from-primary/20 to-purple-500/20 -z-10"></div>
        <div className="container mx-auto max-w-4xl px-4 text-center">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
            viewport={{ once: true }}
          >
            <h2 className="text-3xl md:text-4xl font-bold mb-6 gradient-heading">Interested in working together?</h2>
            <p className="text-xl mb-8 text-muted-foreground">
              I'm currently open to new opportunities and collaborations.
            </p>
            <Button variant="glow" size="lg" asChild>
              <Link href="/contact">Get in Touch</Link>
            </Button>
          </motion.div>
        </div>
      </section>
    </div>
  )
}

function HighlightCard({
  icon,
  title,
  description,
  link,
  delay = 0,
}: {
  icon: React.ReactNode
  title: string
  description: string
  link: string
  delay?: number
}) {
  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.5, delay }}
      viewport={{ once: true }}
    >
      <div className="bg-card p-6 rounded-xl shadow-lg border border-primary/10 card-hover h-full">
        <div className="mb-4">{icon}</div>
        <h3 className="text-xl font-semibold mb-3">{title}</h3>
        <p className="text-muted-foreground mb-4">{description}</p>
        <Link href={link} className="text-primary inline-flex items-center group">
          Learn more <ArrowRight className="ml-1 h-4 w-4 transition-transform group-hover:translate-x-1" />
        </Link>
      </div>
    </motion.div>
  )
}

function SkillCategory({
  title,
  skills,
  delay = 0,
}: {
  title: string
  skills: string[]
  delay?: number
}) {
  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.5, delay }}
      viewport={{ once: true }}
    >
      <div className="bg-card p-6 rounded-xl shadow-lg border border-primary/10 card-hover h-full">
        <h3 className="text-lg font-semibold mb-4 text-gradient">{title}</h3>
        <ul className="space-y-2">
          {skills.slice(0, 4).map((skill, index) => (
            <li key={index} className="text-muted-foreground flex items-center">
              <span className="w-1.5 h-1.5 rounded-full bg-primary mr-2"></span>
              {skill}
            </li>
          ))}
          {skills.length > 4 && <li className="text-primary">+{skills.length - 4} more</li>}
        </ul>
      </div>
    </motion.div>
  )
}

