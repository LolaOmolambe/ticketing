import express from 'express';
import { json } from "body-parser";
import cookieSession from "cookie-session";
import { errorHandler, NotFoundError, currentUser } from "@lolatickets/common";

import { newOrderRouter } from './routes/create-order';
import { getOrderRouter } from './routes/get-order';
import { getOrdersRouter } from './routes/get-orders';
import { cancelOrderRouter } from './routes/delete-order';

const app = express();
app.set('trust proxy', true);
app.use(json());
app.use(
    cookieSession({
        signed: false,
        secure: process.env.NODE_ENV !== "test"
    })
);

//All routes must be authenticated
app.use(currentUser);

app.use(newOrderRouter);
app.use(getOrderRouter);
app.use(getOrdersRouter);
app.use(cancelOrderRouter);

app.all("*", async (req, res, next) => {
    return next(new NotFoundError());
})

app.use(errorHandler);

export { app };