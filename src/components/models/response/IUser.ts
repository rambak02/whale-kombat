export interface UserResponse {
        id: string;
        username: string;
        coins: number ;
        photo: string | null;
        last_passive_coin_update: number;
        level: number;
        energy: number;
        energy_change: number;
        multitap_lvl: number;
        energy_lvl: number;
        available_energy_reset: number;
        daily_count: number;
        daily_last_dt: number;
}