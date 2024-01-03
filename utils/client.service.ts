import { clients, Client } from '@/dummy_data/clients';

export interface ClientPayload {
  address: string;
  cedula: string;
  city: string;
  email: string | null;
  firstName: string;
  lastName: string;
  phone: string;
  product: string;
  purchaseProjection: number;
}

export class ClientService {
  public clientService: ClientService | null = null;

  constructor() {
    if (!this.clientService) {
      this.clientService = this;
    }

    return this.clientService;
  }

  public getClients() {
    return clients;
  }

  public addClient(clientPayload: ClientPayload) {
    const newClient: Client = {
      cc: clientPayload.cedula,
      firstName: clientPayload.firstName,
      lastName: clientPayload.lastName,
      phone: clientPayload.phone,
      address: clientPayload.address,
      email: clientPayload.email,
      city: clientPayload.city,
      product: clientPayload.product,
      consultant: 'Juan',
    };
    clients.push(newClient);
  }
}
