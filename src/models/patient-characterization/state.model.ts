import { DataTypes, Optional, Model } from "sequelize";
import sequelizeConnection from "../../database/database";
import Country from "./country.model";

interface StateAttribute{
    tipo_dpto_id: string;
    tipo_pais_id: string;
    departamento: string;
}

export interface StateInput extends Optional<StateAttribute, 'tipo_pais_id'> {}
export interface StateOutput extends Required<StateAttribute> {}

class State extends Model<StateAttribute, StateAttribute> implements StateAttribute {
    public tipo_dpto_id!: string;
    public tipo_pais_id!: string;
    public departamento!: string;
}

State.init({
    tipo_dpto_id: {
        type: DataTypes.CHAR(4),
        primaryKey: true,
        allowNull: false
    },
    tipo_pais_id: {
        type: DataTypes.CHAR(4),
        allowNull: false,
        references: {
            model: Country,
            key: 'tipo_pais_id'
        }
    },
    departamento: {
        type: DataTypes.STRING(30),
        allowNull: false,
    }
}, {
    timestamps: false,
    sequelize: sequelizeConnection,
    tableName: 'tipo_dptos',
    paranoid: true 
});

State.hasOne(Country, {
    foreignKey: 'tipo_pais_id',
    sourceKey: 'tipo_pais_id'
});

export default State;