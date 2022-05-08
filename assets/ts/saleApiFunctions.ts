import { groq } from "@nuxtjs/sanity";
import * as defTypes from "./defaultTypes";

const SanityCrowdfundPlacholders: { placeholders: defTypes.CrowdfundBlockchainPlaceholder, contract: string }[] = [];

function sortCrowdfunds(crowdfund: defTypes.CrowdfundBase[]): defTypes.CrowdfundBase[] {
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

export async function getBaseCrowdfundInfo(sanity: any ):  Promise<defTypes.CrowdfundBase[]> {
    const query = groq`*[_type == "crowdfund" ]{merchant->{flag,title,slug},start,maxSold,end,contract,cardImage,country,date,soon,shortInfo,slug,tc,type,variety,vintage}  | order(start asc)`;
    
    const crowdfund: defTypes.CrowdfundBase[] = (
      (await sanity.fetch(query)) as defTypes.CrowdfundBase[]
    );

    return sortCrowdfunds(crowdfund);
}

export async function getBaseCrowdfundInfoForMerchant(id: string, sanity: any ):  Promise<defTypes.CrowdfundBase[]> {
  const query = groq`*[_type == "crowdfund" && merchant._ref == "${id}"]{merchant->{flag,title,slug},maxSold,detail1,detail2,detail3,soon,artwork,start,end,contract,cardImage,country,acidity,body,fruitiness,date,shortInfo,slug,tc,type,variety,vintage}  | order(start asc)`;
  
  const crowdfund: defTypes.CrowdfundBase[] = (
    (await sanity.fetch(query)) as defTypes.CrowdfundBase[]
  );

  return sortCrowdfunds(crowdfund);
}

export async function getCrowdfundInfoBySlug(slug: string, sanity: any ):  Promise<defTypes.CrowdfundBase> {
  const query = groq`*[_type == "crowdfund" && slug.current == "${slug}"]{merchant->{flag,title,slug},maxSold,detail1,detail2,bottleimage,detail3,soon,bottleCount,addDetails,varietyFirst,artwork,start,end,contract,cardImage,country,acidity,body,fruitiness,date,shortInfo,slug,tc,type,variety,vintage}`;
  
  const crowdfund: defTypes.CrowdfundBase = (
    (await sanity.fetch(query)) as defTypes.CrowdfundBase[]
  )[0];

  return crowdfund;
}

export async function getCrowdfundChainPlaceholders(contract: string, sanity: any ):  Promise<defTypes.CrowdfundBlockchainPlaceholder> {

  // Use chached placeholders to avoid spamming Sanity requests
  const existingPlacehodlers = SanityCrowdfundPlacholders.find(e => e.contract === contract);
  
  if(existingPlacehodlers) {    
    return existingPlacehodlers.placeholders
  } else {
    const query = groq`*[_type == "crowdfund" && contract == "${contract}"]{maxBuy,price}`;
  
    const crowdfund: defTypes.CrowdfundBlockchainPlaceholder = (
      (await sanity.fetch(query)) as defTypes.CrowdfundBlockchainPlaceholder[]
    )[0];

    SanityCrowdfundPlacholders.push({placeholders: crowdfund, contract});
  
    return crowdfund;
  }
  
}

export async function getNftAddresses(sanity: any): Promise<{slug: defTypes.Slug}[]> {
  const query = groq`*[_type == "crowdfund"]{slug{current}}`;
  
  const crowdfunds: {slug: defTypes.Slug}[] = (
    (await sanity.fetch(query)) as {slug: defTypes.Slug}[]
  );
    console.log(crowdfunds);
    
  return crowdfunds;
}