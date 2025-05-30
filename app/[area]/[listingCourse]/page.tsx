import BannerAnoNovoHome from "@/layouts/Banners/bannerCourse";
import { getDetailsCourse } from "@/lib/api-list-area"
import { eliasToName } from "@/ultius/sendDb";
import CourseContent from "./course-content";

export default async function Page({
  params,
}: {
  params: Promise<{ area: string; listingCourse: string }>
}) {
  const { area, listingCourse } = await params
  const detailsCourseData = await getDetailsCourse(listingCourse, area)
  console.log(detailsCourseData)
  if (detailsCourseData.data) {
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
  return null
}



