import { groq } from "@nuxtjs/sanity";
import * as defTypes from "./defaultTypes"

export async function getBaseCrowdfundInfo(sanity: any ):  Promise<defTypes.CrowdfundBase[]> {
    const query = groq`*[_type == "crowdfund"]{merchant->{flag,title},start,contract,cardImage,country,date,shortInfo,slug,tc,type,variety,vintage}`;
    const crowdfund: defTypes.CrowdfundBase[] = (
      (await sanity.fetch(query)) as defTypes.CrowdfundBase[]
    );
    return crowdfund;
}