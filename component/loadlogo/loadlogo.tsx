import Image from 'next/image'
import './load.css'

export default function LoadLogo() {
  return (
    <div className="flex items-center justify-center">
      <Image
        src="/loading.gif"
        width={300}
        height={300}
        alt="Icone da conexão em loagind"
      />
    </div>
  )
}
