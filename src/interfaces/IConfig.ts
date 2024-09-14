import { IHeader } from "./IHeader";


export interface IConfig {
    author: string;
    githubProfile: string;
    headers: {
        [key: string]: IHeader
    }
}