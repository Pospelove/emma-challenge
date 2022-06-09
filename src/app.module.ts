import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { BrokerSimulationService } from './broker/brokerSimulation.service';
import { RandomService } from './random/random.service';

@Module({
  imports: [],
  controllers: [AppController],
  providers: [{
    provide: "BrokerInterface",
    useClass: BrokerSimulationService,
  }, {
    provide: "RandomService",
    useClass: RandomService,
  }],
})
export class AppModule { }
