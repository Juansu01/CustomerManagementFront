interface Client {
  cc: string;
  firstName: string;
  lastName: string;
  phone: string;
  address: string;
  email: string;
  city: string;
  product: string;
  consultant: string;
  expired?: boolean;
}

export const clients: Client[] = [
  {
    cc: '1001140217',
    firstName: 'Juan',
    lastName: 'Perez',
    phone: '123456789',
    address: 'Calle 123',
    email: 'JuanPe@hotmail.com',
    city: 'Bogotá',
    product: 'Producto 1',
    consultant: 'Juan',
    expired: true,
  },
  {
    cc: '987654321',
    firstName: 'Pedro',
    lastName: 'Perez',
    phone: '987654321',
    address: 'Calle 321',
    email: 'PedroPe@hotmail.com',
    city: 'Bogotá',
    product: 'Producto 2',
    consultant: 'Pedro',
    expired: false,
  },
  {
    cc: '123123123',
    firstName: 'Liliana',
    lastName: 'Perez',
    phone: '123123123',
    email: 'LilianaPe@hotmail.com',
    address: 'Calle 321',
    city: 'Bogotá',
    product: 'Producto 3',
    consultant: 'Liliana',
    expired: true,
  },
];
