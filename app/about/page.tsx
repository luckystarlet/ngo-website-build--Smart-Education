import Image from "next/image"
import { Check } from "lucide-react"

export default function About() {
  const values = [
    { title: "Empowerment", description: "Building confidence and agency in every student." },
    { title: "Inclusivity", description: "Education and opportunity for all, regardless of background." },
    { title: "Education for All", description: "Quality learning accessible to underserved communities." },
    { title: "Innovation", description: "Creative solutions to transform educational outcomes." },
    { title: "Integrity", description: "Honest, transparent, and ethical in all we do." },
  ]

  return (
    <main>
      {/* Hero */}
      <section className="section bg-primary text-white">
        <div className="container">
          <h1 className="text-5xl md:text-6xl font-bold mb-6">About Smart Education</h1>
          <p className="text-xl opacity-90 max-w-2xl">
            We believe every young person deserves the mentorship, guidance, and resources to pursue their dreams with
            confidence and purpose.
          </p>
        </div>
      </section>

      {/* Our Story */}
      <section className="section">
        <div className="container">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-12 items-center">
            <div>
              <h2 className="section-title">Our Story</h2>
              <div className="space-y-4 text-muted-foreground leading-relaxed">
                <p>
                  Smart Education was founded on a powerful belief: that education is the most transformative force for
                  change in any society. Founded by Lucky Muthoki Kitonyi, we started with a simple mission—to empower
                  high school and primary students in Kenya through mentorship, career guidance, and digital literacy.
                </p>
                <p>
                  What began as a vision to reach a few hundred students has grown into a movement touching the lives of
                  over 2,000 young learners across multiple schools in underserved communities.
                </p>
                <p>
                  Today, we partner with schools, volunteers, mentors, and donors who share our belief that every
                  student deserves the opportunity to realize their full potential.
                </p>
              </div>
            </div>
            <div className="relative">
              <Image
                src="/founder-lucky-muthoki-kitonyi-speaking-at-school-e.jpg"
                alt="Smart Education founder"
                width={500}
                height={400}
                className="rounded-xl shadow-lg"
              />
            </div>
          </div>
        </div>
      </section>

      {/* Mission & Vision */}
      <section className="section bg-muted">
        <div className="container">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-12">
            <div className="bg-background p-8 rounded-xl border border-border">
              <h3 className="text-2xl font-bold text-primary mb-4">Our Mission</h3>
              <p className="text-foreground leading-relaxed mb-4">
                To empower high school and primary students through mentorship, career guidance, and digital literacy
                programmes — nurturing confident, informed, and purpose-driven young learners.
              </p>
              <p className="text-muted-foreground italic">
                Our goal is to empower over 2,000 students in underserved areas to pursue education with passion through
                mentorship, motivation, and essential school materials.
              </p>
            </div>

            <div className="bg-background p-8 rounded-xl border border-border">
              <h3 className="text-2xl font-bold text-primary mb-4">Our Vision</h3>
              <p className="text-foreground leading-relaxed">
                To build an inspired generation of students equipped with the knowledge, skills, and confidence to shape
                a better future for themselves, their families, and their communities.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Inspirational Quote */}
      <section className="section bg-primary text-white text-center">
        <div className="container">
          <p className="text-3xl md:text-4xl font-bold italic mb-4">
            "We are not just giving handouts; we are lighting a fire of ambition and hope in the hearts of our future
            leaders."
          </p>
          <p className="text-xl opacity-90">— Lucky Kitonyi, Founder</p>
        </div>
      </section>

      {/* Core Values */}
      <section className="section">
        <div className="container">
          <h2 className="section-title text-center mb-12">Our Core Values</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-5 gap-6">
            {values.map((value, index) => (
              <div key={index} className="bg-muted p-6 rounded-lg text-center hover:shadow-lg transition-shadow">
                <div className="w-12 h-12 bg-primary bg-opacity-10 rounded-full flex items-center justify-center mx-auto mb-4">
                  <Check size={24} className="text-primary" />
                </div>
                <h4 className="font-bold text-foreground mb-2">{value.title}</h4>
                <p className="text-sm text-muted-foreground">{value.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Impact Section */}
      <section className="section bg-primary text-white">
        <div className="container">
          <h2 className="text-3xl md:text-4xl font-bold text-center mb-12">By The Numbers</h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 text-center">
            <div>
              <p className="text-5xl font-bold mb-2">764+</p>
              <p className="text-lg opacity-90">Students Reached</p>
            </div>
            <div>
              <p className="text-5xl font-bold mb-2">26+</p>
              <p className="text-lg opacity-90">Teachers Empowered</p>
            </div>
            <div>
              <p className="text-5xl font-bold mb-2">5+</p>
              <p className="text-lg opacity-90">Schools Enrolled</p>
            </div>
          </div>
        </div>
      </section>
    </main>
  )
}
