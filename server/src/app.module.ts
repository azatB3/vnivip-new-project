import {Module} from "@nestjs/common";
import {SequelizeModule} from "@nestjs/sequelize";
import * as process from "node:process";
import {ServeStaticModule} from "@nestjs/serve-static";
import {NewsModule} from './news/news.module';
import {ParagraphsModule} from './paragraphs/paragraphs.module';
import * as path from "node:path";
import {News} from "./news/news.model";
import {Paragraph} from "./paragraphs/paragraphs.model";
import {FilesModule} from "./files/files.module";
import {ThrottlerGuard, ThrottlerModule} from "@nestjs/throttler";
import {APP_GUARD} from "@nestjs/core";

@Module({
    controllers: [],
    providers: [
        {
            provide: APP_GUARD,
            useClass: ThrottlerGuard,
        },
    ],
    imports: [
        ServeStaticModule.forRoot({
            rootPath: path.resolve(__dirname, 'static'),
            serveStaticOptions: {
                index: false,
            },
        }),
        SequelizeModule.forRoot({
            dialect: process.env.DB_DIALECT as undefined,
            host: process.env.POSTGRES_HOST,
            port: Number(process.env.POSTGRES_PORT),
            username: process.env.POSTGRES_USER,
            password: process.env.POSTGRES_PASSWORD,
            database: process.env.POSTGRES_DB,
            models: [News, Paragraph],
            autoLoadModels: true,
        }),
        ThrottlerModule.forRoot({
            ttl: 60,
            limit: 30,
        }),
        ParagraphsModule,
        NewsModule,
        FilesModule,
    ]
})
export class AppModule {

}