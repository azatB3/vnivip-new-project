import {Body, Controller, Delete, Get, Param, Patch, Post, Query, UploadedFiles, UseInterceptors} from '@nestjs/common';
import {NewsService} from "./news.service";
import {CreateNewsDto} from "./dto/create-news.dto";
import {FileFieldsInterceptor} from "@nestjs/platform-express";
import {ImageValidationPipe} from "../pipes/image-validation.pipe";
import {BodyValidationPipe} from "../pipes/body-validation.pipe";
import {PublishNewsDto} from "./dto/publish-news.dto";
import {DeleteNewsDto} from "./dto/delete-news.dto";
import {GetNewsPartDto} from "./dto/get-news-part.dto";

@Controller('news')
export class NewsController {

    constructor(private newsService: NewsService) {}

    @Get()
    getAll() {
        return this.newsService.getAll();
    }

    @Get('/part')
    getPart(@Query() dto: GetNewsPartDto) {
        return this.newsService.getPart(dto);
    }

    @Patch('/publish')
    publish(@Body() dto: PublishNewsDto) {
        return this.newsService.publish(dto);
    }

    @Delete()
    delete(@Body() dto: DeleteNewsDto) {
        return this.newsService.delete(dto);
    }

    @Post()
    @UseInterceptors(FileFieldsInterceptor([
        { name: 'coverImg', maxCount: 1 },
    ]))
    create(@Body() dto: CreateNewsDto,
           @UploadedFiles(
               new ImageValidationPipe({
                   maxSize: 50,
                   fieldName: 'coverImg',
                   types: ['jpeg', 'png', 'jpg'],
               }),
           ) files: { coverImg: Express.Multer.File[] }) {
        return this.newsService.create(dto, files);
    }
}
