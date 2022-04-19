import { groq } from "@nuxtjs/sanity";
import * as defTypes from "./defaultTypes"

export async function getBaseCrowdfundInfo(sanity: any ):  Promise<defTypes.CrowdfundBase[]> {
    const query = groq`*[_type == "crowdfund" ]{merchant->{flag,title,slug},start,end,contract,cardImage,country,date,shortInfo,slug,tc,type,variety,vintage}  | order(start asc)`;
    
    const crowdfund: defTypes.CrowdfundBase[] = (
      (await sanity.fetch(query)) as defTypes.CrowdfundBase[]
    );

    const now: number = new Date().getTime();
    const temp: defTypes.CrowdfundBase[] = [];

    for(let i =0; i< crowdfund.length ; i++) {      
      const distanceEnd = Date.parse(crowdfund[i].end.toString()) - now;
      
      if(distanceEnd < - 60000) {
        temp.push(crowdfund[i])
        crowdfund.splice(i--, 1)
      }
    }

    crowdfund.push(...temp.reverse())

    return crowdfund;
}