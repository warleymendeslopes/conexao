import BannerAnoNovoHome from "@/layouts/Banners/bannerCourse";
import { getDetailsArea, getDetailsCourse } from "@/lib/api-list-area";
import { notFound } from "next/navigation";
import CourseContent from "../course-content";

export default async function Page({
  params,
}: {
  params: Promise<{ area: string; listingCourse: string, pageCoursePos: string }>
}) {
  const { area, listingCourse, pageCoursePos } = await params
  const detailsCourseData = await getDetailsCourse(pageCoursePos, area)
  const detailsArea = await getDetailsArea(listingCourse);
  if (!detailsCourseData.data || area != "pos-graduacao") {
    notFound()
  }
  return (
    <>
      <BannerAnoNovoHome
        content={{
          imgbanner: detailsArea.image,
          headerTitle: 'Pós-Graduação',
          title: 'ONLINE',
          subTitle: `<b style="font-weight: 700; color:rgb(248, 127, 127);">Em ${detailsCourseData.data.name}</b>`,
          ctaName: "INSCREVA-SE AGORA",
          benefitList:
            [
              { text: detailsCourseData.data.objective ?? ' ' },
            ],
        }}
        animation={true}
        alignment={'start'}
        width={5}
      />
      <CourseContent course={detailsCourseData.data} modality={area} />
    </>
  )
}