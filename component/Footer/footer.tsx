import Link from "next/link"
import Image from "next/image"
import { Facebook, Instagram, Youtube } from "lucide-react"

export default function FooterGlobal() {
  return (
    <section className="fontPoppins bg-[#a31711] py-8 flex items-center justify-center">
      <div className="container mx-auto px-4">
        <h2 className="mb-3 text-[20px] text-white text-start">
          Siga nossa faculdade:
        </h2>
        <div className="flex flex-col gap-6 text-white lg:flex-row lg:justify-between xl:max-w-[900px]">
          <Link
            id="facebook"
            href="https://m.facebook.com/faculdadeconexao/"
            className="flex items-center gap-3"
          >
            <div className="flex w-14 items-center justify-center rounded-full bg-white p-2">
              <Facebook fill="white" className="text-black" />
            </div>
            <h3 className="hover-effect">Nosso Facebook ✔︎</h3>
          </Link>

          <Link
            id="instagram"
            href="https://www.instagram.com/faculdadeconexao/"
            className="flex items-center gap-3"
          >
            <div className="flex w-14 items-center justify-center rounded-full bg-white p-2">
              <Instagram className="text-black" />
            </div>
            <h3 className="hover-effect">Nosso Instagram ✔︎</h3>
          </Link>

          <Link
            id="youtube"
            href="https://m.youtube.com/@faculdadeconexao"
            className="flex items-center gap-3"
          >
            <div className="flex w-14 items-center justify-center rounded-full bg-white p-2">
              <Youtube className="text-black" />
            </div>
            <h3 className="hover-effect lg:hidden">Nos acompanhe no Youtube ✔︎</h3>
            <h3 className="hover-effect hidden lg:block">Canal no Youtube ✔︎</h3>
          </Link>
        </div>

        <div className="mt-10" id="apps-section">
          <h2 className="mb-3 text-lg font-semibold text-white text-start">
            Baixe nosso App:
          </h2>
          <div className="flex flex-col sm:flex-row sm:items-start sm:gap-6 lg:gap-10">
            <Link
              id="googleplay"
              href="https://play.google.com/store/apps/details?id=com.lyratec.prominasapp"
              className="mb-4 sm:mb-0"
            >
              <Image
                src="/icons/google-play.svg"
                alt="Ícone do Google Play"
                width={182}
                height={55}
              />
            </Link>
            <Link
              id="applestore"
              href="https://apps.apple.com/br/app/app-prominas/id1523832772"
            >
              <Image
                src="/icons/app-store.svg"
                alt="Ícone da Apple Store"
                width={182}
                height={55}
              />
            </Link>
          </div>
        </div>

        {/* ✅ Imagem posicionada no final do conteúdo */}
        <div className="mt-10 lg:-mt-48  flex justify-center lg:justify-end">
          <Image
            src="/qrcod-mec.png"
            width={210}
            height={150}
            alt="Selo da Faculdade Única no EMEC"
            id="imagemEmec"
          />
        </div>
      </div>
    </section>
  )
}
