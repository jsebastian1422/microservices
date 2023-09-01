import { DataTypes, Optional, Model } from "sequelize";
import sequelizeConnection from "../../database/database";

interface RaceAttribute {
    tipo_raza_id: number;
    descripcion: string;
}

export interface RaceInput extends Optional<RaceAttribute, 'tipo_raza_id'> {}
export interface RaceOutput extends Required<RaceAttribute> {}

class Race extends Model<RaceAttribute, RaceAttribute> implements RaceAttribute {
    public tipo_raza_id!: number;
    public descripcion!: string;
}

Race.init({
    tipo_raza_id: {
        type: DataTypes.INTEGER,
        allowNull: false,
        primaryKey: true
    },
    descripcion: {
        type: DataTypes.STRING,
        allowNull: false
    }
},{
    timestamps: false,
    sequelize: sequelizeConnection,
    tableName: 'tipos_razas',
    paranoid: true 
});

export default Race;