import type React from "react"
import type { Metadata } from "next/types"
import { Outfit } from "next/font/google"
import "./globals.css"
import { ThemeProvider } from "./components/theme-provider"

const outfit = Outfit({ subsets: ["latin"] })

export const metadata: Metadata = {
  title: "Saud Muhammad Ali | Portfolio",
  description: "Full-Stack Developer, AI Enthusiast, Athlete",
}

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode
}>) {
  return (
    <html lang="en" suppressHydrationWarning>
      <body className={outfit.className}>
        <ThemeProvider attribute="class" defaultTheme="dark" enableSystem disableTransitionOnChange>
          {children}
        </ThemeProvider>
      </body>
    </html>
  )
}
