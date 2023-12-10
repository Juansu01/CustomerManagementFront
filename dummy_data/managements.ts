export enum ContactType {
  EVENTO = 'Evento',
  PAG_WEB = 'Pagina Web',
  VISITA_CAMPO = 'Visita de Campo',
  TIENDA = 'Tienda',
}

export enum ClientStatus {
  PRIMERA_LLAMADA = 'Primera Llamada',
  SEGUNDA_LLAMADA = 'Segunda Llamada',
  TERCERA_LLAMADA = 'Tercera Llamada',
  PENDIENTE_PRIMER_CONTACTO = 'Pendiente Primer Contacto',
  AGENDAR_NUEVAMENTE = 'Agendar Nuevamente',
  DESISTE = 'Cliente Desiste',
  PRODUCTO_FACTURADO = 'Producto Facturado',
}

interface Management {
  id: number;
  client: string;
  contactType: string;
  clientStatus: string;
  upcomingContactDate: string;
  observations: string;
}

export const managements: Management[] = [
  {
    id: 1,
    client: 'Juan',
    contactType: 'Evento',
    clientStatus: 'Primera Llamada',
    upcomingContactDate: '2021-10-10',
    observations: 'Observaciones',
  },
  {
    id: 2,
    client: 'Pedro',
    contactType: 'Pagina Web',
    clientStatus: 'Segunda Llamada',
    upcomingContactDate: '2021-10-10',
    observations: 'Observaciones',
  },
  {
    id: 3,
    client: 'Liliana',
    contactType: 'Visita de Campo',
    clientStatus: 'Tercera Llamada',
    upcomingContactDate: '2021-10-10',
    observations: 'Observaciones',
  },
  {
    id: 4,
    client: 'Juan Carlos',
    contactType: 'Tienda',
    clientStatus: 'Pendiente Primer Contacto',
    upcomingContactDate: '2021-10-10',
    observations: 'Observaciones',
  },
];
