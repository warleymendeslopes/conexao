
export interface IDetailCourse {
  code: number
  data: Data
  message: string
  metadata: Metadata
}

export interface Data {
  videoIntroduction: any
  marketingVideoTeaser: any
  marketingVideoBody: any
  faculty: any
  methodology: any
  objective: string
  targetPublic: string
  description: string
  workload: number
  disciplines: Discipline[]
  photo: string
  photo_miniature: string
  tags: string[]
  name: string
  type: string
  subcategory: string
  area: string
  bestPrice: BestPrice
  bestValueParcelMethod: BestValueParcelMethod
  bestPaymentMethodOriginal: BestPaymentMethodOriginal
  bestValueParcelMethodOriginal: BestValueParcelMethodOriginal
  certifiers: Certifier[]
  originTags?: string[]
}

export interface Discipline {
  description: string
  workload: number
  name: string
}

export interface BestPrice {
  installment: number
  value: number
  total: number
  method: string
}

export interface BestValueParcelMethod {
  installment: number
  value: number
  method: string
}

export interface BestPaymentMethodOriginal {
  installment: number
  value: number
  total: number
  method: string
}

export interface BestValueParcelMethodOriginal {
  installment: number
  value: number
  method: string
}

export interface Certifier {
  name: string
  _id: string
}

export interface Metadata {
  responseAt: string
  method: string
  route: string
}

//
export interface ISearchCourses {
  code: number
  data: DataAutoComplete[]
  message: string
  metadata: Metadata
}

export interface DataAutoComplete {
  name: string
  area: string
  type: string
  workload: number
  alias: string
}

export interface Metadata {
  responseAt: string
  method: string
  route: string
  paginate: Paginate
}

export interface Paginate {
  offset: number
  page: number
  perPage: number
  lastPage: number
  total: number
}



//
export interface IMultiplesFaqs {
  type: string
  modality: ModalityAlias
  certifier: Certifiers
  faqs: Faq[]
}
export interface Createmodality {
  name: string
  alias: string
  image: string
}



export interface CreateQuestions {
  modalityId: string
  certifier: Certifiers
  question: string
  response: string
}

export interface Faq {
  title: string
  questions: Question[]
}

export interface Question {
  question: string
  answer: string
}

//
export interface ISimpleFaqs {
  type: string
  title: string
  faqs: Question[]
}

//

export interface IDepositions {
  type: string
  depositions: Deposition[]
}

export interface Deposition {
  name: string
  course: string
  city: string
  feedback?: string
  video?: string
}


export enum Certifiers {
  'Faculdade ÚNICA' = 'Faculdade ÚNICA',
  'Faculdade Conexão' = 'Faculdade Conexão',
}
export enum ModalityAlias {
  'pos-graduacao' = 'pos-graduacao',
  'graduacao' = 'graduacao',
  'disciplina-isolada' = 'disciplina-isolada',
  'cursos-gratis' = 'extensao',
  'extensao' = 'extensao',
  'segunda-graduacao' = 'segunda-graduacao',
  'bolsas-de-estudo' = 'bolsas-de-estudo',
}
export enum PrecisionPolo {
  exact = 'exact',
  nearby = 'nearby',
}