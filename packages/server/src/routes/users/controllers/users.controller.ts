// we import express to add types to the request/response object
// from our controller functions
import express from "express"

// we import our newly created user services
import usersService from '../services/users.service'

// we import the argon2 library for password hashing
// we use debug with a custom context
import debug from 'debug'

const log: debug.IDebugger = debug('app:users-controller')

class UsersController {
    async listUsers(req: express.Request, res: express.Response) {
        const users = await usersService.list(100, 0)
        res.status(200).send(users)
    }

    async getUserById(req: express.Request, res: express.Response) {
        
    }
}
