interface ManagementFields {
  label: string;
  name: string;
  required?: boolean;
  placeholder?: string;
}

export const newManagementFields: ManagementFields[] = [
  {
    label: 'Tipo de contacto',
    name: 'contactType',
    required: true,
    placeholder: 'visita de campo',
  },
  {
    label: 'Estado de cliente',
    name: 'customerStatus',
    required: true,
    placeholder: 'Segunda llamada',
  },
  { label: 'Observaciones', name: 'observations', required: false },
  { label: 'Siguiente Contacto', name: 'nextContact', required: true },
];

export const newManagementInitialValues = {
  contactType: '',
  customerStatus: '',
  observations: '',
  nextContact: '',
};
