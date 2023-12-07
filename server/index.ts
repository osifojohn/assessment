import bodyParser from 'body-parser';
import { createServer } from 'http';
import mongoose from 'mongoose';
import express from 'express';
import dotenv from 'dotenv';
import helmet from 'helmet';
import morgan from 'morgan';
import cors from 'cors';

import { errorHandler } from './middleware/errorHandler';
import userDetails from './routes/userDetailsRoute';
import sectors from './routes/sectorsRoutes';

/* CONFIGURATION */
dotenv.config();
const app = express();
app.use(helmet());
app.use(helmet.crossOriginResourcePolicy({ policy: 'cross-origin' }));
app.use(bodyParser.urlencoded({ extended: false }));
app.use(bodyParser.json());
app.use(morgan('common'));
app.use(express.json());
app.use(cors());

const server = createServer(app);

/* ROUTES */
app.use('/user-details', userDetails);
app.use('/sectors', sectors);
// app.use('/other', addManufacturingSector);
// app.use('/sectors', getAllSectors);

app.use(errorHandler);

const PORT = process.env.PORT || 8000;

/* MONGOOSE SETUP */
mongoose
  .connect(process.env.MONGO_URL as string)
  .then(() => {
    server.listen(PORT, () => console.log(`Server Port: ${PORT}`));
  })
  .catch((error) => console.log(`${error} did not connect`));

// getAllSectors();
