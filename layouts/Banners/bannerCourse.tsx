"use client"
import "./animationbanner.css"
import type React from "react"

import { useState, useEffect } from "react"

interface BannerOffer {
  isActived: boolean
  possition: number
  marginTop: number
  marginBotton: number
  offer: React.ReactNode
}

interface BannerContent {
  headerTitle?: string
  title: string
  subTitle?: string
  imgbanner?: string
  ctaName?: string
  onButtonClick?: () => void
  modalContent?: React.ReactNode
  offer?: BannerOffer
  benefitList?: Array<{
    text: string
    icon?: string
  }>
}

interface BannerGlobalsSite {
  content: BannerContent
  animation?: boolean
  width?: number
  alignment?: "start" | "center" | "end"
  skeleton?: {
    isActived: boolean
    isLoading?: boolean
  }
}

const BannerAnoNovoHome: React.FC<BannerGlobalsSite> = ({
  content,
  animation = true,
  width = 8,
  alignment = "center",
  skeleton = { isActived: false },
}) => {
  const [isOpen, setIsOpen] = useState(false)
  const [isMobile, setIsMobile] = useState(false)

  const checkIfMobile = () => {
    setIsMobile(window.innerWidth < 768)
  }

  useEffect(() => {
    checkIfMobile()
    window.addEventListener("resize", checkIfMobile)
    return () => {
      window.removeEventListener("resize", checkIfMobile)
    }
  }, [])

  const handleButtonClick = () => {
    if (content.onButtonClick) {
      content.onButtonClick()
    }
    setIsOpen(true)
  }

  const onOpenChange = (open: boolean) => {
    setIsOpen(open)
  }

  // Convert Bootstrap width to Tailwind width classes
  const getWidthClass = (width: number, isMobile: boolean) => {
    // No mobile, sempre usar largura total
    if (isMobile) {
      return "w-full"
    }

    const widthMap: Record<number, string> = {
      1: "w-1/12",
      2: "w-2/12",
      3: "w-3/12",
      4: "w-4/12",
      5: "w-5/12",
      6: "w-6/12",
      7: "w-7/12",
      8: "w-8/12",
      9: "w-9/12",
      10: "w-10/12",
      11: "w-11/12",
      12: "w-full",
    }
    return widthMap[width] || "w-8/12"
  }

  // Convert alignment to Tailwind classes
  const getAlignmentClasses = (alignment: string) => {
    const alignmentMap: Record<string, { justify: string; items: string; text: string }> = {
      start: { justify: "justify-start", items: "items-start", text: "text-left" },
      center: { justify: "justify-center", items: "items-center", text: "text-center" },
      end: { justify: "justify-end", items: "items-end", text: "text-right" },
    }
    return alignmentMap[alignment] || alignmentMap.center
  }

  const alignClasses = getAlignmentClasses(alignment)
  const widthClass = getWidthClass(width, isMobile)

  const sectionStyle = content.imgbanner
    ? {
        backgroundImage: `linear-gradient(${isMobile ? 1 : 90}deg, rgb(0, 0, 0) 2%, rgba(0, 0, 0, 0.784) ${isMobile ? "76%" : "46%"}, rgba(0, 0, 0, 0) ${isMobile ? "117%" : "90%"}), url(${content.imgbanner})`,
        backgroundSize: "cover",
        backgroundPosition: "center",
      }
    : {}

  if (skeleton.isActived && skeleton.isLoading) {
    return (
      <section className="flex items-center min-h-[80vh] lg:h-full bg-cover bg-unica-banner relative">
        <div className="pt-20 z-10 w-full">
          <div className={`flex ${alignClasses.justify} px-4`}>
            <div className={`${widthClass} max-w-full`}>
              <div className={`flex ${alignClasses.items} ${alignClasses.justify} flex-col`}>
                <div className="animate-pulse bg-gray-300 rounded mb-4 h-4 w-48"></div>
                <div className="animate-pulse bg-gray-300 rounded mb-4 h-12 w-3/5"></div>
                <div className="animate-pulse bg-gray-300 rounded mb-2 h-4 w-4/5"></div>
                <div className="animate-pulse bg-gray-300 rounded mb-2 h-4 w-4/5"></div>
                <div className="animate-pulse bg-gray-300 rounded h-4 w-4/5"></div>
              </div>
            </div>
          </div>
        </div>
      </section>
    )
  }

  return (
    <section
      className="imagem-de-fundo flex items-center min-h-[80vh] lg:h-full bg-cover bg-unica-banner relative"
      style={sectionStyle}
    >
      {animation && (
        <div className="bg absolute top-0 left-0 right-0 bottom-0 overflow-hidden">
          {[...Array(75)].map((_, index) => (
            <div key={index} className={`dotWrapper dotWrapper-${index + 1}`}>
              <div className={`dot dot-${index + 1}`}></div>
            </div>
          ))}
        </div>
      )}

      <div className="container mx-auto px-4 w-full">
        <div className={`flex ${alignClasses.justify}`}>
          <div className={`${widthClass} max-w-full`}>
            <div className={`flex ${alignClasses.justify} flex-col`}>
              <div className={`text-xl w-full flex ${alignClasses.justify} text-white`}>
                {content.headerTitle && <span dangerouslySetInnerHTML={{ __html: content.headerTitle }}></span>}
              </div>

              <div
                className={`title-banners-h1 text-4xl md:text-6xl flex ${alignClasses.justify} leading-tight font-bold text-white`}
              >
                <h1 dangerouslySetInnerHTML={{ __html: content.title }}></h1>
              </div>

              {content.offer?.isActived && content.offer?.possition === 1 && (
                <div
                  className={`mt-${content.offer.marginTop} mb-${content.offer.marginBotton} offers flex ${alignClasses.justify} leading-tight`}
                >
                  {content.offer.offer}
                </div>
              )}

              <div className={`sub-title-banners flex ${alignClasses.justify} leading-relaxed text-xl text-white`}>
                {content.subTitle && <span dangerouslySetInnerHTML={{ __html: content.subTitle }}></span>}
              </div>

              {content.offer?.isActived && content.offer?.possition === 2 && (
                <div
                  className={`mt-${content.offer.marginTop} mb-${content.offer.marginBotton} offers flex ${alignClasses.justify} leading-tight`}
                >
                  {content.offer.offer}
                </div>
              )}

              {content.benefitList && (
                <div className={`text-white banner-benefit-list flex ${alignClasses.justify} mt-3 text-left`}>
                  <ul className="space-y-2">
                    {content.benefitList.map((item, index) => (
                      <li className="font-medium flex items-center" key={index}>
                        {item.text}
                      </li>
                    ))}
                  </ul>
                </div>
              )}

              {content.offer?.isActived && content.offer?.possition === 3 && (
                <div
                  className={`mt-${content.offer.marginTop} mb-${content.offer.marginBotton} offers flex ${alignClasses.justify} leading-tight`}
                >
                  {content.offer.offer}
                </div>
              )}

              {!isMobile && content.onButtonClick && (
                <div className={`container-cta-banners mt-5 items-center flex ${alignClasses.justify}`}>
                  <button
                    onClick={handleButtonClick}
                    className={`animate-pulse relative flex items-center ${alignClasses.justify} bg-gradient-to-r from-yellow-500 to-yellow-300 text-black font-bold text-base rounded-full px-5 py-3 shadow-lg overflow-hidden transform transition-transform hover:scale-105 hover:shadow-xl w-full max-w-xs sm:max-w-none sm:w-4/5 lg:w-auto`}
                  >
                    <span className="z-10 text-center">{content.ctaName ?? "CONSULTE CONDIÇÕES"}</span>
                    <div className="absolute right-0 h-full aspect-square bg-yellow-500 rounded-full shadow-inner z-0"></div>
                  </button>
                </div>
              )}

              {content.offer?.isActived && content.offer?.possition === 4 && (
                <div
                  className={`mt-${content.offer.marginTop} mb-${content.offer.marginBotton} offers flex ${alignClasses.justify} leading-tight`}
                >
                  {content.offer.offer}
                </div>
              )}

              {isMobile && content.modalContent && (
                <div className="modalContentWrapper bg-unica-backModal backdrop-blur-md rounded-lg mb-5 p-4">
                  {content.modalContent}
                </div>
              )}
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}

export default BannerAnoNovoHome
