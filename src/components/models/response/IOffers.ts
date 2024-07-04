export interface Offer {
    id: string;
    name: string;
    description: string ;
    type: string;
    cost: number;
    profit_per_hour:number;
    image: string;
    level: number;
}
export interface OffersResponse {
    offers: Offer[];
}