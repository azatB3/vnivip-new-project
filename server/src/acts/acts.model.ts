import {Column, DataType, Model, Table} from "sequelize-typescript";

interface actCreationAttrs {
    staticFile: string;
    name: string;
    size: number;
}

@Table({tableName: 'acts'})
export class Act extends Model<Act, actCreationAttrs> {
    @Column({type: DataType.INTEGER, unique: true, autoIncrement: true, primaryKey: true})
    id: number;

    @Column({type: DataType.STRING, allowNull: false})
    staticFile: string;

    @Column({type: DataType.STRING, allowNull: false})
    name: string;

    @Column({type: DataType.INTEGER, allowNull: false})
    size: number;
}