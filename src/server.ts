import express from "express";
import swaggerUi from "swagger-ui-express"
import { router } from "./routes";
import swaggerFile from "./swagger.json" // Para parar de dar erro, tem q ir no arquivo tsconfig.json e marcar "resolveJsonModule" como true

const app = express()

app.use(express.json())

app.use("/api-docs", swaggerUi.serve, swaggerUi.setup(swaggerFile))

app.use(router)

app.listen(3000, () => {
    console.log("Server running on port 3000")
})