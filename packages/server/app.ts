import express from "express";
import * as http from 'http'

import * as winston from "winston";
import * as expressWinston from 'express-winston'
import cors from 'cors'
import {CommonRoutesConfig} from "./src/common/common.routes.config";
import debug from "debug";
import {UsersRoutes} from "./src/users/users.routes.config";

const app: express.Application = express()
const api: express.Application = express()
const server: http.Server = http.createServer(app)
const port = 3300
const routes: Array<CommonRoutesConfig> = []
const debugLog: debug.IDebugger = debug('app')

// Middleware to parse all incoming requests as JSON
app.use(express.json())

// Middleware to allow cross-origin requests
app.use(cors())

// ExpressWinston logging middleware configuration
// automatically log all HTTP requests handled by Express.js
const loggerOptions: expressWinston.LoggerOptions = {
    transports: [new winston.transports.Console()],
    format: winston.format.combine(
        winston.format.json(),
        winston.format.prettyPrint(),
        winston.format.colorize({all: true})
    )
}

// Check if debugging
if (!process.env.DEBUG) {
    loggerOptions.meta = false
}

// Initialize the logger with the above configuration
app.use(expressWinston.logger(loggerOptions))

// app mounted path
app.use('/api', api)

// Add routes to routes array
routes.push(new UsersRoutes(api))

// Simple testing routes
const runningMessage = `Server running at http://localhost:${port}`
app.get('/', (req: express.Request, res: express.Response) => {
    res.status(200).send(runningMessage)
})

// Start server
server.listen(port, () => {
    routes.forEach((route: CommonRoutesConfig) => {
        debugLog(`Routes configured for ${route.getName()}`)
    })
    // only exception to use console.log()
    // because we always want to know the server is done starting up
    console.log(runningMessage)
})
