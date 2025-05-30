export interface ResponseArea {
    code: number;
    data: Array<Area>;
}
export interface Area {
    id: number;
    name: string;
    icon: string;
    alias: string;
    description: string;
}

export interface areaList {
    areaAlias: number;
    areaName: string;
    miniature: string;
    qtd: string;
}