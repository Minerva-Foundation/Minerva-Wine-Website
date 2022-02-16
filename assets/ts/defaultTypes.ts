export type test = {
    name: String,
    height: number,
}

export interface Author {
    _ref: string;
    _type: string;
}

export interface Child {
    _key: string;
    _type: string;
    marks: any[];
    text: string;
}

export interface Body {
    _key: string;
    _type: string;
    children: Child[];
    markDefs: any[];
    style: string;
}

export interface Slug {
    _type: string;
    current: string;
}

export interface Article {
    _createdAt: Date;
    _id: string;
    _rev: string;
    _type: string;
    _updatedAt: Date;
    author: Author;
    body: Body[];
    categories: any[];
    slug: Slug;
    title: string;
}