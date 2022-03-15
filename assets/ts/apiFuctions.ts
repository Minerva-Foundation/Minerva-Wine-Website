import { groq } from "@nuxtjs/sanity";
import * as defTypes from "./defaultTypes"

export async function getArticleBySlug(slug: String, sanity: any ):  Promise<defTypes.Article> {
    const query = groq`*[_type == "post" && slug.current == "${slug}"]{_createdAt,title,abstract,author->,body,categories,mainImage,seo,slug}`;
    const currentArticle: defTypes.Article = (
      (await sanity.fetch(query)) as defTypes.Article[]
    )[0];
    return currentArticle;
}

export async function getBaseArticleInfo(sanity: any ):  Promise<defTypes.Article[]> {
    const query = groq`*[_type == "post"]{_createdAt, author->{name}, categories, slug, title, mainImage, abstract }  | order(_createdAt desc)`;
    const articles: defTypes.Article[] = await sanity.fetch(query) as defTypes.Article[];
    return articles;
}