import { DataTypes, Optional, Model } from "sequelize";
import sequelizeConnection from "../../database/database";
import Affiliate from "./affiliate.model";
import Gender from "./gender.model";
import SexualOrientation from "./sexual_orientation.model";
import GenderIdentity from "./gender_identity.model";
import Race from "./race.model";
import Ethnicity from "./ethnicity.model";
import MaritalStatus from "./marital_status.model";
import Occupation from "./occupation.model";
import TypeHouse from "./type_house.model";

interface CharacterizationAttribute {
    caracterizacion_paciente_id: number;
    date: string;
    afiliado_tipo_id: string;
    afiliado_id: string;
    plan_id: number;
    tipo_sexo_id: string;
    orientacion_sexual_id: number;
    identidad_genero_id: number;
    tipo_raza_id: number;
    pert_etnica_id: number;
    tipo_estado_civil_id: string;
    nivel_id: number;
    ocupacion_id: string;
    tipo_vivienda_id: number;
}

export interface CharacterizationInput extends Optional<CharacterizationAttribute, 'afiliado_id'> {}
export interface CharacterizationOutput extends Required<CharacterizationAttribute> {}

class Characterization extends Model<CharacterizationAttribute, CharacterizationAttribute> implements CharacterizationAttribute {
    caracterizacion_paciente_id!: number;
    date!: string;
    afiliado_tipo_id!: string;
    afiliado_id!: string;
    plan_id!: number;
    tipo_sexo_id!: string;
    orientacion_sexual_id!: number;
    identidad_genero_id!: number;
    tipo_raza_id!: number;
    pert_etnica_id!: number;
    tipo_estado_civil_id!: string;
    nivel_id!: number;
    ocupacion_id!: string;
    tipo_vivienda_id!: number;
}
Characterization.init({
    caracterizacion_paciente_id: {
        type: DataTypes.INTEGER,
        allowNull: false,
        primaryKey: true,
        autoIncrement: true
    },
    afiliado_tipo_id: {
        type: DataTypes.CHAR(2),
        allowNull: false,
        references: {
            model: Affiliate,
            key: 'afiliado_tipo_id'
        }
    },
    afiliado_id: {
        type: DataTypes.STRING(34),
        allowNull: false,
        references: {
            model: Affiliate,
            key: 'afiliado_id'
        }
    },
    date: {
        type: DataTypes.DATE(),
        allowNull: true
    },
    plan_id: {
        type: DataTypes.INTEGER,
        allowNull: true
    },
    tipo_sexo_id: {
        type: DataTypes.CHAR(1),
        allowNull: true,
        references: {
            model: Gender,
            key: 'sexo_id',
        }
    },
    orientacion_sexual_id: {
        type: DataTypes.INTEGER,
        allowNull: true,
        references: {
            model: SexualOrientation,
            key: 'orientacion_sexual_id',
        }
    },
    identidad_genero_id: {
        type: DataTypes.INTEGER,
        allowNull: true,
        references: {
            model: GenderIdentity,
            key: 'identidad_genero_id',
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
        allowNull: true,
        references: {
            model: MaritalStatus,
            key: 'tipo_estado_civil_id',
        }
    },
    nivel_id: {
        type: DataTypes.INTEGER,
        allowNull: true
    },
    ocupacion_id: {
        type: DataTypes.CHAR(4),
        allowNull: true,
        references: {
            model: Occupation,
            key: 'ocupacion_id',
        }
    },
    tipo_vivienda_id: {
        type: DataTypes.INTEGER,
        allowNull: true,
        references: {
            model: TypeHouse,
            key: 'tipo_vivienda_id',
        }
    },
},{
    timestamps: true,
    createdAt: false,
    updatedAt: false,
    deletedAt: false,
    sequelize: sequelizeConnection,
    tableName: 'caracterizacion_pacientes',
    paranoid: true 

});
Characterization.hasOne(Gender, {
    foreignKey: 'sexo_id',
    sourceKey: 'tipo_sexo_id',
});
Characterization.hasOne(GenderIdentity, {
    foreignKey: 'identidad_genero_id',
    sourceKey: 'identidad_genero_id',
    allowNull: true

});
Characterization.hasOne(Ethnicity, {
    foreignKey: 'pert_etnica_id',
    sourceKey: 'pert_etnica_id',
    allowNull: true

});
Characterization.hasOne(Race, {
    foreignKey: 'tipo_raza_id',
    sourceKey: 'tipo_raza_id',
    allowNull: true

});
Characterization.hasOne(MaritalStatus, {
    foreignKey: 'tipo_estado_civil_id',
    sourceKey: 'tipo_estado_civil_id',
    allowNull: true

});
Characterization.hasOne(Occupation, {
    foreignKey: 'ocupacion_id',
    sourceKey: 'ocupacion_id',
    allowNull: true

});
export default Characterization;