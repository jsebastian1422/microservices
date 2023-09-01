import { DataTypes, Optional, Model } from "sequelize";
import sequelizeConnection from "../../database/database";
import Gender from "./gender.model";
import GenderIdentity from "./gender_identity.model";
import MaritalStatus from "./marital_status.model";
import Occupation from "./occupation.model";
import Ethnicity from "./ethnicity.model";
import PatientDetail from "./patien_detail.model";

interface PatientAttribute {
    afiliado_tipo_id: string;
    afiliado_id: string;
    primer_apellido: string;
    segundo_apellido: string;
    primer_nombre: string;
    segundo_nombre: string;
    fecha_nacimiento: string;
    tipo_sexo_id: string;
    tipo_pais_id: string;
    tipo_dpto_id: string;
    tipo_mpio_id: string;
    zona_residencia: string;
    direccion_residencia: string;
    telefono_residencia: string;
    telefono_movil: string;
    celular2: string;
    email: string;
    tipo_comuna_id: string;
    tipo_barrio_id: string;
    tipo_estrato_id: string;
    sw_whatsapp: number;
    cod_iso3: string;
    identidad_genero_id: string;
    pert_etnica_id: string;
    tipo_estado_civil_id: string;
    ocupacion_id: string;
}

export interface PatientInput extends Optional <PatientAttribute, 'afiliado_id'> {}
export interface PatientOutput extends Required <PatientAttribute> {}

class Patient extends Model <PatientAttribute, PatientAttribute> implements PatientAttribute {
    public afiliado_tipo_id!: string;
    public afiliado_id!: string;
    public primer_apellido!: string;
    public segundo_apellido!: string;
    public primer_nombre!: string;
    public segundo_nombre!: string;
    public fecha_nacimiento!: string;
    public tipo_sexo_id!: string;
    public tipo_pais_id!: string;
    public tipo_dpto_id!: string;
    public tipo_mpio_id!: string;
    public zona_residencia!: string;
    public direccion_residencia!: string;
    public telefono_residencia!: string;
    public telefono_movil!: string;
    public celular2!: string;
    public email!: string;
    public tipo_comuna_id!: string;
    public tipo_barrio_id!: string;
    public tipo_estrato_id!: string;
    public sw_whatsapp!: number;
    public cod_iso3!: string;
    public identidad_genero_id!: string;
    public pert_etnica_id!: string;
    public tipo_estado_civil_id!: string;
    public ocupacion_id!: string;
}

Patient.init({
    afiliado_tipo_id: {
        type: DataTypes.CHAR(2),
        primaryKey: true,
        allowNull: false,
        field: 'tipo_id_paciente'
    },
    afiliado_id: {
        type: DataTypes.STRING(34),
        primaryKey: true,
        allowNull: false,
        field: 'paciente_id'
    },
    primer_apellido: {
        type: DataTypes.STRING(20),
        allowNull: false
    },
    segundo_apellido: {
        type: DataTypes.STRING(30),
        allowNull: false
    },
    primer_nombre: {
        type: DataTypes.STRING(20),
        allowNull: false
    },
    segundo_nombre: {
        type: DataTypes.STRING(30),
        allowNull: false
    },
    fecha_nacimiento: {
        type: DataTypes.DATEONLY,
        allowNull: false
    },
    tipo_sexo_id: {
        type: DataTypes.CHAR(1),
        allowNull: false,
        field: 'sexo_id',
        references: {
            model: Gender,
            key: 'sexo_id',
        }
    },
    tipo_pais_id: {
        type: DataTypes.CHAR(4),
        allowNull: false
    },
    tipo_dpto_id: {
        type: DataTypes.CHAR(4),
        allowNull: false
    },
    tipo_mpio_id: {
        type: DataTypes.CHAR(4),
        allowNull: false
    },
    zona_residencia: {
        type: DataTypes.CHAR(1),
        allowNull: false
    },
    direccion_residencia: {
        type: DataTypes.STRING(100),
        allowNull: false,
        field: 'residencia_direccion'
    },
    telefono_residencia: {
        type: DataTypes.STRING(30),
        allowNull: true,
        field: 'residencia_telefono'
    },
    telefono_movil: {
        type: DataTypes.STRING(30),
        allowNull: false,
        field: 'celular_telefono'
    },
    celular2: {
        type: DataTypes.STRING(30),
        allowNull: true
    },
    email: {
        type: DataTypes.STRING(200),
        allowNull: true
    },
    tipo_comuna_id: {
        type: DataTypes.STRING(4),
        allowNull: true
    },
    tipo_barrio_id: {
        type: DataTypes.STRING(4),
        allowNull: true
    },
    tipo_estrato_id: {
        type: DataTypes.STRING(2),
        allowNull: true
    },
    sw_whatsapp: {
        type: DataTypes.INTEGER,
        allowNull: true
    },
    cod_iso3: {
        type: DataTypes.STRING(3),
        allowNull: true
    },
    identidad_genero_id: {
        type: DataTypes.INTEGER,
        allowNull: true,
        references: {
            model: GenderIdentity,
            key: 'identidad_genero_id',
        }
    },
    pert_etnica_id: {
        type: DataTypes.INTEGER,
        allowNull: true,
        references: {
            model: Ethnicity,
            key: 'pert_etnica_id',
        }
    },
    tipo_estado_civil_id: {
        type: DataTypes.CHAR(6),
        allowNull: false,
        references: {
            model: MaritalStatus,
            key: 'tipo_estado_civil_id',
        }
    },
    ocupacion_id: {
        type: DataTypes.CHAR(4),
        allowNull: false,
        references: {
            model: Occupation,
            key: 'ocupacion_id',
        }
    }
}, {
    timestamps: false,
    sequelize: sequelizeConnection,
    tableName: 'pacientes',
    paranoid: true 
});
Patient.hasOne(Gender, {
    foreignKey: 'sexo_id',
    sourceKey: 'tipo_sexo_id',
});
Patient.hasOne(GenderIdentity, {
    foreignKey: 'identidad_genero_id',
    sourceKey: 'identidad_genero_id',
    allowNull: true

});
Patient.hasOne(Ethnicity, {
    foreignKey: 'pert_etnica_id',
    sourceKey: 'pert_etnica_id',
    allowNull: true

});
Patient.hasOne(MaritalStatus, {
    foreignKey: 'tipo_estado_civil_id',
    sourceKey: 'tipo_estado_civil_id',
    allowNull: true

});
Patient.hasOne(Occupation, {
    foreignKey: 'ocupacion_id',
    sourceKey: 'ocupacion_id',
    allowNull: true

});
Patient.hasOne(PatientDetail, {
    foreignKey: 'afiliado_id',
    sourceKey: 'afiliado_id'
})
Patient.hasOne(PatientDetail, {
    foreignKey: 'afiliado_tipo_id',
    sourceKey: 'afiliado_tipo_id'
})
export default Patient;