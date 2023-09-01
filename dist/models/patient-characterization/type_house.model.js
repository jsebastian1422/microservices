"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const sequelize_1 = require("sequelize");
const database_1 = __importDefault(require("../../database/database"));
class TypeHouse extends sequelize_1.Model {
}
TypeHouse.init({
    tipo_vivienda_id: {
        type: sequelize_1.DataTypes.INTEGER,
        primaryKey: true,
        autoIncrement: true,
        allowNull: false
    },
    descripcion: {
        type: sequelize_1.DataTypes.STRING(100),
        allowNull: false
    },
    sw_estado: {
        type: sequelize_1.DataTypes.STRING(1),
        allowNull: false
    },
    sw_servicio: {
        type: sequelize_1.DataTypes.STRING(1),
        allowNull: false
    },
    usuario_id: {
        type: sequelize_1.DataTypes.INTEGER,
        allowNull: false
    },
    fecha_registro: {
        type: sequelize_1.DataTypes.DATEONLY,
        allowNull: false
    }
}, {
    timestamps: false,
    sequelize: database_1.default,
    tableName: 'tipos_vivienda',
    paranoid: true
});
exports.default = TypeHouse;
