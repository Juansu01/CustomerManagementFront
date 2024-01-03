import { myAxios } from './axios';
import { AxiosError } from 'axios';

import { LogInResponse } from './types/log-in-res';
import { ClientResponse } from './types/clients-res';
import { NewClientReq } from './types/new-client-req';
import { AgendaResponse } from './types/agenda-res';
import { NewManagementReq } from './types/new-management-req';
import { UserInfoRes } from './types/user-info-res';
import { UserInfo } from './types/user-info';

class BackendService {
  private axios = myAxios;
  private static instance: BackendService;

  constructor() {
    if (BackendService.instance) {
      return BackendService.instance;
    }
    BackendService.instance = this;
  }

  public async logIn(identification: string, password: string): Promise<LogInResponse | undefined> {
    try {
      const response = await this.axios.post<LogInResponse>('auth/login', {
        cc: identification,
        password,
      });
      return response.data;
    } catch (error) {
      console.log(error);
      return undefined;
    }
  }

  public async createClient(
    token: string,
    newClient: NewClientReq
  ): Promise<ClientResponse | undefined> {
    try {
      const response = await this.axios.post<ClientResponse>('customers', newClient, {
        headers: {
          Authorization: `Bearer ${token}`,
        },
      });
      return response.data;
    } catch (error) {
      console.log(error);
      return undefined;
    }
  }

  public async getUserClients(token: string): Promise<ClientResponse[] | undefined> {
    try {
      const response = await this.axios.get<ClientResponse[]>('users/my-customers', {
        headers: {
          Authorization: `Bearer ${token}`,
        },
      });
      return response.data;
    } catch (error) {
      console.log(error);
      return undefined;
    }
  }

  public async getUserAgenda(token: string): Promise<AgendaResponse[] | undefined> {
    try {
      const response = await this.axios.get<AgendaResponse[]>('users/agenda', {
        headers: {
          Authorization: `Bearer ${token}`,
        },
      });
      return response.data;
    } catch (error) {
      console.log(error);
      return undefined;
    }
  }

  public async getClient(token: string, clientId: string): Promise<ClientResponse | undefined> {
    try {
      const response = await this.axios.get<ClientResponse>(`customers/${clientId}`, {
        headers: {
          Authorization: `Bearer ${token}`,
        },
      });
      return response.data;
    } catch (error) {
      console.log(error);
      return undefined;
    }
  }

  public async addClientManagement(
    token: string,
    clientId: string,
    newManagement: NewManagementReq
  ): Promise<boolean> {
    try {
      await this.axios.post(`customers/${clientId}/management`, newManagement, {
        headers: {
          Authorization: `Bearer ${token}`,
        },
      });
      return true;
    } catch (error) {
      console.log(error);
      return false;
    }
  }

  public async getAllClients(token: string): Promise<ClientResponse[] | undefined> {
    try {
      const response = await this.axios.get<ClientResponse[]>('customers', {
        headers: {
          Authorization: `Bearer ${token}`,
        },
      });
      return response.data;
    } catch (error) {
      console.log(error);
      return undefined;
    }
  }

  public async getUserInfo(token: string): Promise<UserInfo> {
    let userInfo: UserInfo | undefined = undefined;

    try {
      const response = await this.axios.get<UserInfoRes>('users/my-info', {
        headers: {
          Authorization: `Bearer ${token}`,
        },
      });
      userInfo = {
        userInfo: { ...response.data },
        isError: false,
        message: '',
      };
    } catch (error: unknown) {
      console.log(error);

      const axiosError = error as AxiosError<{ message: string }>;

      userInfo = {
        isError: true,
        message: axiosError.response?.data.message,
      };
    }
    return userInfo;
  }
}

export const backendService = new BackendService();
