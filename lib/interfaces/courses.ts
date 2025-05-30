interface PriceDetails {
    installment: number;
    value: number;
    total?: number;
    method: string;
}

interface Background {
    deg: number;
    rgba1: string;

}

interface CourseByTag {
    _id: string;
    name: string;
    certifier: string;
    subcategory: string;
    type: string;
    workload: number;
    tags: string[];
    score: number | null;
    photo_miniature: string;
    photo: string;
    amountPeriodicity: string | null;
    periodicity: string | null;
    siteTitle: string;
    description: string;
    objective: string;
    originTags: string[];
    _categoryName: string;
    campaignImage: string | null;
    alias: string;
    area: string;
    bestPrice: PriceDetails;
    originalPrice: PriceDetails;
    bestValueParcelMethod: Omit<PriceDetails, 'total'>;
    bestPaymentMethodOriginal: PriceDetails;
    bestValueParcelMethodOriginal: Omit<PriceDetails, 'total'>;
    bestParcelCreditCard: Omit<PriceDetails, 'total' | 'method'>;
    colorBackground: Background;
}

export default CourseByTag;
