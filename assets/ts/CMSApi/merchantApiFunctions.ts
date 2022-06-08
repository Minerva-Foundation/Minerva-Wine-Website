import { groq } from "@nuxtjs/sanity";
import * as defTypes from "../Types/defaultTypes"

export async function getMerchantDetailBySlug(slug: String, sanity: any ):  Promise<defTypes.MerchantDetails> {
    const query = groq`*[_type == "merchant" && slug.current == "${slug}"]{_id,country,description,description2,description3,flag,largeFirstImage,largeSecondImage,map,quote,seo,slug,title,links}`;
    const merchantDetail: defTypes.MerchantDetails = (
      (await sanity.fetch(query)) as defTypes.MerchantDetails[]
    )[0];
    return merchantDetail;
}

export async function getMerchantDetails(sanity: any ):  Promise<defTypes.MerchantDetailsBase[]> {
  const query = groq`*[_type == "merchant"]{_id,card,country,flag,quote,seo,slug,title}`;
  const merchantDetails: defTypes.MerchantDetailsBase[] = (
    (await sanity.fetch(query)) as defTypes.MerchantDetailsBase[]
  );
  return merchantDetails;
}