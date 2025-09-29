import {Module} from "@nestjs/common";
import {SequelizeModule} from "@nestjs/sequelize";
import * as process from "node:process";
import {NewsModule} from './news/news.module';
import {ParagraphsModule} from './paragraphs/paragraphs.module';
import {News} from "./news/news.model";
import {Paragraph} from "./paragraphs/paragraphs.model";
import {FilesModule} from "./files/files.module";
import {ThrottlerGuard, ThrottlerModule} from "@nestjs/throttler";
import {APP_GUARD} from "@nestjs/core";
import {MembersModule} from './members/members.module';
import {Member} from "./members/members.model";
import { VacanciesModule } from './vacancies/vacancies.module';
import {Vacancy} from "./vacancies/vacancies.model";
import {CompetitionsModule} from "./competitions/competitions.module";
import {Competition} from "./competitions/competitions.model";
import {ActsModule} from "./acts/acts.module";
import {Act} from "./acts/acts.model";

@Module({
    controllers: [],
    providers: [
        {
            provide: APP_GUARD,
            useClass: ThrottlerGuard,
        },
    ],
    imports: [
        SequelizeModule.forRoot({
            dialect: process.env.DB_DIALECT as undefined,
            host: process.env.POSTGRES_HOST,
            port: Number(process.env.POSTGRES_PORT),
            username: process.env.POSTGRES_USER,
            password: process.env.POSTGRES_PASSWORD,
            database: process.env.POSTGRES_DB,
            models: [
                News,
                Paragraph,
                Member,
                Vacancy,
                Competition,
                Act,
            ],
            autoLoadModels: true,
        }),
        ThrottlerModule.forRoot({
            ttl: 60,
            limit: 60,
        }),
        ParagraphsModule,
        NewsModule,
        FilesModule,
        MembersModule,
        VacanciesModule,
        CompetitionsModule,
        ActsModule,
    ]
})
export class AppModule {

}