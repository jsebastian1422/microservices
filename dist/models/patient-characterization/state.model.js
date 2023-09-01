"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const sequelize_1 = require("sequelize");
const database_1 = __importDefault(require("../../database/database"));
const country_model_1 = __importDefault(require("./country.model"));
class State extends sequelize_1.Model {
}
State.init({
    tipo_dpto_id: {
        type: sequelize_1.DataTypes.CHAR(4),
        primaryKey: true,
        allowNull: false
    },
    tipo_pais_id: {
        type: sequelize_1.DataTypes.CHAR(4),
        allowNull: false,
        references: {
            model: country_model_1.default,
            key: 'tipo_pais_id'
        }
    },
    departamento: {
        type: sequelize_1.DataTypes.STRING(30),
        allowNull: false,
    }
}, {
    timestamps: false,
    sequelize: database_1.default,
    tableName: 'tipo_dptos',
    paranoid: true
});
State.hasOne(country_model_1.default, {
    foreignKey: 'tipo_pais_id',
    sourceKey: 'tipo_pais_id'
});
exports.default = State;
