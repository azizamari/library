const {DataTypes}=require('sequelize');

module.exports = (sequelize) => {
    sequelize.define('book',{
        isbn:{
            type:DataTypes.INTEGER,
            primaryKey:true,
            notnull:true,
        },
        title:{
            type:DataTypes.STRING,
            notnull:true
        },
        releaseYear:{
            type:DataTypes.INTEGER,
        },
        numberOfPages:{
            type:DataTypes.INTEGER,
        },
        AuthorId:{
            type: DataTypes.INTEGER,
            references: {
            model: sequelize.Author,
            key: 'id'
            }
        }
    })
};
