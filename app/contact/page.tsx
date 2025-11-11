"use client"

import type React from "react"

import { useState } from "react"
import { CheckCircle, Mail, Phone, MapPin } from "lucide-react"

export default function Contact() {
  const [submitted, setSubmitted] = useState(false)
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    message: "",
  })

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    })
  }

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault()
    setSubmitted(true)
    setTimeout(() => {
      setSubmitted(false)
      setFormData({
        name: "",
        email: "",
        message: "",
      })
    }, 3000)
  }

  return (
    <main>
      {/* Hero */}
      <section className="section bg-primary text-white">
        <div className="container">
          <h1 className="text-5xl md:text-6xl font-bold mb-6">Get In Touch</h1>
          <p className="text-xl opacity-90 max-w-2xl">
            Have questions? Want to collaborate? We'd love to hear from you. Reach out and let's make a difference
            together.
          </p>
        </div>
      </section>

      {/* Contact Section */}
      <section className="section">
        <div className="container">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-12">
            {/* Contact Info */}
            <div>
              <h2 className="text-3xl font-bold mb-8">Contact Information</h2>

              <div className="space-y-8">
                <div className="flex gap-4 items-start">
                  <div className="w-12 h-12 bg-primary bg-opacity-10 rounded-lg flex items-center justify-center flex-shrink-0">
                    <Mail size={24} className="text-primary" />
                  </div>
                  <div>
                    <h3 className="font-bold text-lg mb-1">Email</h3>
                    <p className="text-muted-foreground">empowerthem01@gmail.com</p>
                    <p className="text-sm text-muted-foreground">We typically respond within 24 hours</p>
                  </div>
                </div>

                <div className="flex gap-4 items-start">
                  <div className="w-12 h-12 bg-primary bg-opacity-10 rounded-lg flex items-center justify-center flex-shrink-0">
                    <Phone size={24} className="text-primary" />
                  </div>
                  <div>
                    <h3 className="font-bold text-lg mb-1">Phone</h3>
                    <p className="text-muted-foreground">+254 742 180 636</p>
                    <p className="text-sm text-muted-foreground">Monday - Friday, 9am - 5pm</p>
                  </div>
                </div>

                <div className="flex gap-4 items-start">
                  <div className="w-12 h-12 bg-primary bg-opacity-10 rounded-lg flex items-center justify-center flex-shrink-0">
                    <MapPin size={24} className="text-primary" />
                  </div>
                  <div>
                    <h3 className="font-bold text-lg mb-1">Location</h3>
                    <p className="text-muted-foreground">Kenya</p>
                    <p className="text-sm text-muted-foreground">Serving communities across the nation</p>
                  </div>
                </div>
              </div>

              {/* Social Links */}
              <div className="mt-12 pt-8 border-t border-border">
                <h3 className="font-bold text-lg mb-4">Follow Us</h3>
                <div className="flex gap-4">
                  <a
                    href="#"
                    className="w-10 h-10 bg-muted rounded-lg flex items-center justify-center hover:bg-primary hover:text-white transition-colors"
                  >
                    f
                  </a>
                  <a
                    href="#"
                    className="w-10 h-10 bg-muted rounded-lg flex items-center justify-center hover:bg-primary hover:text-white transition-colors"
                  >
                    IG
                  </a>
                  <a
                    href="#"
                    className="w-10 h-10 bg-muted rounded-lg flex items-center justify-center hover:bg-primary hover:text-white transition-colors"
                  >
                    in
                  </a>
                </div>
              </div>
            </div>

            {/* Contact Form */}
            <div>
              {submitted ? (
                <div className="bg-success bg-opacity-10 border border-success rounded-xl p-12 text-center h-full flex flex-col items-center justify-center">
                  <CheckCircle size={64} className="text-success mx-auto mb-4" />
                  <h3 className="text-2xl font-bold text-foreground mb-2">Message Sent!</h3>
                  <p className="text-muted-foreground mb-4">Thank you for reaching out. We'll get back to you soon.</p>
                  <p className="text-sm text-muted-foreground">Check your email at {formData.email}</p>
                </div>
              ) : (
                <form onSubmit={handleSubmit} className="space-y-6 bg-muted p-8 rounded-xl border border-border">
                  <h3 className="text-2xl font-bold text-foreground">Send us a Message</h3>

                  <div>
                    <label className="block text-sm font-semibold text-foreground mb-2">Your Name *</label>
                    <input
                      type="text"
                      name="name"
                      value={formData.name}
                      onChange={handleChange}
                      required
                      className="w-full px-4 py-2 rounded-lg border border-border bg-background focus:outline-none focus:ring-2 focus:ring-primary"
                      placeholder="Your name"
                    />
                  </div>

                  <div>
                    <label className="block text-sm font-semibold text-foreground mb-2">Your Email *</label>
                    <input
                      type="email"
                      name="email"
                      value={formData.email}
                      onChange={handleChange}
                      required
                      className="w-full px-4 py-2 rounded-lg border border-border bg-background focus:outline-none focus:ring-2 focus:ring-primary"
                      placeholder="your@email.com"
                    />
                  </div>

                  <div>
                    <label className="block text-sm font-semibold text-foreground mb-2">Message *</label>
                    <textarea
                      name="message"
                      value={formData.message}
                      onChange={handleChange}
                      required
                      rows={6}
                      className="w-full px-4 py-2 rounded-lg border border-border bg-background focus:outline-none focus:ring-2 focus:ring-primary resize-none"
                      placeholder="Tell us how we can help..."
                    />
                  </div>

                  <button type="submit" className="w-full btn-primary py-3 font-semibold">
                    Send Message
                  </button>
                </form>
              )}
            </div>
          </div>
        </div>
      </section>

      {/* FAQ */}
      <section className="section bg-muted">
        <div className="container">
          <h2 className="section-title text-center mb-12">Frequently Asked Questions</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8 max-w-4xl mx-auto">
            <div className="bg-background p-8 rounded-lg border border-border">
              <h3 className="font-bold text-lg mb-3">How can I become a volunteer?</h3>
              <p className="text-muted-foreground">
                Visit our Join Us page to fill out the volunteer application form. We'll be in touch within 24 hours to
                discuss opportunities.
              </p>
            </div>
            <div className="bg-background p-8 rounded-lg border border-border">
              <h3 className="font-bold text-lg mb-3">How can my school enroll?</h3>
              <p className="text-muted-foreground">
                Schools can enroll through our Join Us page. We'll coordinate with your headteacher to customize
                programs for your students.
              </p>
            </div>
            <div className="bg-background p-8 rounded-lg border border-border">
              <h3 className="font-bold text-lg mb-3">What are partnership opportunities?</h3>
              <p className="text-muted-foreground">
                We welcome partnerships with organizations, corporations, and individuals. Contact us to discuss how we
                can collaborate.
              </p>
            </div>
            <div className="bg-background p-8 rounded-lg border border-border">
              <h3 className="font-bold text-lg mb-3">Can I make a donation?</h3>
              <p className="text-muted-foreground">
                Donations support our programs and help us reach more students. Contact us for donation details.
              </p>
            </div>
          </div>
        </div>
      </section>
    </main>
  )
}
