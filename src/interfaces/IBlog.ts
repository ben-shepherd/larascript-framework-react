export interface IBlog {
    title: string;
    subTitle: string;
    imageUrl: string;
    link: string;
    content: () => JSX.Element;
    author: string;
    updatedAt: Date;
}