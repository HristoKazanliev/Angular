import { Post } from "./post";
import { Theme } from "./theme";

export interface User {
    _id: string;
    username: string;
    email: string;
    password: string;
    tel: string;
    created_at: string;
    posts: Post[];
    themes: Theme[];
}