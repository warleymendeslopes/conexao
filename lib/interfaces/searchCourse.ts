interface SearchCourseType {
    name: string;
    area: string;
    type: string;
    workload: number;
    objective: string;
    maxMonthsToComplete: number;
    minMonthsToComplete: number;
    modality: 'online' | 'presencial' | 'híbrido'; // ajuste conforme necessário
    tags: string[];
    alias: string;
}

export type { SearchCourseType }