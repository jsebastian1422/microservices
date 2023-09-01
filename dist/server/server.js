"use strict";
var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = __importDefault(require("express"));
const database_1 = __importDefault(require("../database/database"));
const main_routes_1 = __importDefault(require("../routes/patient-characterization/main.routes"));
const router_routes_1 = __importDefault(require("../routes/utilities/router.routes"));
const cors_1 = __importDefault(require("cors"));
const body_parser_1 = __importDefault(require("body-parser"));
const express_validation_1 = require("express-validation");
class Server {
    constructor() {
        this.app = (0, express_1.default)();
        this.port = process.env.PORT || '3000';
        this.host = process.env.HOST || 'localhost';
        // Define conection database
        //this.dbConnect();
        // Define middlewares
        this.middlewares();
        // Define routes service
        this.routes();
    }
    start(callback) {
        this.app.listen(this.port);
    }
    dbConnect() {
        return __awaiter(this, void 0, void 0, function* () {
            try {
                yield database_1.default.authenticate();
                console.log('Database is online');
            }
            catch (err) {
                console.log('error');
                console.log(err.message);
            }
        });
    }
    routes() {
        this.app.get('/', (req, res) => {
            res.json({
                message: 'Api Workin'
            });
        });
        this.app.use('/patient-character', main_routes_1.default);
        this.app.use('/utilities', router_routes_1.default);
        this.app.use(function (err, req, res, next) {
            if (err instanceof express_validation_1.ValidationError) {
                return res.status(err.statusCode).json(err);
            }
            return res.status(500).json(err);
        });
    }
    middlewares() {
        // Cors
        this.app.use((0, cors_1.default)({ origin: true, credentials: true }));
        // Json Parser
        this.app.use(body_parser_1.default.urlencoded({ extended: true }));
        this.app.use(body_parser_1.default.json());
    }
}
exports.default = Server;
