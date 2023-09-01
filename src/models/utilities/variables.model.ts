import { DataTypes, Optional, Model } from "sequelize";
import sequelizeConnection from "../../database/database";

interface VaraiblesAttribute {
    modulo: string;
    modulo_tipo: string;
    variable: string;
    valor: string;
    descripcion: string;
}

export interface VaraiblesInput extends Optional<VaraiblesAttribute,'modulo'> {}
export interface VariablesOuput extends Required<VaraiblesAttribute> {}

class Variables extends Model<VaraiblesAttribute, VaraiblesAttribute> implements VaraiblesAttribute {
    public modulo!: string;
    public modulo_tipo!: string;
    public variable!: string;
    public valor!: string;
    public descripcion!: string;
}

Variables.init({
    modulo: {
        type: DataTypes.STRING(64),
        primaryKey: true,
        allowNull: false,
    },
    modulo_tipo: {
        type: DataTypes.STRING(20),
        primaryKey: true,
        allowNull: false,
    },
    variable: {
        type: DataTypes.STRING(64),
        primaryKey: true,
        allowNull: false,
    },
    valor: {
        type: DataTypes.TEXT,
        allowNull: false
    },
    descripcion: {
        type: DataTypes.TEXT,
        allowNull: true
    },
}, {
    timestamps: false,
    sequelize: sequelizeConnection,
    tableName: 'system_modulos_variables',
    paranoid: true 
});
export default Variables;