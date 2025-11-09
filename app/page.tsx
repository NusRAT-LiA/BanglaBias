import { Header } from "@/components/header"
import { IntroFigure } from "@/components/intro-figure"
import { Abstract } from "@/components/abstract"
import { Leaderboard } from "@/components/leaderboard"
import { Visuals } from "@/components/visuals"
import { Citation } from "@/components/citation"
import { Footer } from "@/components/footer"

export default function Home() {
  return (
    <main className="min-h-screen bg-background text-foreground">
      <Header />
      <section className="bg-background py-8 sm:py-12 md:py-16 border-b border-border/50">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6 sm:gap-8 lg:gap-12 items-stretch">
            <div className="md:col-span-1">
              <IntroFigure />
            </div>
            <div className="md:col-span-2">
              <Abstract />
            </div>
          </div>
        </div>
      </section>
      <Leaderboard />
      <Visuals />
      <Citation />
      <Footer />
    </main>
  )
}
