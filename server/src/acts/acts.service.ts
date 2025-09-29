import {HttpException, HttpStatus, Injectable} from '@nestjs/common';
import {InjectModel} from "@nestjs/sequelize";
import {CreateActDto} from "./dto/create-act.dto";
import {Act} from "./acts.model";
import {FilesService} from "../files/files.service";
import {CreateDocumentResult} from "../files/types/create-document-result";

@Injectable()
export class ActsService {
    constructor(@InjectModel(Act) private actsRepository: typeof Act,
                private fileService: FilesService) {}

    async create(dto: CreateActDto, files: { staticFile?: Express.Multer.File[] }) {
        const staticFile = files?.staticFile?.[0];

        if (!staticFile) {
            throw new HttpException('staticFile is required', HttpStatus.BAD_REQUEST)
        }

        const savedFile: CreateDocumentResult = await this.fileService.createDocument(staticFile);

        const act = await this.actsRepository.create({
            name: savedFile.name,
            staticFile: savedFile.staticPath,
            size: savedFile.size,
        })

        return act;
    }

    async getAll() {
        return this.actsRepository.findAll({
            order: [
                ['createdAt', 'DESC']
            ]
        });
    }
}
