const { category } = require("../database");

categoriesController = {};

categoriesController.getCategories = async (req, res) => {
    res.json(await category.findAll());
};

categoriesController.addCategory = (req, res) => {
    category.create({
        name: req.body.name
    }).then(result => {
        res.json(result.dataValues);
    });
};

module.exports = categoriesController;