import Image from "next/image"

interface MusicCardProps {
  category?: string
  trackCount?: string
  title?: string
  coverImage?: string
  coverAlt?: string
}

export default function MusicCard({
  category,
  trackCount,
  title,
  coverImage,
  coverAlt = `Imagem em miniatura do curso de ${title}`,
}: MusicCardProps) {
  return (
    <div className="bg-white shadow-md rounded-lg p-4 w-64 h-[400px] transition-colors cursor-pointer group">
      {/* Header */}
      <div className="mb-3">
        <p className="text-zinc-900 text-xs font-medium uppercase tracking-wide">{category}</p>
        <p className="text-zinc-900 text-xs mt-1">{trackCount}</p>
      </div>

      {/* Title */}
      <h3 className="text-zinc-900  text-lg font-semibold mb-4 leading-tight">{title}</h3>

      {/* Cover Image */}
      <div className="relative h-full flex align-items-center overflow-hidden rounded-md group-hover:shadow-lg transition-shadow">
        <Image
          src={coverImage || "/placeholder.svg"}
          alt={coverAlt}
          width={224}
          height={224}
          className="w-full h-56 object-cover"
        />
      </div>
    </div>
  )
}
