import {Body, Controller, Get, Patch, Post, UploadedFiles, UseInterceptors} from '@nestjs/common';
import {ParagraphsService} from "./paragraphs.service";
import {CreateParagraphDto} from "./dto/create-paragraph.dto";
import {FileFieldsInterceptor} from "@nestjs/platform-express";
import {ImageValidationPipe} from "../pipes/image-validation.pipe";
import {VideoValidationPipe} from "../pipes/video-validation.pipe";
import {ChangeAlignTextParagraphDto} from "./dto/change-align-text-paragraph.dto";

@Controller('paragraphs')
export class ParagraphsController {

    constructor(private paragraphsService: ParagraphsService) {}

    @Get()
    getAll() {
        return this.paragraphsService.getAll();
    }

    @Patch('change-align')
    changeAlignText(@Body() dto: ChangeAlignTextParagraphDto) {
        return this.paragraphsService.changeAlignText(dto);
    }

    @Post()
    @UseInterceptors(FileFieldsInterceptor([
        { name: 'img', maxCount: 1 },
        { name: 'video', maxCount: 1 },
    ]))
    create(@Body() dto: CreateParagraphDto,
           @UploadedFiles(
               new VideoValidationPipe({
                   maxSize: 100,
                   fieldName: 'video',
                   types: ['mp4'],
               }),
               new ImageValidationPipe({
                   maxSize: 20,
                   fieldName: 'img',
                   types: ['jpeg', 'png', 'jpg'],
               }),
           ) files: { img?: Express.Multer.File[], video?: Express.Multer.File[]}) {
        return this.paragraphsService.create(dto, files);
    }
}
