"use client";

import { Card, CardContent } from "@/components/ui/card";
import { motion } from "framer-motion";
import { TrendingUp, Code, Cpu, Database } from "lucide-react";

const projects = [
  {
    icon: <TrendingUp className="h-6 w-6 text-blue-500" />,
    title: "AI-Powered Analytics Dashboard",
    description: "Developing a real-time analytics platform with natural language querying capabilities",
  },
  {
    icon: <Code className="h-6 w-6 text-purple-500" />,
    title: "Web3 Integration",
    description: "Learning blockchain technology and implementing smart contracts for decentralized applications",
  },
  {
    icon: <Cpu className="h-6 w-6 text-green-500" />,
    title: "Cloud Infrastructure",
    description: "Setting up scalable cloud architecture with Kubernetes and automated CI/CD pipelines",
  },
  {
    icon: <Database className="h-6 w-6 text-orange-500" />,
    title: "Database Optimization",
    description: "Improving database performance and implementing advanced querying techniques",
  },
];

export default function CurrentWorkSection() {
  return (
    <section className="py-16 bg-secondary/50">
      <div className="container mx-auto px-4 md:px-6">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
          className="text-center mb-12"
        >
          <h2 className="text-3xl font-bold mb-4">What I&apos;m Working On</h2>
          <p className="text-muted-foreground max-w-2xl mx-auto">
            I'm constantly learning and building. Here are some projects and technologies I'm currently exploring.
          </p>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          {projects.map((project, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
            >
              <Card className="h-full hover:shadow-lg transition-shadow duration-300 overflow-hidden border-t-4 hover:border-primary">
                <CardContent className="p-6">
                  <div className="mb-4">{project.icon}</div>
                  <h3 className="text-xl font-medium mb-2">{project.title}</h3>
                  <p className="text-muted-foreground">{project.description}</p>
                </CardContent>
              </Card>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
