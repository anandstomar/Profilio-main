"use client";

import { motion } from "framer-motion";
import {
  Card,
  CardContent,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { Github, ExternalLink } from "lucide-react";

const projects = [
  {
    title: "ShopEase",
    description:
      "A seamless e-commerce experience featuring real-time order tracking, secure payments, and an interactive driver portal for logistics management.",
    tags: ["React", "Node.js", "MongoDB", "Real-time Tracking", "Stripe"],
    // Using the filename from your ls command
    image: "/image1.jpeg", 
    links: {
      demo: "https://shop-ease-ecommerce-app.vercel.app/", 
      github: "https://github.com/anandstomar/ShopEase-Ecommerce-App",
    },
  },
  {
    title: "Anchor Enterprise",
    description:
      "Enterprise-grade data security solution that ingests massive datasets and anchors Merkle roots to the Solana blockchain for cryptographic truth.",
    tags: ["Solana", "Rust", "Kafka", "Blockchain", "Enterprise Security"],
    // Using the filename from your ls command
    image: "/image2.jpeg",
    links: {
      demo: "https://major-project-kappa-rosy.vercel.app/",
      github: "https://github.com/anandstomar/Major-Project",
    },
  },
  {
    title: "AI HealthCare",
    description:
      "Next-gen healthcare analytics platform powered by AI and secured by blockchain technology for data-driven disease prediction and patient data privacy.",
    tags: ["AI/ML", "Blockchain", "Python", "Healthcare", "Web3"],
    // Using the filename from your ls command
    image: "/image3.jpeg",
    links: {
      demo: "https://render-inky.vercel.app/",
      github: "https://github.com/anandstomar/Minor-Project",
    },
  },
  {
    title: "ZK-GovWatch",
    description:
      "A decentralized whistleblower platform using Zero-Knowledge Proofs (ZKP) to verify employment while keeping user identities completely anonymous.",
    tags: ["Zero-Knowledge Proofs", "Web3", "Privacy", "Blockchain"],
    // Using the filename from your ls command
    image: "/image4.jpeg",
    links: {
      demo: "https://zk-gov-watch-whistle-blower-platfor.vercel.app/",
      github: "https://github.com/anandstomar/ZK-GovWatch-WhistleBlower-Platform",
    },
  },
  {
    title: "Deep Finance Research",
    description:
      "Professional AI-powered financial analysis platform providing institutional-grade research, real-time market insights, and comprehensive company analysis.",
    tags: ["Artificial Intelligence", "Finance API", "Data Analytics", "React"],
    // Using the filename from your ls command (Note: .png)
    image: "/image5.png",
    links: {
      demo: "https://deqode-task-kappa.vercel.app/",
      github: "https://github.com/anandstomar/DeqodeTask-Finance-Research",
    },
  },
];

export default function ProjectsSection() {
  return (
    <section className="py-16 bg-secondary/20" id="projects">
      <div className="container mx-auto px-4 md:px-6">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
          className="text-center mb-12"
        >
          <h2 className="text-3xl font-bold mb-4">Featured Projects</h2>
          <p className="text-muted-foreground max-w-2xl mx-auto">
            A showcase of my latest work in Full Stack Development, Blockchain, and AI.
          </p>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {projects.map((project, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
            >
              <Card className="h-full flex flex-col overflow-hidden hover:shadow-lg transition-all duration-300 border-t-3 hover:border-primary">
                {/* USING STANDARD IMG TAG FOR RELIABILITY 
                   This bypasses Next.js optimization issues to ensure the image simply loads.
                */}
                <div className="w-full h-45 bg-muted overflow-hidden">
                  <img
                    src={project.image}
                    alt={project.title}
                    className="w-full h-full object-cover transition-transform duration-500 hover:scale-105"
                  />
                </div>
                
                <CardHeader>
                  <CardTitle className="text-xl">{project.title}</CardTitle>
                  <CardDescription className="line-clamp-3">
                    {project.description}
                  </CardDescription>
                </CardHeader>
                <CardContent className="flex-grow">
                  <div className="flex flex-wrap gap-2">
                    {project.tags.map((tag) => (
                      <Badge key={tag} variant="outline" className="text-xs">
                        {tag}
                      </Badge>
                    ))}
                  </div>
                </CardContent>
                <CardFooter className="grid grid-cols-2 gap-4">
                  <Button variant="outline" size="sm" asChild>
                    <a
                      href={project.links.github}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="gap-2"
                    >
                      <Github className="h-4 w-4" />
                      Code
                    </a>
                  </Button>
                  <Button size="sm" asChild>
                    <a
                      href={project.links.demo}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="gap-2"
                    >
                      <ExternalLink className="h-4 w-4" />
                      Demo
                    </a>
                  </Button>
                </CardFooter>
              </Card>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}