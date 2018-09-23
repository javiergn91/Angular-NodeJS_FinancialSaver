const { paymentType } = require("../database");

paymentTypesController = {};

paymentTypesController.getPaymentTypes = async (req, res) => {
    res.json(await paymentType.findAll());
};

paymentTypesController.addPaymentType = (req, res) => {
    paymentType.create({
        name: req.body.name
    }).then(result => {
        res.json(result.dataValues);
    });
};

module.exports = paymentTypesController;