import {Injectable} from '@nestjs/common';
import {InjectModel} from "@nestjs/sequelize";
import {Member} from "./members.model";
import {CreateMemberDto} from "./dto/create-member.dto";
import {FilesService} from "../files/files.service";

@Injectable()
export class MembersService {

    constructor(@InjectModel(Member) private membersRepository: typeof Member,
                private fileService: FilesService) {}

    async create(dto: CreateMemberDto, files: { avatar?: Express.Multer.File[] }) {
        const avatar = files?.avatar?.[0];

        const data: CreateMemberDto = {
            fullName: dto.fullName,
            jobName: dto.jobName,
            status: dto.status,
            section: dto.section,
            email: dto.email,
            phone: dto.phone,
        }

        const members = await this.membersRepository.findAll({ where: { section: data.section }});
        data.position = members.length;

        if (avatar) {
            data.avatar = await this.fileService.createImage(avatar);
        }

        return await this.membersRepository.create(data);
    }

    async getAll() {
        return await this.membersRepository.findAll();
    }
}
