import express, { Application} from 'express';
import morgan from 'morgan';
const app : Application = express();

import authRoutes from './routes/auth';

// Settings
app.set('port', 3000);

// Middlewares
app.use(morgan('dev'));
app.use(express.json());

// Routes
app.use('/api/auth', authRoutes);

export default app;