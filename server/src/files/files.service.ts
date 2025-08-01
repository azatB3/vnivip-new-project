import {HttpException, HttpStatus, Injectable} from '@nestjs/common';
import * as path from 'path'
import * as fs from 'fs';
import * as uuid from 'uuid';

@Injectable()
export class FilesService {

    async createFiles(files: any[]): Promise<string[]> {
        return files.map((file) => {
            try {
                const fileName = uuid.v4() + '.jpg';
                const filePath = path.resolve(__dirname, '..', 'static', fileName)
                fs.writeFile(filePath, file.buffer, () => console.log('Added new file: ' + filePath));
                return fileName;
            } catch (e) {
                throw new HttpException('An error occurred white writing the file', HttpStatus.INTERNAL_SERVER_ERROR)
            }
        })
    }

    async createFile(file): Promise<string> {
        try {
            const fileName = uuid.v4() + '.jpg';
            const filePath = path.resolve(__dirname, '..', 'static', fileName)
            fs.writeFile(filePath, file.buffer, () => console.log('Added new file: ' + filePath));
            return fileName;
        } catch (e) {
            throw new HttpException('An error occurred white writing the file', HttpStatus.INTERNAL_SERVER_ERROR)
        }
    }
}