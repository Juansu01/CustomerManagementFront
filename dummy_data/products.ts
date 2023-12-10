interface Product {
  id: number;
  name: string;
  price: number;
  description: string;
  image: string;
}

export const products: Product[] = [
  {
    id: 1,
    name: 'Producto 1',
    price: 1000,
    description: 'Descripción 1',
    image: 'https://picsum.photos/200/300',
  },
  {
    id: 2,
    name: 'Producto 2',
    price: 2000,
    description: 'Descripción 2',
    image: 'https://picsum.photos/200/300',
  },
  {
    id: 3,
    name: 'Producto 3',
    price: 3000,
    description: 'Descripción 3',
    image: 'https://picsum.photos/200/300',
  },
  {
    id: 4,
    name: 'Producto 4',
    price: 4000,
    description: 'Descripción 4',
    image: 'https://picsum.photos/200/300',
  },
];
