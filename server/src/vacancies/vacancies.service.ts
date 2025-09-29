import { Injectable } from '@nestjs/common';
import {InjectModel} from "@nestjs/sequelize";
import {Vacancy} from "./vacancies.model";
import {CreateVacancyDto} from "./dto/create-vacancy.dto";

@Injectable()
export class VacanciesService {
    constructor(@InjectModel(Vacancy) private vacancyRepository: typeof Vacancy) {}

    async create(dto: CreateVacancyDto) {
        return this.vacancyRepository.create(dto);
    }

    async getAll() {
        return this.vacancyRepository.findAll({
            order: [
                ['createdAt', 'DESC']
            ]
        });
    }
}
