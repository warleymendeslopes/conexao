"use client"

import { useState, useEffect, useRef } from "react"
import { ChevronLeft, ChevronRight } from "lucide-react"

import { getBestCourses } from "@/lib/api-list-area"
import CourseByTag from "@/lib/interfaces/courses"
import MusicCard from "@/component/Cards/CardCourses"


interface MusicSliderProps {
  title?: string
  modality?: string
}

// Função simulada - substitua pela sua função real
// async function getBestCourses(
//   type: string,
//   limit: number,
//   search: string,
//   modality: string,
// ): Promise<{ data: Course[] }> {
//   // Simular delay de API
//   await new Promise((resolve) => setTimeout(resolve, 1000))

//   // Dados simulados - substitua pela sua implementação real
//   const mockData: Course[] = [
//     {
//       id: "1",
//       category: "DAILY MIX",
//       trackCount: 12,
//       title: "Frontend Radio",
//       coverImage: "/images/music-cover.png",
//       coverAlt: "Frontend Radio cover",
//     },
//     {
//       id: "2",
//       category: "ROCK CLASSICS",
//       trackCount: 25,
//       title: "Guitar Heroes",
//       coverImage: "/placeholder.svg?height=224&width=224",
//       coverAlt: "Rock music cover",
//     },
//     {
//       id: "3",
//       category: "CHILL VIBES",
//       trackCount: 18,
//       title: "Lofi Study",
//       coverImage: "/placeholder.svg?height=224&width=224",
//       coverAlt: "Lofi music cover",
//     },
//     {
//       id: "4",
//       category: "WORKOUT",
//       trackCount: 30,
//       title: "High Energy",
//       coverImage: "/placeholder.svg?height=224&width=224",
//       coverAlt: "Workout music cover",
//     },
//     {
//       id: "5",
//       category: "JAZZ CLASSICS",
//       trackCount: 22,
//       title: "Smooth Jazz",
//       coverImage: "/placeholder.svg?height=224&width=224",
//       coverAlt: "Jazz music cover",
//     },
//     {
//       id: "6",
//       category: "ELECTRONIC",
//       trackCount: 35,
//       title: "EDM Hits",
//       coverImage: "/placeholder.svg?height=224&width=224",
//       coverAlt: "Electronic music cover",
//     },
//     {
//       id: "7",
//       category: "POP HITS",
//       trackCount: 40,
//       title: "Top 40",
//       coverImage: "/placeholder.svg?height=224&width=224",
//       coverAlt: "Pop music cover",
//     },
//     {
//       id: "8",
//       category: "INDIE ROCK",
//       trackCount: 28,
//       title: "Alternative",
//       coverImage: "/placeholder.svg?height=224&width=224",
//       coverAlt: "Indie rock cover",
//     },
//   ]

//   return { data: mockData }
// }

