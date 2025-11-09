export function Citation() {
  return (
    <section className="bg-background py-8 md:py-12 border-b border-border/50">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="flex items-center gap-2 mb-4">
          <div className="w-1 h-6 sm:h-8 bg-accent rounded-full"></div>
          <h2 className="text-2xl sm:text-3xl md:text-4xl font-bold text-black">Citation</h2>
        </div>
        <div className="bg-muted/50 rounded-lg p-4 sm:p-6 border border-border">
          <pre className="text-xs sm:text-sm text-foreground leading-relaxed font-mono whitespace-pre-wrap break-words overflow-x-auto">
{`@article{lia2025read,
  title={Read Between the Lines: A Benchmark for Uncovering Political Bias in Bangla News Articles},
  author={Lia, Nusrat Jahan and Dipta, Shubhashis Roy and Zehady, Abdullah Khan and Islam, Naymul and Chakraborty, Madhusodan and Wasif, Abdullah Al},
  journal={arXiv preprint arXiv:2510.03898},
  year={2025}
}`}
          </pre>
        </div>
      </div>
    </section>
  )
}

