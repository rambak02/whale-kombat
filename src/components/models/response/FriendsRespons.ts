interface Invited {
    username: string;
    coins: number;
    level: number
}

export interface Friend {
    invited: Invited;
    reward: number
}
export interface FriendsResponse {
  friends: Friend[]
}


