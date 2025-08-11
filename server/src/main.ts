import * as process from "node:process";
import {NestFactory} from "@nestjs/core";
import {AppModule} from "./app.module";
import {DocumentBuilder, SwaggerModule} from "@nestjs/swagger";
import * as express from 'express';
import {BodyValidationPipe} from "./pipes/body-validation.pipe";
import { resolve } from "node:path";
import {NestExpressApplication} from "@nestjs/platform-express";

async function start() {
    const PORT = process.env.PORT || 5000;
    const app = await NestFactory.create<NestExpressApplication>(AppModule)
    app.enableCors({
        origin: "*"
    })
    app.use(express.json({ limit: '10kb' }));
    app.use(express.urlencoded({ extended: true, limit: '10kb' }));
    app.setGlobalPrefix('api');
    app.use('/api/static', express.static(resolve(__dirname, 'static')))

    app.use((err, req, res, next) => {
        if (err.statusCode === 413) {
            return res.status(413).send({ statusCode: 413, message: 'The request size includes the allowed limit (10 KB)'});
        }
    });

    app.useGlobalPipes(new BodyValidationPipe());

    const config = new DocumentBuilder()
        .setTitle('Vnivip API')
        .setDescription('ENDPOINTS')
        .setVersion('1.0.0')
        .build()
    const document = SwaggerModule.createDocument(app, config);
    SwaggerModule.setup('/docs', app, document);

    await app.listen(PORT, () => console.log(`Server started on port = ${PORT}`))
}

start();




