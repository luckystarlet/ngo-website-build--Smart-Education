"use client"
import { useState } from "react"
import { ExternalLink } from "lucide-react"

export default function Join() {
  const [activeTab, setActiveTab] = useState("volunteer")

  const googleForms = {
    volunteer: "https://forms.gle/ZM1z4qinmdoxkSAx8",
    school: "https://forms.gle/iRR44FsuuhxyzMZc6",
    mentor: "https://forms.gle/ZM1z4qinmdoxkSAx8",
  }

  const formContent = {
    volunteer: {
      title: "Become a Volunteer",
      description: "Help us transform young lives through your time, expertise, and passion for education.",
    },
    school: {
      title: "Enroll Your School",
      description: "Partner with us to bring transformative programs to your students.",
    },
    mentor: {
      title: "Become a Mentor",
      description: "Be the role model that changes a student's life through mentorship and guidance.",
    },
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
              <div className="bg-muted p-8 rounded-xl border border-border">
                <h2 className="text-2xl font-bold text-foreground mb-2">
                  {formContent[activeTab as keyof typeof formContent].title}
                </h2>
                <p className="text-muted-foreground mb-8">
                  {formContent[activeTab as keyof typeof formContent].description}
                </p>

                <div className="space-y-4">
                  <p className="text-foreground font-semibold">Ready to get started?</p>
                  <a
                    href={googleForms[activeTab as keyof typeof googleForms]}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-flex items-center gap-3 btn-primary px-8 py-3 font-semibold rounded-lg hover:shadow-lg transition-all"
                  >
                    Open Application Form
                    <ExternalLink size={20} />
                  </a>
                  <p className="text-sm text-muted-foreground pt-4">
                    Click the button above to fill out our{" "}
                    {formContent[activeTab as keyof typeof formContent].title.toLowerCase()} form. Your submission will
                    be stored securely and we'll contact you soon.
                  </p>
                </div>
              </div>
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
