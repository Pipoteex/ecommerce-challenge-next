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
}

interface Release {
    au: string;
    eu: string;
    jp: string;
    na: string;
}

export type { Amiibo, Product, Release }