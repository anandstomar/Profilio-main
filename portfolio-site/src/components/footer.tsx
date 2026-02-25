"use client";

import { motion } from "framer-motion";

export default function Footer() {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="py-8 border-t">
      <div className="container mx-auto px-4 md:px-6">
        <motion.div
          className="flex flex-col items-center justify-center space-y-2"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
        >
          <p className="text-sm text-muted-foreground text-center">
            © {currentYear} Anand Singh Tomar. All rights reserved.
          </p>
          <p className="text-xs text-muted-foreground text-center">
            Built with Next.js, Tailwind CSS, and Shadcn UI
          </p>
        </motion.div>
      </div>
    </footer>
  );
}
