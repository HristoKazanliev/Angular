export interface Theme {
    _id: string;
    themeName: string;
    subscribers: string[];
    created_at: string;

    userId: {
        username: string;
    };
}