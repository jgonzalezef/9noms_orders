import express, {Application, Request, Response} from "express";
import morgan from "morgan";

import dotenv from 'dotenv';
import {Signale} from "signale";

const app:Application = express();
const signale = new Signale();

dotenv.config();

app.use(morgan('dev'));
const PORT = process.env.PORT || 3002;
const ORDERS = process.env.SERVICE_NAME;

app.use('/',(req:Request,res:Response) => {
    res.status(200).json({
        message:"Welcome to orders service",
        orders:[
            {
                id: "30bdef70-ebf4-4c95-9c3d-dbd983aae22c",
                total:450,
                currency:"USD"
            },
            {
                id: "30bdef70-ebf4-4c95-9c3d-dbd983aae22c",
                total:980,
                currency:"USD"
            },
            {
                id: "30bdef70-ebf4-4c95-9c3d-dbd983aae22c",
                total:567,
                currency:"USD"
            }
        ]
    })
});


app.listen(PORT, () => {
    signale.success(`Servicio ${ORDERS} corriendo en http://localhost:${PORT}`);
});