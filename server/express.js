import express from 'express';
import bodyParser from 'body-parser';
import cookieParser from 'cookie-parser';
import compress from 'compression';
import cors from 'cors';
import helmet from 'helmet';
import Templet from './../templet.js';
import authRoutes from './routes/auth.routes.js';
import userRoutes from './routes/user.routes.js';
import path from 'path';

const CURRENT_WORKING_DIR = process.cwd();

const app = express();
app.use(express.static(path.join(CURRENT_WORKING_DIR, './client/build')));
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));
app.use(cookieParser());
app.use(compress());
app.use(helmet());
app.use(cors());
app.get('/expenses', (req, resp) => {
    resp.sendFile(path.join(CURRENT_WORKING_DIR, './client/build/index.html'));
});
app.use('/api/v1/expenses/ath', authRoutes);
app.use('/api/v1/expenses/usr', userRoutes);
app.use((err, req, res, next) => {
    if (err.name === 'UnauthorizedError') {
        res.status(401).json({ "error": err.name + ": " + err.message });
    } else if (err) {
        res.status(400).json({ "error": err.name + ": " + err.message });
        console.log(err);
    }
});
export default app;