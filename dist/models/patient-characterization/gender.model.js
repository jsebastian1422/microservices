"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const sequelize_1 = require("sequelize");
const database_1 = __importDefault(require("../../database/database"));
class Gender extends sequelize_1.Model {
}
Gender.init({
    sexo_id: {
        type: sequelize_1.DataTypes.STRING,
        allowNull: false,
        primaryKey: true
    },
    descripcion: {
        type: sequelize_1.DataTypes.STRING(30),
        allowNull: false
    },
    indice_de_orden: {
        type: sequelize_1.DataTypes.TINYINT,
        allowNull: false
    },
    sw_mostrar: {
        type: sequelize_1.DataTypes.CHAR(1),
        allowNull: false
    },
    sw_mostrar_otros_modulos: {
        type: sequelize_1.DataTypes.CHAR(1),
        allowNull: false
    }
}, {
    timestamps: false,
    sequelize: database_1.default,
    tableName: 'tipo_sexo',
    paranoid: true
});
exports.default = Gender;
