import { IsNotEmpty, IsOptional, MaxLength, MinLength } from "class-validator";

export class CreateUserDto {
    @MinLength(4)
    @MaxLength(50)
    @IsNotEmpty()
    firstName: string;

    @MinLength(4)
    @MaxLength(50)
    @IsNotEmpty()
    lastName: string;

    @IsOptional()
    @MaxLength(50)
    mail?: string;
}
