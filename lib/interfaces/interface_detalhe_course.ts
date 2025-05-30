export interface PaymentPlan {
  boleto: PaymentMethod[];
  creditCard: PaymentMethod[];
  debitCard: PaymentMethod[];
  cardRecurrence: PaymentMethod[];
  pix: PaymentMethod[];
}

export interface PaymentMethod {
  methodName?: string;
  value?: number;
  installmentCount?: number;
  installment: number;
}

export interface Discipline {
  description: string;
  workload: number;
  name: string;
}

export interface Certifier {
  name: string;
  _id: string;
}

export interface Course {
  paymentPlan: PaymentPlan;
  videoIntroduction: string | null;
  faculty: string | null;
  methodology: string;
  objective: string;
  targetPublic: string | null;
  description: string;
  workload: number;
  disciplines: Discipline[];
  maxMonthsToComplete: number;
  minMonthsToComplete: number;
  depositions: string[];
  tags: string[];
  name: string;
  type: string;
  subcategory: string;
  originTags: string[];
  area: string;
  amountPeriodicity?:any;
  bestPrice: BestPrice;
  bestValueParcelMethod: PaymentDetail;
  bestPaymentMethodOriginal: BestPrice;
  bestValueParcelMethodOriginal: PaymentDetail;
  bestParcelCreditCard: PaymentDetail;
  certifiers: Certifier[];
  photo?: string;
}

export interface BestPrice {
  installment: number;
  value: number;
  total: number;
  method: string;
}

export interface PaymentDetail {
  installment: number;
  value: number;
  method: string;
}
