export interface ISales {
  product: string;
  sales: ISalesMonth[]
}

export interface ISalesMonth {
  month: string;
  quantity: number;
}