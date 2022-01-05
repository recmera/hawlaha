import { Router } from 'express';
import {deleteTask, getTask, getTaskCount, getTasks, saveTask, updateTask} from '../controllers/task' 

const router = Router();

/**
 * @swagger
 * /tasks:
 *  get:
 *      summary: Get all tasks
 * 
 */
router.get('/tasks', getTasks);

/**
 * @swagger
 * /tasks/count:
 *  get:
 *      summary: Count all tasks
 * 
 */
router.get('/tasks/count', getTaskCount);

/**
 * @swagger
 * /tasks:/count
 *  get:
 *      summary: Get a task by his id
 * 
 */
router.get('/tasks/:id', getTask);

/**
 * @swagger
 * /tasks:
 *  post:
 *      summary: Create a task
 * 
 */
router.post('/tasks', saveTask);

/**
 * @swagger
 * /tasks:
 *  delete:
 *      summary: remove a task by id
 * 
 */
router.delete('/tasks/:id', deleteTask);

/**
 * @swagger
 * /tasks:
 *  put:
 *      summary: update the corpus of task by id
 * 
 */
router.put('/tasks/:id', updateTask);


export default router;
