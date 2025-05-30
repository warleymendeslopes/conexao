  export interface SliderCard {
  type: "image" | "text"
  src?: string
  alt?: string
  bgColor: string
  title?: string
  subtitle?: string
}

export interface AppleSliderProps {
  cards?: SliderCard[]
  showSlider?: boolean
}
  export const defaultCards: SliderCard[] = [
    {
      type: "image",
      src: "/Mask_group_9.webp",
      alt: "Homem segurando certificado",
      bgColor: "bg-amber-100",
    },
    {
      type: "text",
      title: "Certificados",
      subtitle: "PROFISSIONAIS",
      bgColor: "bg-gray-200",
    },
    {
      type: "image",
      src: "/certificado-digital.webp",
      alt: "Mulher sorrindo",
      bgColor: "bg-gray-800",
    },
    {
      type: "text",
      title: "Intercâmbios",
      subtitle: "INTERNACIONAIS",
      bgColor: "bg-gray-200",
    },
  ]
