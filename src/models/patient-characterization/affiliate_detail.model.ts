import { DataTypes, Optional, Model } from "sequelize";
import sequelizeConnection from "../../database/database";
import Affiliate from './affiliate.model';
import Gender from "./gender.model";
import GenderIdentity from "./gender_identity.model";
import Ethnicity from "./ethnicity.model";
import Race from "./race.model";
import MaritalStatus from "./marital_status.model";
import Occupation from "./occupation.model";

interface AffiliateDetailAttribute{
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
    sw_whatsapp: number;
    cod_iso3: string;
    identidad_genero_id: number;
    pert_etnica_id: number;
    tipo_raza_id: number;
    tipo_estado_civil_id: string;
    ocupacion_id: string;
}

export interface AffiliateDetailInput extends Optional<AffiliateDetailAttribute, 'afiliado_tipo_id'> {}
export interface AffiliateDetailOutput extends Required<AffiliateDetailAttribute> {}

class AffiliateDetail extends Model<AffiliateDetailAttribute, AffiliateDetailAttribute> implements AffiliateDetailAttribute {
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
    public sw_whatsapp!: number;
    public cod_iso3!: string;
    public identidad_genero_id!: number;
    public pert_etnica_id!: number;
    public tipo_raza_id!: number;
    public tipo_estado_civil_id!: string;
    public ocupacion_id!: string;
}

AffiliateDetail.init({
    afiliado_tipo_id: {
        type: DataTypes.CHAR(2),
        primaryKey: true,
        allowNull: false,
        references: {
            model: Affiliate,
            key: 'afiliado_tipo_id'
        }
    },
    afiliado_id: {
        type: DataTypes.STRING(34),
        primaryKey: true,
        allowNull: false,
        references: {
            model: Affiliate,
            key: 'afiliado_id'
        }
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
        allowNull: false
    },
    telefono_residencia: {
        type: DataTypes.STRING(30),
        allowNull: true,
    },
    telefono_movil: {
        type: DataTypes.STRING(30),
        allowNull: false,
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
        type: DataTypes.STRING(32),
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
    tipo_raza_id: {
        type: DataTypes.INTEGER,
        allowNull: true,
        references: {
            model: Race,
            key: 'tipo_raza_id',
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
    tableName: 'eps_afiliados_datos',
    paranoid: true 
});

AffiliateDetail.hasOne(Gender, {
    foreignKey: 'sexo_id',
    sourceKey: 'tipo_sexo_id',
});
AffiliateDetail.hasOne(GenderIdentity, {
    foreignKey: 'identidad_genero_id',
    sourceKey: 'identidad_genero_id',
    allowNull: true

});
AffiliateDetail.hasOne(Ethnicity, {
    foreignKey: 'pert_etnica_id',
    sourceKey: 'pert_etnica_id',
    allowNull: true

});
AffiliateDetail.hasOne(Race, {
    foreignKey: 'tipo_raza_id',
    sourceKey: 'tipo_raza_id',
    allowNull: true

});
AffiliateDetail.hasOne(MaritalStatus, {
    foreignKey: 'tipo_estado_civil_id',
    sourceKey: 'tipo_estado_civil_id',
    allowNull: true

});
AffiliateDetail.hasOne(Occupation, {
    foreignKey: 'ocupacion_id',
    sourceKey: 'ocupacion_id',
    allowNull: true

});
export default AffiliateDetail;