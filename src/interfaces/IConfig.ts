import { MetaTagsConfig } from "react-metatags-hook";
import { IHeader } from "./IHeader";


export interface IConfig {
    isDevelopment: boolean;
    author: string;
    githubProfile: string;
    githubRepository: string;
    websiteUrl: string;
    siteName: string;
    siteDescription: string;
    meta?: MetaTagsConfig,
    headers: {
        [key: string]: IHeader
    }
}