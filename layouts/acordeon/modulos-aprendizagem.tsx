"use client"

import { useState } from "react"

export default function ModulosAprendizagem() {
  const [openModule, setOpenModule] = useState<number | null>(null)

  const modulos = [
    {
      titulo: "Noções Básicas para Secretaria Escolar",
      horas: "80 horas",
      descricao: "Este módulo aborda os conceitos fundamentais para o trabalho na secretaria escolar.",
    },
    {
      titulo: "Gestão Democrática na Escola",
      horas: "80 horas",
      descricao: "Estudo dos princípios e práticas de gestão democrática no ambiente escolar.",
    },
    {
      titulo: "Gestão Democrática no Contexto da Secretaria Escolar",
      horas: "80 horas",
      descricao: "Aplicação dos conceitos de gestão democrática nas atividades da secretaria escolar.",
    },
    {
      titulo: "Tópicos Especiais em EJA do Campo e Inclusão",
      horas: "80 horas",
      descricao: "Abordagem especializada para Educação de Jovens e Adultos em áreas rurais e inclusão.",
    },
    {
      titulo: "Arquivo, Informática e Tópicos Especiais em Secretaria Escolar",
      horas: "80 horas",
      descricao: "Gestão de arquivos, ferramentas digitais e temas avançados para secretaria escolar.",
    },
    {
      titulo: "Práticas Pedagógicas de Administração Escolar",
      horas: "80 horas",
      descricao: "Metodologias e práticas administrativas com enfoque pedagógico.",
    },
  ]

  const toggleModule = (index: number) => {
    if (openModule === index) {
      setOpenModule(null)
    } else {
      setOpenModule(index)
    }
  }

  return (
    <div className="text-white p-6 max-w-4xl mx-auto">
      <div className="space-y-4">
        {modulos.map((modulo, index) => (
          <div key={index} className="border border-[#a31711] rounded-md overflow-hidden">
            <div
              className="flex items-center cursor-pointer  transition-colors"
              onClick={() => toggleModule(index)}
            >
              {/* Número do Módulo */}
              <div className=" border-r border-[#a31711] p-4 min-w-[120px] text-center">
                <span className="font-medium text-black">Módulo {index + 1}</span>
              </div>

              {/* Título do Módulo */}
              <div className="flex-1 p-4 flex justify-between items-center">
                <div className="text-black">
                  <span>{modulo.titulo}- </span>
                  <span className="font-bold">{modulo.horas}</span>
                </div>

                {/* Ícone de Chevron feito com CSS */}
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

            {/* Conteúdo expandido */}
            {openModule === index && (
              <div className=" border-t border-[#a31711]">
                <div className="p-4 ml-[120px] text-black">
                  <p>{modulo.descricao}</p>
                </div>
              </div>
            )}
          </div>
        ))}
      </div>
    </div>
  )
}
