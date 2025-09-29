import {Module} from '@nestjs/common';
import {ActsController} from './acts.controller';
import {ActsService} from './acts.service';
import {SequelizeModule} from "@nestjs/sequelize";
import {Act} from "./acts.model";
import {FilesModule} from "../files/files.module";

@Module({
  controllers: [ActsController],
  providers: [ActsService],
  imports: [
    SequelizeModule.forFeature([Act]),
    FilesModule,
  ],
  exports: [
      ActsService,
  ],
})
export class ActsModule {}
