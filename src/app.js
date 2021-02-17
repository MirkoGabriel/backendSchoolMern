const express = require('express');
const cors = require('cors');
const app = express(); 

//settings
app.set('port', process.env.PORT || 4000);

//middlewares
app.use(cors()); 
app.use(express.json());

//routes
app.use('/api/periods',require('./routes/periods'));
app.use('/api/subjects',require('./routes/subjects'));
app.use('/api/students',require('./routes/students'));
app.use('/api/groups',require('./routes/groups'));
app.use('/api/grades',require('./routes/grades'));
module.exports = app;
