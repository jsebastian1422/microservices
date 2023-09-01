
import { DataTypes, Optional, Model } from "sequelize";
import sequelizeConnection from "../../database/database";

interface EthnicityAttribute {
    pert_etnica_id: number;
    descripcion: string;
    sw_activo: string;
}

export interface EthnicityInput extends Optional<EthnicityAttribute, 'afiliado_tipo_id'> {}
export interface EthnicityOutput extends Required<EthnicityAttribute> {}

class Ethnicity extends Model<EthnicityAttribute, EthnicityAttribute> implements EthnicityAttribute {
    public pert_etnica_id!: number;
    public descripcion!: string;
    public sw_activo!: string;
}

Ethnicity.init({
    pert_etnica_id: {
        type: DataTypes.INTEGER,
        allowNull: false,
        primaryKey: true,
        autoIncrement: true
    },
    descripcion: {
        type: DataTypes.STRING,
        allowNull: false
    },
    sw_activo: {
        type: DataTypes.CHAR(1),
        allowNull: false
    }

},{
    timestamps: false,
    sequelize: sequelizeConnection,
    tableName: 'pertenencias_etnicas',
    paranoid: true 
});

export default Ethnicity;