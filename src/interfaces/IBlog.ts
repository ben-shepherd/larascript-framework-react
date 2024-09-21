
export interface IBlogPost  {
    title: string;
    subTitle: string | null;
    imageUrl: string;
    link: string;
    author: string;
    updatedAt: Date;
}
export interface IBlogContent {
    content: ({ post }: { post: IBlogPost }) => JSX.Element;
}