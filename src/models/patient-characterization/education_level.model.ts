import { DataTypes, Optional, Model } from "sequelize";
import sequelizeConnection from "../../database/database";

interface EducationLevelAttribute {
    nivel_id: number;
    descripcion: string;
}

export interface EducationLevelInput extends Optional<EducationLevelAttribute, 'nivel_id'> {}
export interface EducationLevelOutput extends Required<EducationLevelAttribute> {}

class EducationLevel extends Model<EducationLevelAttribute, EducationLevelAttribute> implements EducationLevelAttribute {
    public nivel_id!: number;
    public descripcion!: string;
}

EducationLevel.init({
    nivel_id: {
        type: DataTypes.INTEGER,
        primaryKey: true,
    },
    descripcion: {
        type: DataTypes.STRING(100),
        allowNull: false
    }
}, {
    timestamps: false,
    sequelize: sequelizeConnection,
    tableName: 'tipos_niveles_escolaridad',
    paranoid: true 
});
export default EducationLevel;