import BannerAnoNovoHome from "@/layouts/Banners/bannerCourse";
import { getDetailsArea, getDetailsCourse } from "@/lib/api-list-area"
import { eliasToName } from "@/ultius/sendDb";
import CourseContent from "./course-content";
import { notFound } from "next/navigation";
import CourseListing from "@/layouts/list-course/course-listing";
import BestCourses from "@/layouts/Slider/BestCourses";
import Accordion from "@/component/Accordion/accordion";
import PrimaryButton from "@/component/Buttons/PrimaryButton";
import Cards from "@/component/Cards/PrimaryCards";

export default async function Page({
  params,
}: {
  params: Promise<{ area: string; listingCourse: string }>
}) {
  const { area, listingCourse } = await params
  const detailsCourseData = await getDetailsCourse(listingCourse, area)
    if (!detailsCourseData.data && area != "pos-graduacao") {
      notFound()
    }
  if (detailsCourseData.data && area != "pos-graduacao") {

    return (
      <>
        <BannerAnoNovoHome
          content={{
            imgbanner: detailsCourseData.data.photo,
            title: eliasToName(area),
            subTitle: `<b style="font-weight: 700; color:rgb(248, 127, 127);">${detailsCourseData.data.name}</b>`,
            ctaName: "INSCREVA-SE AGORA",
            benefitList: [{ text: detailsCourseData.data.objective ?? " " }],
          }}
          animation={true}
          alignment={'start'}
          width={5}
        />

        <CourseContent course={detailsCourseData.data} modality={area} />


      </>
    )
  }
  if (area === "pos-graduacao") {
    const detailsData = await getDetailsArea(listingCourse);
     if(!detailsData){
      notFound()
     }
    return (
      <>
        <BannerAnoNovoHome
          content={{
            imgbanner: detailsData.image,
            headerTitle: 'Pós-Graduação',
            title: 'ONLINE',
            subTitle: `Área de ${detailsData.name ?? listingCourse}`,
            ctaName: "INSCREVA-SE AGORA",
            benefitList:
              [
                { text: detailsData?.description ?? ' ' },
              ],
          }}
          animation={true}
          alignment={'start'}
          width={5}
        />
        <CourseListing area={listingCourse} modality={"pos-graduacao"} />
              <div>
                <div className="container mx-auto px-4 sm:px-40 mt-10 mb-10">
                  <div className="content-cards mt-5">
                    <BestCourses/>
                  </div>
                </div>
              </div>
              <div className="container mx-auto px-4 sm:px-40 mt-10 mb-10">
                <div className="content-cards mt-5">
                  <div className="mt-12">
                    <h2 className="text-2xl md:text-3xl font-semibold text-[#A31711] mb-4 text-center sm:text-left">
                      Perguntas Frequentes
                    </h2>
                    <div className="bg-zinc-200/80 rounded-lg overflow-hidden backdrop-blur-sm">
                      <Accordion
                        items={[
                          {
                            id: "faq1",
                            title: "Como funciona o sistema de pagamento?",
                            content:
                              "Aceitamos cartões de crédito, débito, PIX e boleto bancário. O pagamento é processado de forma segura através de nossa plataforma.",
                          },
                          {
                            id: "faq2",
                            title: "Posso cancelar minha assinatura a qualquer momento?",
                            content:
                              "Sim, você pode cancelar sua assinatura a qualquer momento através do painel de controle ou entrando em contato com nosso suporte.",
                          },
                          {
                            id: "faq3",
                            title: "Há garantia de reembolso?",
                            content: "Oferecemos garantia de reembolso de 30 dias para todos os nossos planos, sem perguntas.",
                          },
                        ]}
                      />
                    </div>
                  </div>
                </div>
              </div>
      </>
    )
  }
  return null
}



