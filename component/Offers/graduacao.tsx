export default function OfferGraduacao() {
    return (
        <div className=" w-full rounded-lg relative  mt-50">
            <div className=" from-purple-600 to-purple-700 rounded-lg p-8 md:p-12 relative overflow-hidden">

                <div className="flex flex-col md:flex-row items-center justify-between gap-8">
                    <div className="flex-1 text-center md:text-left">
                        <h1 className="tracking-[-6px] fontKrona text-6xl lg:text-8xl font-extrabold items-center justify-center leading-[1]">
                            O FIM <br />
                            DO EAD
                        </h1>
                        <div className="mt-3">
                            <span className="bg-yellow-400 text-black px-6 py-3 rounded-lg font-bold text-lg inline-block">
                                GRADUAÇÃO EAD
                            </span>
                        </div>
                    </div>


                    <div className="flex-1 text-center md:text-right">
                            <div className="bg-yellow-400 text-black px-4 py-2 rounded-lg font-bold text-sm inline-block mb-4">
                                Comece a estudar por
                            </div>
                       
                        <div className="fontKrona text-white">
                            <span className="text-5xl md:text-4xl font-bold">R$ 99,90</span>
                        </div>

                        <div className="text-white mb-1">
                            <span className="fontKrona text-3xl md:text-4xl font-bold">+50%</span>
                            <br />
                            <span className="fontKrona text-2xl md:text-3xl">de Bolsa</span>
                        </div>

                        <div>
                            <span className="bg-yellow-400 text-black px-4 py-2 rounded-lg font-bold text-sm inline-block">
                                ÚLTIMAS TURMAS EAD
                            </span>
                        </div>
                    </div>
                </div>

                {/* Elementos decorativos de fundo */}
                <div className="absolute inset-0 opacity-10">
                    <div className="absolute top-10 left-10 w-20 h-20 bg-white rounded-full"></div>
                    <div className="absolute bottom-10 right-20 w-16 h-16 bg-white rounded-full"></div>
                    <div className="absolute top-1/2 left-1/4 w-12 h-12 bg-white rounded-full"></div>
                </div>
            </div>
        </div>
    )
}