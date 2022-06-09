import { Injectable } from "@nestjs/common";
import { Chance } from "chance";
import { RandomInterface } from "./random.interface";
import { RandomService } from "./random.service";

@Injectable()
export class RandomWithSeedService extends RandomService {
  constructor() {
    const seed = "fixed-seed-for-testing";
    super();
    super.generator = new Chance(seed);
  }
}