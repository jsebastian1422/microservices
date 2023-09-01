import { DataTypes, Optional, Model } from "sequelize";
import sequelizeConnection from "../../database/database";

interface SexualOrientationAttribute {
    orientacion_sexual_id: number;
    descripcion: string;
    sw_estado: string;
}

export interface SexualOrientationInput extends Optional<SexualOrientationAttribute, 'identidad_genero_id'> {}
export interface SexualOrientationOutput extends Required<SexualOrientationAttribute> {}

class SexualOrientation extends Model<SexualOrientationAttribute, SexualOrientationAttribute> implements SexualOrientationAttribute {
    public orientacion_sexual_id!: number;
    public descripcion!: string;
    public sw_estado!: string;
}

SexualOrientation.init({
    orientacion_sexual_id: {
        type: DataTypes.INTEGER,
        autoIncrement: true,
        primaryKey: true,
    },
    descripcion: {
        type: DataTypes.STRING(60),
        allowNull: false
    },
    sw_estado: {
        type: DataTypes.CHAR(1),
        allowNull: false
    }
}, {
    timestamps: false,
    sequelize: sequelizeConnection,
    tableName: 'orientacion_sexual',
    paranoid: true 
});
export default SexualOrientation;