'use client';
import { getAreaURL } from "@/lib/api-list-area";
import { areaList } from "@/lib/interfaces/list-area";
import Link from "next/link";
import { useEffect, useState } from "react";


export default function ListAreas() {
    const [area, setArea] = useState<any>(null);
    useEffect(() => {
        async function fetchData() {
            const { data: area }: { data: unknown } = await getAreaURL();
            setArea(area);
        }
        fetchData();
    }, []);

    return (
        <section>
            <div className="container mx-auto px-4 sm:px-40 mt-10 mb-10">
                <h2 className="text-2xl md:text-3xl font-semibold text-[#A31711] mb-4 text-center">
                   Escolha sua área de estudos
                </h2>
                    <div className="content-cards mt-5">
                        {!area ? (
                            <>Carregando...</>
                        ) : (
                            <div className="grid grid-cols-2 sm:grid-cols-4  gap-0 sm:gap-4">
                                {area.map((a: areaList, index: number) => (
                                    <Link
                                    href={`pos-graduacao/${a.areaAlias}`}
                                        key={index}
                                        className="p-1 sm:p5"
                                    >
                                        <div
                                            className="h-[280px] sm:h-[330px] rounded-xl cursor-pointer relative"
                                            onClick={() => {
                                                console.log('clicou no cursos de ', a.areaAlias)
                                            }}
                                            style={{
                                                backgroundImage: `
                    linear-gradient(
                      0deg,
                      rgba(0, 0, 0, 0.17) 0%,
                      rgba(2, 0, 36, 0) 100%
                    ),
                    url('${a.miniature}')
                  `,
                                            }}>

                                            <div className="text-[1.3rem] name-course text-center text-white font-bold absolute bottom-2  w-full flex justify-center">
                                                {a.areaName}
                                            </div>

                                        </div>

                                    </Link>
                                ))}
                            </div>
                        )}
                    </div>
            </div >
        </section >
    )
}