import {IsNotEmpty} from "class-validator";
import {IsIntString} from "../../decorators/IsIntString";

export class GetNewsPartDto {
    @IsNotEmpty({message: 'cannot be empty'})
    @IsIntString({message: 'required integer'})
    readonly page: number;

    @IsNotEmpty({message: 'cannot be empty'})
    @IsIntString({message: 'required integer'})
    readonly limit: number;
}
