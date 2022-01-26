import debug from "debug"
import mongoose from "mongoose"

const log: debug.IDebugger = debug('app:mongoose-service')

class MongooseService {
    private count = 0
    private mongooseOptions: mongoose.ConnectOptions = {
        serverSelectionTimeoutMS: 5000
    }

    constructor() {
        this.connectWithRetry()
    }

    getMongoose() {
        return mongoose
    }

    connectWithRetry = () => {
        log('Attempting MongoDB connection (will retry if needed)')
        mongoose
            .connect('mongodb://localhost:27017/api-db', this.mongooseOptions)
            .then(() => {
                log('MongoDB is connected')
            })
            .catch((err) => {
                const retrySecond = 5
                log(
                    `MongoDB connection unsuccessful (will retry #${++this.count} after ${retrySecond} seconds):`,
                    err
                )
                setTimeout(this.connectWithRetry, retrySecond * 1000)
            })
    }
}

const mongooseService = new MongooseService()
export default mongooseService
