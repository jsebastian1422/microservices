"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const sequelize_1 = require("sequelize");
const database_1 = __importDefault(require("../../database/database"));
const affiliate_model_1 = __importDefault(require("./affiliate.model"));
const gender_model_1 = __importDefault(require("./gender.model"));
const sexual_orientation_model_1 = __importDefault(require("./sexual_orientation.model"));
const gender_identity_model_1 = __importDefault(require("./gender_identity.model"));
const race_model_1 = __importDefault(require("./race.model"));
const ethnicity_model_1 = __importDefault(require("./ethnicity.model"));
const marital_status_model_1 = __importDefault(require("./marital_status.model"));
const occupation_model_1 = __importDefault(require("./occupation.model"));
const type_house_model_1 = __importDefault(require("./type_house.model"));
class Characterization extends sequelize_1.Model {
}
Characterization.init({
    caracterizacion_paciente_id: {
        type: sequelize_1.DataTypes.INTEGER,
        allowNull: false,
        primaryKey: true,
        autoIncrement: true
    },
    afiliado_tipo_id: {
        type: sequelize_1.DataTypes.CHAR(2),
        allowNull: false,
        references: {
            model: affiliate_model_1.default,
            key: 'afiliado_tipo_id'
        }
    },
    afiliado_id: {
        type: sequelize_1.DataTypes.STRING(34),
        allowNull: false,
        references: {
            model: affiliate_model_1.default,
            key: 'afiliado_id'
        }
    },
    date: {
        type: sequelize_1.DataTypes.DATE(),
        allowNull: true
    },
    plan_id: {
        type: sequelize_1.DataTypes.INTEGER,
        allowNull: true
    },
    tipo_sexo_id: {
        type: sequelize_1.DataTypes.CHAR(1),
        allowNull: true,
        references: {
            model: gender_model_1.default,
            key: 'sexo_id',
        }
    },
    orientacion_sexual_id: {
        type: sequelize_1.DataTypes.INTEGER,
        allowNull: true,
        references: {
            model: sexual_orientation_model_1.default,
            key: 'orientacion_sexual_id',
        }
    },
    identidad_genero_id: {
        type: sequelize_1.DataTypes.INTEGER,
        allowNull: true,
        references: {
            model: gender_identity_model_1.default,
            key: 'identidad_genero_id',
        }
    },
    tipo_raza_id: {
        type: sequelize_1.DataTypes.INTEGER,
        allowNull: true,
        references: {
            model: race_model_1.default,
            key: 'tipo_raza_id',
        }
    },
    pert_etnica_id: {
        type: sequelize_1.DataTypes.INTEGER,
        allowNull: true,
        references: {
            model: ethnicity_model_1.default,
            key: 'pert_etnica_id',
        }
    },
    tipo_estado_civil_id: {
        type: sequelize_1.DataTypes.CHAR(6),
        allowNull: true,
        references: {
            model: marital_status_model_1.default,
            key: 'tipo_estado_civil_id',
        }
    },
    nivel_id: {
        type: sequelize_1.DataTypes.INTEGER,
        allowNull: true
    },
    ocupacion_id: {
        type: sequelize_1.DataTypes.CHAR(4),
        allowNull: true,
        references: {
            model: occupation_model_1.default,
            key: 'ocupacion_id',
        }
    },
    tipo_vivienda_id: {
        type: sequelize_1.DataTypes.INTEGER,
        allowNull: true,
        references: {
            model: type_house_model_1.default,
            key: 'tipo_vivienda_id',
        }
    },
}, {
    timestamps: true,
    createdAt: false,
    updatedAt: false,
    deletedAt: false,
    sequelize: database_1.default,
    tableName: 'caracterizacion_pacientes',
    paranoid: true
});
Characterization.hasOne(gender_model_1.default, {
    foreignKey: 'sexo_id',
    sourceKey: 'tipo_sexo_id',
});
Characterization.hasOne(gender_identity_model_1.default, {
    foreignKey: 'identidad_genero_id',
    sourceKey: 'identidad_genero_id',
    allowNull: true
});
Characterization.hasOne(ethnicity_model_1.default, {
    foreignKey: 'pert_etnica_id',
    sourceKey: 'pert_etnica_id',
    allowNull: true
});
Characterization.hasOne(race_model_1.default, {
    foreignKey: 'tipo_raza_id',
    sourceKey: 'tipo_raza_id',
    allowNull: true
});
Characterization.hasOne(marital_status_model_1.default, {
    foreignKey: 'tipo_estado_civil_id',
    sourceKey: 'tipo_estado_civil_id',
    allowNull: true
});
Characterization.hasOne(occupation_model_1.default, {
    foreignKey: 'ocupacion_id',
    sourceKey: 'ocupacion_id',
    allowNull: true
});
exports.default = Characterization;
