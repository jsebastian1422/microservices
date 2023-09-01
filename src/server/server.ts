import express from 'express';
import sequelizeConnection from '../database/database';
import patientCharacterization from '../routes/patient-characterization/main.routes';
import utilities from '../routes/utilities/router.routes';
import cors from 'cors';
import bodyParser from 'body-parser';
import { ValidationError } from "express-validation";
export default class Server {

    public app: express.Application;
    public host: any;
    public port: any;

    constructor() {
        this.app = express();
        this.port = process.env.PORT || '3000';
        this.host = process.env.HOST || 'localhost'; 

        // Define conection database
        //this.dbConnect();

        // Define middlewares
        this.middlewares();

        // Define routes service
        this.routes();
    }

    start( callback: Function) {
        this.app.listen(this.port);        
    }

    async dbConnect() {
        try {
            await sequelizeConnection.authenticate();
            console.log('Database is online');
            
        } catch (err: any ) {
            console.log('error');
            console.log(err.message);        
        }
    }

    routes() {
        this.app.get('/', (req, res) => {
            res.json({
                message: 'Api Workin'
            })
        });
        this.app.use('/patient-character', patientCharacterization);
        this.app.use('/utilities', utilities);
        this.app.use(function(err: any, req: Request, res: Response, next) {
            if (err instanceof ValidationError) {
              return res.status(err.statusCode).json(err)
            }
            return res.status(500).json(err)
        })
    }

    middlewares() {
        // Cors
        this.app.use(cors({ origin: true, credentials: true}));
        // Json Parser
        this.app.use(bodyParser.urlencoded({ extended: true }));
        this.app.use(bodyParser.json());
    }
}