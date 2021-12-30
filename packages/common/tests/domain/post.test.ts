import {addNewCommentToPost, Comment, Post, User} from "../../domain";
import {getCurrentDateInISOString} from "../../libs/helpers";

describe("Post class test", () => {
    const newUser: User = {
        id: "uid_321",
        userName: "andy",
        email: "jiangpeigeng@gmail.com",
        comments: []
    }
    const newComment: Comment = {
        id: "uid_123",
        author: newUser,
        createdDate: getCurrentDateInISOString(),
        content: "Love this place"
    }
    const newPost: Post = {
        id: "uid_566",
        author: newUser,
        comments: [],
        createdDate: getCurrentDateInISOString(),
        address: {
            streetAddress: "81 cooyong st",
            postcode: 2612,
            state: "ACT",
            suburb: "reid"
        }
    }
    it("should add one comment to the post", () => {
        const postWithOneComment: Post = addNewCommentToPost(newPost, newComment)
        expect(postWithOneComment.comments.length).toEqual(1)
    })
})
