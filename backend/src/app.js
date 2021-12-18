import express from 'express';
import tasksRoutes from './routes/task'

const app = express();

app.use(tasksRoutes)

export default app