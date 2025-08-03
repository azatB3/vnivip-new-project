import {IsNotEmpty, IsNumberString, IsOptional, IsString, Length} from "class-validator";
import {IsUndefined} from "../../decorators/IsUndefined";

export class CreateParagraphDto {
    @IsNotEmpty({message: 'cannot be empty'})
    @IsNumberString({}, {message: 'required number string'})
    @Length(1, 32, {message: 'required length from 1 to 32'})
    readonly newsId: number;

    @IsOptional()
    @IsString({message: 'required string'})
    @Length(1, 512, {message: 'required length from 1 to 512'})
    readonly text: string;

    @IsUndefined({message: 'can be only image in form-data'})
    img?: string;

    @IsUndefined({message: 'can be only video in form-data'})
    video?: string;

    position?: number;

    firstElement?: string;
}