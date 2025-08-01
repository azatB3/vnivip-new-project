import {Body, Controller, Get, Post, UploadedFile, UseInterceptors, UsePipes} from '@nestjs/common';
import {NewsService} from "./news.service";
import {CreateNewsDto} from "./dto/create-news.dto";
import {FileInterceptor} from "@nestjs/platform-express";
import {ImageValidationPipe} from "../pipes/image-validation.pipe";
import {BodyValidationPipe} from "../pipes/body-validation.pipe";

@Controller('news')
export class NewsController {

    constructor(private newsService: NewsService) {}

    @Get()
    getAll() {
        return this.newsService.getAll();
    }

    @Post()
    @UsePipes(BodyValidationPipe)
    @UsePipes(new ImageValidationPipe({
        maxSize: 50,
        fieldName: 'coverImg',
    }))
    @UseInterceptors(FileInterceptor('coverImg'))
    create(@Body() dto: CreateNewsDto,
           @UploadedFile() coverImg: Express.Multer.File) {
        return this.newsService.create(dto, coverImg);
    }
}
