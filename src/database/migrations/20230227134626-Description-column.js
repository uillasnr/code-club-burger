'use strict';

module.exports = {
up: async (queryInterface, Sequelize) => {
await queryInterface.addColumn('products', 'Description', {
type: Sequelize.TEXT,
allowNull: true
});
},

down: async (queryInterface, Sequelize) => {
await queryInterface.changeColumn('products', 'Description', {
type: Sequelize.STRING,
allowNull: false
});
}
};