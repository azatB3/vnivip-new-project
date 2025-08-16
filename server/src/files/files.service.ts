import {HttpException, HttpStatus, Injectable} from '@nestjs/common';
import * as path from 'path'
import * as fs from 'fs';
import * as uuid from 'uuid';
import * as sharp from 'sharp';
import * as ffmpeg from 'fluent-ffmpeg';
import * as ffmpegPath from 'ffmpeg-static';
import {CreateVideoResult} from "./types/create-video-result";
ffmpeg.setFfmpegPath(ffmpegPath);

@Injectable()
export class FilesService {

    async createImage(file: Express.Multer.File): Promise<string> {
        try {
            const staticPath = path.resolve(__dirname, '..', 'static', 'images');

            // Создаем папки если их нет
            await new Promise<void>((resolve) => {
                if (!fs.existsSync(staticPath)) {
                    fs.mkdirSync(staticPath, { recursive: true });
                }
                resolve()
            })

            // Сохраняем изображение оптимизируя размер
            const fileName = uuid.v4() + '.webp';
            const filePath = path.join(staticPath, fileName);
            await new Promise<void>((resolve, reject) => {
                sharp(file.buffer)
                    .resize(1000, 1000, {
                        fit: sharp.fit.inside,
                        withoutEnlargement: true
                    })
                    .webp({ quality: 100 })
                    .toFile(filePath)
                    .then(() => {
                        console.log('Added new image: ' + filePath)
                        resolve()
                    })
                    .catch(() => {
                        console.log('Error adding new image: ' + filePath)
                        reject()
                    })
            })


            return fileName;
        } catch (e) {
            console.log(e);
            throw new HttpException(`An error occurred white writing the image ${file.filename}`, HttpStatus.INTERNAL_SERVER_ERROR)
        }
    }

    async createVideo(file: Express.Multer.File): Promise<CreateVideoResult> {
        try {
            const staticPath = path.resolve(__dirname, '..', 'static', 'videos');

            // Создаем папки если их нет
            await new Promise<void>((resolve) => {
                if (!fs.existsSync(staticPath)) {
                    fs.mkdirSync(staticPath, { recursive: true });
                }
                resolve()
            })

            // Сохраняем видео
            const videoFileName = uuid.v4() + '.mp4';
            const videoFilePath = path.join(staticPath, videoFileName);
            await new Promise<void>((resolve) => {
                fs.writeFileSync(videoFilePath, file.buffer);
                console.log('Added new video: ' + videoFilePath);
                resolve();
            })

            // Берем 1 кадр для превью
            const posterFileName = `poster-${videoFileName}.png`;
            const posterFilePath = path.join(staticPath, posterFileName);
            await new Promise<void>((resolve, reject) => {
                ffmpeg(videoFilePath)
                    .seekInput('00:00:01')
                    .frames(1)
                    .save(posterFilePath)
                    .on('end', () => {
                        console.log(`Added new poster: ${posterFilePath}`);
                        resolve();
                    })
                    .on('error', (err) => {
                        console.error('Error extracting poster: ', err);
                        reject()
                    })
            })

            return {
                videoFileName: videoFileName,
                posterFileName: posterFileName,
            };
        } catch (e) {
            throw new HttpException(`An error occurred white writing the video ${file.filename}`, HttpStatus.INTERNAL_SERVER_ERROR)
        }
    }
}