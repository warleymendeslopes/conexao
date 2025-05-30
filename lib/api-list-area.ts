import { ResponseArea } from "./interfaces/list-area";

const revalidate = 3600; // 1 hora
export const certifier = process.env.CERTIFIER

export async function getAreaURL() {
    try {
        const response = await fetch(`https://api-lyratec.institutoprominas.com.br/course_areas/list`, {
            next: { revalidate },
        });
        const data: ResponseArea = await response.json();
        const modifiedData = data.data.map((item) => ({
            ...item,
            colorBackground: {
                deg: 1,
                rgba1: 'rgb(0 0 0 / 59%) 30%',
            },
        }));
        return { data: modifiedData };
    } catch (error) {
        console.error('error', error);
        throw error;
    }
}

export async function getBestCourses(
    tag: string,
    limite = 10,
    area?: string,
    modality?: string,
) {
    try {
        const response = await fetch(`https://api-lyratec.institutoprominas.com.br/v2/courses/${modality}?area=${area}&limit=${limite}&certifiers=${certifier}&tags=${tag}`, {
            next: { revalidate },
        });
        const data = await response.json();
        const modifiedData = data.data.map((item: any) => ({
            ...item,
            colorBackground: {
                deg: 1,
                rgba1: 'rgb(0 0 0 / 59%) 30%',
            },
        }));
        return { data: modifiedData };
    } catch (error) {
        console.error('error', error);
        throw error;
    }
}

export async function SearchCourse(search: string, modality?: string) {
    try {
        const searchOther = ['graduacao', 'segunda-graduacao', 'disciplina-isolada'].includes(modality || '')
            ? 'true'
            : 'false';
        const response = await fetch(
            `https://api-lyratec.institutoprominas.com.br/v2/search_courses/${modality}?search=${encodeURIComponent(
                search
            )}&certifiers=Centro%20Universit%C3%A1rio%20%C3%9Anica&searchother=${searchOther}`,
            {
                next: { revalidate },
            }
        );
        const data = await response.json();
        return data;
    } catch (error) {
        console.error('error', error);
        throw error;
    }
}


export async function getDetailsCourse(course: string, modality: string) {
    try {
        const searchOther = ['graduacao', 'segunda-graduacao', 'disciplina-isolada'].includes(modality || '')
            ? 'true'
            : 'false';
        const response = await fetch(
                `https://api-lyratec.institutoprominas.com.br/v2/courses/detail/${modality}/${course}?searchother=${searchOther}`,
            {
                next: { revalidate },
            }
        );
        const data = await response.json();
        return data;
    } catch (error) {
        console.error('error', error);
        throw error;
    }
}



export async function getDetailsArea(area: string) {
    console.log(' entrou na funcao getDetailsArea', area)
    try {
        const response = await fetch(
            `https://api-lyratec.institutoprominas.com.br/course_areas/show/${area}?searchother=false`,
            {
                next: { revalidate },
            }
        );
        const data = await response.json();
        return data.data[0];
    } catch (error) {
        console.error('error', error);
        throw error;
    }
}
