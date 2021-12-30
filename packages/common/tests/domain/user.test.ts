import {addNewCommentToUser, Comment, User} from "../../domain";
import {getCurrentDateInISOString} from "../../libs/helpers";

describe('User class test', () => {
    const newUser: User = {
        id: "uid_12",
        userName: "andy",
        email: "jiangpeigeng@gmail.com",
        comments: []
    }

    const newComment: Comment = {
        id: "uid_12",
        author: newUser,
        content: "i love this place",
        createdDate: getCurrentDateInISOString()
    }

    it('should create a user instance with username: andy, email: jiangpeigeng@gmail.com and comments: []', () => {
        expect(newUser).toEqual({id: "uid_12", userName: "andy", email: "jiangpeigeng@gmail.com", comments: []})
    })

    it('should add new comment to user', () => {
        const userWithOneComment: User = addNewCommentToUser(newUser, newComment)
        expect(userWithOneComment.comments.length).toEqual(1)
    })
})
