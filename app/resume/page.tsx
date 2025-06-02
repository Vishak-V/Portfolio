"use client"

import Link from "next/link"
import { Download, ExternalLink } from "lucide-react"
import { Button } from "@/components/ui/button"
import { Card, CardContent } from "@/components/ui/card"
import { motion } from "framer-motion"

export default function ResumePage() {
  return (
    <div className="container mx-auto max-w-4xl py-16 px-4">
      <div className="flex flex-col md:flex-row justify-between items-start md:items-center mb-8 gap-4">
        <motion.div initial={{ opacity: 0, y: -20 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.5 }}>
          <h1 className="text-4xl md:text-5xl font-bold gradient-heading">Resume</h1>
        </motion.div>
        <motion.div
          initial={{ opacity: 0, y: -20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.2 }}
          className="flex gap-4"
        >
          <Button variant="gradient" asChild>
            <Link href="/VishakV_Resume.pdf" download>
              <Download className="mr-2 h-4 w-4" /> Download PDF
            </Link>
          </Button>
          <Button variant="outline" className="border-primary/20" asChild>
            <Link href="/VishakV_Resume.pdf" target="_blank" rel="noopener noreferrer">
              <ExternalLink className="mr-2 h-4 w-4" /> View Full Resume
            </Link>
          </Button>
        </motion.div>
      </div>

      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5, delay: 0.3 }}
      >
        <Card className="mb-12 border border-primary/10 shadow-lg bg-gradient-to-br from-card to-card/80">
          <CardContent className="p-6">
            <div className="space-y-8">
              {/* Header */}
              <div className="text-center border-b border-primary/10 pb-6">
                <h2 className="text-3xl font-bold text-gradient">Vishak Vikranth</h2>
                <div className="mt-2 text-muted-foreground">
                  <p>vvikranth@crimson.ua.edu | 205-887-9866</p>
                  <p>https://www.linkedin.com/in/vishakvikranth</p>
                </div>
              </div>

              {/* Education */}
              <div>
                <h3 className="text-xl font-bold mb-4 border-b border-primary/10 pb-2 text-gradient">EDUCATION</h3>
                <div className="ml-4">
                  <div className="flex flex-col md:flex-row justify-between mb-2">
                    <h4 className="font-semibold">The University of Alabama, Tuscaloosa, AL</h4>
                    <span>Dec 2025</span>
                  </div>
                  <p>Bachelor of Science in Computer Science</p>
                  <p>Bachelor of Science in Mathematics</p>
                  <p>Minor: Actuarial Science</p>
                  <p className="mt-2">GPA: 4.0</p>
                </div>
              </div>

              {/* Work Experience */}
              <div>
                <h3 className="text-xl font-bold mb-4 border-b border-primary/10 pb-2 text-gradient">
                  WORK EXPERIENCE
                </h3>

                <div className="ml-4 mb-6">
                  <div className="flex flex-col md:flex-row justify-between mb-2">
                    <h4 className="font-semibold">Software Development Engineer Intern</h4>
                    <span>May 2025-August 2025</span>
                  </div>
                  <p className="italic mb-2">Amazon Web Services, Seattle, WA</p>
                  <ul className="list-disc ml-6 space-y-2 text-muted-foreground">
                    <li>
                    Integrating end-to-end (E2E) integration tests into the CI/CD pipeline, enhancing deployment reliability and saving 2+ developer hours per week.
                    </li>
                    <li>
                      Developed a Python script to automate the generation of E2E test cases, significantly reducing
                      manual effort and improving test coverage
                    </li>
                  </ul>
                </div>

                <div className="ml-4 mb-6">
                  <div className="flex flex-col md:flex-row justify-between mb-2">
                    <h4 className="font-semibold">Backend Engineering Intern</h4>
                    <span>June 2024-August 2024</span>
                  </div>
                  <p className="italic mb-2">Shipt. Inc., Birmingham, AL</p>
                  <ul className="list-disc ml-6 space-y-2 text-muted-foreground">
                    <li>
                      Designed and developed a GoLang backend to manage delivery windows, providing exclusive visibility
                      to delivery routes from over 10 Target sortation centers across the US
                    </li>
                    <li>
                      Migrated scheduling service to a standalone service, enhancing flexibility by transitioning
                      scheduling from zones to individual stores
                    </li>
                    <li>
                      Resolved bugs to ensure accurate consumption of multiple Kafka topics, enabling the program to
                      effectively handle Delivery Service Partner orders
                    </li>
                  </ul>
                </div>

                <div className="ml-4">
                  <div className="flex flex-col md:flex-row justify-between mb-2">
                    <h4 className="font-semibold">Data Analyst Intern</h4>
                    <span>September 2023-May 2024</span>
                  </div>
                  <p className="italic mb-2">Mal Moore Athletic Facility, University of Alabama, Tuscaloosa, AL</p>
                  <ul className="list-disc ml-6 space-y-2 text-muted-foreground">
                    <li>
                      Led the simulation of NCAA golf tournaments using Python, involving over 200 Division 1 athletes,
                      and created visualizations in Tableau to provide coaches with optimal strategies for the SEC and
                      NCAA championships
                    </li>
                    <li>
                      Conducted analysis on ticket transfer data to identify broker activity, uncovering insights
                      projected to drive over $3 million in additional revenue through increased ticket sales
                    </li>
                  </ul>
                </div>
              </div>

              {/* Projects */}
              <div>
                <h3 className="text-xl font-bold mb-4 border-b border-primary/10 pb-2 text-gradient">PROJECTS</h3>

                <div className="ml-4 mb-6">
                  <h4 className="font-semibold mb-2">Courage, The Not So Cowardly Rover | C#, Python, Unity</h4>
                  <ul className="list-disc ml-6 space-y-2 text-muted-foreground">
                    <li>
                      Developed an educational game that simulates controlling a Mars rover with realistic weather and
                      terrain conditions using NASA's API
                    </li>
                    <li>
                      Implemented unique NPC interactions using large language models (LLMs) and prompt engineering
                    </li>
                  </ul>
                </div>

                <div className="ml-4">
                  <h4 className="font-semibold mb-2">ReCall | Python, SQL, React</h4>
                  <ul className="list-disc ml-6 space-y-2 text-muted-foreground">
                    <li>
                      Developed an innovative software solution using smart glasses for early-stage dementia patients,
                      enabling users to store details and receive reminders about people they meet, fostering social
                      connectivity. Reduces functional decline in users by 10% among users through interaction
                    </li>
                    <li>
                      Designed a medical professional dashboard using React that offers real-time user data and
                      insights, enhancing diagnostic accuracy and personalized care
                    </li>
                  </ul>
                </div>
              </div>

              {/* Research Experience */}
              <div>
                <h3 className="text-xl font-bold mb-4 border-b border-primary/10 pb-2 text-gradient">
                  RESEARCH EXPERIENCE
                </h3>

                <div className="ml-4 mb-6">
                  <div className="flex flex-col md:flex-row justify-between mb-2">
                    <h4 className="font-semibold">Database Management | R</h4>
                    <span>January 2024 – June 2024</span>
                  </div>
                  <ul className="list-disc ml-6 space-y-2 text-muted-foreground">
                    <li>
                      Managed a database of marine organism data to develop a website using R Shiny to visualize and
                      derive insights
                    </li>
                    <li>
                      Led the automation of a data pipeline to process marine microorganism data collected along the
                      East Coast
                    </li>
                  </ul>
                </div>

                <div className="ml-4">
                  <div className="flex flex-col md:flex-row justify-between mb-2">
                    <h4 className="font-semibold">EEG Data analysis using LLMs | Python</h4>
                    <span>August 2023 - Present</span>
                  </div>
                  <ul className="list-disc ml-6 space-y-2 text-muted-foreground">
                    <li>
                      Utilizing Microsoft Autogen and LIDA to develop software agents for automating EEG data analysis
                    </li>
                    <li>
                      Collaborated with health experts to fine-tune the OpenAI GPT-3.5 model, developing an SMS software
                      to track eating habits through tailored prompts
                    </li>
                  </ul>
                </div>
              </div>

              {/* Skills */}
              <div>
                <h3 className="text-xl font-bold mb-4 border-b border-primary/10 pb-2 text-gradient">KEY SKILLS</h3>

                <div className="ml-4 space-y-2 text-muted-foreground">
                  <p>
                    <span className="font-semibold text-foreground">Languages</span> - Python, Java, Go, C/C++, SQL,
                    NoSQL, R, C#, JavaScript, HTML, CSS, React
                  </p>
                  <p>
                    <span className="font-semibold text-foreground">Developer Tools</span> – Docker, Kafka, Google Cloud
                    Platform, Kubernetes, Postman, Unity, Terraform, .NET, Node.js
                  </p>
                  <p>
                    <span className="font-semibold text-foreground">Libraries</span> – FastAPI, SQLAlchemy, NumPy,
                    Scikit-Learn, Pandas, PyTorch, TensorFlow, Hugging Face, CUDA
                  </p>
                  <p>
                    <span className="font-semibold text-foreground">Other Technologies</span> – Git, REST APIs, Linux,
                    Unix
                  </p>
                </div>
              </div>

              {/* Awards */}
              <div>
                <h3 className="text-xl font-bold mb-4 border-b border-primary/10 pb-2 text-gradient">AWARDS</h3>

                <div className="ml-4 space-y-2 text-muted-foreground">
                  <p>
                    "Best Hack in Health Management" track and "Best Tech-Enabled Patient Safety Solution" at
                    HackPrinceton
                  </p>
                  <p>2nd place at International Collegiate Programming Contest Southeast Regional Division 2 – 2023</p>
                </div>
              </div>
            </div>
          </CardContent>
        </Card>
      </motion.div>
    </div>
  )
}

