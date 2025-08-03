import {Body, Controller, Get, Post, UploadedFile, UseInterceptors, UsePipes} from '@nestjs/common';
import {NewsService} from "./news.service";
import {CreateNewsDto} from "./dto/create-news.dto";
import {FileFieldsInterceptor, FileInterceptor} from "@nestjs/platform-express";
import {ImageValidationPipe} from "../pipes/image-validation.pipe";
import {BodyValidationPipe} from "../pipes/body-validation.pipe";

@Controller('news')
export class NewsController {

    constructor(private newsService: NewsService) {}

    @Get()
    getAll() {
        return this.newsService.getAll();
    }

    @Get('/part')
    getPart() {
        return this.newsService.getPart();
    }

    @Post()
    @UseInterceptors(FileFieldsInterceptor([
        { name: 'coverImg', maxCount: 1 },
    ]))
    create(@Body(new BodyValidationPipe()) dto: CreateNewsDto,
           @UploadedFile(
               new ImageValidationPipe({
                   maxSize: 50,
                   fieldName: 'coverImg',
                   types: ['jpeg', 'png', 'jpg'],
               }),
           ) coverImg: Express.Multer.File) {
        return this.newsService.create(dto, coverImg);
    }
}
