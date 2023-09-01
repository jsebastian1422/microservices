"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const sequelize_1 = require("sequelize");
const database_1 = __importDefault(require("../../database/database"));
class Ethnicity extends sequelize_1.Model {
}
Ethnicity.init({
    pert_etnica_id: {
        type: sequelize_1.DataTypes.INTEGER,
        allowNull: false,
        primaryKey: true,
        autoIncrement: true
    },
    descripcion: {
        type: sequelize_1.DataTypes.STRING,
        allowNull: false
    },
    sw_activo: {
        type: sequelize_1.DataTypes.CHAR(1),
        allowNull: false
    }
}, {
    timestamps: false,
    sequelize: database_1.default,
    tableName: 'pertenencias_etnicas',
    paranoid: true
});
exports.default = Ethnicity;
