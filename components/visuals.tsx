import Image from "next/image"

export function Visuals() {
  return (
    <section className="bg-background py-12 sm:py-16 md:py-20 border-t border-border/50">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <h2 className="text-2xl sm:text-3xl md:text-4xl font-bold text-black mb-3 sm:mb-4">Analysis Visualizations</h2>
        <p className="text-muted-foreground mb-8 sm:mb-12 text-sm sm:text-base md:text-lg">Detailed performance metrics and bias analysis</p>

        <div className="space-y-6 sm:space-y-8">
          {/* Confusion Matrix Row */}
          <div className="bg-card rounded-xl border border-border/50 p-4 sm:p-6 md:p-8 shadow-sm hover:shadow-md transition-shadow duration-300">
            <div className="flex flex-col gap-3 sm:gap-4 mb-4 sm:mb-6">
              <h3 className="text-xl sm:text-2xl font-bold text-black">Confusion Matrix</h3>
              <p className="text-sm sm:text-base text-foreground/70">
                Confusion matrix across all evaluated models.
              </p>
            </div>
            <div className="w-full bg-gradient-to-br from-muted via-background to-muted rounded-lg flex items-center justify-center overflow-hidden">
              <Image
                src="/CF.png"
                alt="Confusion Matrix Heatmap showing model classification performance"
                width={1600}
                height={900}
                className="w-full h-auto object-contain rounded-lg"
              />
            </div>
          </div>

          {/* Bias Tendency Row */}
          <div className="bg-card rounded-xl border border-border/50 p-4 sm:p-6 md:p-8 shadow-sm hover:shadow-md transition-shadow duration-300">
            <div className="flex flex-col gap-3 sm:gap-4 mb-4 sm:mb-6">
              <h3 className="text-xl sm:text-2xl font-bold text-black">Bias Tendency Analysis</h3>
              <p className="text-sm sm:text-base text-foreground/70">
                Distribution of model predictions across the three bias categories.
              </p>
            </div>
            <div className="w-full bg-gradient-to-br from-muted via-background to-muted rounded-lg flex items-center justify-center overflow-hidden">
              <Image
                src="/Bias-tendency.png"
                alt="Bias Tendency Chart showing prediction distribution across categories"
                width={1600}
                height={900}
                className="w-full h-auto object-contain rounded-lg"
              />
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
