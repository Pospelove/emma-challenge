import { Body, Controller, HttpCode, Inject, Post } from '@nestjs/common';
import { BrokerInterface } from './broker/broker.interface';
import { ClaimFreeShareDto } from './dto/claimFreeShareDto';
import { ClaimFreeShareResultDto } from './dto/claimFreeShareResultDto';
import { RandomInterface } from './random/random.interface';

@Controller()
export class AppController {
  constructor(@Inject("BrokerInterface") private readonly broker: BrokerInterface, @Inject("RandomInterface") private readonly random: RandomInterface) { }

  @Post("/claim-free-share")
  @HttpCode(200)
  async claimFreeShare(@Body() body: ClaimFreeShareDto): Promise<ClaimFreeShareResultDto> {

    await new Promise(r => setTimeout(r, 50));

    const range = this.random.getRandomRange();

    const assets = await this.broker.listTradableAssets();

    const prices = await Promise.all(assets.map(asset => this.broker.getLatestPrice(asset.tickerSymbol)));

    const i = prices.findIndex(x => x.sharePrice >= range[0] && x.sharePrice < range[1]);

    this.broker.buySharesInRewardsAccount(assets[i].tickerSymbol, 1);

    const res = new ClaimFreeShareResultDto;
    res.tickerSymbol = assets[i].tickerSymbol;
    res.sharePrice = prices[i].sharePrice;
    res.pricesRange = range;
    return res;
  }
}
