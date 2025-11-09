export function About() {
  return (
    <section className="bg-background py-12 sm:py-16 md:py-20 border-b border-border/50">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 sm:gap-8">
          <div className="space-y-3 sm:space-y-4">
            <h3 className="text-lg sm:text-xl font-bold text-black">Research Focus</h3>
            <p className="text-sm sm:text-base text-foreground/80 leading-relaxed">
              BanglaBias is a comprehensive dataset and benchmark designed to evaluate political bias in Bangla language
              NLP models.
            </p>
          </div>

          <div className="space-y-3 sm:space-y-4">
            <h3 className="text-lg sm:text-xl font-bold text-black">Dataset Composition</h3>
            <p className="text-sm sm:text-base text-foreground/80 leading-relaxed">
              Manually annotated samples across three sentiment classes: Government Leaning, Neutral, and Government
              Critique.
            </p>
          </div>

          <div className="space-y-3 sm:space-y-4 sm:col-span-2 lg:col-span-1">
            <h3 className="text-lg sm:text-xl font-bold text-black">Our Goal</h3>
            <p className="text-sm sm:text-base text-foreground/80 leading-relaxed">
              Identify model vulnerabilities and provide insights for building more fair and balanced NLP systems.
            </p>
          </div>
        </div>
      </div>
    </section>
  )
}
