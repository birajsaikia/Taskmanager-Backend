const express = require('express');
const {
  createTask,
  getTasks,
  getTaskById,
  updateTask,
  deleteTask,
} = require('../controller/home-controller');

const router = express.Router();

router.post('/', createTask); // Add new task
router.get('/', getTasks); // Get all tasks
router.get('/:id', getTaskById); // Get task by ID
router.put('/:id', updateTask); // Update task
router.delete('/:id', deleteTask); // Delete task

module.exports = router;
