// "use client";
// import Link from "next/link";
// import { useEffect, useState } from "react";
// import { Bars3Icon, XMarkIcon } from "@heroicons/react/24/outline";
// import React from "react";
// import { getAreaURL, SearchCourse } from "@/lib/api-list-area";
// import { SearchCourseType } from "@/lib/interfaces/searchCourse";
// import Image from "next/image";

// const menuItems = [
//     { label: "Graduação", href: "/graduacao" },
//     { label: "Segunda-Graduação", href: "/segunda-graduacao" },
//     { label: "Pós-Graduação", href: "/pos-graduacao" },
//     { label: "Disciplina Isolada", href: "/disciplina-isolada" },
//     // { label: "Extensão", href: "/extensao" },
//     // { label: "Aperfeiçoamento", href: "/aperfeicoamento" },
// ];

// export default function HeaderPage() {
//     const [area, setArea] = useState<any>(null);
//     const [isOpen, setIsOpen] = useState(false);
//     const [scrolled, setScrolled] = useState(false);
//     const [query, setQuery] = useState('');
//     const [isCourseSearch, setCourseSearch] = useState<boolean>(false)
//     const [courses, setCourses] = useState<SearchCourseType[]>([])

//     useEffect(() => {
//         async function fetchData() {
//             const { data: area }: { data: unknown } = await getAreaURL();
//             setArea(area);
//         }
//         fetchData();
//     }, []);


//     useEffect(() => {
//         const onScroll = () => {
//             setScrolled(window.scrollY > 10);
//         };
//         window.addEventListener("scroll", onScroll);
//         return () => window.removeEventListener("scroll", onScroll);
//     }, []);



//     async function getCourses() {
//         // Obtém o pathname da URL e extrai a modalidade
//         const path = window.location.pathname.split('/').filter(Boolean);
//         const modalidade = path[0] || 'pos-graduacao';



//         console.log(modalidade)

//         const response = await SearchCourse(query, modalidade);

//         // Remove cursos com nomes repetidos
//         const uniqueCourses = response.data.filter(
//             (course: SearchCourseType, index: number, self: SearchCourseType[]) =>
//                 index === self.findIndex((c) => c.name === course.name)
//         );

//         setCourses(uniqueCourses);
//         console.log(uniqueCourses);
//     }


//     useEffect(() => {
//         console.log(query);
//         if (query.length > 3) {
//             setCourseSearch(true);
//             getCourses();
//         } else {
//             setCourseSearch(false);
//         }
//     }, [query]);



