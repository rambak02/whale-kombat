import { AxiosResponse } from "axios";
import $api from "../http";
import { OffersResponse } from "../models/response/IOffers";

export default class OffersService {
   static getOffers(type:string): Promise<AxiosResponse<OffersResponse>> {
     return $api.get<OffersResponse>(`/mining/offers/${type}`)
    }
}