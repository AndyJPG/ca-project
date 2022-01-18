import debug from "debug"
import {CreateUserDto} from "../dto/create.user.dto";

const log: debug.IDebugger = debug('app:in-memory-dao')

class UsersDao {
    users: Array<CreateUserDto> = []

    constructor() {
        log('Created new instance of UserDao')
    }
}

export default new UsersDao()
