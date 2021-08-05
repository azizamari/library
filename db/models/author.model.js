const {DataTypes}=require('sequelize');

module.exports = (sequelize) => {
    sequelize.define('author',{
        id:{
            type:DataTypes.INTEGER,
            primaryKey:true,
            notnull:true,
            autoIncrement:true,
        },
        Name:{
            type:DataTypes.STRING,
            notnull:true
        },
        birthYear:{
            type:DataTypes.INTEGER,
        },
        gender:{
            type: DataTypes.ENUM('male', 'female', 'unspecified'),
            default:'unspecified'
        }
    });
}