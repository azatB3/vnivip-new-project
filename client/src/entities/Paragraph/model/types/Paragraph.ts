export interface Paragraph {
    id: number;
    text?: string;
    img?: string;
    video?: string;
    videoPoster?: string;
    position: number;
    firstElement: 'text' | 'media';
    newsId: number;
    alignText: 'left' | 'center' | 'right' | 'justify';
}
