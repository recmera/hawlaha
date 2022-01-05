import { Router } from 'express';
import {deleteTask, getTask, getTaskCount, getTasks, saveTask, updateTask} from '../controllers/task' 

const router = Router();
/**
 * @swagger
 * tags:
 *  name: Tasks
 *  description: Tasks endpoints
 */

/**
 * @swagger
 * /tasks:
 *  get:
 *      summary: Get all tasks
 *      tags: [Tasks]
 * 
 */
router.get('/tasks', getTasks);

/**
 * @swagger
 * /tasks/count:
 *  get:
 *      summary: Count all tasks
 *      tags: [Tasks]
 */
router.get('/tasks/count', getTaskCount);

/**
 * @swagger
 * /tasks/count
 *  get:
 *      summary: Get a task by his id
 *      tags: [Tasks]  
 */
router.get('/tasks/:id', getTask);

/**
 * @swagger
 * /tasks:
 *  post:
 *      summary: Create a task
 *      tags: [Tasks]
 */
router.post('/tasks', saveTask);

/**
 * @swagger
 * /tasks:
 *  delete:
 *      summary: remove a task by id
 *      tags: [Tasks]
 */
router.delete('/tasks/:id', deleteTask);

/**
 * @swagger
 * /tasks:
 *  put:
 *      summary: update the corpus of task by id
 *      tags: [Tasks]  
 */
router.put('/tasks/:id', updateTask);


export default router;
