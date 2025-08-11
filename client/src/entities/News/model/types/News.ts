interface NewsDataParagraph {
    id: number;
    text?: string;
    img?: string;
    video?: string;
    position: number;
    firstElement: string;
}

export interface News {
    id: number;
    coverImg?: string;
    title: string;
    description: string;
    published: boolean;
    createdAt: string;
    updatedAt: string;
    paragraphs: NewsDataParagraph[];
}
