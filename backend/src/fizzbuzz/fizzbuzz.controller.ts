import { Controller, Body, Get, Post } from '@nestjs/common';
import { ResponseMessage } from '../interceptors/response.decorator';
import { FizzbuzzService } from './fizzbuzz.service';
import { PostFizzbuzzDto } from './dto/postFizzbuss.dto';

@Controller('fizzbuzz')
export class FizzbuzzController {
    constructor(private readonly fizzbuzzService: FizzbuzzService) { }

    @Get()
    @ResponseMessage('Book records fetched Succesfully')
    getIndex() {
        return this.fizzbuzzService.getHello()
    }

    @Post()
    @ResponseMessage('Fizzbuzz generated Succesfully')
    generate(@Body() postFizzbuzzDto: PostFizzbuzzDto) {
        return { result: this.fizzbuzzService.generate(postFizzbuzzDto) }
    }


}
