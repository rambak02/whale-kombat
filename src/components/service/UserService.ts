import { AxiosResponse } from "axios";
import $api from "../http";
import { UserResponse } from "../models/response/IUser";

export default class UserService {
   static fetchUser(): Promise<AxiosResponse<UserResponse>> {
     return $api.get<UserResponse>("/mining/offers/me")
    }
}