import {User, Comment} from "../../domain";
import {getCurrentDateInISOString} from "../../libs/helpers";

describe("Comment class test", () => {
    it("should create a comment with id: uid_123, author: User instance, created_date: current date in ISO string, content: love this place", () => {
        const newUser: User = {id: "uid_321", userName: "andy", email: "jiangpeigeng@gmail.com", comments: []}
        const mockCommentData = {
            id: "uid_123",
            author: newUser,
            createdDate: getCurrentDateInISOString(),
            content: "Love this place"
        }
        const newComment: Comment = mockCommentData
        expect(newComment).toEqual(mockCommentData)
    })
})
