import {Module} from '@nestjs/common';
import {CompetitionsController} from './competitions.controller';
import {CompetitionsService} from './competitions.service';
import {SequelizeModule} from "@nestjs/sequelize";
import {Competition} from "./competitions.model";

@Module({
  controllers: [CompetitionsController],
  providers: [CompetitionsService],
  imports: [
    SequelizeModule.forFeature([Competition]),
  ],
  exports: [
      CompetitionsService,
  ],
})
export class CompetitionsModule {}
