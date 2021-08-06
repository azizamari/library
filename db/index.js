const {Sequelize}=require('sequelize');

const sequelize= new Sequelize('library','postgres',process.env.DB_PASSWORD,{
    port:6969,
    dialect: 'postgres',
})


const modelDefiners = [
	require('./models/book.model'),
	require('./models/author.model')	
];

for (const modelDefiner of modelDefiners) {
	modelDefiner(sequelize);
}

const { book, author } = sequelize.models;

book.belongsTo(author)
author.hasMany(book,{foreignKey:'authorId', onDelete: 'cascade' })

module.exports = sequelize;