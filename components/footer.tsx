import Link from "next/link"
import Image from "next/image"
import { Mail, Phone, MapPin, Facebook, Instagram, Linkedin } from "lucide-react"

export default function Footer() {
  return (
    <footer className="bg-foreground text-background">
      <div className="container py-12 md:py-16">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8 mb-8">
          {/* Brand */}
          <div>
            <div className="flex items-center gap-2 mb-4">
              <Image src="/logo.jpg" alt="Smart Education Logo" width={32} height={32} className="h-8 w-auto" />
              <h3 className="font-bold text-lg">Smart Education</h3>
            </div>
            <p className="text-sm opacity-80 mb-4">Empowering young minds, changing futures. One student at a time.</p>
            <div className="flex gap-4">
              <a href="#" className="hover:text-accent transition-colors">
                <Facebook size={20} />
              </a>
              <a href="#" className="hover:text-accent transition-colors">
                <Instagram size={20} />
              </a>
              <a href="#" className="hover:text-accent transition-colors">
                <Linkedin size={20} />
              </a>
            </div>
          </div>

          {/* Quick Links */}
          <div>
            <h4 className="font-semibold mb-4">Quick Links</h4>
            <ul className="space-y-2 text-sm">
              <li>
                <Link href="/about" className="hover:text-accent transition-colors">
                  About Us
                </Link>
              </li>
              <li>
                <Link href="/programs" className="hover:text-accent transition-colors">
                  Programs
                </Link>
              </li>
              <li>
                <Link href="/impact" className="hover:text-accent transition-colors">
                  Our Impact
                </Link>
              </li>
              <li>
                <Link href="/blog" className="hover:text-accent transition-colors">
                  Stories
                </Link>
              </li>
            </ul>
          </div>

          {/* Get Involved */}
          <div>
            <h4 className="font-semibold mb-4">Get Involved</h4>
            <ul className="space-y-2 text-sm">
              <li>
                <Link href="/join" className="hover:text-accent transition-colors">
                  Become a Volunteer
                </Link>
              </li>
              <li>
                <Link href="/join" className="hover:text-accent transition-colors">
                  Enroll Your School
                </Link>
              </li>
              <li>
                <Link href="/join" className="hover:text-accent transition-colors">
                  Become a Mentor
                </Link>
              </li>
              <li>
                <Link href="/contact" className="hover:text-accent transition-colors">
                  Partner With Us
                </Link>
              </li>
            </ul>
          </div>

          {/* Contact */}
          <div>
            <h4 className="font-semibold mb-4">Contact</h4>
            <div className="space-y-3 text-sm">
              <div className="flex gap-3 items-start">
                <Mail size={18} className="mt-1 flex-shrink-0" />
                <div>
                  <a href="mailto:empowerthem01@gmail.com" className="hover:text-accent transition-colors">
                    empowerthem01@gmail.com
                  </a>
                </div>
              </div>
              <div className="flex gap-3 items-start">
                <Phone size={18} className="mt-1 flex-shrink-0" />
                <div>
                  <a href="tel:+254742180636" className="hover:text-accent transition-colors">
                    +254 742 180 636
                  </a>
                </div>
              </div>
              <div className="flex gap-3 items-start">
                <MapPin size={18} className="mt-1 flex-shrink-0" />
                <div>Kenya</div>
              </div>
            </div>
          </div>
        </div>

        {/* Bottom Section */}
        <div className="border-t border-opacity-20 border-background pt-8 mt-8 flex flex-col md:flex-row justify-between items-center gap-4 text-sm opacity-70">
          <p>&copy; 2025 Smart Education. All rights reserved.</p>
          <div className="flex gap-6">
            <Link href="#" className="hover:text-accent transition-colors">
              Privacy Policy
            </Link>
            <Link href="#" className="hover:text-accent transition-colors">
              Terms of Service
            </Link>
          </div>
        </div>
      </div>
    </footer>
  )
}
