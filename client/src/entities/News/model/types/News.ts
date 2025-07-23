interface NewsDataParagraphs {
    text: string;
    img: string;
}

interface NewsData {
    cover: string;
    title: string;
    description: string;
    paragraphs: NewsDataParagraphs[];
}

export interface News {
    id: number;
    date: string;
    data: NewsData;
}
