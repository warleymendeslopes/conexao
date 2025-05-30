type Form = {
    fullname: string
    email: string
    phone: string
    rea_de_interesse?: string
    curso_oculto?: string
    _graduado?: string
    nome_do_curso?: string
    colaborador_que_indicou?: string
    curso_de_interesse?: string
    origem_campanha?: string
    promotion?: string
    gclid?: string
    fbclid?: string
    agency?: string
    utm_campaign?: string
    utm_source?: string
    utm_medium?: string
    utm_content?: string
    nota_do_enem?: string
    vestibular_online?: string
    transferncia_institucional?: string
    [key: string]: string | undefined
}

type DadosType = {
    idform: number
    codForm: string
    data: Form
    dataLayer?: any
    sendMsg?: boolean
    courseModality?: string
}

type WindowWithDataLayer = Window & {
    dataLayer: Record<string, any>[]
}

declare const window: WindowWithDataLayer
const apiMarketing = 'https://r82nushnh3.us-east-1.awsapprunner.com/'
export async function pushActiveCampaign(data: DadosType, seller?: any) {
    await SaveLeadsDBProminas(data, seller)
    if (data.dataLayer) {
        await window.dataLayer.push({
            event: 'formSubimission',
            tipo: 'formulario',
            area: 'geral',
            modalidade: 'pos-graduacao',
            conta: 'fb-nova',
        })
    }
}

export async function SaveLeadsDBProminas(
    DataLead: any,
    DataParceirosPolos: any = null,
) {

    console.log('chamaou a funcao para enviar leads =====>>>>>> ', DataLead)

    const myHeaders = new Headers()
    myHeaders.append('Content-Type', 'application/json')

    const raw: any = {
        origin: 'lp-conexão',
        courseModality: DataLead.courseModality,
        name: DataLead.data.fullname,
        email: DataLead.data.email,
        telefone: DataLead.data.phone,
        certifierAlias: 'faculdade-conexao',
        course: {
            name:
                DataLead.data?.curso_de_interesse ||
                DataLead.data?.nome_do_curso ||
                DataLead.data.curso_oculto ||
                DataLead.data?.rea_de_interesse,
            area: DataLead.data?.rea_de_interesse,
            modalidade: DataLead.data?.modalidade_de_ensino,
            courseId: DataLead.data?.idCourse,
        },
        statusLead: 'Enviado',
        _idLeadsAppointments: '660175a226229b83b17ceb85',
    }
    console.log('dados que estao sendo enviados para a API ==> ', raw)
    if (DataLead.utm) {
        raw.utm = DataLead.utm
    }
    if (DataParceirosPolos) {
        delete DataParceirosPolos._id
        raw.partnerPolo = DataParceirosPolos
    }
    const Data = JSON.stringify(raw)
    const requestOptions: any = {
        method: 'POST',
        headers: myHeaders,
        body: Data,
        redirect: 'follow',
    }

    console.log('enviando ..... ')

    await fetch(`${apiMarketing}leads`, requestOptions)
        .then((response) => {
            console.log('enviado ', response)
        })
        .then((result: any) => {

            const leadId = result?.crm._id;
            if (leadId) {
                console.log('resposta api crm ', leadId)
                sessionStorage.setItem('idLeadCrm', JSON.stringify(leadId))
            }
        })
        .catch((error) => {
            console.log('resposta api crm ', error)
            console.error(error)
        });


}

export function eliasToName(elias: string): string {
  const toElias: Record<string, string> = {
    "graduacao": "Graduação",
    "segunda-graduacao": "Segunda Graduação",
    "disciplina-isolada": "Disciplina Isolada",
    "pos-graduacao": "Pós-Graduação"
  };
  return toElias[elias] || elias;
}


type CourseArea = {
  qtd: number;
  areaName: string;
  miniature: string;
  areaAlias: string;
};

const courseAreas: CourseArea[] = [
  { qtd: 295, areaName: "Ciências da Saúde", miniature: "...", areaAlias: "ciencias-da-saude" },
  { qtd: 626, areaName: "Educação", miniature: "...", areaAlias: "educacao" },
  { qtd: 392, areaName: "Empresarial, TI e Negócios", miniature: "...", areaAlias: "empresarial-ti-e-negocios" },
  { qtd: 52, areaName: "Engenharias", miniature: "...", areaAlias: "engenharias" },
  { qtd: 12, areaName: "Estética", miniature: "...", areaAlias: "estetica" },
  { qtd: 10, areaName: "Gastronomia", miniature: "...", areaAlias: "gastronomia" },
  { qtd: 179, areaName: "Jurídica", miniature: "...", areaAlias: "juridica" },
  { qtd: 96, areaName: "MBA Executivo", miniature: "...", areaAlias: "mba-executivo" },
  { qtd: 57, areaName: "Meio Ambiente", miniature: "...", areaAlias: "meio-ambiente" },
  { qtd: 34, areaName: "Psicologia", miniature: "...", areaAlias: "psicologia" },
  { qtd: 33, areaName: "Serviço Social", miniature: "...", areaAlias: "servico-social" }
];

export function areaNameToAlias(name: string): string | undefined {
  const area = courseAreas.find(a => a.areaName.toLowerCase() === name.toLowerCase());
  return area?.areaAlias;
}
