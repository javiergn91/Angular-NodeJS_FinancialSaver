const express = require("express");
const router = express.Router();

const paymentTypesController = require("../controllers/paymentTypes.controller");

router.get("/", paymentTypesController.getPaymentTypes);
router.post("/", paymentTypesController.addPaymentType);

module.exports = router;