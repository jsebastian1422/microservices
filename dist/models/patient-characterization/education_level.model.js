"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const sequelize_1 = require("sequelize");
const database_1 = __importDefault(require("../../database/database"));
class EducationLevel extends sequelize_1.Model {
}
EducationLevel.init({
    nivel_id: {
        type: sequelize_1.DataTypes.INTEGER,
        primaryKey: true,
    },
    descripcion: {
        type: sequelize_1.DataTypes.STRING(100),
        allowNull: false
    }
}, {
    timestamps: false,
    sequelize: database_1.default,
    tableName: 'tipos_niveles_escolaridad',
    paranoid: true
});
exports.default = EducationLevel;
