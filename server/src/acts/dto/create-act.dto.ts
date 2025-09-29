import {IsUndefined} from "../../decorators/IsUndefined";

export class CreateActDto {
    @IsUndefined({message: 'can be only image in form-data'})
    staticFile?: string;

    name?: string;
}