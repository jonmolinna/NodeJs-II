import App from './app';
import database from './database';

//Starting the Server
database();
const app = new App();
app.start();