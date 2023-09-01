import { DataTypes, Optional, Model } from "sequelize";
import sequelizeConnection from "../../database/database";

interface CountryAttribute{
    tipo_pais_id: string;
    bloqueado_edicion: string;
    pais: string;
    valor: string;
    cod_iso3: string;
}

export interface CountryInput extends Optional<CountryAttribute, 'tipo_pais_id'> {}
export interface CountryOutput extends Required<CountryAttribute> {}

class Country extends Model<CountryAttribute, CountryAttribute> implements CountryAttribute {
    public tipo_pais_id!: string;
    public bloqueado_edicion!: string;
    public pais!: string;
    public valor!: string;
    public cod_iso3!: string;
}

Country.init({
    tipo_pais_id: {
        type: DataTypes.CHAR(4),
        primaryKey: true,
        allowNull: false
    },
    bloqueado_edicion: {
        type: DataTypes.CHAR(1),
        allowNull: false
    },
    pais: {
        type: DataTypes.STRING(60),
        allowNull: true,
    },
    valor: {
        type: DataTypes.STRING(255),
        allowNull: false,
    },
    cod_iso3: {
        type: DataTypes.STRING(3),
        allowNull: false,
    }
}, {
    timestamps: false,
    sequelize: sequelizeConnection,
    tableName: 'tipo_pais',
    paranoid: true 
});
export default Country;