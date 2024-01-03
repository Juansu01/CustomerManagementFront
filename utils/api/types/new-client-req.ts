export interface NewClientReq {
  firstName: string;
  lastName: string;
  identification: string;
  email: string | null;
  phone: string;
  address: string;
  city: string;
  product: string;
  purchaseProjection: number;
}
