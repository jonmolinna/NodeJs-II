import mongoose, { mongo } from 'mongoose';

mongoose.connect('mongodb://localhost/jwt-4', {
    useUnifiedTopology: true,
    useNewUrlParser: true,
    useCreateIndex: true
})
    .then(db => console.log('Database is connected'))
    .catch(err => console.log(err));