import {User} from "../../domain";

describe('User class test', () => {

    it('should create a user instance with username: andy, email: jiangpeigeng@gmail.com and comments: []', () => {
        const newUser: User = {id: "uid_12", userName: "andy", email: "jiangpeigeng@gmail.com", comments: []}
        expect(newUser).toEqual({id: "uid_12", userName: "andy", email: "jiangpeigeng@gmail.com", comments: []})
    })
})
