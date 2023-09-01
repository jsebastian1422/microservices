import { DataTypes, Optional, Model } from "sequelize";
import sequelizeConnection from "../../database/database";

interface TypeHouseAttribute{
    tipo_vivienda_id: number;
    descripcion: string;
    sw_estado: string;
    sw_servicio: string;
    usuario_id: number;
    fecha_registro: string;
}

export interface TypeHouseInput extends Optional<TypeHouseAttribute, 'tipo_vivienda_id'> {}
export interface TypeHouseOutput extends Required<TypeHouseAttribute> {}

class TypeHouse extends Model<TypeHouseAttribute, TypeHouseAttribute> implements TypeHouseAttribute {
    public tipo_vivienda_id!: number;
    public descripcion!: string;
    public sw_estado!: string;
    public sw_servicio!: string;
    public usuario_id!: number;
    public fecha_registro!: string;
}

TypeHouse.init({
    tipo_vivienda_id: {
        type: DataTypes.INTEGER,
        primaryKey: true,
        autoIncrement: true,
        allowNull: false
    },
    descripcion: {
            type: DataTypes.STRING(100),
            allowNull: false
    },
    sw_estado: {
        type: DataTypes.STRING(1),
        allowNull: false
    },
    sw_servicio: {
        type: DataTypes.STRING(1),
        allowNull: false
    },
    usuario_id: {
        type: DataTypes.INTEGER,
        allowNull: false
    },
    fecha_registro: {
        type: DataTypes.DATEONLY,
        allowNull: false
    }
}, {
    timestamps: false,
    sequelize: sequelizeConnection,
    tableName: 'tipos_vivienda',
    paranoid: true 
});
export default TypeHouse;