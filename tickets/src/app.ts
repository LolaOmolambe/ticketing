import express from 'express';
import { json } from "body-parser";
import cookieSession from "cookie-session";
import { errorHandler, NotFoundError, currentUser } from "@lolatickets/common";

import { createTicketRouter } from './routes/create-ticket';
import { getTicketRouter } from './routes/get-ticket';
import { getAllTicketsRouter } from './routes/get-tickets';
import { updateTicketRouter } from './routes/update-ticket';

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

app.use(createTicketRouter);
app.use(getTicketRouter);
app.use(getAllTicketsRouter);
app.use(updateTicketRouter);

app.all("*", async (req, res, next) => {
    return next(new NotFoundError());
})

app.use(errorHandler);

export { app };