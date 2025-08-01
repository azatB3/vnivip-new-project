import {Body, Controller, Post, UploadedFile, UseInterceptors, UsePipes} from '@nestjs/common';
import {ParagraphsService} from "./paragraphs.service";
import {CreateParagraphDto} from "./dto/create-paragraph.dto";
import {FileInterceptor} from "@nestjs/platform-express";
import {ImageValidationPipe} from "../pipes/image-validation.pipe";
import {BodyValidationPipe} from "../pipes/body-validation.pipe";

@Controller('paragraphs')
export class ParagraphsController {

    constructor(private paragraphsService: ParagraphsService) {}

    @Post()
    @UsePipes(BodyValidationPipe)
    @UsePipes(new ImageValidationPipe({
        maxSize: 50,
        fieldName: 'img',
    }))
    @UseInterceptors(FileInterceptor('img'))
    create(@Body() dto: CreateParagraphDto,
           @UploadedFile() img: Express.Multer.File) {
        return this.paragraphsService.create(dto, img);
    }
}
