interface SliderCard {
  type: "image" | "text"
  src?: string
  alt?: string
  bgColor: string
  title?: string
  subtitle?: string
}

interface SliderConfig {
  showSlider: boolean
  cards?: SliderCard[]
}

export const SLIDER_CONFIG: Record<string, SliderConfig> = {
  "pos-graduacao": {
    showSlider: false,
  },
  graduacao: {
    showSlider: true,
    cards: [
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
      {
        type: "image",
        src: "/Mask_group_11.webp",
        alt: "Mulher sorrindo",
        bgColor: "bg-gray-800",
      },
      {
        type: "text",
        title: "PROFESSORES",
        subtitle: "Mestres e Doutores",
        bgColor: "bg-gray-200",
      },
      {
        type: "image",
        src: "/Mask_group_10.webp",
        alt: "Mulher sorrindo",
        bgColor: "bg-gray-800",
      },
      {
        type: "text",
        title: "Graduados ganham",
        subtitle: "ATÉ 144% A MAIS",
        bgColor: "bg-gray-200",
      },
      {
        type: "image",
        src: "/conclusao-partir-de-6-mese.webp",
        alt: "Mulher sorrindo",
        bgColor: "bg-gray-800",
      },
    ],
  },
  "segunda-graduacao": {
    showSlider: true,
    cards: [
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
      {
        type: "image",
        src: "/Mask_group_11.webp",
        alt: "Mulher sorrindo",
        bgColor: "bg-gray-800",
      },
      {
        type: "text",
        title: "PROFESSORES",
        subtitle: "Mestres e Doutores",
        bgColor: "bg-gray-200",
      },
      {
        type: "image",
        src: "/Mask_group_10.webp",
        alt: "Mulher sorrindo",
        bgColor: "bg-gray-800",
      },

    ],
  },
  "disciplina-isolada": {
    showSlider: true,
    cards: [
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
      {
        type: "image",
        src: "/Mask_group_11.webp",
        alt: "Mulher sorrindo",
        bgColor: "bg-gray-800",
      },
      {
        type: "text",
        title: "PROFESSORES",
        subtitle: "Mestres e Doutores",
        bgColor: "bg-gray-200",
      },
      {
        type: "image",
        src: "/Mask_group_10.webp",
        alt: "Mulher sorrindo",
        bgColor: "bg-gray-800",
      },

    ],
  },
  extensao: {
    showSlider: true,
    cards: [
      {
        type: "image",
        src: "/placeholder.svg?height=300&width=400",
        alt: "Curso de extensão",
        bgColor: "bg-orange-100",
      },
      {
        type: "text",
        title: "Cursos de",
        subtitle: "EXTENSÃO",
        bgColor: "bg-orange-200",
      },
      {
        type: "image",
        src: "/placeholder.svg?height=300&width=400",
        alt: "Conhecimento especializado",
        bgColor: "bg-orange-300",
      },
      {
        type: "text",
        title: "Conhecimento",
        subtitle: "ESPECIALIZADO",
        bgColor: "bg-orange-200",
      },
    ],
  },
  aperfeicoamento: {
    showSlider: true,
    cards: [
      {
        type: "image",
        src: "/placeholder.svg?height=300&width=400",
        alt: "Aperfeiçoamento profissional",
        bgColor: "bg-teal-100",
      },
      {
        type: "text",
        title: "Cursos de",
        subtitle: "APERFEIÇOAMENTO",
        bgColor: "bg-teal-200",
      },
      {
        type: "image",
        src: "/placeholder.svg?height=300&width=400",
        alt: "Desenvolvimento de habilidades",
        bgColor: "bg-teal-300",
      },
      {
        type: "text",
        title: "Habilidades",
        subtitle: "AVANÇADAS",
        bgColor: "bg-teal-200",
      },
    ],
  },
}
