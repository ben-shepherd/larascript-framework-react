
export type LinkHrefAndTitle = { href?: string; title?: string; titleSmall?: string } & Content;
export type LinkWithTextChildren = { children?: LinkHrefAndTitle[] };
export type Content = { content?: () => JSX.Element }

export type DocumentationItem = LinkHrefAndTitle & LinkWithTextChildren & Content