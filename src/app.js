require('dotenv').config();
const express = require('express');
const cors = require('cors');
const app = express();

app.use(express.json());
app.use(express.urlencoded({ extended: true }));
app.use(cors());

const errorHandler = require('./middlewares/error');
const notFoundHandler = require('./middlewares/notFound');

const authRoute = require('./routes/auth-route');
const leaveRequestRoute = require('./routes/leaveRequest-route');
const leaveTypeRoute = require('./routes/leaveType-route');
const userController = require('./routes/user-route')

app.use('/auth', authRoute);
app.use('/leave-requests', leaveRequestRoute);
app.use('/leave-types', leaveTypeRoute);
app.use('/user', userController);

app.use(errorHandler);
app.use('*', notFoundHandler);

const PORT = process.env.PORT;
app.listen(PORT || 8000, () => console.log(`Server is running on port ${PORT}`));