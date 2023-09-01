import { DataTypes, Optional, Model } from "sequelize";
import sequelizeConnection from "../../database/database";

interface OccupationAttribute{
    ocupacion_id: string;
    ocupacion_descripcion: string;
    indice_de_orden: number;
}

export interface EducationLevelInput extends Optional<OccupationAttribute, 'ocupacion_id'> {}
export interface EducationLevelOutput extends Required<OccupationAttribute> {}

class Occupation extends Model<OccupationAttribute, OccupationAttribute> implements OccupationAttribute {
    public ocupacion_id!: string;
    public ocupacion_descripcion!: string;
    public indice_de_orden!: number;
}

Occupation.init({
    ocupacion_id: {
        type: DataTypes.STRING(4),
        primaryKey: true,
        allowNull: false
    },
    ocupacion_descripcion: {
        type: DataTypes.STRING(200),
        allowNull: false
    },
    indice_de_orden: {
        type: DataTypes.INTEGER,
        allowNull: false
    }
}, {
    timestamps: false,
    sequelize: sequelizeConnection,
    tableName: 'ocupaciones',
    paranoid: true 
});
export default Occupation;