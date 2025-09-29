import {Injectable} from '@nestjs/common';
import {InjectModel} from "@nestjs/sequelize";
import {CreateCompetitionDto} from "./dto/create-competition.dto";
import {Competition} from "./competitions.model";

@Injectable()
export class CompetitionsService {
    constructor(@InjectModel(Competition) private competitionRepository: typeof Competition) {}

    async create(dto: CreateCompetitionDto) {
        return this.competitionRepository.create(dto);
    }

    async getAll() {
        return this.competitionRepository.findAll({
            order: [
                ['createdAt', 'DESC']
            ]
        });
    }
}
