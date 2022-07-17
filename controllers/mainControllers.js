const path = require("path")

const mainControllers = {
    home: (req,res) =>{
        return res.render("home")
    }
}


module.exports = mainControllers