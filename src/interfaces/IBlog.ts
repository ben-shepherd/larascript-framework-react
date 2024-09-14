export interface IBlog {
    title: string;
    subTitle: string | null;
    imageUrl: string;
    link: string;
    content: () => JSX.Element;
    author: string;
    updatedAt: Date;
}