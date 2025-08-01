import {Column, DataType, HasMany, Model, Table} from "sequelize-typescript";
import {Paragraph} from "../paragraphs/paragraphs.model";

interface NewsCreationAttrs {
    title: string;
    description: string;
    coverImg?: string;
}

@Table({tableName: 'news'})
export class News extends Model<News, NewsCreationAttrs> {
    @Column({type: DataType.INTEGER, unique: true, autoIncrement: true, primaryKey: true})
    id: number;

    @Column({type: DataType.STRING, allowNull: false})
    title: string;

    @Column({type: DataType.STRING, allowNull: false})
    description: string;

    @Column({type: DataType.STRING, allowNull: true})
    coverImg: string;

    @Column({type: DataType.BOOLEAN, defaultValue: false})
    published: boolean;

    @HasMany(() => Paragraph)
    paragraphs: Paragraph[];
}