import {forwardRef, Module} from '@nestjs/common';
import {SequelizeModule} from "@nestjs/sequelize";
import {Paragraph} from "./paragraphs.model";
import {ParagraphsController} from './paragraphs.controller';
import {ParagraphsService} from './paragraphs.service';
import {FilesModule} from "../files/files.module";
import {NewsModule} from "../news/news.module";

@Module({
    providers: [ParagraphsService],
    controllers: [ParagraphsController],
    imports: [
        forwardRef(() => NewsModule),
        SequelizeModule.forFeature([Paragraph]),
        FilesModule,
    ],
    exports: [
        ParagraphsService,
    ],
})
export class ParagraphsModule {}
