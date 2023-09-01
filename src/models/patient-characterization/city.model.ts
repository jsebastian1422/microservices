import { DataTypes, Optional, Model } from "sequelize";
import sequelizeConnection from "../../database/database";
import State from "./state.model";

interface CityAttribute{
    tipo_pais_id: string;
    tipo_dpto_id: string;
    tipo_mpio_id: string;
    municipio: string;
}

export interface CityInput extends Optional<CityAttribute, 'tipo_mpio_id'> {}
export interface CityOutput extends Required<CityAttribute> {}

class City extends Model<CityAttribute, CityAttribute> implements CityAttribute {
    public tipo_pais_id!: string;
    public tipo_dpto_id!: string;
    public tipo_mpio_id!: string;
    public municipio!: string;
}

City.init({
    tipo_dpto_id: {
        type: DataTypes.CHAR(4),
        primaryKey: true,
        allowNull: false,
        references: {
            model: State,
            key: 'tipo_dpto_id'
        }
    },
    tipo_pais_id: {
        type: DataTypes.CHAR(4),
        allowNull: false,
        primaryKey: true,
        references: {
            model: State,
            key: 'tipo_pais_id'
        }
    },
    tipo_mpio_id: {
        type: DataTypes.CHAR(4),
        primaryKey: true,
        allowNull: false
    },
    municipio: {
        type: DataTypes.STRING(30),
        allowNull: false,
    }
}, {
    timestamps: false,
    sequelize: sequelizeConnection,
    tableName: 'tipo_mpios',
    paranoid: true 
});

City.hasOne(State, {
    foreignKey: 'tipo_pais_id',
    sourceKey: 'tipo_pais_id'
});

City.hasOne(State, {
    foreignKey: 'tipo_dpto_id',
    sourceKey: 'tipo_dpto_id'
});

export default City;