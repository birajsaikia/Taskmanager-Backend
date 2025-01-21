const express = require('express');
const {
  createTask,
  getTasks,
  getTaskById,
  updateTask,
  deleteTask,
} = require('../controller/home-controller');

const router = express.Router();
router.post('/', createTask);
router.get('/:userid', getTasks);
router.get('/:id', getTaskById);
router.put('/:id', updateTask);
router.delete('/:id', deleteTask);
router.use('/user', require('./user'));
module.exports = router;
