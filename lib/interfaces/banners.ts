interface DataBanner {
    AlertDescriptions?: {
        isActive: boolean,
        descriptioin: string,
    }
        subtitle: string;
    title: string;
    text: string;
    ctaButton: string;
    imageBackgroud: string;
    area: string;
    width?: string;
}



interface BannerConfig {
    subtitle: string;
    title: string;
    text: string;
    ctaButton: string;
    imageBackgroud: string;
    area: string;
}


export type { DataBanner, BannerConfig }