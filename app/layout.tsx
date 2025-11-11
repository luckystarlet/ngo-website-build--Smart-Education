import type React from "react"
import type { Metadata } from "next"
import { Poppins } from "next/font/google"
import "./globals.css"
import Navigation from "@/components/navigation"
import Footer from "@/components/footer"

const poppins = Poppins({
  subsets: ["latin"],
  weight: ["300", "400", "500", "600", "700", "800"],
  variable: "--font-poppins",
})

export const metadata: Metadata = {
  title: "Smart Education - Empowering Young Minds, Changing Futures",
  description:
    "Smart Education empowers high school and primary students through mentorship, career guidance, and digital literacy programs in Kenya.",
  keywords: "education, mentorship, Kenya, students, empowerment, career guidance",
  openGraph: {
    title: "Smart Education - Empowering Young Minds",
    description: "Empowering over 2,000 students in underserved areas through mentorship and education.",
    images: ["/og-image.png"],
  },
  generator: "v0.app",
}

export const viewport = {
  themeColor: "#0E6288",
  userScalable: true,
  width: "device-width",
  initialScale: 1,
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en">
      <body className={`${poppins.variable} font-sans bg-background text-foreground`}>
        <Navigation />
        {children}
        <Footer />
      </body>
    </html>
  )
}
