export interface Child {
    _key: string;
    _type: string;
    marks: any[];
    text: string;
}

export interface Bio {
    _key: string;
    _type: string;
    children: Child[];
    markDefs: any[];
    style: string;
}

export interface Asset {
    _ref: string;
    _type: string;
}

export interface Image {
    _type: string;
    asset: Asset;
}

export interface Slug {
    _type: string;
    current: string;
}

export interface Author {
    _createdAt: Date;
    _id: string;
    _rev: string;
    _type: string;
    _updatedAt: Date;
    bio: Bio[];
    image: Image;
    name: string;
    slug: Slug;
    type: string;
}

export interface Child2 {
    _key: string;
    _type: string;
    marks: string[];
    text: string;
}

export interface Asset2 {
    _ref: string;
    _type: string;
}

export interface Crop {
    _type: string;
    bottom: number;
    left: number;
    right: number;
    top: number;
}

export interface Hotspot {
    _type: string;
    height: number;
    width: number;
    x: number;
    y: number;
}

export interface Body {
    _key: string;
    _type: string;
    children: Child2[];
    markDefs: any[];
    style: string;
    url: string;
    asset: Asset2;
    crop: Crop;
    hotspot: Hotspot;
}

export interface Category {
    _key: string;
    _ref: string;
    _type: string;
}

export interface Asset3 {
    _ref: string;
    _type: string;
}

export interface MainImage {
    _type: string;
    asset: Asset3;
}

export interface Seo {
    _type: string;
    focus_keyword: string;
    seo_title: string;
    meta_description: string;
}

export interface CondensedSeo {
    focus_keyword: string;
}

export interface Slug2 {
    _type: string;
    current: string;
}

export interface Article {
    _createdAt: Date;
    abstract: string;
    author: Author;
    body: Body[];
    categories: Category[];
    mainImage: MainImage;
    seo: Seo;
    slug: Slug2;
    title: string;
}
export interface CondensedAuthor {
    name: string;
}

export interface CondensedImage {
    _type: string;
    asset: Asset;
}

export interface CondensedArticle {
    _createdAt: Date;
    author: Author;
    categories: Category[];
    mainImage: MainImage;
    slug: Slug;
    title: string;
    seo: CondensedSeo;
}