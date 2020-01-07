export interface GameAPI{
    id?: number,
    slug: string,
    name: string,
    released?: string,
    tba?: boolean,
    background_image?: string,
    rating: number,
    rating_top?: number,
    ratings?: {},
    ratings_count?: number,
    reviews_text_count?: string,
    added?: number,
    added_by_status?: {},
    metacritic?: 0,
    playtime?: number,
    suggestions_count?: number
}

export interface GameDetailAPI{
    id?: number,
    slug: string,
    name: string,
    name_original: string,
    description: string,
    released: string,
    background_image: string,
}