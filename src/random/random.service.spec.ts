import { Test, TestingModule } from '@nestjs/testing';
import { RandomService } from './random.service';

describe('RandomService', () => {
  let service: RandomService;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      providers: [RandomService],
    }).compile();

    service = module.get<RandomService>(RandomService);
  });

  it('should be able to parse [3, 1022] range', () => {
    const key = `${RandomService.envPrefix}3_1022`;
    const res = RandomService.parseRewardEnvKey(key);
    expect(res.key).toBe(key);
    expect(res.range).toEqual([3, 1022]);
  });

  it('should return NaNs for invalid key', () => {
    const key = `rarara`;
    const res = RandomService.parseRewardEnvKey(key);
    expect(res.key).toBe(key);
    expect(res.range).toEqual([NaN, NaN]);
  });
});
