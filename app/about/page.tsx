import Image from "next/image"

export default function About() {
  return (
    <main>
      {/* Hero */}
      <section className="section bg-primary text-white">
        <div className="container">
          <h1 className="text-5xl md:text-6xl font-bold mb-6">About Smart Education</h1>
          <p className="text-xl opacity-90 max-w-2xl">
            Meet the founder and visionary behind Smart Education's mission to empower the next generation of African
            leaders.
          </p>
        </div>
      </section>

      {/* Founder Information */}
      <section className="section">
        <div className="container">
          <h2 className="text-4xl font-bold text-center mb-16">Our Founders</h2>

          {/* Grace Kitonyi */}
          <div className="grid grid-cols-1 md:grid-cols-2 gap-12 items-center mb-20">
            <div className="relative">
              <Image
                src="/founder-photo.jpg"
                alt="Grace Kitonyi, Founder of Smart Education"
                width={400}
                height={500}
                className="rounded-full shadow-lg object-cover w-80 h-80"
              />
            </div>
            <div>
              <h3 className="text-3xl font-bold mb-2">Grace Kitonyi</h3>
              <p className="text-lg text-primary font-semibold mb-6">Founder & Visionary</p>
              <div className="space-y-4 text-muted-foreground leading-relaxed">
                <p>
                  Grace Kitonyi is the passionate founder of Smart Education, a movement dedicated to empowering high
                  school and primary students in Kenya through mentorship, career guidance, and digital literacy.
                </p>
                <p>
                  With a deep commitment to transforming education in underserved communities, Grace established Smart
                  Education on the belief that every young person deserves the opportunity to realize their full
                  potential.
                </p>
                <p>
                  What began as a vision to impact a few hundred students has grown into a thriving organization
                  touching the lives of over 2,000 learners across multiple schools in Kenya. Through dedication,
                  innovation, and collaboration, Grace continues to build a brighter future for Africa's next
                  generation.
                </p>
                <p className="italic text-primary font-semibold pt-4">
                  "We are not just giving handouts; we are lighting a fire of ambition and hope in the hearts of our
                  future leaders."
                </p>
              </div>
            </div>
          </div>

          {/* Eng. Lucky Kitonyi */}
          <div className="grid grid-cols-1 md:grid-cols-2 gap-12 items-center mb-20">
            <div>
              <h3 className="text-3xl font-bold mb-2">Eng. Lucky Kitonyi</h3>
              <p className="text-lg text-primary font-semibold mb-6">Co-Founder & Technology Innovator</p>
              <div className="space-y-4 text-muted-foreground leading-relaxed">
                <p>
                  Eng. Lucky Kitonyi is a passionate Engineer and Technology Innovator dedicated to creating digital
                  solutions that empower learners and communities. With a strong background in software development,
                  data science, and artificial intelligence, Lucky brings technical expertise and innovation to Smart
                  Education's mission.
                </p>
                <p>
                  Lucky's focus is on building smart, inclusive, and impactful education systems that bridge the gap
                  between technology and learning. By leveraging cutting-edge technology, Lucky ensures that every
                  student has access to world-class digital tools and resources that enhance their educational journey.
                </p>
                <p>
                  Driven by a commitment to innovation, collaboration, and using technology for good, Lucky works to
                  transform education through intelligent systems, data-driven insights, and scalable digital solutions
                  that reach underserved communities across Africa.
                </p>
                <p className="italic text-primary font-semibold pt-4">
                  "Technology is the bridge between dreams and reality; we are building that bridge for every student."
                </p>
              </div>
            </div>
            <div className="relative">
              <Image
                src="/lucky-founder-photo.jpg"
                alt="Eng. Lucky Kitonyi, Co-Founder of Smart Education"
                width={400}
                height={500}
                className="rounded-full shadow-lg object-cover w-80 h-80"
              />
            </div>
          </div>
        </div>
      </section>

      {/* Team Section */}
      <section className="section bg-gray-50">
        <div className="container">
          <h2 className="text-4xl font-bold text-center mb-16">Our Team</h2>

          {/* Stephene Musyoka */}
          <div className="grid grid-cols-1 md:grid-cols-2 gap-12 items-center">
            <div className="relative">
              <Image
                src="/stephene-photo.png"
                alt="Stephene Musyoka, Program Manager"
                width={400}
                height={500}
                className="rounded-full shadow-lg object-cover w-80 h-80"
              />
            </div>
            <div>
              <h3 className="text-3xl font-bold mb-2">Stephene Musyoka</h3>
              <p className="text-lg text-primary font-semibold mb-6">Program Manager & Community Leader</p>
              <div className="space-y-4 text-muted-foreground leading-relaxed">
                <p>
                  Stephene Musyoka is a passionate community leader and aspiring MCA for Kibauni Ward (2027), committed
                  to youth empowerment, fair representation, and collaboration with the county government to ensure
                  inclusive development for all.
                </p>
                <p>
                  As Program Manager at Smart Education, Stephene ensures that our initiatives reach and impact the
                  communities most in need. He believes in leadership that listens, unites, and delivers practical
                  solutions to everyday challenges facing the people of Kibauni and beyond.
                </p>
                <p>
                  Stephene's vision is to create opportunities for youth and women while promoting accountability and
                  progress for the common good. Through his work at Smart Education, he channels his passion for
                  community development into building sustainable educational programs that empower the next generation.
                </p>
                <p className="italic text-primary font-semibold pt-4">
                  "True leadership is about listening to our communities and creating pathways of opportunity for every
                  young person."
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>
    </main>
  )
}
