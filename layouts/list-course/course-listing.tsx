"use client"

import Button from "@/component/ui/button/Button"
import { useDebouce } from "@/hooks/useDebounce"
import { Course } from "@/lib/interfaces/interface_detalhe_course"
import Link from "next/link"
import { ChangeEvent, useEffect, useState } from "react"
import useSWR from "swr"





const tags = [
    { id: "all", label: "TODOS" },
    { id: "destaque", label: "DESTAQUE" },
    { id: "lancamento", label: "LANÇAMENTO" },
]
const fetcher = (url: string) =>
    fetch(url).then((res) => res.json().then((data) => data));

const perPage = 10;
export default function CourseListing({ area, modality }: { area: string, modality: string }) {
    const [activeTag, setActiveTag] = useState("all")

    const [currentPage, setCurrentPage] = useState(1);
    const [query, setQuery] = useState('');
    const debouceValue = useDebouce(query, 400);
    const [listAreaCourse, setListAreaCourse] = useState<any>([]);
    const { data, isLoading } = useSWR(
        `http://uniunica.edu.br/api/area?search=${debouceValue}&page=${currentPage}&perPage=${perPage}&area=${area}&tag=${activeTag}&modality=${modality}`,
        fetcher,
        {
            revalidateOnFocus: false,
            revalidateOnReconnect: false,
            revalidateIfStale: false,
        },
    );

    const onQueryChange = (event: ChangeEvent<HTMLInputElement>) => {
        setQuery(event.target.value);

        setCurrentPage(1);
        setListAreaCourse([]);
    };

    function onTagChange(tag: string) {
        setActiveTag(tag);
        setCurrentPage(1);
        setListAreaCourse([]);
    }
    useEffect(() => {
        if (data?.results?.length > 0)
            setListAreaCourse((prev: any) => prev.concat(...data.results));
    }, [data]);

    const onPageChange = (page: number) => {
        if (data?.results?.length > 0) setCurrentPage(page);
    };
    const paginate = {
        currentPage,
        perPage,
        total: data?.paginate?.total,
    };

    console.log('tags', listAreaCourse)
    return (
        <div className=" min-h-screen py-12 px-4">
            <div className="max-w-4xl mx-auto">
                <h1 className="text-2xl md:text-3xl font-bold text-center text-gray-900 mb-8">
                    LEVE SUA CARREIRA PARA OUTRO NÍVEL
                </h1>
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
                            value={query}
                            onChange={onQueryChange}
                            className="w-full pl-12 pr-4 py-4 text-gray-700 bg-white rounded-full border border-gray-200 focus:outline-none focus:ring-2 focus:ring-red-500 focus:border-transparent shadow-sm"
                        />
                    </div>

                </div>

                <div className="flex justify-center gap-4 mb-12">
                    {tags.map((tag) => (
                        <button
                            key={tag.id}
                            onClick={() => onTagChange(tag.id)}
                            className={`px-6 py-2 rounded-full font-medium transition-colors ${activeTag === tag.id
                                ? "bg-red-600 text-white"
                                : "bg-white text-gray-700 border border-gray-300 hover:bg-gray-50"
                                }`}
                        >
                            {tag.label}
                        </button>
                    ))}
                </div>

                <div className="space-y-6">
                    {listAreaCourse.length === 0 ? (
                        <div className="text-center py-12">
                            <p className="text-gray-500 text-lg">Nenhum curso encontrado</p>
                        </div>
                    ) : (
                        <>
                            {
                                listAreaCourse.map((course: Course, index: string) => (
                                    <div
                                        key={index}
                                        className="bg-white rounded-lg shadow-sm border border-gray-200 p-6 hover:shadow-md transition-shadow"
                                    >

                                        <Link
                                        href={`${area}/${course.alias}`}
                                         className="flex flex-col md:flex-row md:items-center md:justify-between gap-4">
                                            <div className="flex-1">
                                                <h2 className="text-xl font-bold text-red-600 mb-3 leading-tight">{course.name}</h2>
                                                <div className="flex items-center gap-2">
                                                    <span className="text-lg font-semibold text-gray-900">
                                                        <b className="text-xs font-thin">Apartir de</b> 12x de R$ 29,90
                                                    </span>
                                                    <span className="text-sm text-gray-500 line-through">12X de R$ 79,90</span>
                                                </div>
                                            </div>
                                            <div className="flex-shrink-0">
                                                <button className="bg-green-500 hover:bg-green-600 text-white font-semibold px-6 py-3 rounded-md transition-colors">
                                                    CONHECER CURSO
                                                </button>
                                            </div>
                                        </Link>
                                    </div>
                                ))
                            }
                            <div className="w-full flex justify-center">
                                <Button className="text-sm font-bold" onClick={() => { onPageChange(currentPage + 1) }} >
                                    Carregar mais cursos
                                </Button>
                            </div>


                        </>
                    )}
                </div>
            </div>
        </div>
    )
}
