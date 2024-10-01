export type Post = {
    userId: number;
    id: number;
    title: string;
    body: string;
};
export declare function getPost(postId: number): Promise<Post | undefined>;
