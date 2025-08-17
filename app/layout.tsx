import type React from "react"
import type { Metadata } from "next"
import { Poppins, Inter } from "next/font/google"
import "./globals.css"

const poppins = Poppins({
  subsets: ["latin"],
  weight: ["400", "600", "700", "900"],
  display: "swap",
  variable: "--font-poppins",
})

const inter = Inter({
  subsets: ["latin"],
  weight: ["400", "500", "600"],
  display: "swap",
  variable: "--font-inter",
})

export const metadata: Metadata = {
  title: "Sahil Kumar - Futuristic Portfolio | B.Tech IT Graduate",
  description:
    "Experience the future of web development with Sahil Kumar's interactive 3D portfolio. B.Tech IT graduate specializing in AI, web development, and cutting-edge technologies.",
  generator: "v0.app",
}

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode
}>) {
  return (
    <html lang="en" className="dark">
      <head>
        <style>{`
html {
  font-family: ${inter.style.fontFamily};
  --font-heading: ${poppins.variable};
  --font-body: ${inter.variable};
}
        `}</style>
      </head>
      <body className={`${poppins.variable} ${inter.variable} antialiased`}>{children}</body>
    </html>
  )
}
