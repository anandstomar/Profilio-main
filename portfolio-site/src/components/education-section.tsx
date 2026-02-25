"use client";

import { motion } from "framer-motion";
import { Card, CardContent } from "@/components/ui/card";
import { GraduationCap, School } from "lucide-react";

const educationEntries = [
  {
    icon: <GraduationCap className="h-10 w-10 text-primary/80" />,
    institution: "Indore Institute of Science and Technology, Indore",
    degree: "Bachelor of Technology in Computer Science and Engineering",
    period: "Oct. 2022 - May 2026",
  },
  {
    icon: <School className="h-10 w-10 text-primary/80" />,
    institution: "Govt. Excellence Higher Secondary School",
    degree: "Higher Secondary Education",
    period: "2019 - 2021",
  },
  // {
  //   icon: <GraduationCap className="h-10 w-10 text-primary/80" />,
  //   institution: "100xDevs",
  //   degree: "Full Stack Web Development, DevOps & Web3 Bootcamp",
  //   period: "2023 - 2024",
  // },
];

export default function EducationSection() {
  return (
    <section className="py-16 bg-secondary/30">
      <div className="container mx-auto px-4 md:px-6">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
          className="text-center mb-12"
        >
          <h2 className="text-3xl font-bold mb-4">Education</h2>
          <p className="text-muted-foreground max-w-2xl mx-auto">
            My academic background and educational achievements.
          </p>
        </motion.div>

        <div className="max-w-3xl mx-auto space-y-6">
          {educationEntries.map((entry, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
            >
              <Card className="overflow-hidden border-l-4 border-primary hover:shadow-md transition-shadow">
                <CardContent className="p-0">
                  <div className="flex items-start p-6">
                    <div className="mr-4 mt-1">{entry.icon}</div>
                    <div className="flex-1">
                      <h3 className="font-bold text-xl mb-1">{entry.institution}</h3>
                      <p className="text-muted-foreground">{entry.degree}</p>
                      <p className="text-sm mt-2 font-medium">{entry.period}</p>
                    </div>
                  </div>
                </CardContent>
              </Card>
            </motion.div>
          ))}
        </div>

        {/* Certifications Section */}
        <motion.div
          className="mt-16 max-w-3xl mx-auto"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5, delay: 0.3 }}
        >
          <h3 className="text-2xl font-bold mb-6 text-center">Certifications</h3>
          <ul className="space-y-3">
            <li className="flex items-center gap-2">
              <span className="h-2 w-2 rounded-full bg-blue-500"></span>
              <span>AWS Cloud Practitioner Essentials (Edx)</span>
            </li>
            <li className="flex items-center gap-2">
              <span className="h-2 w-2 rounded-full bg-purple-500"></span>
              <span>Intro to Cyber Security Specialization (CourseEra)</span>
            </li>
            <li className="flex items-center gap-2">
              <span className="h-2 w-2 rounded-full bg-green-500"></span>
              <span>Ethical Hacking Essentials (EC Council)</span>
            </li>
            <li className="flex items-center gap-2">
              <span className="h-2 w-2 rounded-full bg-orange-500"></span>
              <span>Blockchain and Cryptocurrency Explained (CourseEra)</span>
            </li>
          </ul>
        </motion.div>

        {/* Achievements Section */}
        <motion.div
          className="mt-16 max-w-3xl mx-auto"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5, delay: 0.4 }}
        >
          <h3 className="text-2xl font-bold mb-6 text-center">Achievements</h3>
          <ul className="space-y-3">
            <li className="flex items-center gap-2">
              <span className="h-2 w-2 rounded-full bg-yellow-500"></span>
              <span>Solved 100+ Coding Problems on Various Platforms like LeetCode, Codechef, GFG, Codeforce</span>
            </li>
            <li className="flex items-center gap-2">
              <span className="h-2 w-2 rounded-full bg-rose-500"></span>
              <span>Win 1st position in College level Quiz competition</span>
            </li>
          </ul>
        </motion.div>
      </div>
    </section>
  );
}
