interface ClientFields {
  label: string;
  name: string;
  required?: boolean;
  placeholder?: string;
}

export const newClientFields: ClientFields[] = [
  { label: 'Correo Electronico', name: 'email', required: true, placeholder: 'john@doe.com' },
  { label: 'Cedula', name: 'cedula', required: true, placeholder: '123456789' },
  { label: 'Nombres', name: 'firstName', required: true },
  { label: 'Apellidos', name: 'lastName', required: true },
  { label: 'Celular', name: 'phone', required: true, placeholder: '123456789' },
  { label: 'Direccion', name: 'address' },
  { label: 'Ciudad', name: 'city' },
];

export const newClientInitialValues: Record<string, string> = {};

newClientFields.forEach((field) => {
  newClientInitialValues[field.name] = '';
});
