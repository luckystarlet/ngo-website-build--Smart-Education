import Image from "next/image"
import Link from "next/link"
import { Award, Users, BookOpen, Monitor } from "lucide-react"
import { Heart } from "lucide-react" // Placeholder for missing icon

export default function Programs() {
  const programs = [
    {
      icon: Users,
      title: "Mentorship & Motivation",
      description:
        "Connecting students with role models who inspire ambition and self-belief. Our mentors guide students through their educational journey, helping them overcome challenges and discover their potential.",
      image: "/mentorship-session-between-mentor-and-student.jpg",
      features: ["One-on-one guidance", "Career exploration", "Academic support", "Life skills development"],
    },
    {
      icon: Award,
      title: "Career Guidance",
      description:
        "Helping students discover career paths and learn practical study skills. We bridge the gap between education and employment by introducing students to various career opportunities.",
      image: "/career-counseling-session-with-students.jpg",
      features: ["Career path exploration", "Skills assessment", "Study techniques", "Interview preparation"],
    },
    {
      icon: Heart,
      title: "Girls Empowerment & Material Support",
      description:
        "Providing sanitary pads and hygiene education to help girls stay in school. We remove barriers to education and build confidence in young women.",
      image: "/girls-empowerment-education-program.jpg",
      features: ["Sanitary pad distribution", "Hygiene education", "Confidence building", "Health awareness"],
    },
    {
      icon: BookOpen,
      title: "Teacher Empowerment & Training",
      description:
        "Equipping teachers with tools and motivation to guide students effectively. We invest in educators because they are the foundation of educational transformation.",
      image: "/teacher-training-workshop.png",
      features: ["Professional development", "Teaching strategies", "Student mentoring skills", "Resource access"],
    },
    {
      icon: Monitor,
      title: "Digital Literacy for Students",
      description:
        "Introducing students to basic computer and technology skills. In our digital age, we ensure no student is left behind in accessing essential tech skills.",
      image: "/students-learning-computer-skills-in-classroom.jpg",
      features: ["Computer basics", "Internet safety", "Digital tools training", "Online learning skills"],
    },
  ]

  return (
    <main>
      {/* Hero */}
      <section className="section bg-primary text-white">
        <div className="container">
          <h1 className="text-5xl md:text-6xl font-bold mb-6">Our Programs</h1>
          <p className="text-xl opacity-90 max-w-2xl">
            Comprehensive initiatives designed to empower students, teachers, and entire communities through education
            and mentorship.
          </p>
        </div>
      </section>

      {/* Programs */}
      <section className="section">
        <div className="container">
          {programs.map((program, index) => {
            const Icon = program.icon
            return (
              <div
                key={index}
                className={`mb-20 ${index !== programs.length - 1 ? "pb-20 border-b border-border" : ""}`}
              >
                <div
                  className={`grid grid-cols-1 md:grid-cols-2 gap-12 items-center ${index % 2 === 1 ? "md:grid-flow-col-dense" : ""}`}
                >
                  <div className={index % 2 === 1 ? "md:order-2" : ""}>
                    <div className="flex items-center gap-4 mb-6">
                      <div className="w-14 h-14 bg-primary bg-opacity-10 rounded-lg flex items-center justify-center flex-shrink-0">
                        <Icon size={32} className="text-primary" />
                      </div>
                      <h2 className="text-3xl font-bold text-foreground">{program.title}</h2>
                    </div>
                    <p className="text-lg text-muted-foreground leading-relaxed mb-6">{program.description}</p>
                    <div className="grid grid-cols-2 gap-4 mb-8">
                      {program.features.map((feature, featureIndex) => (
                        <div key={featureIndex} className="flex gap-3 items-start">
                          <div className="w-5 h-5 bg-secondary rounded-full flex items-center justify-center flex-shrink-0 mt-1">
                            <div className="w-2 h-2 bg-white rounded-full"></div>
                          </div>
                          <span className="text-foreground font-medium">{feature}</span>
                        </div>
                      ))}
                    </div>
                    <Link href="/join" className="btn-primary inline-block">
                      Get Involved
                    </Link>
                  </div>
                  <div className={index % 2 === 1 ? "md:order-1" : ""}>
                    <Image
                      src={program.image || "/placeholder.svg"}
                      alt={program.title}
                      width={500}
                      height={400}
                      className="rounded-xl shadow-lg"
                    />
                  </div>
                </div>
              </div>
            )
          })}
        </div>
      </section>

      {/* CTA */}
      <section className="section bg-primary text-white text-center">
        <div className="container">
          <h2 className="text-4xl font-bold mb-6">Ready to Make an Impact?</h2>
          <p className="text-xl opacity-90 max-w-2xl mx-auto mb-8">
            Whether you're a mentor, volunteer, educator, or supporter, there's a role for you in our mission.
          </p>
          <Link
            href="/join"
            className="bg-white text-primary px-8 py-3 rounded-lg font-semibold hover:bg-muted transition-colors inline-block"
          >
            Join Our Community
          </Link>
        </div>
      </section>
    </main>
  )
}
