"use client";

import { motion } from "framer-motion";
import { Button } from "@/components/ui/button";
import Link from "next/link";
import { useState, useEffect } from "react";

export default function Navbar() {
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 50) {
        setScrolled(true);
      } else {
        setScrolled(false);
      }
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <motion.header
      className={`fixed top-0 left-0 w-full z-50 ${
        scrolled
          ? "bg-background/95 backdrop-blur-sm border-b border-border/40 shadow-sm"
          : "bg-transparent"
      } transition-all duration-300`}
      initial={{ y: -100 }}
      animate={{ y: 0 }}
      transition={{ duration: 0.5 }}
    >
      <div className="container mx-auto px-4 md:px-6">
        <div className="flex items-center justify-between h-16">
          <div className="flex items-center">
            <motion.div
              className="text-xl font-bold"
              whileHover={{ scale: 1.05 }}
            >
              <Link href="/" className="flex items-center gap-2">
                <span className="hidden sm:block"></span>
                <span className="sm:hidden">AST</span>
              </Link>
            </motion.div>
          </div>

          <nav className="hidden md:flex items-center space-x-6">
            {["Skills", "Education","Projects", "Contact"].map((item) => (
              <motion.a
                key={item}
                href={`#${item.toLowerCase()}`}
                className="text-sm font-medium hover:text-primary transition-colors"
                whileHover={{ y: -2 }}
              >
                {item}
              </motion.a>
            ))}
            <Button asChild variant="outline" size="sm">
              <a href="/resume.pdf" download="Anand_Singh_Tomar_Resume.pdf">
                Resume
              </a>
            </Button>
          </nav>

          <div className="md:hidden">
            <Button variant="ghost" size="sm">
              Menu
            </Button>
          </div>
        </div>
      </div>
    </motion.header>
  );
}
