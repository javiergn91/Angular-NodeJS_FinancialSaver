const { transaction, category, paymentType } = require("../database");

transactionsController = {};

transactionsController.getTransactions = async (req, res) => {
    res.json(await transaction.findAll({
        include: [{
            model: category
        }, {
            model: paymentType
        }]
    }));
};

transactionsController.addTransaction = async (req, res) => {
    transaction.create({
        money_amount: req.body.money_amount,
        comment: req.body.comment,
        categoryId: req.body.category_id,
        paymentTypeId: req.body.payment_type_id
    }).then(result => {
        res.json(result.dataValues);
    });
};

transactionsController.deleteTransaction = async (req, res) => {
    await transaction.destroy({
        where: {
            id: req.params.id
        }
    });

    res.json({
        "status": "transaction deleted"
    });
};

module.exports = transactionsController;