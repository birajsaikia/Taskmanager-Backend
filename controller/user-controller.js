const User = require('../models/User'); // Ensure this is correct
const jwt = require('jsonwebtoken');

const Task = require('../models/Task');

module.exports.register = async function (req, res) {
  try {
    // Create the new user
    const user = await User.create(req.body);
    const initialTasks = [
      {
        title: 'Welcome Task 1',
        description: 'This is your first task.',
        userid: user.userid,
      },
      {
        title: 'Welcome Task 2',
        description: 'Start organizing your work.',
        userid: user.userid,
      },
      {
        title: 'Welcome Task 3',
        description: 'Enjoy using the task manager!',
        userid: user.userid,
      },
    ];

    await Task.insertMany(initialTasks);
    const token = jwt.sign({ id: user._id }, 'yourSecretKey', {
      expiresIn: '1h',
    });
    const userid1 = user.userid;
    return res.status(200).json({
      success: true,
      token,
      userid1,
      message: 'User registered successfully with initial tasks.',
      user: user,
    });
  } catch (err) {
    console.error('Registration error:', err);

    return res.status(500).json({
      success: false,
      message: 'Registration failed. ' + err.message,
    });
  }
};

// Login function
module.exports.login = async (req, res) => {
  try {
    let { userid, password } = req.body;

    if (!userid || !password) {
      return res.status(400).json({
        success: false,
        msg: 'No userid or password provided',
      });
    }

    let user = await User.findOne({ userid: userid });
    if (!user) {
      return res.status(401).json({
        success: false,
        msg: 'Invalid Username or Password!',
      });
    }
    if (user.password !== password) {
      return res.status(401).json({
        success: false,
        msg: 'Invalid Username or Password!',
      });
    }

    const token = jwt.sign({ id: user._id }, 'yourSecretKey', {
      expiresIn: '1h',
    });

    res.status(200).json({
      success: true,
      token,
      userid,
      msg: `Login Successful! Keep the Token safely ${user.userid}!`,
    });
  } catch (error) {
    res.status(400).json({
      success: false,
      msg: 'Error Occurred!',
    });
  }
};
