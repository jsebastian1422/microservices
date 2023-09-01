import { DataTypes, Optional, Model } from "sequelize";
import sequelizeConnection from "../../database/database";

interface MaritalStatusAttribute {
    tipo_estado_civil_id: string;
    descripcion: string;
    indice_de_orden: number;
    estado_sius: string;
}

export interface SexualOrientationInput extends Optional<MaritalStatusAttribute, 'tipo_estado_civil_id'> {}
export interface SexualOrientationOutput extends Required<MaritalStatusAttribute> {}

class MaritalStatus extends Model<MaritalStatusAttribute, MaritalStatusAttribute> implements MaritalStatusAttribute {
    public tipo_estado_civil_id!: string;
    public descripcion!: string;
    public indice_de_orden!: number;
    public estado_sius!: string;
}

MaritalStatus.init({
    tipo_estado_civil_id: {
        type: DataTypes.STRING(6),
        primaryKey: true,
        allowNull: false
    },
    descripcion: {
        type: DataTypes.STRING(30),
        allowNull: false
    },
    indice_de_orden: {
        type: DataTypes.INTEGER,
        allowNull: false
    },
    estado_sius: {
        type: DataTypes.STRING(5),
        allowNull: true
    }
}, {
    timestamps: false,
    sequelize: sequelizeConnection,
    tableName: 'tipo_estado_civil',
    paranoid: true 
});
export default MaritalStatus;