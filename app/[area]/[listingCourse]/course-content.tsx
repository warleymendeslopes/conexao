"use client"

import HubSpotFormPosGraduacao from "@/component/HubSpot/FormHubSot"
import ModulosAprendizagem from "@/layouts/acordeon/modulos-aprendizagem"
import { Course } from "@/lib/interfaces/interface_detalhe_course"
import Image from "next/image"
import { useEffect, useState } from "react"

export default function CourseContent({ modality, course }: { modality: string, course: Course }) {
    const [timeLeft, setTimeLeft] = useState({
        days: 0,
        hours: 24,
        minutes: 19,
        seconds: 15,
    })

    useEffect(() => {
        const timer = setInterval(() => {
            setTimeLeft((prev) => {
                if (prev.seconds > 0) {
                    return { ...prev, seconds: prev.seconds - 1 }
                } else if (prev.minutes > 0) {
                    return { ...prev, minutes: prev.minutes - 1, seconds: 59 }
                } else if (prev.hours > 0) {
                    return { ...prev, hours: prev.hours - 1, minutes: 59, seconds: 59 }
                } else if (prev.days > 0) {
                    return { ...prev, days: prev.days - 1, hours: 23, minutes: 59, seconds: 59 }
                }
                return prev
            })
        }, 1000)

        return () => clearInterval(timer)
    }, [])

    return (
        <div className="min-h-screen text-[#a31711]">
            <div className="container mx-auto px-4 py-8">
                <div className="grid lg:grid-cols-3 gap-8">
                    {/* Fixed Sidebar - Aparece primeiro no mobile */}
                    <div className="lg:col-span-1 lg:order-2">
                        <div className="sticky top-30">
                            <div className="bg-gray-800 border border-gray-700 rounded-lg overflow-hidden">
                                {/* Timer */}
                                <div className="bg-[#a31711] p-4 text-center">
                                    <div className="flex items-center justify-center gap-2 text-sm font-medium">
                                        <svg className="w-10 h-10" fill="white" stroke="currentColor" viewBox="0 0 24 24">
                                            <path
                                                strokeLinecap="round"
                                                strokeLinejoin="round"
                                                strokeWidth={2}
                                                d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z"
                                            />
                                        </svg>
                                        <span className="text-white text-2xl font-bold">
                                            Acaba em: {timeLeft.days}d {timeLeft.hours}h {timeLeft.minutes}m {timeLeft.seconds}s
                                        </span>
                                    </div>
                                </div>

                                <div className="p-6 text-center">
                                    {modality === 'graduacao' && (
                                        <HubSpotFormPosGraduacao
                                        classForm={"form-page-course-conexao"}
                                        curso={"graduacao"}
                                        cursoModalidade={"graduacao"}
                                        onFormSubmit={function (): void {
                                            throw new Error("Function not implemented.")

                                        } } 
                                        formId={"caa403a8-2b98-48aa-bf70-438761e89243"} />
                                    )}
                                    {modality === 'segunda-graduacao' && (
                                        <HubSpotFormPosGraduacao
                                        classForm={"form-page-course-conexao"}
                                        curso={"segunda-graduacao"}
                                        cursoModalidade={"segunda-graduacao"}
                                        onFormSubmit={function (): void {
                                            throw new Error("Function not implemented.")

                                        } } 
                                        formId={"35903b3b-be2b-46e5-9da4-dc466159a2a0"} />
                                    )}
                                    {modality === 'pos-graduacao' && (
                                        <HubSpotFormPosGraduacao
                                        classForm={"form-page-course-conexao"}
                                        curso={"pos-graduacao"}
                                        cursoModalidade={"pos-graduacao"}
                                        onFormSubmit={function (): void {
                                            throw new Error("Function not implemented.")

                                        } } 
                                        formId={"07ed6974-53d8-49b1-8d6c-1f30efdb3c06"} />
                                    )}
                                    {modality === 'disciplina-isolada' && (
                                        <HubSpotFormPosGraduacao
                                        classForm={"form-page-course-conexao"}
                                        curso={"disciplina-isolada"}
                                        cursoModalidade={"disciplina-isolada"}
                                        onFormSubmit={function (): void {
                                            throw new Error("Function not implemented.")

                                        } } 
                                        formId={"151d36f1-f588-42cd-aa35-848f21d1a10d"} />
                                    )}
                                   

                                    {/* Social Proof */}
                                    <div className="text-center">
                                        <div className="flex items-center justify-center gap-2 text-green-400 font-semibold mb-1">
                                            <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                                <path
                                                    strokeLinecap="round"
                                                    strokeLinejoin="round"
                                                    strokeWidth={2}
                                                    d="M12 4.354a4 4 0 110 5.292M15 21H3v-1a6 6 0 0112 0v1zm0 0h6v-1a6 6 0 00-9-5.197m13.5-9a2.5 2.5 0 11-5 0 2.5 2.5 0 015 0z"
                                                />
                                            </svg>
                                            <span className="text-2xl">54</span>
                                        </div>
                                        <p className="text-xs text-gray-400 uppercase tracking-wide">
                                            PESSOAS JÁ COMPRARAM
                                            <br />
                                            ESSE CURSO HOJE
                                        </p>
                                    </div>

                                    {/* Terms */}
                                    <p className="text-xs text-gray-500 mt-4">*Consulte condições</p>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div className="lg:col-span-2 lg:order-1 space-y-12">
                        <section>
                            <h1 className="text-3xl font-bold text-center mb-12">Programa de Curso</h1>
                            <div className="grid md:grid-cols-2 gap-8 mb-12">
                                <div className="card-course-program-pos">
                                    <div className="p-6 content-program-pos">
                                        <div className="flex items-center gap-3 mb-4">
                                            <div className="w-12 h-12 bg-white rounded-lg flex items-center justify-center">
                                                <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                                    <path
                                                        strokeLinecap="round"
                                                        strokeLinejoin="round"
                                                        strokeWidth={2}
                                                        d="M12 6.253v13m0-13C10.832 5.477 9.246 5 7.5 5S4.168 5.477 3 6.253v13C4.168 18.477 5.754 18 7.5 18s3.332.477 4.5 1.253m0-13C13.168 5.477 14.754 5 16.5 5c1.747 0 3.332.477 4.5 1.253v13C19.832 18.477 18.247 18 16.5 18c-1.746 0-3.332.477-4.5 1.253"
                                                    />
                                                </svg>
                                            </div>
                                            <h3 className="text-xl font-semibold">Pré-requisito</h3>
                                        </div>
                                        <p className="text-black">
                                            {modality === "graduacao" && (
                                                <>
                                                    Indicado para as pessoas que possuem curso de Graduação em grau de Licenciatura (em qualquer outra área)
                                                </>
                                            )}
                                            {modality === "pos-graduacao" && (
                                                <>
                                                    Graduação em qualquer área para nível de conhecimento. Em casos de atuação na área e registro no conselho profissional, a formação deverá ser específica.
                                                </>
                                            )}
                                            {modality === "segunda-graduacao" && (
                                                <>
                                                    O curso é oferecido exclusivamente para quem já possui Licenciatura em Educação Física
                                                </>
                                            )}
                                        </p>
                                    </div>
                                </div>
                                <div className="card-course-program-pos">
                                    <div className="p-6 content-program-pos">
                                        <div className="flex items-center gap-3 mb-4">
                                            <div className="w-12 h-12 bg-white rounded-lg flex items-center justify-center">
                                                <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                                    <path
                                                        strokeLinecap="round"
                                                        strokeLinejoin="round"
                                                        strokeWidth={2}
                                                        d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z"
                                                    />
                                                </svg>
                                            </div>
                                            <h3 className="text-xl font-semibold">
                                                {modality === "graduacao" && (
                                                    <>
                                                        {course.name === 'SISTEMAS DE INFORMAÇÃO' ? (
                                                            <h2>8 Semestres</h2>
                                                        ) : (
                                                            <h2>{course.amountPeriodicity} Semestres</h2>
                                                        )}

                                                    </>
                                                )}
                                                {modality === "pos-graduacao" && (
                                                    <>
                                                        {course.workload} horas
                                                    </>
                                                )}
                                                {modality === "segunda-graduacao" && (
                                                    <>
                                                        CURSO DE CURTA DURAÇÃO
                                                    </>
                                                )}

                                            </h3>
                                        </div>
                                        <p className="text-black">
                                            De carga horária que contempla vídeoaulas inovadoras e materiais didáticos exclusivos.
                                        </p>
                                    </div>
                                </div>
                            </div>
                        </section>

                        {/* Módulos Section */}
                        <section>
                            <h3 className="text-3xl font-bold text-center mb-8">Módulos de Aprendizagem:</h3>
                            <ModulosAprendizagem  course={course} />
                        </section>
                        
                        {/* graph section */}

                        <section className="flex items-center justify-center flex-col">
                            {modality === "graduacao" && (
                                <>
                                <h3 className="text-3xl font-semibold text-center mb-8">Profissionais graduados ganham salários 144% maiores</h3>
                                <Image
                                width={500}
                                height={500}
                                alt="graph-graduation"
                                src='/graph-graduation.webp'
                                />
                                </>
                            )}
                            {modality === 'segunda-graduacao' && (
                                <>
                                <h3 className="text-3xl font-semibold text-center mb-8">
                                    Faça uma transição de carreira ou saia na frente em concursos e designações
                                </h3>
                                 <Image
                                width={900}
                                height={900}
                                alt="graph-graduation"
                                src='/graph-segunda-graduacao.webp'
                                />
                                </>
                            )}
                            {modality === 'pos-graduacao' && (
                              <>
                                <h3 className="text-3xl font-semibold text-center mb-8">COM UMA PÓS, VOCÊ SAI NA FRENTE EM CONCURSOS PÚBLICOS</h3>
                                 <Image
                                width={700}
                                height={700}
                                alt="graph-graduation"
                                src='/graph-red.png'
                                />
                              </>
                            )}
                        </section>                      

                    </div>
                </div>
            </div>
        </div>
    )
}
