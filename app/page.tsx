import Link from "next/link"
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
    },
    {
      title: "Girls Empowerment & Support",
      description: "Providing dignity, support, and hygiene education to ensure girls stay in school.",
    },
    {
      title: "Digital Literacy",
      description: "Introducing students to computer and technology skills for the modern world.",
    },
  ]

  return (
    <main className="min-h-screen bg-background">
      {/* Hero Section */}
      <section
        className="relative text-white overflow-hidden min-h-screen flex items-center"
        style={{
          backgroundImage: "url('/classroom-mentor.jpg')",
          backgroundSize: "cover",
          backgroundPosition: "center",
          backgroundAttachment: "fixed",
        }}
      >
        <div className="absolute inset-0 bg-black opacity-50"></div>

        <div className="container relative z-10">
          <div className="grid grid-cols-1 md:grid-cols-1 gap-12 items-center">
            <div className="space-y-6" style={{ animation: "slideInLeft 0.6s ease-out" }}>
              <h1
                className="text-5xl md:text-6xl font-bold leading-tight text-white"
                style={{ animation: "fadeInUp 0.6s ease-out" }}
              >
                Empowering Students,
                <span className="text-accent ml-2">Inspiring Futures</span>
              </h1>
              <p
                className="text-lg text-white opacity-95 max-w-lg leading-relaxed"
                style={{ animation: "fadeInUp 0.6s ease-out 0.1s both" }}
              >
                Smart Education transforms lives through mentorship, career guidance, and digital literacy. We're
                empowering over 2,000 students in underserved areas to pursue their dreams with passion and purpose.
              </p>
              <div
                className="flex flex-col sm:flex-row gap-4 pt-4"
                style={{ animation: "fadeInUp 0.6s ease-out 0.2s both" }}
              >
                <Link href="/join" className="btn-primary">
                  Join as a Volunteer <ArrowRight size={20} className="ml-2 inline" />
                </Link>
                <Link href="/about" className="btn-secondary">
                  Learn More
                </Link>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Impact Stats */}
      <section className="section bg-background">
        <div className="container">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {stats.map((stat, index) => {
              const Icon = stat.icon
              return (
                <div
                  key={index}
                  className="bg-background p-8 rounded-xl text-center border border-border transition-all duration-300 hover:shadow-xl hover:-translate-y-2"
                  style={{ animation: `fadeInUp 0.6s ease-out ${index * 0.1}s both` }}
                >
                  <div className="w-16 h-16 bg-primary bg-opacity-10 rounded-full flex items-center justify-center mx-auto mb-4 transition-all duration-300 hover:animate-pulse">
                    <Icon size={32} className="text-primary transition-all duration-300" />
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
      <section className="section bg-background">
        <div className="container">
          <div className="text-center mb-12">
            <h2
              className="text-3xl md:text-4xl font-bold text-foreground mb-4"
              style={{ animation: "fadeInUp 0.6s ease-out" }}
            >
              Our Programs
            </h2>
            <p
              className="text-lg text-muted-foreground mb-12"
              style={{ animation: "fadeInUp 0.6s ease-out 0.1s both" }}
            >
              Transforming lives through education and mentorship
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {programs.map((program, index) => (
              <div
                key={index}
                className="group bg-background rounded-xl overflow-hidden border border-border transition-all duration-300 hover:shadow-xl hover:-translate-y-2"
                style={{ animation: `fadeInUp 0.6s ease-out ${index * 0.1}s both` }}
              >
                <div className="p-6">
                  <h3 className="text-xl font-bold mb-3 text-foreground">{program.title}</h3>
                  <p className="text-muted-foreground mb-4">{program.description}</p>
                  <Link
                    href="/programs"
                    className="text-primary font-semibold inline-flex items-center group-hover:gap-2 gap-1 transition-all duration-300"
                  >
                    Learn More <ArrowRight size={18} />
                  </Link>
                </div>
              </div>
            ))}
          </div>

          <div className="text-center mt-12" style={{ animation: "fadeInUp 0.6s ease-out 0.3s both" }}>
            <Link href="/programs" className="btn-primary">
              Explore All Programs
            </Link>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="section bg-primary text-white relative overflow-hidden">
        <div className="absolute inset-0 opacity-5">
          <div
            className="absolute top-10 left-1/4 w-80 h-80 bg-white rounded-full mix-blend-multiply filter blur-3xl"
            style={{ animation: "float 3s ease-in-out infinite" }}
          ></div>
        </div>

        <div className="container relative z-10 text-center">
          <h2 className="text-4xl md:text-5xl font-bold mb-6" style={{ animation: "fadeInUp 0.6s ease-out" }}>
            Ready to Make a Difference?
          </h2>
          <p
            className="text-xl opacity-90 max-w-2xl mx-auto mb-8"
            style={{ animation: "fadeInUp 0.6s ease-out 0.1s both" }}
          >
            Join our community of mentors, volunteers, and partners who believe in the power of education to transform
            lives.
          </p>
          <div
            className="flex flex-col sm:flex-row gap-4 justify-center"
            style={{ animation: "fadeInUp 0.6s ease-out 0.2s both" }}
          >
            <Link
              href="/join"
              className="bg-white text-primary px-8 py-3 rounded-lg font-semibold hover:bg-muted transition-all duration-300 transform hover:scale-105 active:scale-95"
            >
              Become a Volunteer
            </Link>
            <Link
              href="/contact"
              className="border-2 border-white text-white px-8 py-3 rounded-lg font-semibold hover:bg-white hover:bg-opacity-10 transition-all duration-300 transform hover:scale-105 active:scale-95"
            >
              Partner With Us
            </Link>
          </div>
        </div>
      </section>

      {/* Testimonial Preview */}
      <section className="section bg-background">
        <div className="container">
          <div className="text-center mb-12">
            <h2
              className="text-3xl md:text-4xl font-bold text-foreground mb-4"
              style={{ animation: "fadeInUp 0.6s ease-out" }}
            >
              Voices of Change
            </h2>
            <p
              className="text-lg text-muted-foreground mb-12"
              style={{ animation: "fadeInUp 0.6s ease-out 0.1s both" }}
            >
              Real stories from students, teachers, and mentors
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            <div
              className="bg-muted p-8 rounded-xl border-l-4 border-primary transition-all duration-300 hover:shadow-xl hover:-translate-y-2"
              style={{ animation: "fadeInUp 0.6s ease-out 0.1s both" }}
            >
              <p className="text-foreground mb-4 italic leading-relaxed">
                "Smart Education gave me hope when I thought my dreams were impossible. My mentor believed in me and
                opened doors I never knew existed."
              </p>
              <p className="font-semibold text-primary">— Amara, Student</p>
              <p className="text-muted-foreground text-sm">Secondary School, Nairobi</p>
            </div>

            <div
              className="bg-muted p-8 rounded-xl border-l-4 border-secondary transition-all duration-300 hover:shadow-xl hover:-translate-y-2"
              style={{ animation: "fadeInUp 0.6s ease-out 0.2s both" }}
            >
              <p className="text-foreground mb-4 italic leading-relaxed">
                "Seeing my students gain confidence and purpose through this program is the most rewarding experience of
                my career. This is education done right."
              </p>
              <p className="font-semibold text-primary">— Mr. Kipchoge, Teacher</p>
              <p className="text-muted-foreground text-sm">Primary School, Eldoret</p>
            </div>
          </div>

          <div className="text-center mt-12" style={{ animation: "fadeInUp 0.6s ease-out 0.3s both" }}>
            <Link href="/impact" className="btn-primary">
              Read More Stories
            </Link>
          </div>
        </div>
      </section>
    </main>
  )
}
