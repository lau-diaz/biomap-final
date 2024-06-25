import express from 'express'
import morgan from 'morgan'
import cors from 'cors'
import regionRoutes from './routes/region.routes.js'

const app = express()

app.use(morgan('dev'))
app.use(express.json());
app.use(cors())

app.use("/api", regionRoutes);

export default app;