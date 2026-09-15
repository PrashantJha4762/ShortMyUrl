import { DataTypes, Model, type CreationOptional, type InferAttributes, type InferCreationAttributes } from "sequelize";
import { sequelize } from "./sequelize.js";
class urls extends Model<InferAttributes<urls>,InferCreationAttributes<urls>>{
  declare id:CreationOptional<number>
  declare original_url:string
  declare clicks:CreationOptional<number>
  declare short_url:string
  declare createdAt:CreationOptional<Date>
  declare updatedAt:CreationOptional<Date>
}
urls.init({
  id:{
    type: DataTypes.INTEGER,
    autoIncrement:true,
    primaryKey:true
  },
  original_url:{
    type: DataTypes.STRING(255),
    allowNull:false
  },
  short_url:{
    type: DataTypes.STRING(255),
    allowNull:false,
    unique:true
  },
  createdAt:{
    type: DataTypes.DATE,
    allowNull:false
  },
  updatedAt:{
    type: DataTypes.DATE,
    allowNull:false
  },
  clicks:{
    type: DataTypes.INTEGER,
    defaultValue:0
  }
},{
  sequelize,
  modelName:'urls',
  tableName:'urls',
  underscored:true
})

export default urls