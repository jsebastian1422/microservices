import { DataTypes, Optional, Model } from "sequelize";
import sequelizeConnection from "../../database/database";
import Patient from './patient.model';
import Race from './race.model';
import Ethnicity from './ethnicity.model';


interface PatientDetailAttribute {
    afiliado_tipo_id: string;
    afiliado_id: string;
    direccion_trabajo: string;
    telefono_trabajo: string;
    nombre_aviso: string;
    telefono_aviso: string;
    tipo_raza_id: number;
    arp_tipo_id_tercero: string;
    arp_tercero_id: string;
    nivel_id: number;
    mano_dominante: string;
    preferencia_sexual: number;
    tipos_condicion_usuarios_planes_id: number;
    poblacion_vulnerable_id: number;
    discapacidad_id: number;
    pertenencia_etnica_id: number;
}

export interface PatientDetailInput extends Optional<PatientDetailAttribute, 'afiliado_id'> {}
export interface PatientDetailOutput extends Required<PatientDetailAttribute> {}

class PatientDetail extends Model<PatientDetailAttribute, PatientDetailAttribute> implements PatientDetailAttribute {
    public afiliado_tipo_id!: string;
    public afiliado_id!: string;
    public direccion_trabajo!: string;
    public telefono_trabajo!: string;
    public nombre_aviso!: string;
    public telefono_aviso!: string;
    public tipo_raza_id!: number;
    public arp_tipo_id_tercero!: string;
    public arp_tercero_id!: string;
    public nivel_id!: number;
    public mano_dominante!: string;
    public preferencia_sexual!: number;
    public tipos_condicion_usuarios_planes_id!: number;
    public poblacion_vulnerable_id!: number;
    public discapacidad_id!: number;
    public pertenencia_etnica_id!: number;
}

PatientDetail.init({
    afiliado_tipo_id: {
        type: DataTypes.CHAR(3),
        primaryKey: true,
        allowNull: false,
        field: 'tipo_id_paciente',
        references: {
            model: Patient,
            key: 'afiliado_tipo_id'
        }
    },
    afiliado_id: {
        type: DataTypes.STRING(32),
        primaryKey: true,
        allowNull: false,
        field: 'paciente_id',
        references: {
            model: Patient,
            key: 'afiliado_id'
        }
    },
    direccion_trabajo: {
        type: DataTypes.STRING(60),
        allowNull: true
    },
    telefono_trabajo: {
        type: DataTypes.STRING(30),
        allowNull: true
    },
    nombre_aviso: {
        type: DataTypes.STRING(90),
        allowNull: true
    },
    telefono_aviso: {
        type: DataTypes.STRING(30),
        allowNull: true
    },
    tipo_raza_id: {
        type: DataTypes.INTEGER,
        allowNull: true,
        references: {
            model: Race,
            key: 'tipo_raza_id',
        }
    },
    arp_tipo_id_tercero: {
        type: DataTypes.STRING(3),
        allowNull: true
    },
    arp_tercero_id: {
        type: DataTypes.STRING(32),
        allowNull: true
    },
    nivel_id: {
        type: DataTypes.INTEGER,
        allowNull: true
    },
    mano_dominante: {
        type: DataTypes.STRING(11),
        allowNull: true
    },
    preferencia_sexual: {
        type: DataTypes.INTEGER,
        allowNull: true
    },
    tipos_condicion_usuarios_planes_id: {
        type: DataTypes.INTEGER,
        allowNull: true
    },
    poblacion_vulnerable_id: {
        type: DataTypes.INTEGER,
        allowNull: true
    },
    discapacidad_id: {
        type: DataTypes.INTEGER,
        allowNull: true
    },
    pertenencia_etnica_id: {
        type: DataTypes.INTEGER,
        allowNull: true,
        references: {
            model: Ethnicity,
            key: 'pert_etnica_id',
        }
    }
},{
    timestamps: false,
    sequelize: sequelizeConnection,
    tableName: 'pacientes_datos_adicionales',
    paranoid: true 
});

export default PatientDetail;