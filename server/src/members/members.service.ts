import {Injectable} from '@nestjs/common';
import {InjectModel} from "@nestjs/sequelize";
import {Member} from "./members.model";
import {CreateMemberDto} from "./dto/create-member.dto";
import {FilesService} from "../files/files.service";
import {GetBySectionDto} from "./dto/get-by-section.dto";
import {Op} from "sequelize";

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

    async getBySection(dto: GetBySectionDto) {
        return await this.membersRepository.findAll({
            where: {
                section: dto.section,
            }
        })
    }

    async getDepartments() {
        return await this.membersRepository.findAll({
            where: {
                section: {
                    [Op.iLike]: `%DEPARTMENT%`
                },
            }
        })
    }
}
