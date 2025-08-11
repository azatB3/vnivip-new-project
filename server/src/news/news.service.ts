import {HttpException, HttpStatus, Injectable} from '@nestjs/common';
import {CreateNewsDto} from "./dto/create-news.dto";
import {FilesService} from "../files/files.service";
import {InjectModel} from "@nestjs/sequelize";
import {News} from "./news.model";
import {PublishNewsDto} from "./dto/publish-news.dto";
import {DeleteNewsDto} from "./dto/delete-news.dto";
import {GetNewsPartDto} from "./dto/get-news-part.dto";
import {Op} from "sequelize";

@Injectable()
export class NewsService {

    constructor(@InjectModel(News) private newsRepository: typeof News,
                private fileService: FilesService) {}

    async create(dto: CreateNewsDto, files: { coverImg: Express.Multer.File[] }) {
        const coverImg = files.coverImg?.[0];
        const data: CreateNewsDto = {
            title: dto.title,
            description: dto.description,
        }
        if (coverImg) {
            data.coverImg = await this.fileService.createImage(coverImg);
        }
        const news = await this.newsRepository.create(data);
        return news;
    }

    async delete(dto: DeleteNewsDto) {
        const news = await this.newsRepository.findOne({ where: { id: dto.newsId } });

        if(!news) {
            throw new HttpException('the news with this newsId not found', HttpStatus.BAD_REQUEST)
        }

        await news.destroy();

        return news;
    }

    async publish(dto: PublishNewsDto) {
        const news = await this.newsRepository.findOne({ where: { id: dto.newsId }, include: {all: true}});

        if(!news) {
            throw new HttpException('the news with this newsId not found', HttpStatus.BAD_REQUEST)
        }

        if(news.published) {
            throw new HttpException('the news has already been published', HttpStatus.BAD_REQUEST)
        }

        if(!news.paragraphs.length) {
            throw new HttpException('the news have not content', HttpStatus.BAD_REQUEST)
        }

        await news.update({ published: true });
        news.published = true;

        return news;
    }

    // Полные данные
    async getAll() {
        return await this.newsRepository.findAll({
            order: [
                ['createdAt', 'DESC']
            ]
        });
    }

    // Данные без объединения
    async getPart(dto: GetNewsPartDto) {
        const offset = (dto.limit * dto.page) - dto.limit;
        return await this.newsRepository.findAll({
            offset: offset,
            limit: dto.limit,
            where: {
                published: true,
            },
            order: [['createdAt', 'DESC']],
        });
    }

    // Одна полная сущность
    async findOne(newsId: number) {
        return await this.newsRepository.findOne({ where: { id: newsId }, include: {all: true}});
    }
}
