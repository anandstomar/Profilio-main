"use client";

import { useState, useEffect } from "react";
import { motion } from "framer-motion";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Card, CardContent, CardHeader, CardTitle, CardDescription } from "@/components/ui/card";
import { FaTwitter, FaGithub, FaLinkedin, FaEnvelope } from "react-icons/fa";
import emailjs from "emailjs-com";
import { Check, Loader2 } from "lucide-react";

// Replace with your own EmailJS service ID, template ID, and public key
const EMAILJS_SERVICE_ID = "service_89a9one";
const EMAILJS_TEMPLATE_ID = "template_qrd2rvm";
const EMAILJS_PUBLIC_KEY = "CvPU7XoUCzPStUXAd";

export default function ContactForm() {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    message: "",
  });
  const [status, setStatus] = useState<"idle" | "sending" | "success" | "error">("idle");
  const [errors, setErrors] = useState<Record<string, string>>({});

  // Initialize EmailJS
  useEffect(() => {
    emailjs.init(EMAILJS_PUBLIC_KEY);
  }, []);

  const validateForm = () => {
    const newErrors: Record<string, string> = {};

    if (!formData.name.trim()) {
      newErrors.name = "Name is required";
    }

    if (!formData.email.trim()) {
      newErrors.email = "Email is required";
    } else if (!/\S+@\S+\.\S+/.test(formData.email)) {
      newErrors.email = "Email is invalid";
    }

    if (!formData.message.trim()) {
      newErrors.message = "Message is required";
    }

    setErrors(newErrors);
    return Object.keys(newErrors).length === 0;
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();

    if (!validateForm()) {
      return;
    }

    setStatus("sending");

    try {
      await emailjs.send(
        EMAILJS_SERVICE_ID,
        EMAILJS_TEMPLATE_ID,
        {
          from_name: formData.name,
          from_email: formData.email,
          message: formData.message,
        }
      );

      setStatus("success");
      setFormData({ name: "", email: "", message: "" });

      // Reset form status after 3 seconds
      setTimeout(() => {
        setStatus("idle");
      }, 3000);
    } catch (error) {
      console.error("Error sending email:", error);
      setStatus("error");
    }
  };

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    const { name, value } = e.target;
    setFormData((prev) => ({ ...prev, [name]: value }));

    // Clear error when user starts typing
    if (errors[name]) {
      setErrors((prev) => ({ ...prev, [name]: "" }));
    }
  };

  const socialLinks = [
    { icon: <FaGithub className="h-5 w-5" />, url: "https://github.com/anandstomar" },
    { icon: <FaLinkedin className="h-5 w-5" />, url: "https://www.linkedin.com/in/anand-singh-tomar-58923121a/" },
    // { icon: <FaTwitter className="h-5 w-5" />, url: "https://twitter.com/anandsinghtomar" },
    { icon: <FaEnvelope className="h-5 w-5" />, url: "mailto:anandsinghtomar25@gmail.com" },
  ];

  return (
    <section className="py-16" id="contact">
      <div className="container mx-auto px-4 md:px-6">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
          className="text-center mb-12"
        >
          <h2 className="text-3xl font-bold mb-4">Get In Touch</h2>
          <p className="text-muted-foreground max-w-2xl mx-auto">
            Have a question or want to work together? Feel free to reach out!
          </p>
        </motion.div>

        <div className="flex flex-col md:flex-row gap-10 max-w-4xl mx-auto">
          {/* Contact Form */}
          <motion.div
            className="flex-1"
            initial={{ opacity: 0, x: -20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
          >
            <Card>
              <CardHeader>
                <CardTitle>Send a Message</CardTitle>
                <CardDescription>Fill out the form below and I'll get back to you as soon as possible.</CardDescription>
              </CardHeader>
              <CardContent>
                <form onSubmit={handleSubmit} className="space-y-4">
                  <div className="space-y-2">
                    <Input
                      name="name"
                      placeholder="Your Name"
                      value={formData.name}
                      onChange={handleChange}
                      className={errors.name ? "border-red-500" : ""}
                    />
                    {errors.name && <p className="text-sm text-red-500">{errors.name}</p>}
                  </div>

                  <div className="space-y-2">
                    <Input
                      name="email"
                      type="email"
                      placeholder="Your Email"
                      value={formData.email}
                      onChange={handleChange}
                      className={errors.email ? "border-red-500" : ""}
                    />
                    {errors.email && <p className="text-sm text-red-500">{errors.email}</p>}
                  </div>

                  <div className="space-y-2">
                    <Textarea
                      name="message"
                      placeholder="Your Message"
                      value={formData.message}
                      onChange={handleChange}
                      className={`min-h-32 ${errors.message ? "border-red-500" : ""}`}
                    />
                    {errors.message && <p className="text-sm text-red-500">{errors.message}</p>}
                  </div>

                  <Button
                    type="submit"
                    className="w-full"
                    disabled={status === "sending" || status === "success"}
                  >
                    {status === "idle" && "Send Message"}
                    {status === "sending" && (
                      <>
                        <Loader2 className="mr-2 h-4 w-4 animate-spin" />
                        Sending...
                      </>
                    )}
                    {status === "success" && (
                      <>
                        <Check className="mr-2 h-4 w-4" />
                        Message Sent!
                      </>
                    )}
                    {status === "error" && "Try Again"}
                  </Button>

                  {status === "error" && (
                    <p className="text-sm text-red-500 text-center">
                      There was an error sending your message. Please try again later.
                    </p>
                  )}
                </form>
              </CardContent>
            </Card>
          </motion.div>

          {/* Contact Info */}
          <motion.div
            className="flex-1"
            initial={{ opacity: 0, x: 20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
          >
            <Card>
              <CardHeader>
                <CardTitle>Contact Information</CardTitle>
                <CardDescription>Feel free to connect with me through any of these channels.</CardDescription>
              </CardHeader>
              <CardContent>
                <div className="space-y-6">
                  <div>
                    <h3 className="font-medium mb-2">Location</h3>
                    <p className="text-muted-foreground">Indore, Madhya Pradesh, India</p>
                  </div>

                  <div>
                    <h3 className="font-medium mb-2">Email</h3>
                    <a
                      href="mailto:anandsinghtomar25@gmail.com"
                      className="text-primary hover:underline"
                    >
                      anandsinghtomar25@gmail.com
                    </a>
                  </div>

                  <div>
                    <h3 className="font-medium mb-2">Phone</h3>
                    <p className="text-muted-foreground">+91 9131138817</p>
                  </div>

                  <div>
                    <h3 className="font-medium mb-4">Social Profiles</h3>
                    <div className="flex gap-4">
                      {socialLinks.map((link, index) => (
                        <motion.a
                          key={index}
                          href={link.url}
                          target="_blank"
                          rel="noopener noreferrer"
                          className="p-3 bg-secondary rounded-full hover:bg-primary/10 transition-colors"
                          whileHover={{ y: -3 }}
                        >
                          {link.icon}
                        </motion.a>
                      ))}
                    </div>
                  </div>
                </div>
              </CardContent>
            </Card>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
