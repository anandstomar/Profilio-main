"use client";

import { Button } from "@/components/ui/button";
import { Avatar } from "@/components/ui/avatar";
import { motion } from "framer-motion";
import { Download } from "lucide-react";

export default function HeroSection() {
  return (
    <section className="relative py-20 dot-pattern overflow-hidden">
      <div className="container mx-auto px-4 md:px-6">
        <div className="flex flex-col md:flex-row items-center justify-center gap-5">
          {/* Text Content */}
          <motion.div
            className="flex-1 max-w-xl"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
          >
            <h1 className="text-4xl md:text-5xl font-bold mb-4">
              Hi, I&apos;m Anand 
            </h1>
            <p className="text-xl text-muted-foreground mb-6">
              Full-Stack Developer, Tech Enthusiast and Computer Science Student. I love building web applications and solving complex problems.
            </p>

            <div className="flex gap-4">
              <Button asChild className="gap-2">
                <a href="/resume.pdf" download="Anand_Singh_Tomar_Resume.pdf">
                  <Download className="h-4 w-4" />
                  Download Resume
                </a>
              </Button>
            </div>
          </motion.div>

          {/* Profile Image */}
         <motion.div
            className="shrink-0"
            initial={{ opacity: 0, scale: 0.9 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.5, delay: 0.1 }}
          >
            <Avatar className="h-44 w-44 border-4 border-primary/10">
              <div className="bg-gradient-to-br from-primary/80 to-primary/30 h-full w-full flex items-center justify-center text-4xl font-bold text-white">
                <img src="/profile2.jpeg" alt="Anand Singh Tomar" className="h-full w-full object-cover rounded-full scale-150 translate-y-1" />
              </div>
            </Avatar>
          </motion.div>
        </div>  

        {/* About Text */}
        <motion.div
          className="mt-16 max-w-3xl mx-auto text-center"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.2 }}
        >
          <h2 className="text-2xl font-semibold mb-4">About</h2>
          <p className="text-lg text-muted-foreground">
            I'm a passionate final year undergraduate with a deep love for coding and technology.
            My journey has led me to develop a strong foundation in Web development, DevOps, and the emerging world of AI.
            I thrive on building innovative products and sharing my insights through blogging. Always eager to expand my skills
            and tackle new challenges, I'm actively seeking lucrative opportunities to leverage my tech expertise and drive impactful projects.
          </p>
        </motion.div>
      </div>
    </section>
  );
}
