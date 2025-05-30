export default function OfferPos() {
    return (
        <div className="bg-white w-full rounded-lg shadow-md p-1 relative mb-10 mt-60">
            <div className="flex justify-center font-bold text-[0.8rem]  w-full rounded-t-lg  absolute top-[-17px]">
                <span className="rounded-sm bg-[#06ACF5] text-center p-2">MATRÍCULA ZERO  | CONCLUSÃO EM 4 MESES</span>
            </div>
            <div className="py-1 px-2 mt-6">
                
                <div className="max-w-6xl mx-auto flex flex-wrap justify-center gap-4">
                    <div className="bg-[#A31711] text-white rounded-2xl flex-1 grow p-3">
                        <div className="">
                            <div>
                                <h2 className="text-4xl font-bold leading-none">1 PÓS</h2>
                                <p className="text-lg">por apenas</p>
                            </div>
                            <div className="text-left">
                                <div className="text-sm">12x de</div>
                                <div className="text-xl font-bold">
                                    R$ 39,<span className="text-xl align-top">90</span>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div className="bg-[#A31711] text-white rounded-2xl flex-1 grow p-3">
                        <div className="">
                            <div>
                                <h2 className="text-4xl font-bold leading-none">2 PÓS</h2>
                                <p className="text-lg">por apenas</p>
                            </div>
                            <div className="text-left">
                                <div className="text-sm">12x de</div>
                                <div className="text-xl font-bold">
                                    R$ 34,<span className="text-xl align-top">99</span>
                                    <span className="text-[10px]">cada</span>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div className="bg-[#A31711] text-white rounded-2xl flex-1 grow p-3">
                        <div className="flex flex-row sm:flex-col justify-between">
                            <div>
                                <h2 className="text-5xl sm:text-4xl font-bold leading-none">3 PÓS</h2>
                                <p className="text-xl sm:text-lg">por apenas</p>
                            </div>
                            <div className="text-left relative">
                                <div className="text-lg sm:text-sm">12x de</div>
                                <div className="text-5xl sm:text-xl font-bold">
                                    R$ 29,<span className="text-xl align-top">90</span>
                                    <span className="text-[10px] absolute sm:relative right-0 bottom-[11px] sm:bottom-[0px]">cada</span>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}