import apiService from "./apiService";
import { AxiosError, AxiosResponse, CancelToken } from "axios";
import {Coin} from 'models'

type Source = {
  token: CancelToken;
};

class PriceService {
  static get = (coins: string[], coinBase: string) => {
    return new Promise<{prices: Coin[]}>((resolve, reject) => {
      apiService
        .post(`prices`, {coins, coinBase})
        .then(
          (response: AxiosResponse<{prices: Coin[]}>) => resolve(response?.data),
          (error: AxiosError) => reject(error)
        );
    });
  };
}

export default PriceService;
