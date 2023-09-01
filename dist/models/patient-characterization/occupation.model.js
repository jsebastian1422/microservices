"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const sequelize_1 = require("sequelize");
const database_1 = __importDefault(require("../../database/database"));
class Occupation extends sequelize_1.Model {
}
Occupation.init({
    ocupacion_id: {
        type: sequelize_1.DataTypes.STRING(4),
        primaryKey: true,
        allowNull: false
    },
    ocupacion_descripcion: {
        type: sequelize_1.DataTypes.STRING(200),
        allowNull: false
    },
    indice_de_orden: {
        type: sequelize_1.DataTypes.INTEGER,
        allowNull: false
    }
}, {
    timestamps: false,
    sequelize: database_1.default,
    tableName: 'ocupaciones',
    paranoid: true
});
exports.default = Occupation;
