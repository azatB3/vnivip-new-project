import {Body, Controller, Get, Post, Query, UploadedFiles, UseInterceptors} from '@nestjs/common';
import {MembersService} from "./members.service";
import {CreateMemberDto} from "./dto/create-member.dto";
import {ImageValidationPipe} from "../pipes/image-validation.pipe";
import {FileFieldsInterceptor} from "@nestjs/platform-express";
import {GetBySectionDto} from "./dto/get-by-section.dto";

@Controller('members')
export class MembersController {

    constructor(private membersService: MembersService) {}

    @Get()
    getAll() {
        return this.membersService.getAll();
    }

    @Get('departments')
    getDepartments() {
        return this.membersService.getDepartments();
    }

    @Get('section')
    getBySection(@Query() dto: GetBySectionDto) {
        return this.membersService.getBySection(dto);
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
