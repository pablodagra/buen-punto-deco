const express = require("express");
const app = express();
const path = require("path");
const PORT = process.env.PORT || 3000;
const mainRoutes = require("./routes/mainRoutes");

app.use("/" , mainRoutes);

app.set("view engine", "ejs");
app.set("views" , path.join(__dirname, "views"));

app.use(express.static("./public"));





app.listen(PORT, () => {
    console.log("servidor corriendo http://localhost")
});

