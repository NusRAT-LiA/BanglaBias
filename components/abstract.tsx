export function Abstract() {
  return (
    <div className="space-y-4 sm:space-y-6 h-full flex flex-col">
      <div className="flex items-center gap-2 sm:gap-3">
        <div className="w-1 h-6 sm:h-8 bg-accent rounded-full"></div>
        <h2 className="text-2xl sm:text-3xl md:text-4xl font-bold text-black">Abstract</h2>
      </div>

      <div className="prose prose-invert max-w-none">
        <p className="text-foreground/80 leading-relaxed text-sm sm:text-base md:text-lg">
        Detecting media bias is crucial, specifically in the South Asian region. Despite this, annotated datasets and computational studies for Bangla political bias research remain scarce. Crucially because, political stance detection in Bangla news requires understanding of linguistic cues, cultural context, subtle biases, rhetorical strategies, code-switching, implicit sentiment, and socio-political background. 
        </p>
        <p className="text-foreground/80 leading-relaxed text-sm sm:text-base md:text-lg mt-4">
        To address this, we introduce the first benchmark dataset of 200 politically significant and highly debated Bangla news articles, labeled for government-leaning, government-critique, and neutral stances, alongside diagnostic analyses for evaluating large language models (LLMs). Our comprehensive evaluation of 28 proprietary and open-source LLMs shows strong performance in detecting government-critique content (F1 up to 0.83) but substantial difficulty with neutral articles (F1 as low as 0.00). Models also tend to over-predict government-leaning stances, often misinterpreting ambiguous narratives. This dataset and its associated diagnostics provide a foundation for advancing stance detection in Bangla media research and offer insights for improving LLM performance in low-resource languages.
        </p>

      </div>
    </div>
  )
}
