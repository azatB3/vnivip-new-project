import {HttpException, HttpStatus, Injectable} from '@nestjs/common';
import {CreateParagraphDto} from "./dto/create-paragraph.dto";
import {FilesService} from "../files/files.service";
import {NewsService} from "../news/news.service";
import {InjectModel} from "@nestjs/sequelize";
import {Paragraph} from "./paragraphs.model";

@Injectable()
export class ParagraphsService {
    constructor(@InjectModel(Paragraph) private paragraphsRepository: typeof Paragraph,
                private fileService: FilesService,
                private newsService: NewsService) {}

    async create(dto: CreateParagraphDto, img: Express.Multer.File) {
        if (dto.text || img) {
            const data: CreateParagraphDto = {
                newsId: dto.newsId,
                text: dto.text,
            }

            const news = await this.newsService.findOne(data.newsId);
            if (!news) {
                throw new HttpException('the news with this newsId not found', HttpStatus.BAD_REQUEST)
            }

            if (img) {
                data.img = await this.fileService.createFile(img);
            }

            const paragraphPosition = news.paragraphs.length;
            data.position = paragraphPosition;

            const paragraph = await this.paragraphsRepository.create(data);
            await news.$add('paragraphs', [paragraph.id])
            return paragraph;
        }

        throw new HttpException('text or image required', HttpStatus.BAD_REQUEST)
    }
}
