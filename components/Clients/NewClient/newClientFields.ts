interface ClientFields {
  label: string;
  name: string;
  required?: boolean;
  placeholder?: string;
  type?: string;
}

export const newClientFields: ClientFields[] = [
  { label: 'Correo Electronico', name: 'email', required: false, placeholder: 'john@doe.com' },
  { label: 'Cedula', name: 'cedula', required: true, placeholder: '123456789' },
  { label: 'Nombres', name: 'firstName', required: true },
  { label: 'Apellidos', name: 'lastName', required: true },
  { label: 'Celular', name: 'phone', required: true, placeholder: '123456789' },
  { label: 'Direccion', name: 'address' },
  { label: 'Departamento/Vereda', name: 'city' },
  { label: 'Producto de interes', name: 'product' },
  {
    label: 'Proyeccion de compra',
    name: 'purchaseProjection',
    placeholder: '1000000',
    type: 'number',
  },
];

export const newClientInitialValues: Record<string, string> = {};

newClientFields.forEach((field) => {
  newClientInitialValues[field.name] = '';
});
