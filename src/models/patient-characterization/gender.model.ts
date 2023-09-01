import { DataTypes, Optional, Model } from "sequelize";
import sequelizeConnection from "../../database/database";

interface GenderAttribute {
    sexo_id: string;
    descripcion: string;
    indice_de_orden: number;
    sw_mostrar: string;
    sw_mostrar_otros_modulos: string;
}

export interface GenderInput extends Optional<GenderAttribute, 'sexo_id'> {}
export interface GenderOutput extends Required<GenderAttribute> {}

class Gender extends Model<GenderAttribute, GenderAttribute> implements GenderAttribute {
    public sexo_id!: string;
    public descripcion!: string;
    public indice_de_orden!: number;
    public sw_mostrar!: string;
    public sw_mostrar_otros_modulos!: string;
}

Gender.init({
    sexo_id: {
        type: DataTypes.STRING,
        allowNull: false,
        primaryKey: true
    },
    descripcion: {
        type: DataTypes.STRING(30),
        allowNull: false
    },
    indice_de_orden: {
        type: DataTypes.TINYINT,
        allowNull: false
    },
    sw_mostrar: {
        type: DataTypes.CHAR(1),
        allowNull: false
    },
    sw_mostrar_otros_modulos: {
        type: DataTypes.CHAR(1),
        allowNull: false
    }
},{
    timestamps: false,
    sequelize: sequelizeConnection,
    tableName: 'tipo_sexo',
    paranoid: true 
});

export default Gender;