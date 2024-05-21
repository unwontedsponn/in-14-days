import Header from "./sections/Header"
import Content from "./sections/Content"

export default function Home() {
  return (
    <main className="max-w-6xl mx-auto flex flex-col">
      <Header />
      <Content />
    </main>
  )
}