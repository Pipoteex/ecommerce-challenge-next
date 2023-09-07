interface Amiibo {
    amiibo: Product[];
}

interface Product {
    amiiboSeries: string;
    character: string;
    gameSeries: string;
    head: string;
    image: string;
    name: string;
    release: Release;
    tail: string;
    type: string;
    price: number
}

interface Release {
    au: string;
    eu: string;
    jp: string;
    na: string;
}

interface CartItem {
    product: Product;
    qty: number;
}

export type { Amiibo, Product, Release, CartItem }