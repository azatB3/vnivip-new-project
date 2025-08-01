import {Controller} from '@nestjs/common';
import {UsersService} from "./users.service";
import {ApiTags} from "@nestjs/swagger";

@ApiTags('Пользователи')
@Controller('users')
export class UsersController {
    constructor(private userService: UsersService) {}

}
