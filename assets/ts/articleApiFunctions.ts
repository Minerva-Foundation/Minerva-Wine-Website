import { groq } from "@nuxtjs/sanity";
import * as defTypes from "./defaultTypes"

export async function getArticleBySlug(slug: String, sanity: any ):  Promise<defTypes.Article> {
    const query = groq`*[_type == "post" && slug.current == "${slug}"]{publishedAt,title,abstract,author->,body,categories[]->{title,description,_id},mainImage,seo,slug}`;
    const currentArticle: defTypes.Article = (
      (await sanity.fetch(query)) as defTypes.Article[]
    )[0];
    return currentArticle;
}

export async function getBaseArticleInfo(sanity: any ):  Promise<defTypes.CondensedArticle[]> {
    const query = groq`*[_type == "post"]{publishedAt, author->{name}, seo{focus_keyword}, categories[]->{title,description,_id}, slug, title, mainImage, abstract }  | order(publishedAt desc)`;
    const articles: defTypes.CondensedArticle[] = await sanity.fetch(query) as defTypes.CondensedArticle[];
    return articles;
}

export async function getCategories(sanity: any ):  Promise<defTypes.Category[]> {
  const query = groq`*[_type == "category"]{_id, title, description} | order(title desc)`;
  const cats: defTypes.Category[] = await sanity.fetch(query) as defTypes.Category[];
  return cats;
}