"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const sequelize_1 = require("sequelize");
const database_1 = __importDefault(require("../../database/database"));
const patient_model_1 = __importDefault(require("./patient.model"));
const race_model_1 = __importDefault(require("./race.model"));
const ethnicity_model_1 = __importDefault(require("./ethnicity.model"));
class PatientDetail extends sequelize_1.Model {
}
PatientDetail.init({
    afiliado_tipo_id: {
        type: sequelize_1.DataTypes.CHAR(3),
        primaryKey: true,
        allowNull: false,
        field: 'tipo_id_paciente',
        references: {
            model: patient_model_1.default,
            key: 'afiliado_tipo_id'
        }
    },
    afiliado_id: {
        type: sequelize_1.DataTypes.STRING(32),
        primaryKey: true,
        allowNull: false,
        field: 'paciente_id',
        references: {
            model: patient_model_1.default,
            key: 'afiliado_id'
        }
    },
    direccion_trabajo: {
        type: sequelize_1.DataTypes.STRING(60),
        allowNull: true
    },
    telefono_trabajo: {
        type: sequelize_1.DataTypes.STRING(30),
        allowNull: true
    },
    nombre_aviso: {
        type: sequelize_1.DataTypes.STRING(90),
        allowNull: true
    },
    telefono_aviso: {
        type: sequelize_1.DataTypes.STRING(30),
        allowNull: true
    },
    tipo_raza_id: {
        type: sequelize_1.DataTypes.INTEGER,
        allowNull: true,
        references: {
            model: race_model_1.default,
            key: 'tipo_raza_id',
        }
    },
    arp_tipo_id_tercero: {
        type: sequelize_1.DataTypes.STRING(3),
        allowNull: true
    },
    arp_tercero_id: {
        type: sequelize_1.DataTypes.STRING(32),
        allowNull: true
    },
    nivel_id: {
        type: sequelize_1.DataTypes.INTEGER,
        allowNull: true
    },
    mano_dominante: {
        type: sequelize_1.DataTypes.STRING(11),
        allowNull: true
    },
    preferencia_sexual: {
        type: sequelize_1.DataTypes.INTEGER,
        allowNull: true
    },
    tipos_condicion_usuarios_planes_id: {
        type: sequelize_1.DataTypes.INTEGER,
        allowNull: true
    },
    poblacion_vulnerable_id: {
        type: sequelize_1.DataTypes.INTEGER,
        allowNull: true
    },
    discapacidad_id: {
        type: sequelize_1.DataTypes.INTEGER,
        allowNull: true
    },
    pertenencia_etnica_id: {
        type: sequelize_1.DataTypes.INTEGER,
        allowNull: true,
        references: {
            model: ethnicity_model_1.default,
            key: 'pert_etnica_id',
        }
    }
}, {
    timestamps: false,
    sequelize: database_1.default,
    tableName: 'pacientes_datos_adicionales',
    paranoid: true
});
exports.default = PatientDetail;
