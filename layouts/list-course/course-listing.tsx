"use client"

import { useState } from "react"

interface Course {
  id: number
  title: string
  price: string
  originalPrice: string
  installments: string
  category: string
}

const courses: Course[] = [
  {
    id: 1,
    title: "A FUNÇÃO DO SECRETÁRIO ESCOLAR NA CONTEMPORANEIDADE",
    price: "69,90",
    originalPrice: "79,90",
    installments: "12x de R$",
    category: "destaque",
  },
  {
    id: 2,
    title: "ADMINISTRAÇÃO E INSPEÇÃO ESCOLAR",
    price: "69,90",
    originalPrice: "79,90",
    installments: "12x de R$",
    category: "lançamento",
  },
  {
    id: 3,
    title: "ADMINISTRAÇÃO E SUPERVISÃO ESCOLAR",
    price: "69,90",
    originalPrice: "79,90",
    installments: "12x de R$",
    category: "destaque",
  },
  {
    id: 4,
    title: "GESTÃO EDUCACIONAL E COORDENAÇÃO PEDAGÓGICA",
    price: "69,90",
    originalPrice: "79,90",
    installments: "12x de R$",
    category: "lançamento",
  },
  {
    id: 5,
    title: "PSICOPEDAGOGIA INSTITUCIONAL E CLÍNICA",
    price: "69,90",
    originalPrice: "79,90",
    installments: "12x de R$",
    category: "destaque",
  },
  {
    id: 6,
    title: "EDUCAÇÃO ESPECIAL E INCLUSIVA",
    price: "69,90",
    originalPrice: "79,90",
    installments: "12x de R$",
    category: "lançamento",
  },
]

const tags = [
  { id: "todos", label: "TODOS" },
  { id: "destaque", label: "DESTAQUE" },
  { id: "lançamento", label: "LANÇAMENTO" },
]

export default function CourseListing() {
  const [searchTerm, setSearchTerm] = useState("")
  const [activeTag, setActiveTag] = useState("todos")

  const filteredCourses = courses.filter((course) => {
    const matchesSearch = course.title.toLowerCase().includes(searchTerm.toLowerCase())
    const matchesTag = activeTag === "todos" || course.category === activeTag
    return matchesSearch && matchesTag
  })

  return (
    <div className=" min-h-screen py-12 px-4">
      <div className="max-w-4xl mx-auto">
        {/* Header */}
        <h1 className="text-2xl md:text-3xl font-bold text-center text-gray-900 mb-8">
          LEVE SUA CARREIRA PARA OUTRO NÍVEL
        </h1>

        {/* Search Bar */}
        <div className="relative mb-8">
          <div className="relative max-w-2xl mx-auto">
            <div className="absolute inset-y-0 left-0 pl-4 flex items-center pointer-events-none">
              <svg className="h-5 w-5 text-red-500" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z"
                />
              </svg>
            </div>
            <input
              type="text"
              placeholder="Pesquise por um curso"
              value={searchTerm}
              onChange={(e) => setSearchTerm(e.target.value)}
              className="w-full pl-12 pr-4 py-4 text-gray-700 bg-white rounded-full border border-gray-200 focus:outline-none focus:ring-2 focus:ring-red-500 focus:border-transparent shadow-sm"
            />
          </div>
        </div>

        {/* Filter Tags */}
        <div className="flex justify-center gap-4 mb-12">
          {tags.map((tag) => (
            <button
              key={tag.id}
              onClick={() => setActiveTag(tag.id)}
              className={`px-6 py-2 rounded-full font-medium transition-colors ${
                activeTag === tag.id
                  ? "bg-red-600 text-white"
                  : "bg-white text-gray-700 border border-gray-300 hover:bg-gray-50"
              }`}
            >
              {tag.label}
            </button>
          ))}
        </div>

        {/* Course Grid */}
        <div className="space-y-6">
          {filteredCourses.length === 0 ? (
            <div className="text-center py-12">
              <p className="text-gray-500 text-lg">Nenhum curso encontrado</p>
            </div>
          ) : (
            filteredCourses.map((course) => (
              <div
                key={course.id}
                className="bg-white rounded-lg shadow-sm border border-gray-200 p-6 hover:shadow-md transition-shadow"
              >
                <div className="flex flex-col md:flex-row md:items-center md:justify-between gap-4">
                  <div className="flex-1">
                    <h2 className="text-xl font-bold text-red-600 mb-3 leading-tight">{course.title}</h2>
                    <div className="flex items-center gap-2">
                      <span className="text-lg font-semibold text-gray-900">
                        {course.installments} {course.price}
                      </span>
                      <span className="text-sm text-gray-500 line-through">12x de R$ {course.originalPrice}</span>
                    </div>
                  </div>
                  <div className="flex-shrink-0">
                    <button className="bg-green-500 hover:bg-green-600 text-white font-semibold px-6 py-3 rounded-md transition-colors">
                      CONHECER CURSO
                    </button>
                  </div>
                </div>
              </div>
            ))
          )}
        </div>
      </div>
    </div>
  )
}
