import { AxiosResponse } from "axios";
import $api from "../http";
import { FriendsResponse } from "../models/response/FriendsRespons";

export default class FriendsService {
   static async getFriends() : Promise<AxiosResponse<FriendsResponse | null>> {
    return $api.get<FriendsResponse>("/auth/users/friends")
}

}