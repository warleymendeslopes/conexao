"use client"

import { useState } from "react"
import { Course } from "@/lib/interfaces/interface_detalhe_course"

export default function ModulosAprendizagem({ course }: { course: Course }) {
  const [openModule, setOpenModule] = useState<number | null>(null)
  const [visibleCount, setVisibleCount] = useState(5)

  const toggleModule = (index: number) => {
    setOpenModule(openModule === index ? null : index)
  }

  const handleSeeMore = () => {
    setVisibleCount((prev) => prev + 3) 
  }


  return (
    <div className="text-white p-6 max-w-4xl mx-auto">
      <div className="space-y-4">
        {course.disciplines?.slice(0, visibleCount).map((disciplina, index) => (
          <div key={index} className="border border-[#a31711] rounded-md overflow-hidden">
            <div
              className="flex items-center cursor-pointer transition-colors"
              onClick={() => toggleModule(index)}
            >
              <div className="border-r border-[#a31711] p-4 min-w-[120px] text-center">
                <span className="font-medium text-black">Módulo {index + 1}</span>
              </div>

              <div className="flex-1 p-4 flex justify-between items-center">
                <div className="text-black">
                  <p className="font-semibold">{disciplina.name} - {disciplina.workload}</p>
                  
                </div>

                <div className={`transition-transform duration-200 ${openModule === index ? "rotate-180" : ""}`}>
                  <svg width="20" height="20" viewBox="0 0 24 24" fill="none" className="text-black">
                    <path
                      d="M6 9l6 6 6-6"
                      stroke="currentColor"
                      strokeWidth="2"
                      strokeLinecap="round"
                      strokeLinejoin="round"
                    />
                  </svg>
                </div>
              </div>
            </div>

            {openModule === index && (
              <div className="border-t border-[#a31711]">
                <div className="p-4 ml-[120px] text-black">
                  <p dangerouslySetInnerHTML={{
                            __html: disciplina.description,
                          }}></p>
                </div>
              </div>
            )}
          </div>
        ))}

        {visibleCount < (course.disciplines?.length || 0) && (
          <div className="text-center pt-4">
            <button
              onClick={handleSeeMore}
              className="bg-[#a31711] text-white px-6 py-2 rounded hover:cursor-pointer transition"
            >
              Ver mais
            </button>
          </div>
        )}
      </div>
    </div>
  )
}
