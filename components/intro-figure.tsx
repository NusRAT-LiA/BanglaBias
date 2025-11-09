import { getAssetPath } from "@/lib/basePath"

export function IntroFigure() {
  return (
    <div className="rounded-lg overflow-hidden bg-card border border-border/30 shadow-lg h-full flex max-w-md mx-auto md:mx-0">
      <img src={getAssetPath("fig1.png")} alt="BanglaBias Research Overview" className="w-full h-full object-contain" />
    </div>
  )
}
