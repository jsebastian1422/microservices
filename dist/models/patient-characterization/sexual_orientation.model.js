"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const sequelize_1 = require("sequelize");
const database_1 = __importDefault(require("../../database/database"));
class SexualOrientation extends sequelize_1.Model {
}
SexualOrientation.init({
    orientacion_sexual_id: {
        type: sequelize_1.DataTypes.INTEGER,
        autoIncrement: true,
        primaryKey: true,
    },
    descripcion: {
        type: sequelize_1.DataTypes.STRING(60),
        allowNull: false
    },
    sw_estado: {
        type: sequelize_1.DataTypes.CHAR(1),
        allowNull: false
    }
}, {
    timestamps: false,
    sequelize: database_1.default,
    tableName: 'orientacion_sexual',
    paranoid: true
});
exports.default = SexualOrientation;
