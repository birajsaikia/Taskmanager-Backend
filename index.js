const express = require('express');
const cors = require('cors');
const connectDB = require('./config/mongooes.js');
const taskRoutes = require('./router/index');

const app = express();

// Middleware
app.use(cors());
app.use(express.json());

// Routes
app.use('/api/tasks', taskRoutes);

// Server listening
const PORT = process.env.PORT || 5000;
app.listen(PORT, () => {
  console.log(`Server running on http://localhost:${PORT}`);
});
