import mongoose from 'mongoose';

async function connect(){
    try{
        mongoose.connect('mongodb://localhost/ts-app-tutorial', {
            useNewUrlParser: true,
            useUnifiedTopology: true
        });
        console.log('>>> Database Connected')
    } catch {
        console.log('Error')
    }
}

export default connect;