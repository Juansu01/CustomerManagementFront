enum PaymentMethod {
  CONTADO = 'Contado',
  CREDITO = 'Crédito',
  PLAN_SEPARE = 'Plan Separe',
}

interface Quotation {
  id: number;
  client: string;
  consultant: string;
  product: string;
  date: string;
  discount: number;
  total?: number;
  paymentMethod: PaymentMethod;
}

export const quotations: Quotation[] = [
  {
    id: 1,
    client: 'Juan',
    consultant: 'Juan',
    product: 'Producto 1',
    date: '2021-10-10',
    discount: 10,
    total: 1000,
    paymentMethod: PaymentMethod.CONTADO,
  },
  {
    id: 2,
    client: 'Pedro',
    consultant: 'Pedro',
    product: 'Producto 2',
    date: '2021-10-10',
    discount: 20,
    total: 2000,
    paymentMethod: PaymentMethod.CREDITO,
  },
  {
    id: 3,
    client: 'Liliana',
    consultant: 'Liliana',
    product: 'Producto 3',
    date: '2021-10-10',
    discount: 30,
    total: 3000,
    paymentMethod: PaymentMethod.PLAN_SEPARE,
  },
];
