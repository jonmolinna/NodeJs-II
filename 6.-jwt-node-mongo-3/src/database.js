const mongoose = require('mongoose');

mongoose.connect('mongodb://localhost/jwt-simple-3', {
    useNewUrlParser: true,
    useUnifiedTopology: true
})
    .then(db => console.log('Database is Connected'))