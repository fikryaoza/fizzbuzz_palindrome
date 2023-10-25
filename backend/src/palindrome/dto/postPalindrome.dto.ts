import {
    IsNotEmpty,
    MinLength,
    MaxLength,
} from 'class-validator';

export class PostPalindromeDto {
    @IsNotEmpty()
    @MinLength(1)
    @MaxLength(150)
    keyword: string;

}