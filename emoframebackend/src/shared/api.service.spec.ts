import { Test, TestingModule } from '@nestjs/testing';
import { ApiService } from './api.service';

describe('ApiService', () => {
  let provider: ApiService;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      providers: [ApiService],
    }).compile();

    provider = module.get<ApiService>(ApiService);
  });

  it('should be defined', () => {
    expect(provider).toBeDefined();
  });
});
