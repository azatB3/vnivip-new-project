import {IsNotEmpty, IsString, Length} from "class-validator";
import {IsUndefined} from "../../decorators/IsUndefined";

export class CreateNewsDto {
    @IsNotEmpty({message: 'cannot be empty'})
    @IsString({message: 'required string'})
    @Length(1, 64, {message: 'required length from 1 to 64'})
    readonly title: string;

    @IsNotEmpty({message: 'cannot be empty'})
    @IsString({message: 'required string'})
    @Length(1, 128, {message: 'required length from 1 to 128'})
    readonly description: string;

    @IsUndefined({message: 'can be only image in form-data'})
    coverImg?: string;
}
