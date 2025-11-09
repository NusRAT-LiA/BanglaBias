export function Insights() {
  const insights = [
    "Government Leaning text is correctly identified with 78-89% accuracy across top models, but shows systematic bias in some models.",
    "Neutral sentiment classification remains the most challenging task, with F1 scores ranging from 0.65 to 0.82.",
    "Government Critique detection is particularly important for bias measurement, with top performers achieving 0.84+ F1 scores.",
    "Transformer-based models (BERT variants) consistently outperform traditional approaches by 10-15% in weighted F1 scores.",
    "Multilingual models show reduced bias compared to monolingual Bangla models, suggesting language-specific training data effects.",
    "Ensemble methods combining multiple models achieve the highest performance, reaching 0.88+ weighted average F1 scores.",
  ]

  return (
    <section className="bg-background py-12 md:py-16 border-t border-border">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <h2 className="text-2xl sm:text-3xl font-bold text-black mb-6 sm:mb-8">Key Insights</h2>

        <ul className="grid grid-cols-1 sm:grid-cols-2 gap-4 sm:gap-6">
          {insights.map((insight, index) => (
            <li key={index} className="flex gap-3">
              <div className="flex-shrink-0 w-5 h-5 sm:w-6 sm:h-6 rounded-full bg-accent text-accent-foreground flex items-center justify-center font-semibold text-xs sm:text-sm">
                {index + 1}
              </div>
              <p className="text-sm sm:text-base text-foreground/90 leading-relaxed pt-0.5">{insight}</p>
            </li>
          ))}
        </ul>
      </div>
    </section>
  )
}
