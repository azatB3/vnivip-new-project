import {Body, Controller, Get, Post, UploadedFiles, UseInterceptors} from '@nestjs/common';
import {MembersService} from "./members.service";
import {CreateMemberDto} from "./dto/create-member.dto";
import {ImageValidationPipe} from "../pipes/image-validation.pipe";
import {FileFieldsInterceptor} from "@nestjs/platform-express";

@Controller('members')
export class MembersController {

    constructor(private membersService: MembersService) {}

    @Get()
    getAll() {
        return this.membersService.getAll();
    }

    @Post()
    @UseInterceptors(FileFieldsInterceptor([
        { name: 'avatar', maxCount: 1 },
    ]))
    create(@Body() dto: CreateMemberDto,
           @UploadedFiles(
               new ImageValidationPipe({
                   maxSize: 20,
                   fieldName: 'avatar',
                   types: ['jpeg', 'png', 'jpg'],
               }),
           ) files: { avatar?: Express.Multer.File[] }) {
        return this.membersService.create(dto, files);
    }
}
