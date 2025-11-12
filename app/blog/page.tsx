import Image from "next/image"
import Link from "next/link"
import { Calendar, User, ArrowRight, ExternalLink } from "lucide-react"

export default function Blog() {
  const posts = [
    {
      id: 1,
      title: "How Mentorship Changed Amara's Life: A Success Story",
      excerpt:
        "From struggling student to confident leader - discover how one-on-one mentorship transformed a young woman's future.",
      date: "November 15, 2024",
      author: "Lucky Kitonyi",
      image: "/mentorship-success-story-student.jpg",
      category: "Student Stories",
    },
    {
      id: 2,
      title: "Breaking Barriers: Why Girls' Empowerment Matters in Education",
      excerpt: "Learn how our Girls Empowerment Program is removing barriers and helping young women stay in school.",
      date: "November 10, 2024",
      author: "Sarah Mutua",
      image: "/girls-empowerment-education-classroom.jpg",
      category: "Program Updates",
    },
    {
      id: 3,
      title: "Teacher Spotlight: Mr. Kipchoge's Journey with Smart Education",
      excerpt: "How a dedicated educator found renewed purpose through our Teacher Empowerment program.",
      date: "November 5, 2024",
      author: "David Omondi",
      image: "/placeholder.svg?height=300&width=400",
      category: "Teacher Stories",
    },
    {
      id: 4,
      title: "Digital Skills for Rural Students: Bridging the Gap",
      excerpt: "Exploring how digital literacy training is opening new doors for students in underserved communities.",
      date: "October 28, 2024",
      author: "Grace Kipngetuny",
      image: "/placeholder.svg?height=300&width=400",
      category: "Digital Literacy",
    },
    {
      id: 5,
      title: "The Power of Belief: Career Guidance That Works",
      excerpt: "How career guidance sessions are helping students discover their potential and plan their futures.",
      date: "October 20, 2024",
      author: "Lucky Kitonyi",
      image: "/placeholder.svg?height=300&width=400",
      category: "Career Development",
    },
    {
      id: 6,
      title: "Community Voices: Why People Support Smart Education",
      excerpt: "Hear from donors, volunteers, and partners about why they believe in our mission.",
      date: "October 15, 2024",
      author: "Michael Chen",
      image: "/placeholder.svg?height=300&width=400",
      category: "Community",
    },
  ]

  return (
    <main>
      {/* Hero */}
      <section className="section bg-primary text-white">
        <div className="container">
          <h1 className="text-5xl md:text-6xl font-bold mb-6">Blog & Stories</h1>
          <p className="text-xl opacity-90 max-w-2xl">
            Real stories from real people. Discover how Smart Education is changing lives, one student at a time.
          </p>
        </div>
      </section>

      {/* Featured Post */}
      <section className="section">
        <div className="container">
          <div className="bg-background rounded-xl overflow-hidden border border-border hover:shadow-xl transition-shadow">
            <div className="grid grid-cols-1 md:grid-cols-2 gap-8 items-center">
              <Image
                src={posts[0].image || "/placeholder.svg"}
                alt={posts[0].title}
                width={400}
                height={300}
                className="w-full h-64 md:h-80 object-cover"
              />
              <div className="p-8">
                <div className="inline-block px-4 py-2 bg-primary bg-opacity-10 text-primary rounded-lg text-sm font-semibold mb-4">
                  Featured Story
                </div>
                <h2 className="text-3xl font-bold mb-4 text-foreground">{posts[0].title}</h2>
                <p className="text-lg text-muted-foreground mb-6 leading-relaxed">{posts[0].excerpt}</p>
                <div className="flex gap-4 mb-6 text-sm text-muted-foreground">
                  <span className="flex items-center gap-2">
                    <Calendar size={16} /> {posts[0].date}
                  </span>
                  <span className="flex items-center gap-2">
                    <User size={16} /> {posts[0].author}
                  </span>
                </div>
                <Link
                  href="#"
                  className="text-primary font-semibold inline-flex items-center gap-2 hover:gap-3 transition-all"
                >
                  Read Story <ArrowRight size={20} />
                </Link>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Blog Grid */}
      <section className="section bg-muted">
        <div className="container">
          <h2 className="section-title mb-12">Latest Stories</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {posts.slice(1).map((post) => (
              <article
                key={post.id}
                className="bg-background rounded-lg overflow-hidden border border-border hover:shadow-lg transition-all group"
              >
                <div className="relative h-48 overflow-hidden bg-muted">
                  <Image
                    src={post.image || "/placeholder.svg"}
                    alt={post.title}
                    width={400}
                    height={300}
                    className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-300"
                  />
                </div>
                <div className="p-6">
                  <div className="inline-block px-3 py-1 bg-primary bg-opacity-10 text-primary rounded text-xs font-semibold mb-3">
                    {post.category}
                  </div>
                  <h3 className="font-bold text-lg mb-3 text-foreground leading-tight line-clamp-2">{post.title}</h3>
                  <p className="text-muted-foreground text-sm mb-4 line-clamp-2">{post.excerpt}</p>
                  <div className="flex gap-4 text-xs text-muted-foreground mb-4 pb-4 border-b border-border">
                    <span className="flex items-center gap-1">
                      <Calendar size={14} /> {post.date}
                    </span>
                    <span className="flex items-center gap-1">
                      <User size={14} /> {post.author}
                    </span>
                  </div>
                  <Link
                    href="#"
                    className="text-primary font-semibold text-sm inline-flex items-center gap-2 group-hover:gap-3 transition-all"
                  >
                    Read More <ArrowRight size={16} />
                  </Link>
                </div>
              </article>
            ))}
          </div>
        </div>
      </section>

      {/* Newsletter */}
      <section className="section bg-primary text-white">
        <div className="container text-center">
          <h2 className="text-4xl font-bold mb-6">Stay Updated</h2>
          <p className="text-xl opacity-90 max-w-2xl mx-auto mb-8">
            Subscribe to our newsletter for stories, updates, and ways to make an impact.
          </p>
          <div className="flex flex-col sm:flex-row gap-3 max-w-md mx-auto justify-center">
            <a
              href="https://forms.gle/tGJDcmiTXY45fiFo9"
              target="_blank"
              rel="noopener noreferrer"
              className="px-8 py-3 rounded-lg font-semibold hover:bg-opacity-90 transition-colors bg-white text-primary inline-flex items-center justify-center gap-2"
            >
              Subscribe to Newsletter
              <ExternalLink size={18} />
            </a>
          </div>
        </div>
      </section>
    </main>
  )
}
