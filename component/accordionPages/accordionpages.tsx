'use client'

import { usePathname } from 'next/navigation'
import { useState } from 'react'
import { ChevronDown } from 'lucide-react' 

type FAQItem = {
  question: string
  answer: string
}

const faqMap: Record<string, FAQItem[]> = {
  '/pos-graduacao': [
    { question: 'Qual a melhor Pós-Graduação EaD?', answer: 'A melhor Pós-Graduação EaD é aquela que atende às suas necessidades profissionais, tem certificação reconhecida pelo MEC e oferece flexibilidade de tempo e local.' },
    { question: 'Onde fazer Pós-Graduação EaD?', answer: 'Você pode fazer na Faculdade Conexão, que oferece cursos com certificação válida em todo o Brasil e metodologia 100% online.' },
    { question: 'O que é Pós-Graduação lato-sensu?', answer: 'São cursos voltados para o aperfeiçoamento profissional, como especializações e MBAs, com carga horária mínima de 360 horas.' },
  ],
  '/graduacao': [
    { question: 'O que é Graduação?', answer: 'É o primeiro nível de ensino superior, que pode ser uma licenciatura, bacharelado ou tecnólogo.' },
    { question: 'Como funciona a Graduação EaD?', answer: 'A graduação EaD da Faculdade Conexão funciona com videoaulas, fóruns, provas online e material didático digital.' },
    { question: 'Por que fazer o EaD?', answer: 'Por conta da flexibilidade, economia e autonomia que ele oferece. Ideal para quem trabalha ou tem pouco tempo disponível.' },
    { question: 'Qual curso EaD fazer?', answer: 'Depende do seu objetivo profissional. A Conexão oferece opções nas áreas de educação, gestão, saúde, entre outras.' },
    { question: 'Quem faz EaD pode fazer mestrado?', answer: 'Sim! Desde que o curso seja reconhecido pelo MEC, o diploma vale tanto quanto o presencial.' },
    { question: 'Quem faz faculdade EaD tem formatura?', answer: 'Sim! A cerimônia de colação de grau pode ser presencial ou online, conforme a instituição e o polo.' },
  ],
  '/disciplina-isolada': [
    { question: 'O que é uma disciplina isolada?', answer: 'Disciplina isolada é a possibilidade de cursar apenas uma ou mais disciplinas de um curso superior sem estar formalmente matriculado no curso completo.' },
    { question: 'A disciplina isolada conta como curso superior?', answer: 'Não, mas pode ser usada para complementação curricular ou aproveitamento em outra graduação posterior.' },
    { question: 'É possível aproveitar os créditos depois?', answer: 'Sim! Se o aluno ingressar futuramente em um curso regular, os créditos das disciplinas isoladas podem ser aproveitados.' },
  ],
  '/segunda-graduacao': [
    { question: 'O que é Segunda Graduação?', answer: 'É um novo curso de graduação destinado a indivíduos que já possuem um diploma de graduação.' },
    { question: 'Como aproveitar disciplinas na Segunda Graduação?', answer: 'A instituição avalia as disciplinas já cursadas na graduação anterior para possível aproveitamento, reduzindo o tempo e a carga horária do novo curso.' },
    { question: 'Qual a duração de uma Segunda Graduação?', answer: 'Varia conforme o curso e o aproveitamento de disciplinas, podendo ser concluída em tempo reduzido.' },
    { question: 'Como funciona a Segunda Graduação?', answer: 'O curso é estruturado para profissionais já graduados, com foco em conteúdos específicos da nova área de formação, incluindo estágios e TCC, quando aplicável.' },
    { question: 'Qual Segunda Graduação devo fazer?', answer: 'Depende dos seus objetivos profissionais e da área em que deseja atuar.' },
    { question: 'Como fazer uma Segunda Graduação em menos tempo?', answer: 'Aproveitando disciplinas já cursadas na graduação anterior e optando por instituições que oferecem cursos com carga horária reduzida para graduados.' },
    { question: 'O diploma da Segunda Graduação oferece carga horária completa?', answer: 'Sim, o diploma emitido possui carga horária total de 3.200 horas, conforme exigido para a formação em Bacharelado em Educação Física.' },
    { question: 'Como funciona o TCC (Trabalho de Conclusão de Curso) na Segunda Graduação?', answer: 'O TCC é parte integrante do curso e deve ser elaborado conforme as diretrizes da instituição.' },
    { question: 'O estágio é obrigatório na Segunda Graduação?', answer: 'Sim, o curso inclui Estágios I, II, III e IV, que são obrigatórios para a formação prática do aluno.' },
    { question: 'É possível fazer uma Segunda Graduação em Pedagogia?', answer: 'Sim, a instituição oferece a opção de Segunda Graduação em Pedagogia, entre outros cursos.' },
  ],
}

export default function AccordionFAQ() {
  const pathname = usePathname()
  const [openIndex, setOpenIndex] = useState<number | null>(null)

  const matchedPath =
    Object.keys(faqMap).find((key) => pathname.startsWith(key)) || '/pos-graduacao'

  const faq = faqMap[matchedPath]

  const toggle = (index: number) => {
    setOpenIndex(openIndex === index ? null : index)
  }

  return (
    <div className="w-full mx-auto mt-10 space-y-4">
    
      {faq.map((item, index) => (
        <div key={index} className="border border-gray-300 rounded-lg overflow-hidden shadow-sm">
          <button
            onClick={() => toggle(index)}
            className="flex justify-between items-center w-full px-4 py-3 text-left font-medium text-gray-800 bg-gray-100 hover:bg-gray-200 transition-all duration-200"
          >
            <span>{item.question}</span>
            <ChevronDown
              className={`w-5 h-5 transform transition-transform duration-300 ${
                openIndex === index ? 'rotate-180' : 'rotate-0'
              }`}
            />
          </button>
          <div
            className={`transition-all duration-300 ease-in-out px-4 overflow-hidden text-gray-700 bg-white ${
              openIndex === index ? 'max-h-96 py-3 opacity-100' : 'max-h-0 opacity-0'
            }`}
          >
            {item.answer}
          </div>
        </div>
      ))}
    </div>
  )
}
