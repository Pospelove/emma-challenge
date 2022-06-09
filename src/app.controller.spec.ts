import { Test, TestingModule } from '@nestjs/testing';
import { AppController } from './app.controller';
import { BrokerSimulationService } from './broker/brokerSimulation.service';
import { ClaimFreeShareDto } from './dto/claimFreeShareDto';
import { RandomWithSeedService } from './random/randomWithSeed.service';

describe('AppController', () => {
  let appController: AppController;

  beforeEach(async () => {
    const app: TestingModule = await Test.createTestingModule({
      controllers: [AppController],
      providers: [{
        provide: "BrokerInterface",
        useClass: BrokerSimulationService,
      },{
        provide: "RandomInterface",
        useClass: RandomWithSeedService,
      }],
    }).compile();

    appController = app.get<AppController>(AppController);
  });

  describe('root', () => {
    it('should return "Hello World!"', async () => {

      const result = await appController.claimFreeShare(new ClaimFreeShareDto("test1"));
      expect(result.pricesRange).toEqual([200,500]);
      expect(result.tickerSymbol).toBe("Apple");
    });
  });
});
