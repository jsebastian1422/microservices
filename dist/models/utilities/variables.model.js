"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const sequelize_1 = require("sequelize");
const database_1 = __importDefault(require("../../database/database"));
class Variables extends sequelize_1.Model {
}
Variables.init({
    modulo: {
        type: sequelize_1.DataTypes.STRING(64),
        primaryKey: true,
        allowNull: false,
    },
    modulo_tipo: {
        type: sequelize_1.DataTypes.STRING(20),
        primaryKey: true,
        allowNull: false,
    },
    variable: {
        type: sequelize_1.DataTypes.STRING(64),
        primaryKey: true,
        allowNull: false,
    },
    valor: {
        type: sequelize_1.DataTypes.TEXT,
        allowNull: false
    },
    descripcion: {
        type: sequelize_1.DataTypes.TEXT,
        allowNull: true
    },
}, {
    timestamps: false,
    sequelize: database_1.default,
    tableName: 'system_modulos_variables',
    paranoid: true
});
exports.default = Variables;
