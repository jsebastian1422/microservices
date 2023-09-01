"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const sequelize_1 = require("sequelize");
const database_1 = __importDefault(require("../../database/database"));
class SocialClass extends sequelize_1.Model {
}
SocialClass.init({
    tipo_estrato_id: {
        type: sequelize_1.DataTypes.CHAR(2),
        primaryKey: true,
        allowNull: false
    },
    descripcion: {
        type: sequelize_1.DataTypes.STRING(30),
        allowNull: false,
    }
}, {
    timestamps: false,
    sequelize: database_1.default,
    tableName: 'tipos_estratos',
    paranoid: true
});
exports.default = SocialClass;
