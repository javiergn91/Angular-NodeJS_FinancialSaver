const sequelize = require("sequelize");
const connection = new sequelize("financialsaver", "financialsaver", "1234", {
    dialect: "postgres"
});

const paymentType = connection.define("payment_type", {
    name: sequelize.STRING
});

const category = connection.define("category", {
    name: sequelize.STRING
});

const transaction = connection.define("transaction", {
    money_amount: sequelize.INTEGER,
    comment: sequelize.STRING
});

transaction.belongsTo(category);
transaction.belongsTo(paymentType);

connection.sync();

module.exports = {
    connection: connection,
    transaction: transaction,
    category: category,
    paymentType: paymentType
};