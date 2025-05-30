import PrimaryButton from "@/component/Buttons/PrimaryButton";
import OfferDisciplinaIsolada from "@/component/Offers/disciplinasIsoladas";
import OfferGraduacao from "@/component/Offers/graduacao";
import OfferPos from "@/component/Offers/pos";
import OfferSegundaGraduacao from "@/component/Offers/segundagraduacao";
import { DataBanner } from "@/lib/interfaces/banners";

export default function BannerPos(
    { AlertDescriptions, imageBackgroud, area, width }: DataBanner) {
    return (
        <>
           <div
  className="bannerDinamyc h-[130vh] sm:h-[90vh] relative"
  style={{
    backgroundImage: `radial-gradient(
    circle, rgba(0, 0, 0, 0) 0%, 
    rgba(255, 0, 0, 0.23) 100%), 
    url('/banners/${imageBackgroud}'
    )`,
  }}
>

                <div className="container mx-auto px-4 ">
                    <div className={`w-full lg:w-${width || "130"} flex justify-center`}>
                        <div className="flex flex-col w-full md:static absolute bottom-10">
                            {area === "graduacao" && <OfferGraduacao />}
                            {area === "segunda-graduacao" && <OfferSegundaGraduacao />}
                            {area === "disciplina-isolada" && <OfferDisciplinaIsolada />}
                            {area === "pos-graduacao" && <OfferPos />}
                            <div
                                className={`w-full sm:w-100 ${area === "pos-graduacao" ? "md:flex md:justify-center" : ""
                                    } flex justify-center`}
                            >
                                <PrimaryButton />
                            </div>
                            {AlertDescriptions?.isActive === true && (
                                <div className="flex justify-center mb-20 mt-5 ">
                                    <p className="text-center text-sm w-100">{AlertDescriptions.descriptioin}</p>
                                </div>
                            )}
                        </div>
                    </div>
                </div>
            </div>
        </>
    );
}
