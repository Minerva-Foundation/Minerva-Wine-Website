import * as defTypes from "./defaultTypes";

export async function getCrowdfundBlockchainData(contract: string): Promise<defTypes.CrowdfundBlockchain> {
    
    console.log(contract);
    const rand = Math.random() * 200 + 80;
    const randmax = Math.random() * 100 + 20;
    
    const cfbInfo: defTypes.CrowdfundBlockchain = {
        running: true,
        price: Math.floor(rand),
        min: Math.floor(randmax/Math.random() * 10),
        max: Math.floor(randmax),
        current: Math.floor(randmax - (randmax / (Math.random() * 7 + 1))),
        maxBuy: 5
    }

    return await new Promise((resolve) => {
        setTimeout(() => {
            resolve(cfbInfo)
        }, 500)
    })
}