"use client"

const authors = [
  { name: "Nusrat Jahan Lia", portfolio: "https://nusrat-lia.github.io/Nusrat-Jahan-Lia/" },
  { name: "Shubhashis Roy Dipta", portfolio: "https://roydipta.com/" },
  { name: "Abdullah Khan Zehady", portfolio: "https://www.linkedin.com/in/abdullah-khan-zehady-915ba024/" },
  { name: "Naymul Islam", portfolio: "https://www.researchgate.net/scientific-contributions/Naymul-Islam-2296144252" },
  { name: "Madhusodan Chakraborty", portfolio: "https://openreview.net/profile?id=~Madhusodan_Chakraborty1" },
  { name: "Abdullah Al Wasif", portfolio: "https://www.linkedin.com/in/abdullahwasif/"},
]

export function Header() {
  return (
    <header className="relative overflow-hidden bg-gradient-to-b from-card via-card to-background py-16 md:py-20">
      <div className="absolute inset-0 opacity-5">
        <div className="absolute top-0 right-0 w-96 h-96 bg-secondary rounded-full blur-3xl"></div>
        <div className="absolute bottom-0 left-0 w-96 h-96 bg-accent rounded-full blur-3xl"></div>
      </div>

      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="flex flex-col gap-3 sm:gap-4">
          <div className="flex items-center gap-2">
            <div className="w-1 h-8 sm:h-10 bg-accent rounded-full"></div>
            <h1 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-bold bg-gradient-to-r from-primary to-secondary bg-clip-text text-transparent">
              BanglaBias
            </h1>
          </div>
          <p className="text-base sm:text-lg md:text-xl text-muted-foreground font-light max-w-2xl">
          Read Between the Lines: A Benchmark for Uncovering Political Bias in Bangla News Articles

          </p>

          <div className="flex flex-wrap gap-2 sm:gap-3 pt-2">
            {authors.map((author, idx) => (
              <span key={idx} className="text-xs sm:text-sm">
                <a
                  href={author.portfolio}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="font-medium text-primary/80 hover:text-accent transition-colors underline"
                >
                  {author.name}
                </a>
                {idx < authors.length - 1 && <span className="text-muted-foreground"> • </span>}
              </span>
            ))}
          </div>
        </div>
      </div>
    </header>
  )
}
