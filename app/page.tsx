import Link from "next/link"
import Image from "next/image"
import { ArrowRight, Users, BookOpen, Heart } from "lucide-react"

export default function Home() {
  const stats = [
    { number: "764+", label: "Students Reached", icon: Users },
    { number: "26+", label: "Teachers Empowered", icon: BookOpen },
    { number: "5+", label: "Schools Enrolled", icon: Heart },
  ]

  const programs = [
    {
      title: "Mentorship & Career Guidance",
      description: "Connecting students with role models who inspire ambition and self-belief.",
      image: "/mentorship-program-with-students.jpg",
    },
    {
      title: "Girls Empowerment & Support",
      description: "Providing dignity, support, and hygiene education to ensure girls stay in school.",
      image: "/girls-in-school-classroom.jpg",
    },
    {
      title: "Digital Literacy",
      description: "Introducing students to computer and technology skills for the modern world.",
      image: "/students-learning-computer-skills.jpg",
    },
  ]

  return (
    <main>
      {/* Hero Section */}
      <section className="relative bg-gradient-to-br from-primary to-primary-dark text-white overflow-hidden min-h-screen flex items-center">
        <div className="absolute inset-0 opacity-10">
          <div className="absolute top-20 left-10 w-72 h-72 bg-white rounded-full mix-blend-multiply filter blur-xl"></div>
          <div className="absolute -bottom-8 right-10 w-72 h-72 bg-secondary rounded-full mix-blend-multiply filter blur-xl"></div>
        </div>

        <div className="container relative z-10">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-12 items-center">
            <div className="space-y-6">
              <h1 className="text-5xl md:text-6xl font-bold leading-tight">
                Empowering Students,
                <span className="text-accent ml-2">Inspiring Futures</span>
              </h1>
              <p className="text-lg opacity-90 max-w-lg leading-relaxed">
                Smart Education transforms lives through mentorship, career guidance, and digital literacy. We're
                empowering over 2,000 students in underserved areas to pursue their dreams with passion and purpose.
              </p>
              <div className="flex flex-col sm:flex-row gap-4 pt-4">
                <Link href="/join" className="btn-primary">
                  Join as a Volunteer <ArrowRight size={20} className="ml-2 inline" />
                </Link>
                <Link href="/about" className="btn-secondary">
                  Learn More
                </Link>
              </div>
            </div>

            <div className="hidden md:block relative">
              <Image
                src="/african-students-studying-together-in-classroom.jpg"
                alt="Students learning"
                width={500}
                height={500}
                className="rounded-2xl shadow-2xl"
              />
            </div>
          </div>
        </div>
      </section>

      {/* Impact Stats */}
      <section className="section bg-muted">
        <div className="container">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {stats.map((stat, index) => {
              const Icon = stat.icon
              return (
                <div
                  key={index}
                  className="bg-background p-8 rounded-xl text-center border border-border hover:shadow-lg transition-shadow"
                >
                  <div className="w-16 h-16 bg-primary bg-opacity-10 rounded-full flex items-center justify-center mx-auto mb-4">
                    <Icon size={32} className="text-primary" />
                  </div>
                  <h3 className="text-4xl font-bold text-primary mb-2">{stat.number}</h3>
                  <p className="text-muted-foreground font-medium">{stat.label}</p>
                </div>
              )
            })}
          </div>
        </div>
      </section>

      {/* Featured Programs */}
      <section className="section">
        <div className="container">
          <div className="text-center mb-12">
            <h2 className="section-title">Our Programs</h2>
            <p className="section-subtitle">Transforming lives through education and mentorship</p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {programs.map((program, index) => (
              <div
                key={index}
                className="group bg-background rounded-xl overflow-hidden border border-border hover:shadow-xl transition-all duration-300"
              >
                <div className="relative h-48 overflow-hidden bg-muted">
                  <Image
                    src={program.image || "/placeholder.svg"}
                    alt={program.title}
                    width={400}
                    height={300}
                    className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-300"
                  />
                </div>
                <div className="p-6">
                  <h3 className="text-xl font-bold mb-3 text-foreground">{program.title}</h3>
                  <p className="text-muted-foreground mb-4">{program.description}</p>
                  <Link
                    href="/programs"
                    className="text-primary font-semibold inline-flex items-center group-hover:gap-2 gap-1 transition-all"
                  >
                    Learn More <ArrowRight size={18} />
                  </Link>
                </div>
              </div>
            ))}
          </div>

          <div className="text-center mt-12">
            <Link href="/programs" className="btn-primary">
              Explore All Programs
            </Link>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="section bg-primary text-white relative overflow-hidden">
        <div className="absolute inset-0 opacity-5">
          <div className="absolute top-10 left-1/4 w-80 h-80 bg-white rounded-full mix-blend-multiply filter blur-3xl"></div>
        </div>

        <div className="container relative z-10 text-center">
          <h2 className="text-4xl md:text-5xl font-bold mb-6">Ready to Make a Difference?</h2>
          <p className="text-xl opacity-90 max-w-2xl mx-auto mb-8">
            Join our community of mentors, volunteers, and partners who believe in the power of education to transform
            lives.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link
              href="/join"
              className="bg-white text-primary px-8 py-3 rounded-lg font-semibold hover:bg-muted transition-colors"
            >
              Become a Volunteer
            </Link>
            <Link
              href="/contact"
              className="border-2 border-white text-white px-8 py-3 rounded-lg font-semibold hover:bg-white hover:bg-opacity-10 transition-colors"
            >
              Partner With Us
            </Link>
          </div>
        </div>
      </section>

      {/* Testimonial Preview */}
      <section className="section">
        <div className="container">
          <div className="text-center mb-12">
            <h2 className="section-title">Voices of Change</h2>
            <p className="section-subtitle">Real stories from students, teachers, and mentors</p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            <div className="bg-muted p-8 rounded-xl border-l-4 border-primary">
              <p className="text-foreground mb-4 italic leading-relaxed">
                "Smart Education gave me hope when I thought my dreams were impossible. My mentor believed in me and
                opened doors I never knew existed."
              </p>
              <p className="font-semibold text-primary">— Amara, Student</p>
              <p className="text-muted-foreground text-sm">Secondary School, Nairobi</p>
            </div>

            <div className="bg-muted p-8 rounded-xl border-l-4 border-secondary">
              <p className="text-foreground mb-4 italic leading-relaxed">
                "Seeing my students gain confidence and purpose through this program is the most rewarding experience of
                my career. This is education done right."
              </p>
              <p className="font-semibold text-primary">— Mr. Kipchoge, Teacher</p>
              <p className="text-muted-foreground text-sm">Primary School, Eldoret</p>
            </div>
          </div>

          <div className="text-center mt-12">
            <Link href="/impact" className="btn-primary">
              Read More Stories
            </Link>
          </div>
        </div>
      </section>
    </main>
  )
}
