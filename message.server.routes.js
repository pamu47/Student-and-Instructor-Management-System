const express = require('express');
const Router = express.Router();

const courseRoutes = require('../course/course.routes');
const instructorRoutes = require('../instructor/instructor.routes');


Router.use('/course/',courseRoutes);
Router.use('/instructor/',instructorRoutes);


module.exports = Router;