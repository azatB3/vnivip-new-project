import {Body, Controller, Get, Post} from '@nestjs/common';
import {CompetitionsService} from "./competitions.service";
import {CreateCompetitionDto} from "./dto/create-competition.dto";

@Controller('competitions')
export class CompetitionsController {
    constructor(private competitionsService: CompetitionsService) {}

    @Post()
    create(@Body() dto: CreateCompetitionDto) {
        return this.competitionsService.create(dto);
    }

    @Get()
    getAll() {
        return this.competitionsService.getAll();
    }
}
