

export type commentType = {
    userid :number;
    userComment: string

}

export default interface Post {
    postName : string;
    views : number;
    totalLikes: number;
    totalDislikes: number;
    comment : [commentType]
}