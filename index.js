const express = require('express');
const cors = require('cors');
const connectDB = require('./config/mongooes.js');
const taskRoutes = require('./router/index');
// const userRoutes = require('./router/user');
const app = express();

app.use(cors());
app.use(express.json());

// Routes
app.use('/api/tasks', taskRoutes);
// app.use('/api/users', userRoutes);

// Server listening
const PORT = process.env.PORT || 5000;
app.listen(PORT, () => {
  console.log(`Server running on http://localhost:${PORT}`);
});
