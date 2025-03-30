import express from 'express'

import * as db from '../db/db'

const router = express.Router()

//  GET api/v1/todos/

router.get('/', async (req, res) => {
  try {
    console.log('tasks get route')
    const tasks = await db.getAllTodos()
    console.log('get route', tasks)
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
    res.status(201).json(addedTask)
  } catch (error) {
    console.error(error)
    res.sendStatus(500)
  }
})

//  delete api/v1/todos/:id

router.delete('/:id', async (req, res) => {
  try {
    const id = Number(req.params.id)
    const deleteTask = await db.deleteTodo(id)
    if (deleteTask === 0) {
      res.status(404).json({ error: 'Task not found' })
    }
    res.sendStatus(204)
  } catch (error) {
    console.error(error)
    res.sendStatus(500)
  }
})

export default router
