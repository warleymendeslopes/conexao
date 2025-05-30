import BannerAnoNovoHome from "@/layouts/Banners/bannerCourse";
import { getDetailsArea, getDetailsCourse } from "@/lib/api-list-area"
import { eliasToName } from "@/util/sendDb";
import CourseContent from "./course-content";
import { notFound } from "next/navigation";
import CourseListing from "@/layouts/list-course/course-listing";

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

        <CourseListing />
      </>
    )
  }
  return null
}



