const mongoose = require('mongoose');

const URI = process.env.MONGODB_URI ? process.env.MONGODB_URI : 'mongodb://localhost/mernEscuela';

mongoose.connect(URI, {
    useNewUrlParser: true,
    useUnifiedTopology: true,
    useFindAndModify:false,
    useCreateIndex: true,
});

const connection = mongoose.connection;

connection.once('open', () => {
    console.log('DB is connected');  
});

