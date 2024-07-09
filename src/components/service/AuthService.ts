import { AxiosResponse } from "axios";
import $api from "../http";
import { AuthResponse } from "../models/response/AuthResponse";

export default class AuthService {
    static async initDataUser(initData: string, referral_code: string | null = null) : Promise<AxiosResponse<AuthResponse>> {
        return $api.post<AuthResponse>("/auth/jwt/create", {initData, referral_code})
    }
}
