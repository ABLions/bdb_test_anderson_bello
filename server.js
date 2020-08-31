const express = require("express");
const bodyParser =  require("body-parser");
const cors = require("cors");

const app = express();

var cosrOptions = {
    origin: "http://localhost:8081"
};

app.use(cors(cosrOptions));


//parse request of content type application/json
app.use(bodyParser.json());

// parse request of content type application/urlencoded
app.use(bodyParser.urlencoded({extended:true}));

const db = require("./app/models");
db.sequelize.sync();


// simple route
app.get("/", (req, res) =>{
    res.json({ message: "Welcome to BdB App."});
});


require("./app/routes/persons.routes.js")(app);

// Set port listen for requests
const PORT = process.env.PORT || 8080;
app.listen(PORT, () => {
    console.log(`Server is running on port ${PORT}`);
});

