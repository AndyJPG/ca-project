import cors from "cors"
import debug from "debug"
import express from "express"
import * as expressWinston from "express-winston"
import * as http from "http"
import * as winston from "winston"
import { CommonRoutesConfig } from "./src/routes/common/common.routes.config"
import ProductsRoutes from "./src/routes/products/products.routes.config"
import TenantsRoutes from "./src/routes/tenants/tenants.routes.config"

const app: express.Application = express()
const api: express.Application = express()
const server: http.Server = http.createServer(app)
const port = 3300
const routes: Array<CommonRoutesConfig> = []
const debugLog: debug.IDebugger = debug("app")

// Middleware to parse all incoming requests as JSON
app.use(express.json())

// Middleware to allow cross-origin requests
app.use(cors())

// ExpressWinston logging middleware configuration
// automatically log all HTTP requests handled by Express.js
const loggerOptions: expressWinston.LoggerOptions = {
  transports: [ new winston.transports.Console() ],
  format: winston.format.combine(
    winston.format.json(),
    winston.format.prettyPrint(),
    winston.format.colorize({ all: true })
  )
}

// Check if debugging
if (process.env.NODE_ENV !== "production") {
  loggerOptions.meta = false
}

// Initialize the logger with the above configuration
app.use(expressWinston.logger(loggerOptions))

// app mounted path
app.use("/api", api)

// Add routes to route array
routes.push(new ProductsRoutes(api))
routes.push(new TenantsRoutes(api))

// Simple testing routes
const runningMessage = `Server running at http://localhost:${port}`
if (process.env.NODE_ENV !== "production") {
  app.get("/", (req: express.Request, res: express.Response) => {
    res.status(200).send(runningMessage)
  })
}

app.use((err: any, req: express.Request, res: express.Response, next: express.NextFunction) => {
  res.status(err.status || 500)
  res.send(err)
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
