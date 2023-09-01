"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const sequelize_1 = require("sequelize");
const database_1 = __importDefault(require("../../database/database"));
const city_model_1 = __importDefault(require("./city.model"));
class Commune extends sequelize_1.Model {
}
Commune.init({
    tipo_dpto_id: {
        type: sequelize_1.DataTypes.CHAR(4),
        primaryKey: true,
        allowNull: false,
        references: {
            model: city_model_1.default,
            key: 'tipo_dpto_id'
        }
    },
    tipo_pais_id: {
        type: sequelize_1.DataTypes.CHAR(4),
        allowNull: false,
        primaryKey: true,
        references: {
            model: city_model_1.default,
            key: 'tipo_pais_id'
        }
    },
    tipo_mpio_id: {
        type: sequelize_1.DataTypes.CHAR(4),
        primaryKey: true,
        allowNull: false,
        references: {
            model: city_model_1.default,
            key: 'tipo_mpio_id'
        }
    },
    tipo_comuna_id: {
        type: sequelize_1.DataTypes.CHAR(4),
        primaryKey: true,
        allowNull: false
    },
    comuna: {
        type: sequelize_1.DataTypes.STRING(30),
        allowNull: false,
    }
}, {
    timestamps: false,
    sequelize: database_1.default,
    tableName: 'tipo_comunas',
    paranoid: true
});
Commune.hasOne(city_model_1.default, {
    foreignKey: 'tipo_pais_id',
    sourceKey: 'tipo_pais_id'
});
Commune.hasOne(city_model_1.default, {
    foreignKey: 'tipo_dpto_id',
    sourceKey: 'tipo_dpto_id'
});
Commune.hasOne(city_model_1.default, {
    foreignKey: 'tipo_mpio_id',
    sourceKey: 'tipo_mpio_id'
});
exports.default = Commune;
