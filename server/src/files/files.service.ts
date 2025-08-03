import {HttpException, HttpStatus, Injectable} from '@nestjs/common';
import * as path from 'path'
import * as fs from 'fs';
import * as uuid from 'uuid';
import * as sharp from 'sharp';

@Injectable()
export class FilesService {

    async createImage(file: Express.Multer.File): Promise<string> {
        try {
            const fileName = uuid.v4() + '.webp';
            const staticPath = path.resolve(__dirname, '..', 'static', 'images');
            if (!fs.existsSync(staticPath)) {
                fs.mkdirSync(staticPath, { recursive: true });
            }

            const filePath = path.join(staticPath, fileName);
            sharp(file.buffer)
                .resize(2000, 1500, {
                    fit: sharp.fit.inside,
                    withoutEnlargement: true
                })
                .webp({ quality: 100 })
                .toFile(filePath);
            console.log('Added new image: ' + filePath)

            return fileName;
        } catch (e) {
            console.log(e);
            throw new HttpException(`An error occurred white writing the image ${file.filename}`, HttpStatus.INTERNAL_SERVER_ERROR)
        }
    }

    async createVideo(file: Express.Multer.File): Promise<string> {
        try {
            const fileName = uuid.v4() + '.mp4';
            const staticPath = path.resolve(__dirname, '..', 'static', 'videos');
            if (!fs.existsSync(staticPath)) {
                fs.mkdirSync(staticPath, { recursive: true });
            }

            const filePath = path.join(staticPath, fileName);
            fs.writeFileSync(filePath, file.buffer);
            console.log('Added new video: ' + filePath);

            return fileName;
        } catch (e) {
            throw new HttpException(`An error occurred white writing the video ${file.filename}`, HttpStatus.INTERNAL_SERVER_ERROR)
        }
    }
}