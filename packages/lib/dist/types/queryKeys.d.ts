export declare const queryKeys: {
    POSTS: {
        LIST: readonly ["posts"];
        DETAILS: (postId: number) => readonly ["post", number];
    };
    COMMENTS: {
        DETAILS: (postId: number) => readonly ["comments", number];
    };
};
