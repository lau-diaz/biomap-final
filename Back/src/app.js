import express from 'express'
import morgan from 'morgan'
import cors from 'cors'
import regionRoutes from './routes/region.routes.js'
import capsulaRoutes from './routes/capsula.routes.js'
import ecosistemaRoutes from './routes/ecosistema.routes.js'

const app = express()

app.use(morgan('dev'))
app.use(express.json());
app.use(cors())

app.use("/api", regionRoutes);
app.use("/api", capsulaRoutes);
app.use("/api", ecosistemaRoutes);

export default app;