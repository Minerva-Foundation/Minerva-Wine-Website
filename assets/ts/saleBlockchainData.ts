import * as andromedaTypes from './andromedaTypes';
import { Query } from './BlockchainHelpers';
import * as defTypes from "./defaultTypes";
import { getCrowdfundChainPlaceholders } from '~/assets/ts/saleApiFunctions';

export async function getCrowdfundBlockchainData(contract: string, sanity: any): Promise<defTypes.CrowdfundBlockchain> {
    
    // console.log(contract);
    // const rand = Math.random() * 200 + 80;
    // const randmax = Math.random() * 100 + 20;
    
    // const cfbInfo: defTypes.CrowdfundBlockchain = {
    //     running: true,
    //     price: Math.floor(rand),
    //     min: Math.floor(randmax/(Math.random() * 10)),
    //     max: Math.floor(randmax),
    //     current: Math.floor(randmax - (randmax / (Math.random() * 7 + 1))),
    //     maxBuy: 5
    // }

    // return await new Promise((resolve) => {
    //     setTimeout(() => {
    //         resolve(cfbInfo)
    //     }, 500)
    // })

    // Get state of Crowdfund from chain, if error (sale not started) get placeholders from Sanity and parse into same object type
    let cfState: andromedaTypes.CrowdfundState;
    let fromChain = true;

    cfState = await Query(contract,{"state":{}}).catch(async () => {
        const temp = await getCrowdfundChainPlaceholders(contract, sanity) as defTypes.CrowdfundBlockchainPlaceholder;
        cfState = {price: { amount: (temp.price * 1000000).toString(), denom: 'uusd' }, min_tokens_sold: '0', amount_sold: '0', max_amount_per_wallet: temp.maxBuy}
        fromChain = false;
        return cfState;
    }) as andromedaTypes.CrowdfundState;
    

    const cfbInfo: defTypes.CrowdfundBlockchain = {
        price: Number(cfState.price.amount)/1000000,
        min: Number(cfState.min_tokens_sold),
        // If ended => endSold if ther or maxSold if not, Not ended => current
        current: Number(cfState.amount_sold),
        maxBuy: cfState.max_amount_per_wallet,
        started: fromChain,
    }

    return cfbInfo;

    // const cfbInfo: defTypes.CrowdfundBlockchain = {
    //         running: false,
    //         price: contract === 'vinyes_placeholder_do_not_change' ? 312 : contract === 'kumusha_placeholder_do_not_change' ? 149 : 200,
    //         min: 0,
    //         max: 50,
    //         current: 0,
    //         maxBuy: 2
    //     }

    //     return await new Promise((resolve) => {
    //             setTimeout(() => {
    //                 resolve(cfbInfo)
    //             }, 1)
    //         })
}