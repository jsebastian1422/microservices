"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const sequelize_1 = require("sequelize");
const database_1 = __importDefault(require("../../database/database"));
const affiliate_model_1 = __importDefault(require("./affiliate.model"));
const gender_model_1 = __importDefault(require("./gender.model"));
const gender_identity_model_1 = __importDefault(require("./gender_identity.model"));
const ethnicity_model_1 = __importDefault(require("./ethnicity.model"));
const race_model_1 = __importDefault(require("./race.model"));
const marital_status_model_1 = __importDefault(require("./marital_status.model"));
const occupation_model_1 = __importDefault(require("./occupation.model"));
class AffiliateDetail extends sequelize_1.Model {
}
AffiliateDetail.init({
    afiliado_tipo_id: {
        type: sequelize_1.DataTypes.CHAR(2),
        primaryKey: true,
        allowNull: false,
        references: {
            model: affiliate_model_1.default,
            key: 'afiliado_tipo_id'
        }
    },
    afiliado_id: {
        type: sequelize_1.DataTypes.STRING(34),
        primaryKey: true,
        allowNull: false,
        references: {
            model: affiliate_model_1.default,
            key: 'afiliado_id'
        }
    },
    primer_apellido: {
        type: sequelize_1.DataTypes.STRING(20),
        allowNull: false
    },
    segundo_apellido: {
        type: sequelize_1.DataTypes.STRING(30),
        allowNull: false
    },
    primer_nombre: {
        type: sequelize_1.DataTypes.STRING(20),
        allowNull: false
    },
    segundo_nombre: {
        type: sequelize_1.DataTypes.STRING(30),
        allowNull: false
    },
    fecha_nacimiento: {
        type: sequelize_1.DataTypes.DATEONLY,
        allowNull: false
    },
    tipo_sexo_id: {
        type: sequelize_1.DataTypes.CHAR(1),
        allowNull: false,
        references: {
            model: gender_model_1.default,
            key: 'sexo_id',
        }
    },
    tipo_pais_id: {
        type: sequelize_1.DataTypes.CHAR(4),
        allowNull: false
    },
    tipo_dpto_id: {
        type: sequelize_1.DataTypes.CHAR(4),
        allowNull: false
    },
    tipo_mpio_id: {
        type: sequelize_1.DataTypes.CHAR(4),
        allowNull: false
    },
    zona_residencia: {
        type: sequelize_1.DataTypes.CHAR(1),
        allowNull: false
    },
    direccion_residencia: {
        type: sequelize_1.DataTypes.STRING(100),
        allowNull: false
    },
    telefono_residencia: {
        type: sequelize_1.DataTypes.STRING(30),
        allowNull: true,
    },
    telefono_movil: {
        type: sequelize_1.DataTypes.STRING(30),
        allowNull: false,
    },
    celular2: {
        type: sequelize_1.DataTypes.STRING(30),
        allowNull: true
    },
    email: {
        type: sequelize_1.DataTypes.STRING(200),
        allowNull: true
    },
    tipo_comuna_id: {
        type: sequelize_1.DataTypes.STRING(32),
        allowNull: true
    },
    sw_whatsapp: {
        type: sequelize_1.DataTypes.INTEGER,
        allowNull: true
    },
    cod_iso3: {
        type: sequelize_1.DataTypes.STRING(3),
        allowNull: true
    },
    identidad_genero_id: {
        type: sequelize_1.DataTypes.INTEGER,
        allowNull: true,
        references: {
            model: gender_identity_model_1.default,
            key: 'identidad_genero_id',
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
    tipo_raza_id: {
        type: sequelize_1.DataTypes.INTEGER,
        allowNull: true,
        references: {
            model: race_model_1.default,
            key: 'tipo_raza_id',
        }
    },
    tipo_estado_civil_id: {
        type: sequelize_1.DataTypes.CHAR(6),
        allowNull: false,
        references: {
            model: marital_status_model_1.default,
            key: 'tipo_estado_civil_id',
        }
    },
    ocupacion_id: {
        type: sequelize_1.DataTypes.CHAR(4),
        allowNull: false,
        references: {
            model: occupation_model_1.default,
            key: 'ocupacion_id',
        }
    }
}, {
    timestamps: false,
    sequelize: database_1.default,
    tableName: 'eps_afiliados_datos',
    paranoid: true
});
AffiliateDetail.hasOne(gender_model_1.default, {
    foreignKey: 'sexo_id',
    sourceKey: 'tipo_sexo_id',
});
AffiliateDetail.hasOne(gender_identity_model_1.default, {
    foreignKey: 'identidad_genero_id',
    sourceKey: 'identidad_genero_id',
    allowNull: true
});
AffiliateDetail.hasOne(ethnicity_model_1.default, {
    foreignKey: 'pert_etnica_id',
    sourceKey: 'pert_etnica_id',
    allowNull: true
});
AffiliateDetail.hasOne(race_model_1.default, {
    foreignKey: 'tipo_raza_id',
    sourceKey: 'tipo_raza_id',
    allowNull: true
});
AffiliateDetail.hasOne(marital_status_model_1.default, {
    foreignKey: 'tipo_estado_civil_id',
    sourceKey: 'tipo_estado_civil_id',
    allowNull: true
});
AffiliateDetail.hasOne(occupation_model_1.default, {
    foreignKey: 'ocupacion_id',
    sourceKey: 'ocupacion_id',
    allowNull: true
});
exports.default = AffiliateDetail;