//     return (
//         <header className="fontTitle text-white">
//             <div className="bg-black/80">
//                 <nav className="hidden md:block container mx-auto px-4 py-5">
//                     <ul className="flex justify-around">
//                         {menuItems.map((item, idx) => (
//                             <li key={idx}>
//                                 <Link
//                                     href={item.href}
//                                     className="text-base transition transform hover:text-gray-400"
//                                 >
//                                     {item.label}
//                                 </Link>
//                             </li>
//                         ))}
//                     </ul>
//                 </nav>
//             </div>
//             <div className="bg-white/10 text-black">
//                 <nav
//                     className={`hidden md:flex fixed left-0  w-full z-50 transition-all duration-300 ease-in-out ${scrolled
//                         ? "bg-white backdrop-blur-md py-2 top-[0px]"
//                         : "bg-white py-4  top-[6.8%]"
//                         }`}
//                 >
//                     <div className="hidden md:flex container mx-auto px-40 items-center justify-between">
//                         <div className="flex-shrink-0">
//                             <Link href="/">
//                                 <Image
//                                     src="/conexao.svg"
//                                     alt="Logo faculdade conexão"
//                                     className="h-8 w-auto"
//                                     width={71}
//                                     height={22}
//                                 />
//                             </Link>
//                         </div>
//                         <div className="flex-1 mx-6 relative">
//                             <input
//                                 type="text"
//                                 placeholder="Pesquisar curso"
//                                 className="w-4/5 rounded-md bg-white/10 border border-gray-600 px-4 py-2 text-sm placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-blue-500"
//                                 value={query}
//                                 onChange={(e) => setQuery(e.target.value)}
//                             />
//                             {isCourseSearch && (
//                                 <div className="absolute w-[560px] h-[300px] bg-white p-2 rounded-md overflow-y-auto">
//                                     {courses.length > 0 ? (
//                                         <>
//                                             {courses.map((course: SearchCourseType) => (
//                                                 <ul key={course.alias}>
//                                                     <li className="p-1">
//                                                         <div className="cursor-pointer">
//                                                             <p>{course.name}</p>
//                                                         </div>
//                                                     </li>
//                                                 </ul>
//                                             ))}
//                                         </>
//                                     ) : (
//                                         'carregando...'
//                                     )}
//                                 </div>
//                             )}
//                         </div>
//                         <div>
//                             <select className="bg-white/10 border border-gray-600 rounded-md px-3 py-2 text-sm focus:outline-none focus:ring-2 focus:ring-blue-500">
//                                 <option>Nossas Áreas</option>
//                                 {Array.isArray(area) && area.map((item: any, idx: number) => (
//                                     <option key={idx}>{item.areaName}</option>
//                                 ))}
//                             </select>
//                         </div>
//                         <div>
//                             <button className="ml-4 border border-white rounded-md px-4 py-2 text-sm hover:bg-white hover:text-black transition">
//                                 Já sou aluno
//                             </button>
//                         </div>
//                         <div className="md:hidden ml-4">
//                             <button onClick={() => setIsOpen(true)}>
//                                 <Bars3Icon className="h-8 w-8" />
//                             </button>
//                         </div>
//                     </div>
//                 </nav>
//             </div>
//             <div className="flex md:hidden items-center px-4 py-4 bg-black/90">
//                 <button onClick={() => setIsOpen(true)}>
//                     <Bars3Icon className="h-8 w-8" />
//                 </button>
//             </div>
//             <div
//                 className={`fixed top-0 left-0 h-full w-64 bg-black text-white transform ${isOpen ? "translate-x-0" : "-translate-x-full"
//                     } transition-transform duration-300 z-50`}
//             >
//                 <div className="flex justify-between items-center px-4 py-4 border-b border-gray-600">
//                     <h2 className="text-lg font-semibold">Menu</h2>
//                     <button onClick={() => setIsOpen(false)}>
//                         <XMarkIcon className="h-8 w-8" />
//                     </button>
//                 </div>
//                 <ul className="flex flex-col mt-6 space-y-4 px-4">
//                     {menuItems.map((item, idx) => (
//                         <li key={idx}>
//                             <Link
//                                 href={item.href}
//                                 className="block text-sm hover:text-gray-400"
//                                 onClick={() => setIsOpen(false)}
//                             >
//                                 {item.label}
//                             </Link>
//                         </li>
//                     ))}
//                 </ul>
//                 <div className="mt-10 px-4 space-y-4">
//                     <button className="w-full text-left text-sm hover:text-gray-400">
//                         Nossas Áreas
//                     </button>
//                     <button className="w-full border border-white rounded-md px-4 py-2 text-sm hover:bg-white hover:text-black transition">
//                         Já sou aluno
//                     </button>
//                 </div>
//             </div>
//             {isOpen && (
//                 <div
//                     className="fixed inset-0 bg-black/50 z-40"
//                     onClick={() => setIsOpen(false)}
//                 />
//             )}
//         </header>
//     );
// }

"use client"
import Link from "next/link"
import { useEffect, useState } from "react"
import { Bars3Icon, XMarkIcon } from "@heroicons/react/24/outline"
import { getAreaURL, SearchCourse } from "@/lib/api-list-area"
import type { SearchCourseType } from "@/lib/interfaces/searchCourse"
import Image from "next/image"
import { usePathname } from "next/navigation"

const menuItems = [
  { label: "Graduação", href: "/graduacao" },
  { label: "Segunda-Graduação", href: "/segunda-graduacao" },
  { label: "Pós-Graduação", href: "/pos-graduacao" },
  { label: "Disciplina Isolada", href: "/disciplina-isolada" },
  // { label: "Extensão", href: "/extensao" },
  // { label: "Aperfeiçoamento", href: "/aperfeicoamento" },
]

