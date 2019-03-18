let express = require("express");
let bodyParser = require("body-parser");

const PORT = process.env.PORT || 3000;
const app = express();

app.use(bodyParser.json({
    extended: true
}));

app.get('/', (req, res) => 
    res.json({ message: "Hello world!" })
);

app.listen(PORT, () => {
    console.log("Server is up on port: " + PORT);
});

module.exports = app;