import {Injectable} from '@nestjs/common';
import {CreateNewsDto} from "./dto/create-news.dto";
import {FilesService} from "../files/files.service";
import {InjectModel} from "@nestjs/sequelize";
import {News} from "./news.model";

@Injectable()
export class NewsService {

    constructor(@InjectModel(News) private newsRepository: typeof News,
                private fileService: FilesService) {}

    async create(dto: CreateNewsDto, coverImg: Express.Multer.File) {
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


    // Полные данные
    async getAll() {
        return await this.newsRepository.findAll({include: {all: true}});
    }

    // Данные без объединения
    async getPart() {
        return await this.newsRepository.findAll();
    }

    // Одна полная сущность
    async findOne(newsId: number) {
        return this.newsRepository.findOne({ where: { id: newsId }, include: {all: true}});
    }
}
