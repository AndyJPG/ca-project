import UsersDao from '../daos/users.dao'
import {CRUD} from "../../common/interfaces/crud.interface";

class UsersService implements CRUD {
    create(resource: any): Promise<any> {
        return UsersDao.addUser(resource)
    }

    deleteById(id: string): Promise<string> {
        return UsersDao.removeUserById(id)
    }

    list(limit: number, page: number): Promise<any> {
        return UsersDao.getUsers()
    }

    patchById(id: string, resource: any): Promise<string> {
        return UsersDao.patchUserById(id, resource)
    }

    putById(id: string, resource: any): Promise<string> {
        return UsersDao.putUserById(id, resource)
    }

    readById(id: string): Promise<any> {
        return UsersDao.getUserById(id)
    }

    async getUserByEmail(email: string) {
        return UsersDao.getUserByEmail(email)
    }
}

export default new UsersService()
