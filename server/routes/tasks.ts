import express from 'express'

import * as db from '../db/db'

const router = express.Router()
export default router

//  GET api/v1/todos/

router.get('/', async (req, res) => {
  try {
    const tasks = await db.getAllTodos()
    res.json(tasks)
  } catch (e) {
    res.sendStatus(500)
  }
})

//  POST api/v1/todos/

router.post('/', async (req, res) => {
  try {
    const newTask = req.body
    const addedTask = await db.addNewTodo(newTask)
    res.json(addedTask).sendStatus(201)
  } catch (error) {
    console.error(error)
    res.sendStatus(500)
  }
})
