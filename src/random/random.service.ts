import { Injectable } from '@nestjs/common';
import { Chance } from 'chance';
import * as dotenv from 'dotenv';
import * as fs from "fs";
import { RandomInterface } from './random.interface';

@Injectable()
export class RandomService implements RandomInterface {
  constructor() {
    dotenv.config({ path: fs.existsSync(".env") ? ".env" : ".env.example" });

    const keys = Object.keys(process.env);
    const keysReward = keys.filter(key => key.startsWith(RandomService.envPrefix));
    const parsed = keysReward.map(key => RandomService.parseRewardEnvKey(key));

    for (const rangeData of parsed) {
      const count = parseInt(process.env[rangeData.key]);
      const range = rangeData.range;
      this.priceRanges = this.priceRanges.concat(new Array(count).fill(range));
    }
  }

  getRandomRange() {
    return this.generator.pickone(this.priceRanges);
  }

  public static parseRewardEnvKey(key: string): {range: [number, number], key: string} {
    const arr = key.split("_");
    const begin = parseInt(arr[arr.length - 2]);
    const end = parseInt(arr[arr.length - 1]);
    const range: [number, number] = [begin, end];
    return { range, key };
  }

  protected generator = new Chance();
  
  private priceRanges = new Array<[number, number]>();
  static envPrefix = "EMMA_REWARD_RANGE_";
}
