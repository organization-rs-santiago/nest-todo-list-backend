import { IsDate, IsNumber, IsString } from "class-validator";

export class CreateTodoDto {
    @IsString()
    title: string;

    @IsString()
    body: string;
    
    @IsString()
    state: string;

    @IsNumber()
    categoryId: number;

    @IsDate()
    createAt: Date
}
