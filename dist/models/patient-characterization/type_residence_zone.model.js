"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const sequelize_1 = require("sequelize");
const database_1 = __importDefault(require("../../database/database"));
class TypeResidenceZone extends sequelize_1.Model {
}
TypeResidenceZone.init({
    zona_residencia: {
        type: sequelize_1.DataTypes.CHAR(1),
        primaryKey: true,
        allowNull: false
    },
    descripcion: {
        type: sequelize_1.DataTypes.STRING(15),
        allowNull: false
    },
    id_element: {
        type: sequelize_1.DataTypes.STRING,
        allowNull: false
    }
}, {
    timestamps: false,
    sequelize: database_1.default,
    tableName: 'zonas_residencia',
    paranoid: true
});
exports.default = TypeResidenceZone;
