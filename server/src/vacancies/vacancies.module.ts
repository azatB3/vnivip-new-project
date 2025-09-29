import {Module} from '@nestjs/common';
import {VacanciesController} from './vacancies.controller';
import {VacanciesService} from './vacancies.service';
import {SequelizeModule} from "@nestjs/sequelize";
import {Vacancy} from "./vacancies.model";

@Module({
  controllers: [VacanciesController],
  providers: [VacanciesService],
  imports: [
    SequelizeModule.forFeature([Vacancy]),
  ],
  exports: [
      VacanciesService,
  ],
})
export class VacanciesModule {}
