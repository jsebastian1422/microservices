import { DataTypes, Optional, Model } from "sequelize";
import sequelizeConnection from "../../database/database";
import City from "./city.model";

interface CommuneAttribute{
    tipo_pais_id: string;
    tipo_dpto_id: string;
    tipo_mpio_id: string;
    tipo_comuna_id: string;
    comuna: string;
}

export interface CommuneInput extends Optional<CommuneAttribute, 'tipo_comuna_id'> {}
export interface CommuneOutput extends Required<CommuneAttribute> {}

class Commune extends Model<CommuneAttribute, CommuneAttribute> implements CommuneAttribute {
    public tipo_pais_id!: string;
    public tipo_dpto_id!: string;
    public tipo_mpio_id!: string;
    public tipo_comuna_id!: string;
    public comuna!: string;
}

Commune.init({
    tipo_dpto_id: {
        type: DataTypes.CHAR(4),
        primaryKey: true,
        allowNull: false,
        references: {
            model: City,
            key: 'tipo_dpto_id'
        }
    },
    tipo_pais_id: {
        type: DataTypes.CHAR(4),
        allowNull: false,
        primaryKey: true,
        references: {
            model: City,
            key: 'tipo_pais_id'
        }
    },
    tipo_mpio_id: {
        type: DataTypes.CHAR(4),
        primaryKey: true,
        allowNull: false,
        references: {
            model: City,
            key: 'tipo_mpio_id'
        }
    },
    tipo_comuna_id: {
        type: DataTypes.CHAR(4),
        primaryKey: true,
        allowNull: false
    },
    comuna: {
        type: DataTypes.STRING(30),
        allowNull: false,
    }
}, {
    timestamps: false,
    sequelize: sequelizeConnection,
    tableName: 'tipo_comunas',
    paranoid: true 
});

Commune.hasOne(City, {
    foreignKey: 'tipo_pais_id',
    sourceKey: 'tipo_pais_id'
});

Commune.hasOne(City, {
    foreignKey: 'tipo_dpto_id',
    sourceKey: 'tipo_dpto_id'
});

Commune.hasOne(City, {
    foreignKey: 'tipo_mpio_id',
    sourceKey: 'tipo_mpio_id'
});

export default Commune;