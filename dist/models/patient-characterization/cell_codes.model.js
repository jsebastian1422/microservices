"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const sequelize_1 = require("sequelize");
const database_1 = __importDefault(require("../../database/database"));
class CellCodes extends sequelize_1.Model {
}
CellCodes.init({
    id: {
        type: sequelize_1.DataTypes.INTEGER,
        primaryKey: true,
        autoIncrement: true,
        allowNull: false
    },
    prefijo: {
        type: sequelize_1.DataTypes.INTEGER,
        allowNull: false
    },
    sw_estado: {
        type: sequelize_1.DataTypes.STRING(1),
        allowNull: false
    }
}, {
    timestamps: false,
    sequelize: database_1.default,
    tableName: 'prefijos_celulares',
    paranoid: true
});
exports.default = CellCodes;
