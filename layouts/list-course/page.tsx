'use client';
import { useEffect, useState } from "react";
import useSWR from 'swr';
import { useDebouce } from "@/hooks/useDebounce";
import Button from "../../component/ui/button/Button";
import Link from "next/link";
import HubSpotFormPosGraduacao from "@/component/HubSpot/FormHubSot";

const fetcher = (url: string) =>
    fetch(url).then((res) => res.json().then((data) => data));

const perPage = 12;

export default function ListCourses({ modality }: { modality: string }) {

    const [currentPage, setCurrentPage] = useState(1);
    const debouceValue = useDebouce('', 400);
    const [dataCourse, setDataCourse] = useState<any>([]);
    const [selectedDiscipline, setSelectedDiscipline] = useState<string | null>(null);
    const [isModalOpen, setIsModalOpen] = useState(false);

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
    const { data } = useSWR(url, fetcher, {
        revalidateOnFocus: false,
        revalidateOnReconnect: false,
        revalidateIfStale: false,
    });

    useEffect(() => {
        if (data?.results?.length > 0) {
            setDataCourse((prev: any) => prev.concat(...data.results));
        }
    }, [data]);

    const onPageChange = (page: number) => {
        if (data?.results?.length > 0) setCurrentPage(page);
    };

    return (
        <>
            
            {isModalOpen && (
                <div className="fixed inset-0 bg-transparent backdrop-blur-sm bg-opacity-60 flex items-center justify-center z-50">
                    <div className="bg-black rounded-lg w-full max-w-[500px] p-6 relative">


                        <HubSpotFormPosGraduacao
                            classForm={"form-page-course-conexao"}
                            curso={"disciplina-isolada"}
                            cursoModalidade={"disciplina-isolada"}
                            onFormSubmit={() => setIsModalOpen(false)}
                            formId={"151d36f1-f588-42cd-aa35-848f21d1a10d"}
                        />
                    </div>
                </div>
            )}

            <section className="bg-[#f3f3f3]">
                <div className="container mx-auto px-4 sm:px-40 py-8">
                    <div className="title-block text-[#3a3a3a] text-3xl font-bold text-center">
                        <h1>Escolha seu curso e comece sua jornada</h1>
                    </div>

                    <div className="content-cards mt-5">
                        {!dataCourse.length ? (
                            <>Carregando...</>
                        ) : (
                            <div className="grid grid-cols-2 sm:grid-cols-4 gap-0 sm:gap-4">
                                {dataCourse.map((a: any, index: number) => {
                                    if (modality === 'disciplina-isolada') {
                                        return (
                                            <div
                                                key={index}
                                                className="p-1 sm:p-5"
                                                onClick={() => {
                                                    setSelectedDiscipline(a.name);
                                                    setIsModalOpen(true);
                                                }}
                                            >
                                                <div className="w-full h-28 sm:h-32 flex flex-col items-center justify-center bg-white rounded-xl border border-gray-300 cursor-pointer transition-all duration-200 hover:shadow-lg p-4">
                                                    <div className="text-[1rem] sm:text-[1.1rem] text-center text-black font-semibold">
                                                        {a.name}
                                                    </div>
                                                </div>

                                            </div>
                                        );
                                    } else {
                                        return (
                                            <Link
                                                href={`${modality}/${a.alias}`}
                                                key={index}
                                                className="p-1 sm:p-5"
                                            >
                                                <div
                                                    className="h-[280px] sm:h-[330px] rounded-xl cursor-pointer relative"
                                                    style={{
                                                        backgroundPosition: 'center center',
                                                        backgroundSize: 'cover',
                                                        backgroundRepeat: 'no-repeat',
                                                        backgroundImage: `linear-gradient(178deg,rgba(87, 199, 133, 0) 0%, rgba(0, 0, 0, 0.52) 100%),url('${a.photo_miniature}')`,
                                                    }}
                                                >
                                                    <div className="text-[1.3rem] name-course text-center text-white font-bold absolute bottom-2 w-full flex justify-center">
                                                        {a.name}
                                                    </div>
                                                </div>
                                            </Link>
                                        );
                                    }
                                })}
                            </div>
                        )}

                        <div className="row justify-content-center row-list-courses-cta">
                            <div className="col-lg-4 text-center">
                                <Button onClick={() => onPageChange(currentPage + 1)} className="mt-5">
                                    Ver mais cursos
                                </Button>
                            </div>
                        </div>
                    </div>
                </div>
            </section>
        </>
    );
}
