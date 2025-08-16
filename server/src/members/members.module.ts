import {Module} from '@nestjs/common';
import {MembersService} from './members.service';
import {MembersController} from './members.controller';
import {SequelizeModule} from "@nestjs/sequelize";
import {Member} from "./members.model";
import {FilesModule} from "../files/files.module";

@Module({
  providers: [MembersService],
  controllers: [MembersController],
  imports: [
    SequelizeModule.forFeature([Member]),
    FilesModule,
  ],
  exports: [
    MembersService,
  ]
})
export class MembersModule {}
