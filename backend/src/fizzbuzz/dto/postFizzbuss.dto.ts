import {
    IsNotEmpty,
    Min,
    Max,
} from 'class-validator';

export class PostFizzbuzzDto {
    @IsNotEmpty()
    @Min(1)
    @Max(150)
    length: number;

}