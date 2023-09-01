import { DataTypes, Optional, Model } from "sequelize";
import sequelizeConnection from "../../database/database";
import City from "./city.model";
import SocialClass from "./social_class.model";
import Commune from "./commune.model";

interface NeighborHoodAttribute{
    tipo_pais_id: string;
    tipo_dpto_id: string;
    tipo_mpio_id: string;
    tipo_comuna_id: string;
    tipo_barrio_id: string;
    barrio: string;
    tipo_estrato_id: string;
}

export interface NeighborHoodInput extends Optional<NeighborHoodAttribute, 'tipo_estrato_id'> {}
export interface NeighborHoodOutput extends Required<NeighborHoodAttribute> {}

class NeighborHood extends Model<NeighborHoodAttribute, NeighborHoodAttribute> implements NeighborHoodAttribute {
    public tipo_pais_id!: string;
    public tipo_dpto_id!: string;
    public tipo_mpio_id!: string;
    public tipo_comuna_id!: string;
    public tipo_barrio_id!: string;
    public barrio!: string;
    public tipo_estrato_id!: string;
}

NeighborHood.init({
    tipo_pais_id: {
        type: DataTypes.CHAR(4),
        primaryKey: true,
        allowNull: false,
        references: {
            model: City,
            key: 'tipo_pais_id'
        }
    },
    tipo_dpto_id: {
        type: DataTypes.CHAR(4),
        primaryKey: true,
        allowNull: false,
        references: {
            model: City,
            key: 'tipo_dpto_id'
        }
    },
    tipo_mpio_id: {
        type: DataTypes.CHAR(4),
        primaryKey: true,
        allowNull: false,
        references: {
            model: City,
            key: 'tipo_dpto_id'
        }
    },
    tipo_comuna_id: {
        type: DataTypes.CHAR(4),
        primaryKey: true,
        allowNull: false,
        references: {
            model: Commune,
            key: 'tipo_comuna_id'
        }
    },
    tipo_barrio_id: {
        type: DataTypes.CHAR(4),
        primaryKey: true,
        allowNull: false
    },
    barrio: {
        type: DataTypes.STRING(30),
        allowNull: false,
    },
    tipo_estrato_id: {
        type: DataTypes.CHAR(2),
        allowNull: false,
        references: {
            model: SocialClass,
            key: 'tipo_estrato_id'
        }
    }
}, {
    timestamps: false,
    sequelize: sequelizeConnection,
    tableName: 'tipo_barrios',
    paranoid: true 
});

NeighborHood.hasOne(City, {
    foreignKey: 'tipo_pais_id',
    sourceKey: 'tipo_pais_id'
});
NeighborHood.hasOne(City, {
    foreignKey: 'tipo_dpto_id',
    sourceKey: 'tipo_dpto_id'
});
NeighborHood.hasOne(City, {
    foreignKey: 'tipo_mpio_id',
    sourceKey: 'tipo_mpio_id'
});
NeighborHood.hasOne(Commune, {
    foreignKey: 'tipo_comuna_id',
    sourceKey: 'tipo_comuna_id'
});
export default NeighborHood;