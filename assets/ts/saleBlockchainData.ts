import * as defTypes from "./defaultTypes";

export async function getCrowdfundBlockchainData(contract: string): Promise<defTypes.CrowdfundBlockchain> {
    
    console.log(contract);
    
    const cfbInfo: defTypes.CrowdfundBlockchain = {
        running: true,
        price: 150,
        min: 30,
        max: 100,
        current: 35,
        timeLeft: 600,
        maxBuy: 5
    }

    return await new Promise((resolve) => {
        setTimeout(() => {
            resolve(cfbInfo)
        }, 500)
    })
}