export default function MusicSlider({ title = "Recomendado para você", modality = "pos-graduacao" }: MusicSliderProps) {
  const [courses, setCourses] = useState<CourseByTag[]>([])
  const [loading, setLoading] = useState(true)
  const [error, setError] = useState<string | null>(null)
  const [currentIndex, setCurrentIndex] = useState(0)
  const [itemsPerSlide, setItemsPerSlide] = useState(4)
  const [isTransitioning, setIsTransitioning] = useState(true)
  const sliderRef = useRef<HTMLDivElement>(null)

  // Buscar dados dos cursos
  useEffect(() => {
    const fetchCourses = async () => {
      try {
        setLoading(true)
        setError(null)
        const { data: coursesData } = await getBestCourses("destaque-geral", 10, "", modality)
        setCourses(coursesData)
        setCurrentIndex(coursesData.length) // Começar no meio para permitir navegação em ambas direções
      } catch (err) {
        setError("Erro ao carregar cursos")
        console.error("Erro ao buscar cursos:", err)
      } finally {
        setLoading(false)
      }
    }

    fetchCourses()
  }, [modality])

  // Detectar tamanho da tela e ajustar items por slide
  useEffect(() => {
    const handleResize = () => {
      if (window.innerWidth < 768) {
        setItemsPerSlide(1)
      } else {
        setItemsPerSlide(4)
      }
      if (courses.length > 0) {
        setCurrentIndex(courses.length) // Reset para o meio quando mudar tamanho
      }
    }

    handleResize()
    window.addEventListener("resize", handleResize)
    return () => window.removeEventListener("resize", handleResize)
  }, [courses.length])

  // Criar array infinito duplicando os cursos
  const infiniteCourses = courses.length > 0 ? [...courses, ...courses, ...courses] : []

  // Função para navegar para o próximo
  const nextSlide = () => {
    if (!isTransitioning || loading) return
    setCurrentIndex((prev) => prev + 1)
  }

  // Função para navegar para o anterior
  const prevSlide = () => {
    if (!isTransitioning || loading) return
    setCurrentIndex((prev) => prev - 1)
  }

  // Efeito para resetar posição quando necessário (loop infinito)
  useEffect(() => {
    if (courses.length === 0) return

    const handleTransitionEnd = () => {
      // Se chegou ao final da segunda sequência, volta para o início da primeira
      if (currentIndex >= courses.length * 2) {
        setIsTransitioning(false)
        setCurrentIndex(courses.length)
      }
      // Se chegou ao início da primeira sequência, vai para o final da segunda
      else if (currentIndex <= 0) {
        setIsTransitioning(false)
        setCurrentIndex(courses.length)
      }
    }

    if (sliderRef.current) {
      sliderRef.current.addEventListener("transitionend", handleTransitionEnd)
      return () => {
        if (sliderRef.current) {
          sliderRef.current.removeEventListener("transitionend", handleTransitionEnd)
        }
      }
    }
  }, [currentIndex, courses.length])

  // Reativar transição após reset
  useEffect(() => {
    if (!isTransitioning) {
      const timer = setTimeout(() => {
        setIsTransitioning(true)
      }, 50)
      return () => clearTimeout(timer)
    }
  }, [isTransitioning])

  // Calcular posição atual para indicadores
  const getIndicatorPosition = () => {
    if (courses.length === 0) return 0
    return Math.floor((currentIndex % courses.length) / itemsPerSlide)
  }

  const totalIndicators = courses.length > 0 ? Math.ceil(courses.length / itemsPerSlide) : 0
  // Loading state
  if (loading) {
    return (
      <div className="w-full">
        <div className="flex items-center justify-between mb-6">
          <h2 className="text-white text-2xl font-bold">{title}</h2>
        </div>
        <div className="flex gap-6">
          {Array.from({ length: itemsPerSlide }).map((_, index) => (
            <div key={index} className="flex-shrink-0" style={{ width: `${100 / itemsPerSlide}%` }}>
              <div className="bg-zinc-800 rounded-lg p-4 w-64 animate-pulse">
                <div className="h-4 bg-zinc-700 rounded mb-2"></div>
                <div className="h-3 bg-zinc-700 rounded mb-4 w-20"></div>
                <div className="h-5 bg-zinc-700 rounded mb-4 w-32"></div>
                <div className="h-56 bg-zinc-700 rounded"></div>
              </div>
            </div>
          ))}
        </div>
      </div>
    )
  }

  // Error state
  if (error) {
    return (
      <div className="w-full">
        <div className="flex items-center justify-between mb-6">
          <h2 className="text-white text-2xl font-bold">{title}</h2>
        </div>
        <div className="bg-red-900/20 border border-red-500 rounded-lg p-6 text-center">
          <p className="text-red-400 mb-4">{error}</p>
          <button
            onClick={() => window.location.reload()}
            className="px-4 py-2 bg-red-600 text-white rounded hover:bg-red-700 transition-colors"
          >
            Tentar novamente
          </button>
        </div>
      </div>
    )
  }

  // Empty state
  if (courses.length === 0) {
    return (
      <div className="w-full">
        <div className="flex items-center justify-between mb-6">
          <h2 className="text-white text-2xl font-bold">{title}</h2>
        </div>
        <div className="bg-zinc-800 rounded-lg p-6 text-center">
          <p className="text-zinc-400">Buscando curso ...</p>
        </div>
      </div>
    )
  }
  return (
    <div className="w-full">
      {/* Header com título e navegação */}
      <div className="flex items-center justify-between mb-6">
        <h2 className="text-2xl md:text-3xl font-semibold text-[#A31711] mb-4 text-center sm:text-left">
          {title}
        </h2>

        <div className="flex items-center gap-2">
          <button
            onClick={prevSlide}
            disabled={loading}
            className="p-2 rounded-full bg-zinc-800 text-white hover:bg-zinc-700 disabled:opacity-50 disabled:cursor-not-allowed transition-colors"
          >
            <ChevronLeft size={20} />
          </button>
          <button
            onClick={nextSlide}
            disabled={loading}
            className="p-2 rounded-full bg-zinc-800 text-white hover:bg-zinc-700 disabled:opacity-50 disabled:cursor-not-allowed transition-colors"
          >
            <ChevronRight size={20} />
          </button>
        </div>
      </div>

      {/* Container do slider */}
      <div className="relative overflow-hidden">
        <div
          ref={sliderRef}
          className={`flex ${isTransitioning ? "transition-transform duration-300 ease-in-out" : ""}`}
          style={{
            transform: `translateX(-${(currentIndex * 100) / itemsPerSlide}%)`,
          }}
        >
          {infiniteCourses.map((course, index) => (
            <div
              key={`${course._id}-${index}`}
              className="flex-shrink-0 px-3"
              style={{ width: `${100 / itemsPerSlide}%` }}
            >
              <MusicCard
                trackCount={course.area}
                title={course.name}
                coverImage={course.photo_miniature}
              />
            </div>
          ))}
        </div>
      </div>

      {totalIndicators > 1 && (
        <div className="flex justify-center gap-2 mt-6">
          {Array.from({ length: totalIndicators }).map((_, index) => (
            <button
              key={index}
              onClick={() => {
                const targetIndex = courses.length + index * itemsPerSlide
                setCurrentIndex(targetIndex)
              }}
              className={`w-2 h-2 rounded-full transition-colors ${getIndicatorPosition() === index ? "bg-white" : "bg-zinc-600"
                }`}
            />
          ))}
        </div>
      )}
    </div>
  )
}
