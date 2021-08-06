const {DataTypes}=require('sequelize');

module.exports = (sequelize) => {
    sequelize.define('book',{
        isbn:{
            type:DataTypes.INTEGER,
            primaryKey:true,
            allowNull:false,
            validate:{
                notEmpty: {
                  msg: "The field isbn cannot be empty"
                }
            },
        },
        title:{
            type:DataTypes.STRING,
            allowNull:false,
            validate:{
                notEmpty: {
                  msg: "The field title cannot be empty"
                }
            },
        },
        releaseYear:{
            type:DataTypes.INTEGER,
        },
        numberOfPages:{
            type:DataTypes.INTEGER,
        },
        authorId:{
            type: DataTypes.INTEGER,
            allowNull:false,
            validate:{
                notEmpty: {
                  msg: "The field authorId cannot be empty"
                }
            },
            references: {
                model: 'authors',
                key: 'id'
            }
        }
    })
};
