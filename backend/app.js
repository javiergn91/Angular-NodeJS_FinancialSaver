const express = require("express");
const app = express();

app.use(express.json());
app.use("/api/categories", require("./routes/categories.routes"));
app.use("/api/paymentTypes", require("./routes/paymentTypes.routes"));
app.use("/api/transactions", require("./routes/transactions.routes"));

//Starting the server
app.listen(3000, () => {
    console.log("server on port 3000");
});