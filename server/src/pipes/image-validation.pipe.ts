import {HttpException, HttpStatus, Injectable, PipeTransform} from "@nestjs/common";

export interface ImageValidationOptions {
    maxSize: number;
    fieldName: string;
}

@Injectable()
export class ImageValidationPipe implements PipeTransform<any> {

    constructor(private readonly options: ImageValidationOptions) {}

    async transform(value: Express.Multer.File): Promise<any> {
        if (value) {
            if (value.buffer && value.size && value.mimetype) {
                if (value.mimetype.includes('image')) {
                    const errors: string[] = [];
                    if (value.size > this.options.maxSize * 1024) {
                        errors.push(`invalid size image < ${this.options.maxSize}mb`)
                    }

                    if (errors.length) {
                        throw new HttpException({[this.options.fieldName]: errors}, HttpStatus.BAD_REQUEST)
                    }
                }
            }
        }

        return value;
    }
}