import express from 'express';
import getRouter from './routers/get.js';
const app = express();

app.use(express.json());

app.use(getRouter);

app.listen(3000, () => {
    console.log(`Server is running on port 3000`);
});
