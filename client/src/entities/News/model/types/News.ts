import { Paragraph } from 'entities/Paragraph';

export interface News {
    id: number;
    coverImg?: string;
    title: string;
    description: string;
    published: boolean;
    createdAt: string;
    updatedAt: string;
    paragraphs: Paragraph[];
}
