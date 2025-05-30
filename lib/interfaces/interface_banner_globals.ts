interface BannerGlobalsSite {
  content: {
    headerTitle?: string;
    title: string;
    subTitle?: string;
    ctaName?: string;
    onButtonClick?: () => void;
    modalContent?: React.ReactNode;
    imgbanner?: string;
    benefitList?: { text: string; icon?: string }[];
    offer?: Offers;
  };
  width?: number;
  alignment?: 'center' | 'start' | 'end';
  animation: boolean;
  skeleton?: Skeleton;
}

interface Skeleton {
  isActived: boolean;
  isLoading: boolean;
}
interface Offers {
  isActived: boolean;
  offer: React.ReactNode;
  possition: number;
  idOffers?: string;
  marginTop?: number;
  marginBotton?: number;
}
