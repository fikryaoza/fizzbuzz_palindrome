import { Injectable } from '@nestjs/common';

@Injectable()
export class PalindromeService {
    getHello(): string {
        return 'Hello World!';
    }

    generate(postData: any): any {
        var data: string = postData.keyword
        data = data.toLowerCase().replace(/\s/g, "").replace(/[\W_]+/g, "");
        let a = data.split("")
        let rev = ""
        for (let j = a.length - 1; j >= 0; j--) {
            rev += a[j]
        }
        return data === rev ? { isPalindrome: true } : { isPalindrome: false }
    }
}
