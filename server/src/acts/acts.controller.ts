import {Body, Controller, Get, Post, UploadedFiles, UseInterceptors} from '@nestjs/common';
import {ActsService} from "./acts.service";
import {CreateActDto} from "./dto/create-act.dto";
import {FileFieldsInterceptor} from "@nestjs/platform-express";
import {DocumentValidationPipe} from "../pipes/document-validation.pipe";

@Controller('acts')
export class ActsController {
    constructor(private actsService: ActsService) {}

    @Post()
    @UseInterceptors(FileFieldsInterceptor([
        { name: 'staticFile', maxCount: 1 },
    ]))
    create(@Body() dto: CreateActDto,
           @UploadedFiles(
               new DocumentValidationPipe({
                   maxSize: 50,
                   fieldName: 'staticFile',
               }),
           ) files: { staticFile?: Express.Multer.File[] }) {
        return this.actsService.create(dto, files);
    }

    @Get()
    getAll() {
        return this.actsService.getAll();
    }
}
