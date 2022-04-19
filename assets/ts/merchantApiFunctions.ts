import { groq } from "@nuxtjs/sanity";
import * as defTypes from "./defaultTypes"

export async function getMerchantDetailBySlug(slug: String, sanity: any ):  Promise<defTypes.MerchantDetails> {
    const query = groq`*[_type == "merchant" && slug.current == "${slug}"]{country,description,description2,description3,flag,largeFirstImage,largeSecondImage,map,quote,seo,slug,title}`;
    const merchantDetail: defTypes.MerchantDetails = (
      (await sanity.fetch(query)) as defTypes.MerchantDetails[]
    )[0];
    return merchantDetail;
}