export interface Post {
    _id: string;
    title: string;
    createdAt: string;

    userId: {
        username: string;
    };

    themeId: {
        themeName: string;
    };
}