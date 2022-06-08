import {
    createLCDClient,
  } from '@terra-money/wallet-controller';

export const lcd = createLCDClient({ network: {"chainID":"bombay-12","lcd":"https://bombay-lcd.terra.dev","name":"testnet"} });