const {DataTypes}=require('sequelize');

module.exports = (sequelize) => {
    sequelize.define('author',{
        id:{
            type:DataTypes.INTEGER,
            primaryKey:true,
            allowNull:false,
            autoIncrement:true,
        },
        name:{
            type:DataTypes.STRING,
            allowNull:false,
            validate:{
                notEmpty: {
                  msg: "The field name cannot be empty"
                }
            },
        },
        birthYear:{
            type:DataTypes.INTEGER,
        },
        gender:{
            type: DataTypes.ENUM('male', 'female', 'unspecified'),
            default:'unspecified',
            validate: {
                customValidator(value) {
                    console.log(value)
                    if (value !== "male" && value !== "female" && value !== "unspecified") {
                        throw new Error("gender must be either male or female or unspecified");
                    }
                }
            }
        }
    });
}