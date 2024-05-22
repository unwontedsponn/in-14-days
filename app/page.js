import Header from "./sections/Header"
import Homepage from "./sections/Homepage"
import Footer from "./sections/Footer"

export default function Home() {
  return (
    <main className="max-w-4xl mx-auto flex flex-col">
      <Header />
      <Homepage />
      <Footer />
    </main>
  )
}