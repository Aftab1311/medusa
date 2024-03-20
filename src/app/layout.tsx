import { Metadata } from "next"
import "styles/globals.css"
import Navbar from "../../components/Navbar"
import Footer from "../../components/Footer"

const BASE_URL = process.env.NEXT_PUBLIC_BASE_URL || "https://localhost:8000"

export const metadata: Metadata = {
  metadataBase: new URL(BASE_URL),
}

export default function RootLayout(props: { children: React.ReactNode }) {
  return (
    <html lang="en" data-mode="light">
      <body>
        <Navbar/>
        <main>{props.children}</main>
        <Footer />
      </body>
    </html>
  )
}
