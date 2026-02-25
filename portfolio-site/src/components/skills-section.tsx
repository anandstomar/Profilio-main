"use client";

import { motion } from "framer-motion";
import { Badge } from "@/components/ui/badge";
import { FaReact, FaNodeJs, FaDocker, FaGithub, FaAws, FaJava, FaPython, FaRust, FaHtml5, FaCss3Alt, FaGitAlt } from "react-icons/fa";
import { SiTypescript, SiJavascript, SiTailwindcss, SiRedux, SiMongodb, SiPostgresql, SiExpress, SiNextdotjs, SiGraphql, SiRedis, SiKubernetes, SiGo, SiFlask, SiDocker, SiCplusplus, SiSolidity, SiFastapi, SiSpringboot, SiNestjs, SiMysql, SiFirebase, SiApachekafka, SiJenkins, SiTerraform, SiGitlab, SiPostman, SiOpenai } from "react-icons/si";

// Define the skills with icons and categories based on your resume
const skills = [
  { category: "Languages", items: [
    { name: "JavaScript", icon: <SiJavascript className="mr-1 h-4 w-4" /> },
    { name: "TypeScript", icon: <SiTypescript className="mr-1 h-4 w-4" /> },
    { name: "Python", icon: <FaPython className="mr-1 h-4 w-4" /> },
    { name: "Java", icon: <FaJava className="mr-1 h-4 w-4" /> },
    { name: "C++", icon: <SiCplusplus className="mr-1 h-4 w-4" /> },
    { name: "Rust", icon: <FaRust className="mr-1 h-4 w-4" /> },
    { name: "Solidity", icon: <SiSolidity className="mr-1 h-4 w-4" /> },
  ]},
  { category: "Frontend", items: [
    { name: "React.js", icon: <FaReact className="mr-1 h-4 w-4" /> },
    { name: "Next.js", icon: <SiNextdotjs className="mr-1 h-4 w-4" /> },
    { name: "Redux Toolkit", icon: <SiRedux className="mr-1 h-4 w-4" /> },
    { name: "Tailwind CSS", icon: <SiTailwindcss className="mr-1 h-4 w-4" /> },
    { name: "HTML/CSS", icon: <FaHtml5 className="mr-1 h-4 w-4" /> },
  ]},
  { category: "Backend", items: [
    { name: "Node.js", icon: <FaNodeJs className="mr-1 h-4 w-4" /> },
    { name: "Express.js", icon: <SiExpress className="mr-1 h-4 w-4" /> },
    { name: "FastAPI", icon: <SiFastapi className="mr-1 h-4 w-4" /> },
    { name: "Spring Boot", icon: <SiSpringboot className="mr-1 h-4 w-4" /> },
    { name: "NestJS", icon: <SiNestjs className="mr-1 h-4 w-4" /> },
    { name: "Flask", icon: <SiFlask className="mr-1 h-4 w-4" /> },
  ]},
  { category: "Database", items: [
    { name: "MongoDB", icon: <SiMongodb className="mr-1 h-4 w-4" /> },
    { name: "PostgreSQL", icon: <SiPostgresql className="mr-1 h-4 w-4" /> },
    { name: "MySQL", icon: <SiMysql className="mr-1 h-4 w-4" /> },
    { name: "Redis", icon: <SiRedis className="mr-1 h-4 w-4" /> },
    { name: "GraphQL", icon: <SiGraphql className="mr-1 h-4 w-4" /> },
    { name: "Firebase", icon: <SiFirebase className="mr-1 h-4 w-4" /> },
  ]},
  { category: "DevOps", items: [
    { name: "Docker", icon: <SiDocker className="mr-1 h-4 w-4" /> },
    { name: "Kubernetes", icon: <SiKubernetes className="mr-1 h-4 w-4" /> },
    { name: "AWS", icon: <FaAws className="mr-1 h-4 w-4" /> },
    { name: "Jenkins", icon: <SiJenkins className="mr-1 h-4 w-4" /> },
    { name: "Terraform", icon: <SiTerraform className="mr-1 h-4 w-4" /> },
    { name: "GitLab", icon: <SiGitlab className="mr-1 h-4 w-4" /> },
    { name: "ArgoCD", icon: <FaGitAlt className="mr-1 h-4 w-4" /> },
  ]},
  { category: "AI & Tools", items: [
    { name: "LangChain", icon: <SiOpenai className="mr-1 h-4 w-4" /> },
    { name: "GenAI", icon: <SiOpenai className="mr-1 h-4 w-4" /> },
    { name: "Kafka", icon: <SiApachekafka className="mr-1 h-4 w-4" /> },
    { name: "Postman", icon: <SiPostman className="mr-1 h-4 w-4" /> },
    { name: "Git", icon: <FaGitAlt className="mr-1 h-4 w-4" /> },
  ]},
];

export default function SkillsSection() {
  return (
    <section className="py-16" id="skills">
      <div className="container mx-auto px-4 md:px-6">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
          className="text-center mb-12"
        >
          <h2 className="text-3xl font-bold mb-4">Skills & Technologies</h2>
          <p className="text-muted-foreground max-w-2xl mx-auto">
            A comprehensive list of languages, frameworks, and tools I use to build scalable solutions.
          </p>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {skills.map((category, catIndex) => (
            <div key={category.category} className="space-y-4">
              <motion.h3
                className="text-xl font-semibold border-b pb-2"
                initial={{ opacity: 0, x: -20 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.3, delay: catIndex * 0.1 }}
              >
                {category.category}
              </motion.h3>

              <div className="flex flex-wrap gap-2">
                {category.items.map((skill, index) => (
                  <motion.div
                    key={skill.name}
                    initial={{ opacity: 0, scale: 0.8 }}
                    whileInView={{ opacity: 1, scale: 1 }}
                    whileHover={{ scale: 1.05 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.3, delay: index * 0.05 + catIndex * 0.1 }}
                  >
                    <Badge variant="secondary" className="px-3 py-1 text-sm flex items-center">
                      {skill.icon}
                      {skill.name}
                    </Badge>
                  </motion.div>
                ))}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}