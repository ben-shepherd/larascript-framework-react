import { IHeader } from "./IHeader";


export interface IConfig {
    author: string;
    githubProfile: string;
    githubRepository: string;
    headers: {
        [key: string]: IHeader
    }
}