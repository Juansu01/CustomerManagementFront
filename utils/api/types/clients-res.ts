import { ManagementResponse } from './management-res';

export interface ClientResponse {
  id: number;
  firstName: string;
  lastName: string;
  identification: string;
  email: string;
  phone: string;
  address: string;
  city: string;
  product: string;
  managements: ManagementResponse[];
  purchaseProjection: number;
  user: {
    identification: string;
  };
}
