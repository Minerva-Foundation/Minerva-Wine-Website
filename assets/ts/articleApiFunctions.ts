import { groq } from "@nuxtjs/sanity";
import * as defTypes from "./defaultTypes"

export async function getArticleBySlug(slug: String, sanity: any ):  Promise<defTypes.Article> {
    const query = groq`*[_type == "post" && slug.current == "${slug}"]{publishedAt,title,abstract,author->,body,categories,mainImage,seo,slug}`;
    const currentArticle: defTypes.Article = (
      (await sanity.fetch(query)) as defTypes.Article[]
    )[0];
    return currentArticle;
}

export async function getBaseArticleInfo(sanity: any ):  Promise<defTypes.CondensedArticle[]> {
    const query = groq`*[_type == "post"]{publishedAt, author->{name}, seo{focus_keyword}, categories, slug, title, mainImage, abstract }  | order(publishedAt desc)`;
    const articles: defTypes.CondensedArticle[] = await sanity.fetch(query) as defTypes.CondensedArticle[];
    return articles;
}