import { ClientResponse } from './clients-res';
import { ManagementResponse } from './management-res';

export interface AgendaResponse extends ClientResponse {
  managements: ManagementResponse[];
}
