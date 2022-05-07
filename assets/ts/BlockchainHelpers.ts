import { lcd } from './ConfigBlockchaiin';

export async function Query(contract: string, msg: Object): Promise<any> {
    const queryResult = await lcd.wasm.contractQuery(contract,msg)
    return queryResult;
}