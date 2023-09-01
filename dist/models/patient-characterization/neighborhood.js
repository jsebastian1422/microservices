"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const sequelize_1 = require("sequelize");
const database_1 = __importDefault(require("../../database/database"));
const city_model_1 = __importDefault(require("./city.model"));
const social_class_model_1 = __importDefault(require("./social_class.model"));
const commune_model_1 = __importDefault(require("./commune.model"));
class NeighborHood extends sequelize_1.Model {
}
NeighborHood.init({
    tipo_pais_id: {
        type: sequelize_1.DataTypes.CHAR(4),
        primaryKey: true,
        allowNull: false,
        references: {
            model: city_model_1.default,
            key: 'tipo_pais_id'
        }
    },
    tipo_dpto_id: {
        type: sequelize_1.DataTypes.CHAR(4),
        primaryKey: true,
        allowNull: false,
        references: {
            model: city_model_1.default,
            key: 'tipo_dpto_id'
        }
    },
    tipo_mpio_id: {
        type: sequelize_1.DataTypes.CHAR(4),
        primaryKey: true,
        allowNull: false,
        references: {
            model: city_model_1.default,
            key: 'tipo_dpto_id'
        }
    },
    tipo_comuna_id: {
        type: sequelize_1.DataTypes.CHAR(4),
        primaryKey: true,
        allowNull: false,
        references: {
            model: commune_model_1.default,
            key: 'tipo_comuna_id'
        }
    },
    tipo_barrio_id: {
        type: sequelize_1.DataTypes.CHAR(4),
        primaryKey: true,
        allowNull: false
    },
    barrio: {
        type: sequelize_1.DataTypes.STRING(30),
        allowNull: false,
    },
    tipo_estrato_id: {
        type: sequelize_1.DataTypes.CHAR(2),
        allowNull: false,
        references: {
            model: social_class_model_1.default,
            key: 'tipo_estrato_id'
        }
    }
}, {
    timestamps: false,
    sequelize: database_1.default,
    tableName: 'tipo_barrios',
    paranoid: true
});
NeighborHood.hasOne(city_model_1.default, {
    foreignKey: 'tipo_pais_id',
    sourceKey: 'tipo_pais_id'
});
NeighborHood.hasOne(city_model_1.default, {
    foreignKey: 'tipo_dpto_id',
    sourceKey: 'tipo_dpto_id'
});
NeighborHood.hasOne(city_model_1.default, {
    foreignKey: 'tipo_mpio_id',
    sourceKey: 'tipo_mpio_id'
});
NeighborHood.hasOne(commune_model_1.default, {
    foreignKey: 'tipo_comuna_id',
    sourceKey: 'tipo_comuna_id'
});
exports.default = NeighborHood;
