export interface Consultant {
  cc: string;
  name: string;
  phone: string;
  password: string;
}

export const consultants: Consultant[] = [
  { cc: '1001140217', name: 'Juan', phone: '123456789', password: '123' },
  { cc: '987654321', name: 'Pedro', phone: '987654321', password: '987654321' },
  { cc: '123123123', name: 'Liliana', phone: '123123123', password: '123123123' },
];
