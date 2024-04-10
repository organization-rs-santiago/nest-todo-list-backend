import { IsDate, IsDateString, IsNumber, IsString } from "class-validator";

export class CreateTodoDto {
    @IsString()
    title: string;

    @IsString()
    body: string;
    
    @IsString()
    state: string;

    @IsNumber()
    categoryId: number;

    @IsDateString()
    createdAt: Date;
}
