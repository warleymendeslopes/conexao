"use client"

import Image from "next/image"
import { AppleSliderProps, defaultCards } from "./config"
export default function AppleSlider({ cards, showSlider = true }: AppleSliderProps) {
  if (!showSlider) {
    return null
  }
  const sliderCards = cards || defaultCards
  const duplicatedCards = [...sliderCards, ...sliderCards, ...sliderCards]

  return (
    <div className="w-full overflow-hidden py-8">
      <div className="relative mb-4 overflow-hidden">
        <div className="flex animate-slide-left gap-4">
          {duplicatedCards.map((card, index) => (
            <div
              key={`top-${index}`}
              className={`flex-shrink-0 w-80 h-48 rounded-2xl ${card.bgColor} flex items-center justify-center relative overflow-hidden`}
            >
              {card.type === "image" ? (
                <Image src={card.src || "/placeholder.svg"} alt={card.alt || ""} fill className="object-cover" />
              ) : (
                <div className="text-center px-6">
                  <h3 className="text-gray-600 text-lg font-medium mb-2">{card.title}</h3>
                  <h2 className="text-red-600 text-2xl font-bold tracking-wide">{card.subtitle}</h2>
                </div>
              )}
            </div>
          ))}
        </div>
      </div>

      <div className="relative overflow-hidden">
        <div className="flex animate-slide-right gap-4">
          {[...duplicatedCards].reverse().map((card, index) => (
            <div
              key={`bottom-${index}`}
              className={`flex-shrink-0 w-80 h-48 rounded-2xl ${card.bgColor} flex items-center justify-center relative overflow-hidden`}
            >
              {card.type === "image" ? (
                <Image src={card.src || "/placeholder.svg"} alt={card.alt || ""} fill className="object-cover" />
              ) : (
                <div className="text-center px-6">
                  <h3 className="text-gray-600 text-lg font-medium mb-2">{card.title}</h3>
                  <h2 className="text-red-600 text-2xl font-bold tracking-wide">{card.subtitle}</h2>
                </div>
              )}
            </div>
          ))}
        </div>
      </div>
    </div>
  )
}
