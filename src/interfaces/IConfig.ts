import { IHeader } from "./IHeader";


export interface IConfig {
    headers: {
        [key: string]: IHeader
    }
}