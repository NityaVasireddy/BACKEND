const express = require("express");
const dotenv = require("dotenv");
const connectDB = require("./config/db");
const ideaRoutes = require("./routes/routes");
const errorHandler = require("./middleware/errorhandler");
dotenv.config();
const app = express();
const PORT = 5000;
app.use(express.json());
app.get("/", (req, res) => {
 res.status(200).json({
       message: "working"
});

});

app.use("/ideas", ideaRoutes);

app.use((req, res) => {
res.status(404).json({
       message: "Page not found"
    });

});

app.use(errorHandler);

app.listen(PORT, () => {
     connectDB();
     console.log("server listening on " + PORT);
});