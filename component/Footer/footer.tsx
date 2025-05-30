import Link from "next/link"
import Image from "next/image"
import { Facebook, Instagram, Youtube } from "lucide-react"

export default function FooterGlobal(){
    return(
        <>
        <section className={`fontPoppins relative bg-[#a31711]`}>
            <h2 className="mb-3 text-start text-[20px]">Siga nossa faculdade:</h2>
        <div className="mt-2 space-y-3 lg:flex lg:items-center lg:justify-between lg:text-xl xl:max-w-[900px]">
          <Link
            id="facebook"
            href={'https://m.facebook.com/faculdadeconexao/'}
            className="flex items-center gap-3"
          >
            <div className="flex w-14 items-center justify-center rounded-full bg-white p-2">
              <Facebook fill="white" className="text-black" />
            </div>
            <h3 className="hover-effect">Nosso Facebook ✔︎</h3>
          </Link>
          <Link
            id="instagram"
            href={'https://www.instagram.com/faculdadeconexao/'}
            className="flex items-center gap-3"
          >
            <div className="flex w-14 items-center justify-center rounded-full bg-white p-2">
              <Instagram className="text-black" />
            </div>
            <h3 className="hover-effect">Nosso Instragram ✔︎</h3>
          </Link>
          <Link
            id="youtube"
            href={'https://m.youtube.com/@faculdadeconexao'}
            className="flex items-center gap-3"
          >
            <div className="flex w-14 items-center justify-center rounded-full bg-white p-2">
              <Youtube className="text-black" />
            </div>
            <h3 className="hover-effect lg:hidden">
              Nos acompanhe no Youtube ✔︎
            </h3>
            <h3 className="hover-effect max-[1023px]:hidden">
              Canal no Youtube ✔︎
            </h3>
          </Link>
        </div>
        <div className="mt-4 lg:mb-8" id="apps-section">
          <h2 className="mb-3 text-start text-lg font-semibold lg:text-[20px]">
            Baixe nosso App:
          </h2>
          <div className="flex justify-between lg:justify-normal lg:gap-10">
            <Link
              id="googleplay"
              href={
                'https://play.google.com/store/apps/details?id=com.lyratec.prominasapp'
              }
            >
              <Image
                src="/icon/google-play.svg"
                alt="Icone do google play"
                width={182}
                height={55}
              />
            </Link>
            <Link
              id="applestore"
              href={'https://apps.apple.com/br/app/app-prominas/id1523832772'}
            >
              <Image
                src="/icon/app-store.svg"
                alt="Icone do google play"
                width={182}
                height={55}
              />
            </Link>
          </div>
        </div>
        <div className="flex">
          <Link id="termo-de-privacidade" href=''>
            <div className="text-xl">Termos de Privacidade</div>
          </Link>
        </div>
        
        <Image
          src="/qrcod-mec.png"
          width={210}
          height={150}
          className="absolute right-24 top-12 max-xl:hidden"
          alt="Selo da Faculdade Única no EMEC"
          id="imagemEmec"
        />
      </section>
        </>
    )
}