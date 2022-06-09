import { Test, TestingModule } from '@nestjs/testing';
import { BrokerSimulationService } from './brokerSimulation.service';

describe('BrokerService', () => {
  let service: BrokerSimulationService;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      providers: [BrokerSimulationService],
    }).compile();

    service = module.get<BrokerSimulationService>(BrokerSimulationService);
  });

  it('should be defined', () => {
    expect(service).toBeDefined();
  });
});
