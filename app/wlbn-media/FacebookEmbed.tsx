'use client'

interface Props {
  url: string
  title: string
}

export default function FacebookEmbed({ url, title }: Props) {
  const encoded = encodeURIComponent(url)
  const src = `https://www.facebook.com/plugins/video.php?href=${encoded}&show_text=false&allowfullscreen=true`

  return (
    <div className="relative overflow-hidden rounded-sm bg-gray-100 dark:bg-gray-900 aspect-video">
      <iframe
        src={src}
        className="w-full h-full border-0"
        allow="autoplay; clipboard-write; encrypted-media; picture-in-picture; web-share"
        allowFullScreen
        title={title}
        loading="lazy"
      />
      <div className="absolute bottom-0 left-0 right-0 p-3 bg-gradient-to-t from-black/70 to-transparent pointer-events-none">
        <p className="text-xs font-bold uppercase tracking-wider text-[#00C6FF]">Annual Camp</p>
        <p className="text-sm font-bold text-white">{title}</p>
      </div>
    </div>
  )
}
