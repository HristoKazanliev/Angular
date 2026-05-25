import { Post } from "./post";
import { User } from "./user";

export interface Theme {
    _id: string;
    themeName: string;
    subscribers: string[];
    created_at: string;
    posts: Post[];
    userId: User;
}