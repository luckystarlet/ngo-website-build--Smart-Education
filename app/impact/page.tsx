import Image from "next/image"
import { Star } from "lucide-react"

export default function Impact() {
  const testimonials = [
    {
      name: "Amara",
      role: "Student",
      school: "Secondary School, Nairobi",
      quote:
        "Smart Education gave me hope when I thought my dreams were impossible. My mentor believed in me and opened doors I never knew existed.",
      image: "/student-amara-portrait.jpg",
    },
    {
      name: "Mr. Kipchoge",
      role: "Teacher",
      school: "Primary School, Eldoret",
      quote:
        "Seeing my students gain confidence and purpose through this program is the most rewarding experience of my career. This is education done right.",
      image: "/teacher-portrait.png",
    },
    {
      name: "David",
      role: "Mentor & Volunteer",
      school: "Nairobi",
      quote:
        "Being part of Smart Education has enriched my life. I see the direct impact of mentorship on these young minds, and it reminds me why this work matters so much.",
      image: "/mentor-david-portrait.jpg",
    },
    {
      name: "Grace",
      role: "Student",
      school: "Primary School, Kisumu",
      quote:
        "The girls empowerment program changed my life. I no longer miss school, and I feel supported and confident about my future.",
      image: "/student-grace-portrait.jpg",
    },
  ]

  const impactStats = [
    { value: "764+", label: "Students Reached", bgColor: "bg-primary", textColor: "text-white" },
    { value: "26+", label: "Teachers Empowered", bgColor: "bg-primary-light", textColor: "text-white" },
    { value: "5+", label: "Schools Enrolled", bgColor: "bg-primary-dark", textColor: "text-white" },
    { value: "100+", label: "Mentors & Volunteers", bgColor: "bg-accent", textColor: "text-foreground" },
  ]

  return (
    <main>
      {/* Hero */}
      <section className="section bg-primary text-white">
        <div className="container">
          <h1 className="text-5xl md:text-6xl font-bold mb-6">Our Impact</h1>
          <p className="text-xl opacity-90 max-w-2xl">
            Real change, real stories, real transformation. See how Smart Education is changing lives across Kenya.
          </p>
        </div>
      </section>

      {/* Impact Stats */}
      <section className="section">
        <div className="container">
          <div className="grid grid-cols-1 md:grid-cols-4 gap-6">
            {impactStats.map((stat, index) => (
              <div
                key={index}
                className={`${stat.bgColor} ${stat.textColor} p-8 rounded-xl text-center relative overflow-hidden group transition-all duration-300 hover:shadow-lg hover:-translate-y-1`}
              >
                <div className="absolute inset-0 opacity-0 group-hover:opacity-10 bg-white transition-opacity"></div>
                <p className="text-5xl font-bold mb-2 relative z-10">{stat.value}</p>
                <p className="text-lg opacity-90 relative z-10">{stat.label}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Full-width impact classroom image */}
      <section className="section">
        <div className="container">
          <div className="relative h-96 rounded-xl overflow-hidden shadow-lg">
            <Image
              src="/impact-classroom.png"
              alt="Students engaged in Smart Education program"
              fill
              className="object-cover"
            />
            <div className="absolute inset-0 bg-gradient-to-r from-primary/40 to-transparent flex items-center">
              <div className="text-white p-8 max-w-2xl">
                <h3 className="text-4xl font-bold mb-4">Real Impact on the Ground</h3>
                <p className="text-lg opacity-90">
                  764+ students and counting, all receiving mentorship and educational support
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Testimonials */}
      <section className="section">
        <div className="container">
          <h2 className="section-title text-center mb-12">Voices of Change</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {testimonials.map((testimonial, index) => (
              <div
                key={index}
                className="bg-muted p-8 rounded-xl border border-border hover:shadow-lg transition-shadow"
              >
                <div className="flex gap-1 mb-4">
                  {[...Array(5)].map((_, i) => (
                    <Star key={i} size={20} className="text-accent fill-accent" />
                  ))}
                </div>
                <p className="text-foreground mb-6 italic leading-relaxed">"{testimonial.quote}"</p>
                <div className="flex items-center gap-4">
                  <Image
                    src={testimonial.image || "/placeholder.svg"}
                    alt={testimonial.name}
                    width={60}
                    height={60}
                    className="rounded-full"
                  />
                  <div>
                    <p className="font-bold text-foreground">{testimonial.name}</p>
                    <p className="text-sm text-muted-foreground">{testimonial.role}</p>
                    <p className="text-xs text-muted-foreground">{testimonial.school}</p>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="section bg-primary text-white text-center">
        <div className="container">
          <h2 className="text-4xl font-bold mb-6">Help Us Create More Success Stories</h2>
          <p className="text-xl opacity-90 max-w-2xl mx-auto mb-8">
            Every contribution—whether time, expertise, or resources—helps us reach and transform more young lives.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <a
              href="/join"
              className="bg-white text-primary px-8 py-3 rounded-lg font-semibold hover:bg-muted transition-colors"
            >
              Become a Mentor
            </a>
            <a
              href="/contact"
              className="border-2 border-white text-white px-8 py-3 rounded-lg font-semibold hover:bg-white hover:bg-opacity-10 transition-colors"
            >
              Partner With Us
            </a>
          </div>
        </div>
      </section>
    </main>
  )
}