export default function HeaderPage() {
  const [area, setArea] = useState<any>(null)
  const [isOpen, setIsOpen] = useState(false)
  const [scrolled, setScrolled] = useState(false)
  const [query, setQuery] = useState("")
  const [isCourseSearch, setCourseSearch] = useState<boolean>(false)
  const [courses, setCourses] = useState<SearchCourseType[]>([])

  const pathname = usePathname()

  useEffect(() => {
    async function fetchData() {
      const { data: area }: { data: unknown } = await getAreaURL()
      setArea(area)
    }
    fetchData()
  }, [])

  useEffect(() => {
    const onScroll = () => {
      setScrolled(window.scrollY > 10)
    }
    window.addEventListener("scroll", onScroll)
    return () => window.removeEventListener("scroll", onScroll)
  }, [])

  async function getCourses() {
    // Obtém o pathname da URL e extrai a modalidade
    const path = window.location.pathname.split("/").filter(Boolean)
    const modalidade = path[0] || "pos-graduacao"

    console.log(modalidade)

    const response = await SearchCourse(query, modalidade)

    // Remove cursos com nomes repetidos
    const uniqueCourses = response.data.filter(
      (course: SearchCourseType, index: number, self: SearchCourseType[]) =>
        index === self.findIndex((c) => c.name === course.name),
    )

    setCourses(uniqueCourses)
    console.log(uniqueCourses)
  }

  useEffect(() => {
    console.log(query)
    if (query.length > 3) {
      setCourseSearch(true)
      getCourses()
    } else {
      setCourseSearch(false)
    }
  }, [query])

  return (
    <header className="fontTitle text-white">
      <div className="bg-black/80">
        <nav className="hidden md:block container mx-auto px-4 py-5">
          <ul className="flex justify-around">
            {menuItems.map((item, idx) => (
              <li key={idx}>
                <Link
                  href={item.href}
                  className={`text-base transition transform hover:text-gray-400 ${
                    pathname === item.href ? "font-semibold border-b-2 border-yellow-200 pb-1" : ""
                  }`}
                >
                  {item.label}
                </Link>
              </li>
            ))}
          </ul>
        </nav>
      </div>
      <div className="bg-white/10 text-black">
        <nav
          className={`hidden md:flex fixed left-0  w-full z-50 transition-all duration-300 ease-in-out ${
            scrolled ? "bg-white backdrop-blur-md py-2 top-[0px]" : "bg-white py-4  top-[6.8%]"
          }`}
        >
          <div className="hidden md:flex container mx-auto px-40 items-center justify-between">
            <div className="flex-shrink-0">
              <Link href="/">
                <Image src="/conexao.svg" alt="Logo faculdade conexão" className="h-8 w-auto" width={71} height={22} />
              </Link>
            </div>
            <div className="flex-1 mx-6 relative">
              <input
                type="text"
                placeholder="Pesquisar curso"
                className="w-4/5 rounded-md bg-white/10 border border-gray-600 px-4 py-2 text-sm placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-blue-500"
                value={query}
                onChange={(e) => setQuery(e.target.value)}
              />
              {isCourseSearch && (
                <div className="absolute w-[560px] h-[300px] bg-white p-2 rounded-md overflow-y-auto">
                  {courses.length > 0 ? (
                    <>
                      {courses.map((course: SearchCourseType) => (
                        <ul key={course.alias}>
                          <li className="p-1">
                            <div className="cursor-pointer">
                              <p>{course.name}</p>
                            </div>
                          </li>
                        </ul>
                      ))}
                    </>
                  ) : (
                    "carregando..."
                  )}
                </div>
              )}
            </div>
            <div>
              <select className="bg-white/10 border border-gray-600 rounded-md px-3 py-2 text-sm focus:outline-none focus:ring-2 focus:ring-blue-500">
                <option>Nossas Áreas</option>
                {Array.isArray(area) &&
                  area.map((item: any, idx: number) => <option key={idx}>{item.areaName}</option>)}
              </select>
            </div>
            <div>
              <button className="ml-4 border border-white rounded-md px-4 py-2 text-sm hover:bg-white hover:text-black transition">
                Já sou aluno
              </button>
            </div>
            <div className="md:hidden ml-4">
              <button onClick={() => setIsOpen(true)}>
                <Bars3Icon className="h-8 w-8" />
              </button>
            </div>
          </div>
        </nav>
      </div>
      <div className="flex md:hidden items-center px-4 py-4 bg-black/90">
        <button onClick={() => setIsOpen(true)}>
          <Bars3Icon className="h-8 w-8" />
        </button>
      </div>
      <div
        className={`fixed top-0 left-0 h-full w-64 bg-black text-white transform ${
          isOpen ? "translate-x-0" : "-translate-x-full"
        } transition-transform duration-300 z-50`}
      >
        <div className="flex justify-between items-center px-4 py-4 border-b border-gray-600">
          <h2 className="text-lg font-semibold">Menu</h2>
          <button onClick={() => setIsOpen(false)}>
            <XMarkIcon className="h-8 w-8" />
          </button>
        </div>
        <ul className="flex flex-col mt-6 space-y-4 px-4">
          {menuItems.map((item, idx) => (
            <li key={idx}>
              <Link
                href={item.href}
                className={`block text-sm hover:text-gray-400 ${
                  pathname === item.href ? "text-yellow-400 font-semibold bg-gray-800 px-2 py-1 rounded" : ""
                }`}
                onClick={() => setIsOpen(false)}
              >
                {item.label}
              </Link>
            </li>
          ))}
        </ul>
        <div className="mt-10 px-4 space-y-4">
          <button className="w-full text-left text-sm hover:text-gray-400">Nossas Áreas</button>
          <button className="w-full border border-white rounded-md px-4 py-2 text-sm hover:bg-white hover:text-black transition">
            Já sou aluno
          </button>
        </div>
      </div>
      {isOpen && <div className="fixed inset-0 bg-black/50 z-40" onClick={() => setIsOpen(false)} />}
    </header>
  )
}
