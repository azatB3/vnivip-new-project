import {Body, Controller, Get, Post} from '@nestjs/common';
import {VacanciesService} from "./vacancies.service";
import {CreateVacancyDto} from "./dto/create-vacancy.dto";

@Controller('vacancies')
export class VacanciesController {
    constructor(private vacanciesService: VacanciesService) {}

    @Post()
    create(@Body() dto: CreateVacancyDto) {
        return this.vacanciesService.create(dto);
    }

    @Get()
    getAll() {
        return this.vacanciesService.getAll();
    }
}
