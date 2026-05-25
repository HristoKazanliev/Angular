import { Theme } from "./theme";
import { User } from "./user";

export interface Post {
    _id: string;
    created_at: string;
    text: string;
    userId: User;
    likes: string[];
    themeId: Theme;
    
}