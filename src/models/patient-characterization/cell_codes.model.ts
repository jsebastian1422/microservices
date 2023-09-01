import { DataTypes, Optional, Model } from "sequelize";
import sequelizeConnection from "../../database/database";

interface CellCodesAttribute {
    id: number;
    prefijo: number;
    sw_estado: string;
}

export interface CellCodesInput extends Optional<CellCodesAttribute, 'id'> {}
export interface CellCodesOutput extends Required<CellCodesAttribute> {}

class CellCodes extends Model<CellCodesAttribute, CellCodesAttribute> implements CellCodesAttribute {
    public id!: number;
    public prefijo!: number;
    public sw_estado!: string;
}

CellCodes.init({
    id: {
        type: DataTypes.INTEGER,
        primaryKey: true,
        autoIncrement: true,
        allowNull: false
    },
    prefijo: {
        type: DataTypes.INTEGER,
        allowNull: false
    },
    sw_estado: {
        type: DataTypes.STRING(1),
        allowNull: false
    }
}, {
    timestamps: false,
    sequelize: sequelizeConnection,
    tableName: 'prefijos_celulares',
    paranoid: true 
});
export default CellCodes;