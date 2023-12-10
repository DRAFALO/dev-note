import type { Metadata } from 'next'
import { Inter } from 'next/font/google'
import ThemeProvider from "@/providers/ThemeProvider";

import './globals.css'
import NavBar from "@/components/layout/NavBar";

const inter = Inter({ subsets: ['latin'], variable: '--font-inter' })

export const metadata: Metadata = {
  title: 'Create Next App',
  description: 'Generated by create next app',
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en" suppressHydrationWarning>
      <body className={inter.variable}>
      <ThemeProvider attribute="class" defaultTheme="system" enableSystem>
          <NavBar />
        {children}
      </ThemeProvider>
      </body>
    </html>
  )
}