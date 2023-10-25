import { Test, TestingModule } from '@nestjs/testing';
import { PalindromeController } from './palindrome.controller';

describe('PalindromeController', () => {
  let controller: PalindromeController;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      controllers: [PalindromeController],
    }).compile();

    controller = module.get<PalindromeController>(PalindromeController);
  });

  it('should be defined', () => {
    expect(controller).toBeDefined();
  });
});
