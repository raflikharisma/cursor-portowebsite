import type { Metadata } from 'next'
import './globals.css'

export const metadata: Metadata = {
  title: "Rafli's Portfolio",
  description: 'Professional portfolio showcasing Rafli\'s experience, projects, and skills.',
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en">
      <body className="font-poppins bg-background text-text-primary">
        {children}
      </body>
    </html>
  )
} 