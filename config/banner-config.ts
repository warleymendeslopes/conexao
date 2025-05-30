import { DataBanner } from "@/lib/interfaces/banners"

export const BANNER_CONFIG: Record<string, DataBanner> = {
  "pos-graduacao": {
    subtitle: "PÓS-GRADUAÇÃO",
    title: "ONLINE",
    text: "Libere uma Pós-Graduação GRÁTIS na compra de outra.",
    ctaButton: "LIBERAR PÓS GRÁTIS",
    imageBackgroud: "blackfriday-banner-pos.webp",
    AlertDescriptions: {
      isActive: true,
      descriptioin: "*Você só poderá ser matriculado se tiver Graduação e Colação de Grau!",
    },
    area: "pos-graduacao",
  },
  graduacao: {
    subtitle: "Graduação",
    title: "ONLINE",
    text: "Garanta sua vaga na graduação online e concorra a uma bolsa de até 50% para tornar seu sonho de diploma ainda mais acessível!",
    ctaButton: "INSCREVA-SE AGORA",
    imageBackgroud: "blackfriday-banner-pos.webp",
    area: "graduacao",
    width: "full",
  },
  "segunda-graduacao": {
    subtitle: "Segunda",
    title: "GRADUAÇÃO",
    text: "Aproveite até 50% de bolsa, conclua em tempo recorde, estude onde e quando quiser e destaque-se com uma formação acessível.",
    ctaButton: "INSCREVA-SE AGORA",
    imageBackgroud: "blackfriday-banner-pos.webp",
    area: "segunda-graduacao",
    width: "full",
  },
  "disciplina-isolada": {
    subtitle: "DISCIPLINAS",
    title: "ISOLADAS",
    text: "Conclua seu curso em apenas 32 dias, estude no seu ritmo, tenha seu diploma ao alcance e zere suas dependências em tempo recorde!",
    ctaButton: "INSCREVA-SE AGORA",
    imageBackgroud: "blackfriday-banner-pos.webp",
    area: "disciplina-isolada",
    width: "full",
  },
}

export const AREAS_COMPONENTES = ["pos-graduacao", "extensao", "aperfeicoamento"]