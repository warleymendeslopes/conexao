// components/CourseGridPager.tsx
import Link from "next/link";
import { useState, useMemo, FC, ChangeEvent } from "react";

interface CourseByTag {
    _id: string;
    alias: string;
    name: string;
    workload: number;
}

interface Props {
    course: CourseByTag[];
    modality: string;
}

export const CourseGridPager: FC<Props> = ({ course, modality }) => {
    const ITEMS_PER_PAGE = 24;
    const [page, setPage] = useState(0);
    const [search, setSearch] = useState("");

    // filtra os cursos conforme o input de busca
    const filteredCourses = useMemo(() => {
        const term = search.trim().toLowerCase();
        if (!term) return course;
        return course.filter(c =>
            c.name.toLowerCase().includes(term) ||
            c.alias.toLowerCase().includes(term)
        );
    }, [search, course]);

    // recalcula total de páginas com base nos cursos filtrados
    const totalPages = Math.ceil(filteredCourses.length / ITEMS_PER_PAGE);

    // resetar página quando a busca mudar
    useMemo(() => {
        setPage(0);
    }, [search]);

    // slice para a página atual
    const start = page * ITEMS_PER_PAGE;
    const currentItems = filteredCourses.slice(start, start + ITEMS_PER_PAGE);

    const handleSearch = (e: ChangeEvent<HTMLInputElement>) => {
        setSearch(e.target.value);
    };

    return (
        <div className="relative mt-10">
            {/* Input de busca */}
            <div className="mb-4">
                <input
                    type="text"
                    placeholder="Buscar cursos..."
                    value={search}
                    onChange={handleSearch}
                    className="w-full p-2 border border-gray-300 rounded focus:outline-none focus:ring-2 focus:ring-green-400"
                />
            </div>

            {/* Botões de navegação */}
            {totalPages > 1 && (
                <>
                    <button
                        onClick={() => setPage(p => Math.max(0, p - 1))}
                        disabled={page === 0}
                        className="absolute left-0 sm:left-[-5%] top-1/1 sm:top-1/2 -translate-y-1/2 z-10 p-2 bg-[#61f179] rounded-lg shadow-md disabled:opacity-50 w-[40px] h-[40px]"
                    >
                        ‹
                    </button>
                    <button
                        onClick={() => setPage(p => Math.min(totalPages - 1, p + 1))}
                        disabled={page === totalPages - 1}
                        className="absolute right-0 sm:right-[-5%] top-1/1 sm:top-1/2 -translate-y-1/2 z-10 p-2 bg-[#61f179] rounded-lg shadow-md disabled:opacity-50 w-[40px] h-[40px]"
                    >
                        ›
                    </button>
                </>
            )}

            {/* Exibe mensagem se não encontrar resultados */}
            {search.trim() && filteredCourses.length === 0 ? (
                <div className="text-center mt-10 text-gray-700 flex items-center justify-center">
                    <div className=" w-full sm:w-1/2 text-center flex flex-col items-center justify-center">
                        <svg className="w-[30%]" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 731.836 490.096" role="img" ><g transform="translate(-781.668 -1539.464)"><path d="M1013.7,371.9V574.584H505.9A101.4,101.4,0,0,1,498.853,371.9q3.524-.123,7.051,0Z" transform="translate(487.327 1448.739)" fill="#f2f2f2" /><path d="M1034.991,576.753a7.8,7.8,0,0,1-7.8,7.8H505.675a106.8,106.8,0,0,1,0-213.6H1027.2a7.8,7.8,0,1,1,0,15.591H505.675a91.208,91.208,0,0,0,0,182.415H1027.2A7.8,7.8,0,0,1,1034.991,576.753Z" transform="translate(478.512 1445.01)" fill="#61f179" /><path d="M960.817,383.359H415.13a1.559,1.559,0,0,1-.029-3.118H960.817a1.559,1.559,0,0,1,0,3.118Z" transform="translate(540.218 1484.053)" fill="#ccc" /><path d="M960.817,390.551H415.13a1.559,1.559,0,1,1-.029-3.118H960.817a1.559,1.559,0,1,1,0,3.118Z" transform="translate(540.218 1514.28)" fill="#ccc" /><path d="M960.817,397.742H415.13a1.559,1.559,0,0,1-.029-3.118H960.817a1.559,1.559,0,0,1,0,3.118Z" transform="translate(540.218 1544.506)" fill="#ccc" /><path d="M960.817,404.934H415.13a1.559,1.559,0,1,1-.029-3.118H960.817a1.559,1.559,0,0,1,0,3.118Z" transform="translate(540.218 1574.733)" fill="#ccc" /><path d="M995.3,330.859V533.542h-507.8a101.4,101.4,0,0,1-7.051-202.684q3.524-.123,7.051,0Z" transform="translate(410.005 1276.242)" fill="#f2f2f2" /><path d="M1016.594,535.712a7.8,7.8,0,0,1-7.8,7.8H487.278a106.8,106.8,0,1,1,0-213.6H1008.8a7.8,7.8,0,1,1,0,15.591H487.278a91.208,91.208,0,0,0,0,182.415H1008.8a7.8,7.8,0,0,1,7.8,7.8Z" transform="translate(401.189 1272.513)" fill="#61f179" /><path d="M942.42,342.318H396.733a1.559,1.559,0,1,1-.029-3.118H942.42a1.559,1.559,0,1,1,0,3.118Z" transform="translate(462.887 1311.555)" fill="#ccc" /><path d="M942.42,349.509H396.733a1.559,1.559,0,1,1-.029-3.118H942.42a1.559,1.559,0,1,1,0,3.118Z" transform="translate(462.887 1341.782)" fill="#ccc" /><path d="M942.42,356.7H396.733a1.559,1.559,0,1,1-.029-3.118H942.42a1.559,1.559,0,1,1,0,3.118Z" transform="translate(462.887 1372.009)" fill="#ccc" /><path d="M942.42,363.893H396.733a1.559,1.559,0,1,1-.029-3.118H942.42a1.559,1.559,0,1,1,0,3.118Z" transform="translate(462.887 1402.235)" fill="#ccc" /><path d="M727.778,317.831H496.42a14.293,14.293,0,0,0-6.331,1.473l-58.394,29.233a10.641,10.641,0,0,0,0,19.587l58.393,29.233a14.3,14.3,0,0,0,6.332,1.473H727.778a12.143,12.143,0,0,0,12.814-11.266V329.1A12.143,12.143,0,0,0,727.778,317.831Z" transform="translate(589.22 1221.654)" fill="#090814" /><path d="M533.416,329.1v58.465A12.143,12.143,0,0,1,520.6,398.828H474.509v-81H520.6A12.143,12.143,0,0,1,533.416,329.1Z" transform="translate(796.404 1221.656)" fill="#61f179" /></g></svg>
                        <p className="mt-4"> Não encontrou o curso que procura? Fale com a gente! Nosso time está pronto para te ajudar a encontrar a melhor opção para você.</p>
                    </div>

                </div>
            ) : (
                /* Grid de cursos */
                <div className="grid grid-cols-1 sm:grid-cols-4 gap-4 sm:gap-4 mt-10">
                    {currentItems.map(c => (
                        <Link
                            key={c._id}
                            href={`/${modality}/${c.alias}`}
                            className="block bg-white p-5 sm:p-2 shadow-md h-full"
                            style={{ textDecoration: "none" }}
                        >
                            <span className="text-sm font-medium">
                                {c.name} — {c.workload}H
                            </span>
                            <p className="mt-3 text-xs text-gray-500">
                                Clique e saiba mais
                            </p>
                        </Link>
                    ))}
                   
                    {/* placeholders para manter grid 6x4 */}
                    {Array.from(
                        { length: ITEMS_PER_PAGE - currentItems.length },
                        (_, i) => <div key={`empty-${i}`} />
                    )}
                </div>
            )}

            {/* Indicador de página */}
            {totalPages > 1 && filteredCourses.length > 0 && (
                <div className="text-center font-bold text-ms text-gray-500 mt-4">
                    Página {page + 1} de {totalPages}
                </div>
            )}
        </div>
    );
};
