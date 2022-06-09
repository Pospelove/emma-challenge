import { Injectable } from '@nestjs/common';
import { BrokerInterface } from './broker.interface';

@Injectable()
export class BrokerSimulationService implements BrokerInterface {
  listTradableAssets(): Promise<{ tickerSymbol: string; }[]> {
    throw new Error('Method not implemented.');
  }
  getLatestPrice(tickerSymbol: string): Promise<{ sharePrice: number; }> {
    throw new Error('Method not implemented.');
  }
  isMarketOpen(): Promise<{ open: boolean; nextOpeningTime: string; nextClosingTime: string; }> {
    throw new Error('Method not implemented.');
  }
  buySharesInRewardsAccount(tickerSymbol: string, quantity: number): Promise<{ success: boolean; sharePricePaid: number; }> {
    throw new Error('Method not implemented.');
  }
  getRewardsAccountPositions(): Promise<{ tickerSymbol: string; quantity: number; sharePrice: number; }[]> {
    throw new Error('Method not implemented.');
  }
  moveSharesFromRewardsAccount(toAccount: string, tickerSymbol: string, quantity: number): Promise<{ success: boolean; }> {
    throw new Error('Method not implemented.');
  }
}
