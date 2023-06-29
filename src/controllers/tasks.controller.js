import Task from '../models/task.model.js'

export const getTasks = async (req, res) => { 
  const tasks = await Task.find()
  res.json(tasks)
}

export const getTask = async (req, res) => {
  //console.log(req.params.id)
  const task = await Task.findById(req.params.id)

  // if(!task) return res.status(400).json({ message: 'Task not found'})

  // res.json(task)
  //res.send('task')
}

export const createTask = async (req, res) => {
  const {title, description, date } = req.body
  const newTask = new Task({
    title,
    description, 
    date
  })

  const savedTask = await newTask.save()

  res.json({savedTask})
}

export const deleteTask = async (req, res) => {res.send('Delete Task')}

export const updateTask = async (req, res) => {res.send('Update Task')}
