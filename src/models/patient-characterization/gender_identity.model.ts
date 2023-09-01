import { DataTypes, Optional, Model } from "sequelize";
import sequelizeConnection from "../../database/database";

interface GenderIdentityAttribute {
    identidad_genero_id: number;
    descripcion: string;
    sw_estado: string;
}

export interface GenderIdentityInput extends Optional<GenderIdentityAttribute, 'identidad_genero_id'> {}
export interface GenderIdentityOutput extends Required<GenderIdentityAttribute> {}

class GenderIdentity extends Model<GenderIdentityAttribute, GenderIdentityAttribute> implements SexualOrientationAttribute {
    public identidad_genero_id!: number;
    public descripcion!: string;
    public sw_estado!: string;
}

GenderIdentity.init({
    identidad_genero_id: {
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
    tableName: 'identidad_genero',
    paranoid: true 
});
export default GenderIdentity;