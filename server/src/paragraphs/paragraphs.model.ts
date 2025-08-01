import {Column, DataType, ForeignKey, Model, Table} from "sequelize-typescript";
import {News} from "../news/news.model";

interface ParagraphCreationAttrs {
    newsId: number;
    text?: string;
    img?: string;
    position: number;
}

@Table({tableName: 'paragraphs'})
export class Paragraph extends Model<Paragraph, ParagraphCreationAttrs> {
    @Column({type: DataType.INTEGER, unique: true, autoIncrement: true, primaryKey: true})
    id: number;

    @Column({type: DataType.STRING, allowNull: true})
    text: string;

    @Column({type: DataType.STRING, allowNull: true})
    img: string;

    @Column({type: DataType.INTEGER})
    position: number;

    @ForeignKey(() => News)
    @Column({type: DataType.INTEGER})
    newsId: number;
}