import { Model, type CreationOptional, type InferAttributes, type InferCreationAttributes } from "sequelize";

class urls extends Model<InferAttributes<urls>,InferCreationAttributes<urls>>{
  declare id:CreationOptional<number>
  declare original_url:string
  declare short_url:string
  declare createdAt:CreationOptional<Date>
  declare updatedAt:CreationOptional<Date>
}
urls.init({
  id:{
    type: "INT",
    autoIncrement:true,
    primaryKey:true
  },
  original_url:{
    type:"VARCHAR(255)",
    allowNull:false
  },
  short_url:{
    type:"VARCHAR(255)",
    allowNull:false
  }
},{
  sequelize:require('../config/sequelize.config.cjs'),
  modelName:'urls'
})