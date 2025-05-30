'use client';
import { useEffect, useState } from "react";
import useSWR from 'swr'
import { useDebouce } from "@/hooks/useDebounce";
import Button from "../../component/ui/button/Button";
import Link from "next/link";
const fetcher = (url: string) =>
    fetch(url).then((res) => res.json().then((data) => data))

const perPage = 12
export default function ListCourses({ modality }: { modality: string }) {
    const [currentPage, setCurrentPage] = useState(1)
    const debouceValue = useDebouce('', 400)
    const [dataCourse, setDataCourse] = useState<any>([])
    const baseUrl = 'http://uniunica.edu.br/api/area';
    const params = new URLSearchParams({
        search: debouceValue,
        page: currentPage.toString(),
        perPage: perPage.toString(),
        modality,
        searchother: 'true',
    });

    if (modality === 'graduacao') {
        params.append('tag', 'ead');
    }

    const url = `${baseUrl}?${params.toString()}`;
    const { data, isLoading } = useSWR(
        url,
        fetcher,
        {
            revalidateOnFocus: false,
            revalidateOnReconnect: false,
            revalidateIfStale: false,
        },
    )
    useEffect(() => {
        if (data?.results?.length > 0)
            setDataCourse((prev: any) => prev.concat(...data.results))
    }, [data])


    const onPageChange = (page: number) => {
        if (data?.results?.length > 0) setCurrentPage(page)
    }
    return (
        <section className="bg-[#f3f3f3]">
            <div className="container mx-auto px-4 sm:px-40 py-8">
                <div className="title-block text-[#3a3a3a] text-3xl font-bold text-center">
                    <h1>Escolha seu curso e comece sua jornada</h1>
                </div>
                <div className="content-cards mt-5">
                    {!dataCourse ? (
                        <>Carregando...</>
                    ) : (
                        <>
                            <div className="grid grid-cols-2 sm:grid-cols-4  gap-0 sm:gap-4">
                                {dataCourse.map((a: any, index: number) => (
                                    <Link
                                        href={`${modality}/${a.alias}`}
                                        key={index}
                                        className="p-1 sm:p5"
                                    >
                                        <div
                                            key={index}
                                            className="h-[280px] sm:h-[330px] rounded-xl cursor-pointer relative"
                                            style={{
                                                backgroundPosition: 'center center',
                                                backgroundSize: 'cover',
                                                backgroundRepeat: 'no-repeat',
                                                backgroundImage: `linear-gradient(178deg,rgba(87, 199, 133, 0) 0%, rgba(0, 0, 0, 0.52) 100%),url('${a.photo_miniature}')
                                    `,
                                            }}>

                                            <div className="text-[1.3rem] name-course text-center text-white font-bold absolute bottom-2  w-full flex justify-center">
                                                {a.name}
                                            </div>
                                        </div>
                                    </Link>
                                ))}
                            </div>
                            <div
                                className={` row justify-content-center row-list-courses-cta`}
                            >
                                <div className="col-lg-4" style={{ textAlign: 'center' }}>

                                    <Button
                                        onClick={() => onPageChange(currentPage + 1)}
                                        className="mt-5">Ver mais cursos</Button>
                                </div>
                            </div>
                        </>

                    )}
                </div>







            </div>
        </section >
    )
}

