import { Injectable, Logger } from '@nestjs/common';


@Injectable()
export class FizzbuzzService {
    getHello(): string {
        return 'Hello World!';
    }

    generate(postData: any): string[] {
        var data: string[] = []
        for (let i = 1; i <= postData.length; i++) {
            var result: any = i
            if (i % 3 === 0 && i % 5 === 0) result = "FizzBuzz"
            else if (i % 5 === 0) result = "Buzz"
            else if (i % 3 === 0) result = "Fizz"
            else result = i
            data.push(result)
        }
        return data
    }
}
