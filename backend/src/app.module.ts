import { Module } from '@nestjs/common';
import { APP_INTERCEPTOR } from '@nestjs/core';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { FizzbuzzController } from './fizzbuzz/fizzbuzz.controller';
import { FizzbuzzService } from './fizzbuzz/fizzbuzz.service';
import { FizzbuzzModule } from './fizzbuzz/fizzbuzz.module';
import { TransformationInterceptor } from './interceptors/transform.interceptor';
import { PalindromeController } from './palindrome/palindrome.controller';
import { PalindromeModule } from './palindrome/palindrome.module';
import { PalindromeService } from './palindrome/palindrome.service';

@Module({
  imports: [FizzbuzzModule, PalindromeModule],
  controllers: [AppController, FizzbuzzController, PalindromeController],
  providers: [AppService, FizzbuzzService, PalindromeService, {
    provide: APP_INTERCEPTOR,
    useClass: TransformationInterceptor,
  }],
})
export class AppModule { }
