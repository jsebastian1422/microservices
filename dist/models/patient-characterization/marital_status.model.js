"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const sequelize_1 = require("sequelize");
const database_1 = __importDefault(require("../../database/database"));
class MaritalStatus extends sequelize_1.Model {
}
MaritalStatus.init({
    tipo_estado_civil_id: {
        type: sequelize_1.DataTypes.STRING(6),
        primaryKey: true,
        allowNull: false
    },
    descripcion: {
        type: sequelize_1.DataTypes.STRING(30),
        allowNull: false
    },
    indice_de_orden: {
        type: sequelize_1.DataTypes.INTEGER,
        allowNull: false
    },
    estado_sius: {
        type: sequelize_1.DataTypes.STRING(5),
        allowNull: true
    }
}, {
    timestamps: false,
    sequelize: database_1.default,
    tableName: 'tipo_estado_civil',
    paranoid: true
});
exports.default = MaritalStatus;
