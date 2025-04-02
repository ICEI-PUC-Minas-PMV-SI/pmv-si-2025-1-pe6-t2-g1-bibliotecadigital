import { IsInt, IsNotEmpty, Max, Min } from "class-validator";

export class UpdateReviewDto {
    @IsInt()
    @Min(1)
    @Max(5)
    rating: number;
    
    @IsNotEmpty()
    comment: string;
}