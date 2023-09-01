import { DataTypes, Optional, Model } from "sequelize";
import sequelizeConnection from "../../database/database";

interface TypeRecidenceZoneAttribute{
    zona_residencia: string;
    descripcion: string;
    id_element: string;
}

export interface TypeResidenceZoneInput extends Optional<TypeRecidenceZoneAttribute, 'zona_residencia'> {}
export interface TypeResidenceZoneOutput extends Required<TypeRecidenceZoneAttribute> {}

class TypeResidenceZone extends Model<TypeRecidenceZoneAttribute, TypeRecidenceZoneAttribute> implements TypeRecidenceZoneAttribute {
    public zona_residencia!: string;
    public descripcion!: string;
    public id_element!: string;
}

TypeResidenceZone.init({
    zona_residencia: {
        type: DataTypes.CHAR(1),
        primaryKey: true,
        allowNull: false
    },
    descripcion: {
        type: DataTypes.STRING(15),
        allowNull: false
    },
    id_element: {
        type: DataTypes.STRING,
        allowNull: false
    }
}, {
    timestamps: false,
    sequelize: sequelizeConnection,
    tableName: 'zonas_residencia',
    paranoid: true 
});
export default TypeResidenceZone;