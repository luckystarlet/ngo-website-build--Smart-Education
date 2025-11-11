"use client"

import type React from "react"

import { useState } from "react"
import { CheckCircle } from "lucide-react"

export default function Join() {
  const [activeTab, setActiveTab] = useState("volunteer")
  const [submitted, setSubmitted] = useState(false)
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    phone: "",
    expertise: "",
    availability: "",
    schoolName: "",
    schoolLocation: "",
    studentsCount: "",
    headteacherEmail: "",
  })

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    })
  }

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault()
    // In a real app, this would send to a backend API
    setSubmitted(true)
    setTimeout(() => {
      setSubmitted(false)
      setFormData({
        name: "",
        email: "",
        phone: "",
        expertise: "",
        availability: "",
        schoolName: "",
        schoolLocation: "",
        studentsCount: "",
        headteacherEmail: "",
      })
      setActiveTab("volunteer")
    }, 3000)
  }

  return (
    <main>
      {/* Hero */}
      <section className="section bg-primary text-white">
        <div className="container">
          <h1 className="text-5xl md:text-6xl font-bold mb-6">Join Our Mission</h1>
          <p className="text-xl opacity-90 max-w-2xl">
            Whether as a volunteer, mentor, school partner, or supporter, there's a meaningful way for you to contribute
            to transforming young lives.
          </p>
        </div>
      </section>

      {/* Tabs */}
      <section className="section">
        <div className="container">
          <div className="flex flex-col md:flex-row gap-8">
            {/* Sidebar */}
            <div className="md:w-64">
              <div className="space-y-3">
                <button
                  onClick={() => setActiveTab("volunteer")}
                  className={`w-full text-left px-6 py-3 rounded-lg font-semibold transition-all ${
                    activeTab === "volunteer" ? "bg-primary text-white" : "bg-muted text-foreground hover:bg-border"
                  }`}
                >
                  Become a Volunteer
                </button>
                <button
                  onClick={() => setActiveTab("school")}
                  className={`w-full text-left px-6 py-3 rounded-lg font-semibold transition-all ${
                    activeTab === "school" ? "bg-primary text-white" : "bg-muted text-foreground hover:bg-border"
                  }`}
                >
                  Enroll Your School
                </button>
                <button
                  onClick={() => setActiveTab("mentor")}
                  className={`w-full text-left px-6 py-3 rounded-lg font-semibold transition-all ${
                    activeTab === "mentor" ? "bg-primary text-white" : "bg-muted text-foreground hover:bg-border"
                  }`}
                >
                  Become a Mentor
                </button>
              </div>
            </div>

            {/* Form */}
            <div className="flex-1">
              {submitted ? (
                <div className="bg-success bg-opacity-10 border border-success rounded-xl p-12 text-center">
                  <CheckCircle size={64} className="text-success mx-auto mb-4" />
                  <h3 className="text-2xl font-bold text-foreground mb-2">Thank You!</h3>
                  <p className="text-muted-foreground mb-4">
                    Your submission has been received. We'll get back to you soon with more information.
                  </p>
                  <p className="text-sm text-muted-foreground">Check your email at {formData.email}</p>
                </div>
              ) : (
                <form onSubmit={handleSubmit} className="space-y-6 bg-muted p-8 rounded-xl border border-border">
                  {activeTab === "volunteer" && (
                    <>
                      <h2 className="text-2xl font-bold text-foreground">Become a Volunteer</h2>
                      <p className="text-muted-foreground">
                        Help us transform young lives through your time, expertise, and passion for education.
                      </p>

                      <div>
                        <label className="block text-sm font-semibold text-foreground mb-2">Full Name *</label>
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

                      <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                        <div>
                          <label className="block text-sm font-semibold text-foreground mb-2">Email *</label>
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
                          <label className="block text-sm font-semibold text-foreground mb-2">Phone Number *</label>
                          <input
                            type="tel"
                            name="phone"
                            value={formData.phone}
                            onChange={handleChange}
                            required
                            className="w-full px-4 py-2 rounded-lg border border-border bg-background focus:outline-none focus:ring-2 focus:ring-primary"
                            placeholder="+254 7XX XXX XXX"
                          />
                        </div>
                      </div>

                      <div>
                        <label className="block text-sm font-semibold text-foreground mb-2">Area of Expertise *</label>
                        <select
                          name="expertise"
                          value={formData.expertise}
                          onChange={handleChange}
                          required
                          className="w-full px-4 py-2 rounded-lg border border-border bg-background focus:outline-none focus:ring-2 focus:ring-primary"
                        >
                          <option value="">Select an area</option>
                          <option value="mentoring">Mentoring & Coaching</option>
                          <option value="academics">Academic Support</option>
                          <option value="tech">Technology & Digital Skills</option>
                          <option value="careerguidance">Career Guidance</option>
                          <option value="other">Other</option>
                        </select>
                      </div>

                      <div>
                        <label className="block text-sm font-semibold text-foreground mb-2">Availability *</label>
                        <select
                          name="availability"
                          value={formData.availability}
                          onChange={handleChange}
                          required
                          className="w-full px-4 py-2 rounded-lg border border-border bg-background focus:outline-none focus:ring-2 focus:ring-primary"
                        >
                          <option value="">Select your availability</option>
                          <option value="weekdays">Weekdays</option>
                          <option value="weekends">Weekends</option>
                          <option value="flexible">Flexible</option>
                        </select>
                      </div>
                    </>
                  )}

                  {activeTab === "school" && (
                    <>
                      <h2 className="text-2xl font-bold text-foreground">Enroll Your School</h2>
                      <p className="text-muted-foreground">
                        Partner with us to bring transformative programs to your students.
                      </p>

                      <div>
                        <label className="block text-sm font-semibold text-foreground mb-2">School Name *</label>
                        <input
                          type="text"
                          name="schoolName"
                          value={formData.schoolName}
                          onChange={handleChange}
                          required
                          className="w-full px-4 py-2 rounded-lg border border-border bg-background focus:outline-none focus:ring-2 focus:ring-primary"
                          placeholder="School name"
                        />
                      </div>

                      <div>
                        <label className="block text-sm font-semibold text-foreground mb-2">Location *</label>
                        <input
                          type="text"
                          name="schoolLocation"
                          value={formData.schoolLocation}
                          onChange={handleChange}
                          required
                          className="w-full px-4 py-2 rounded-lg border border-border bg-background focus:outline-none focus:ring-2 focus:ring-primary"
                          placeholder="School location"
                        />
                      </div>

                      <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                        <div>
                          <label className="block text-sm font-semibold text-foreground mb-2">
                            Number of Students *
                          </label>
                          <input
                            type="number"
                            name="studentsCount"
                            value={formData.studentsCount}
                            onChange={handleChange}
                            required
                            className="w-full px-4 py-2 rounded-lg border border-border bg-background focus:outline-none focus:ring-2 focus:ring-primary"
                            placeholder="Approximate number"
                          />
                        </div>
                        <div>
                          <label className="block text-sm font-semibold text-foreground mb-2">
                            Headteacher Email *
                          </label>
                          <input
                            type="email"
                            name="headteacherEmail"
                            value={formData.headteacherEmail}
                            onChange={handleChange}
                            required
                            className="w-full px-4 py-2 rounded-lg border border-border bg-background focus:outline-none focus:ring-2 focus:ring-primary"
                            placeholder="headteacher@school.com"
                          />
                        </div>
                      </div>
                    </>
                  )}

                  {activeTab === "mentor" && (
                    <>
                      <h2 className="text-2xl font-bold text-foreground">Become a Mentor</h2>
                      <p className="text-muted-foreground">
                        Be the role model that changes a student's life through mentorship and guidance.
                      </p>

                      <div>
                        <label className="block text-sm font-semibold text-foreground mb-2">Full Name *</label>
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

                      <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                        <div>
                          <label className="block text-sm font-semibold text-foreground mb-2">Email *</label>
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
                          <label className="block text-sm font-semibold text-foreground mb-2">Phone Number *</label>
                          <input
                            type="tel"
                            name="phone"
                            value={formData.phone}
                            onChange={handleChange}
                            required
                            className="w-full px-4 py-2 rounded-lg border border-border bg-background focus:outline-none focus:ring-2 focus:ring-primary"
                            placeholder="+254 7XX XXX XXX"
                          />
                        </div>
                      </div>

                      <div>
                        <label className="block text-sm font-semibold text-foreground mb-2">Area of Expertise *</label>
                        <select
                          name="expertise"
                          value={formData.expertise}
                          onChange={handleChange}
                          required
                          className="w-full px-4 py-2 rounded-lg border border-border bg-background focus:outline-none focus:ring-2 focus:ring-primary"
                        >
                          <option value="">Select an area</option>
                          <option value="academics">Academics</option>
                          <option value="careerdev">Career Development</option>
                          <option value="tech">Technology</option>
                          <option value="entrepreneurship">Entrepreneurship</option>
                          <option value="other">Other</option>
                        </select>
                      </div>
                    </>
                  )}

                  <button type="submit" className="w-full btn-primary py-3 font-semibold">
                    Submit Your Application
                  </button>
                </form>
              )}
            </div>
          </div>
        </div>
      </section>

      {/* Benefits */}
      <section className="section bg-muted">
        <div className="container">
          <h2 className="section-title text-center mb-12">Why Join Us?</h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <div className="bg-background p-8 rounded-xl border border-border text-center">
              <p className="text-5xl font-bold text-primary mb-4">✓</p>
              <h3 className="text-xl font-bold mb-3">Make Real Impact</h3>
              <p className="text-muted-foreground">
                Transform lives and shape the future of young people in your community.
              </p>
            </div>
            <div className="bg-background p-8 rounded-xl border border-border text-center">
              <p className="text-5xl font-bold text-primary mb-4">✓</p>
              <h3 className="text-xl font-bold mb-3">Grow & Learn</h3>
              <p className="text-muted-foreground">
                Develop your skills, expand your network, and gain meaningful experience.
              </p>
            </div>
            <div className="bg-background p-8 rounded-xl border border-border text-center">
              <p className="text-5xl font-bold text-primary mb-4">✓</p>
              <h3 className="text-xl font-bold mb-3">Join a Community</h3>
              <p className="text-muted-foreground">
                Be part of a passionate, supportive community united by a shared mission.
              </p>
            </div>
          </div>
        </div>
      </section>
    </main>
  )
}
