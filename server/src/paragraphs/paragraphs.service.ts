import {HttpException, HttpStatus, Injectable} from '@nestjs/common';
import {CreateParagraphDto} from "./dto/create-paragraph.dto";
import {FilesService} from "../files/files.service";
import {NewsService} from "../news/news.service";
import {InjectModel} from "@nestjs/sequelize";
import {Paragraph} from "./paragraphs.model";
import {ChangeAlignTextParagraphDto} from "./dto/change-align-text-paragraph.dto";

@Injectable()
export class ParagraphsService {
    constructor(@InjectModel(Paragraph) private paragraphsRepository: typeof Paragraph,
                private fileService: FilesService,
                private newsService: NewsService) {}

    async create(dto: CreateParagraphDto, files: { img?: Express.Multer.File[], video?: Express.Multer.File[]}) {
        const img = files?.img?.[0];
        const video = files?.video?.[0];

        // Проверки
        if (dto.text || img || video) {
            const data: CreateParagraphDto = {
                newsId: dto.newsId,
                text: dto.text,
                firstElement: 'text',
            }


            if(img && video) {
                throw new HttpException('only one video or image required', HttpStatus.BAD_REQUEST)
            }

            const news = await this.newsService.findOne(data.newsId);
            if (!news) {
                throw new HttpException('the news with this newsId not found', HttpStatus.BAD_REQUEST)
            }



            // Обработка
            if (img) {
                data.img = await this.fileService.createImage(img);
            }
            if (video) {
                const files = await this.fileService.createVideo(video)
                data.video = files.videoFileName;
                data.videoPoster = files.posterFileName;
            }

            if (!data.text) {
                data.firstElement = 'media';
            }

            const paragraphPosition = news.paragraphs.length;
            data.position = paragraphPosition;

            const paragraph = await this.paragraphsRepository.create(data);
            await news.$add('paragraphs', [paragraph.id])
            return paragraph;
        }

        throw new HttpException('text or image or video required', HttpStatus.BAD_REQUEST)
    }

    async getAll() {
        return await this.paragraphsRepository.findAll();
    }

    async changeAlignText(dto: ChangeAlignTextParagraphDto) {
        const paragraph = await this.paragraphsRepository.findOne({ where: { id: dto.paragraphId }})

        if (!paragraph) {
            throw new HttpException('paragraph with the id not found', HttpStatus.BAD_REQUEST)
        }

        if (paragraph.alignText === dto.alignText) {
            throw new HttpException('paragraph already have the alignText', HttpStatus.BAD_REQUEST)
        }

        await paragraph.update({ alignText: dto.alignText })
        paragraph.alignText = dto.alignText;

        return paragraph;
    }
}
