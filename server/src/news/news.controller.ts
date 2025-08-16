import {Body, Controller, Delete, Get, Patch, Post, Query, UploadedFiles, UseInterceptors} from '@nestjs/common';
import {NewsService} from "./news.service";
import {CreateNewsDto} from "./dto/create-news.dto";
import {FileFieldsInterceptor} from "@nestjs/platform-express";
import {ImageValidationPipe} from "../pipes/image-validation.pipe";
import {PublishNewsDto} from "./dto/publish-news.dto";
import {DeleteNewsDto} from "./dto/delete-news.dto";
import {GetNewsPartDto} from "./dto/get-news-part.dto";
import {GetFullNewsDto} from "./dto/get-full-news.dto";

@Controller('news')
export class NewsController {

    constructor(private newsService: NewsService) {}

    @Get()
    getAll() {
        return this.newsService.getAll();
    }

    @Get('/main')
    getMain() {
        return this.newsService.getMain();
    }

    @Get('/some')
    getSome() {
        return this.newsService.getSome();
    }

    @Get('/part')
    getPart(@Query() dto: GetNewsPartDto) {
        return this.newsService.getPart(dto);
    }

    @Get('/full')
    getFullNews(@Query() dto: GetFullNewsDto) {
        return this.newsService.getFullNews(dto);
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
