import { Module } from '@nestjs/common';
import { PalindromeService } from './palindrome.service';

@Module({
  providers: [PalindromeService]
})
export class PalindromeModule {}
