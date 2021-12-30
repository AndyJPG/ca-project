import {User} from "../../domain";

describe('User class test', () => {

    it('should create a user instance with username: andy, email: jiangpeigeng@gmail.com and comments: []', () => {
        const newUser: User = {userName: "andy", email: "jiangpeigeng@gmail.com", comments: []}
        expect(newUser).toEqual({userName: "andy", email: "jiangpeigeng@gmail.com", comments: []})
    })
})
