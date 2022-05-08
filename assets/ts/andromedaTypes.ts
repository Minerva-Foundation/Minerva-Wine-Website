export interface CrowdfundState {
    amount_sold: string,
    amount_to_send?: string,
    amount_transferred?: string,
    expiration?: {at_height: number } |  { at_time: string },
    max_amount_per_wallet: number,
    min_tokens_sold: string,
    price: { amount: string, denom: string },
    recipient?: Object,
}

export interface Tokens {
    tokens: string[]
}