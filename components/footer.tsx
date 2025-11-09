export function Footer() {
  return (
    <footer className="bg-[#508059] text-primary-foreground py-8 md:py-12 border-t border-primary/30">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="mb-6 sm:mb-8">
          <div>
            <h3 className="font-semibold mb-2">Resources</h3>
            <ul className="text-sm text-primary-foreground/90 space-y-1">
              <li>
                <a 
                  href="https://arxiv.org/abs/2510.03898" 
                  target="_blank" 
                  rel="noopener noreferrer"
                  className="hover:text-primary-foreground transition-colors"
                >
                  Paper
                </a>
              </li>
              <li>
                <a 
                  href="https://github.com/NusRAT-LiA/Bangla-Article-Stance-Detection-Benchmark-Dataset" 
                  target="_blank" 
                  rel="noopener noreferrer"
                  className="hover:text-primary-foreground transition-colors"
                >
                  Dataset
                </a>
              </li>
            </ul>
          </div>
        </div>

        <div className="border-t border-primary/30 pt-6 text-center text-sm text-primary-foreground/80">
          <p>&copy; 2025 BanglaBias Research Project. All rights reserved.</p>
        </div>
      </div>
    </footer>
  )
}
