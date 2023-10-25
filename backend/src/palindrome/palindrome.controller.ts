import { Controller, Get, Body, Post } from '@nestjs/common';
import { ResponseMessage } from '../interceptors/response.decorator';
import { PalindromeService } from './palindrome.service';
import { PostPalindromeDto } from './dto/postPalindrome.dto';

@Controller('palindrome')
export class PalindromeController {
    constructor(private readonly palindromeService: PalindromeService) { }

    @Get()
    @ResponseMessage('Palindrome fetched Succesfully')
    getIndex() {
        return this.palindromeService.getHello()
    }

    @Post()
    @ResponseMessage('Palindrome generated Succesfully')
    generate(@Body() postPalindromeDto: PostPalindromeDto) {
        return this.palindromeService.generate(postPalindromeDto)
    }
}
