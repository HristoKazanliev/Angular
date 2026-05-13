export interface Post {
    _id: string;
    created_at: string;
    text: string;
    userId: {
        username: string;
    };

    themeId: {
        themeName: string;
    };
}