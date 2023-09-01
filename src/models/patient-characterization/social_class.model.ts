import { DataTypes, Optional, Model } from "sequelize";
import sequelizeConnection from "../../database/database";

interface SocialClassAttribute{
    tipo_estrato_id: string;
    descripcion: string;
}

export interface CityInput extends Optional<SocialClassAttribute, 'tipo_estrato_id'> {}
export interface CityOutput extends Required<SocialClassAttribute> {}

class SocialClass extends Model<SocialClassAttribute, SocialClassAttribute> implements SocialClassAttribute {
    public tipo_estrato_id!: string;
    public descripcion!: string;
}

SocialClass.init({
    tipo_estrato_id: {
        type: DataTypes.CHAR(2),
        primaryKey: true,
        allowNull: false
    },
    descripcion: {
        type: DataTypes.STRING(30),
        allowNull: false,
    }
}, {
    timestamps: false,
    sequelize: sequelizeConnection,
    tableName: 'tipos_estratos',
    paranoid: true 
});

export default SocialClass;