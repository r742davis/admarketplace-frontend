export var queryKeys = {
    POSTS: {
        LIST: ["posts"],
        DETAILS: function (postId) { return ["post", postId]; },
    },
    COMMENTS: {
        DETAILS: function (postId) { return ["comments", postId]; },
    },
};
