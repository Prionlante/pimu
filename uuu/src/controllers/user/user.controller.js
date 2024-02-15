const db = require("../../models");
const historyController = require("../history/history.controller")

const User = db.user

const register = async (req, res) => {
    const {
        email,
        password,
        surname,
        name,
        lastname,
        status,
        work,
    } = req.body

    const users = await User.findAll({
       where: {
            email: email
          } 
        } 
    )
    if(users.length == 0){
        User.create({
            email: email,
            password: password,
            surname: surname,
            name: name,
            lastname: lastname,
            status: status,
            work: work,
        })
        res.status(200).send({
            token: "adscdgaevfhwFdgves",
          });
    }
    else {
       res.status(500).send({
        message: "already exists",
      }); 
    }
    
}

const login = async (req, res) => {
    const {
        email,
        password,
    } = req.body
    console.log(email)
    const users = await User.findAll({
       where: {
            email: email,
            password: password
          } 
        } 
    )
    if(users.length == 0){
        res.status(500).send({
            message: "invalid",
          });
    } else {
        historyController.add(users[0])
        res.status(200).send({
        token: "adscdgaevfhwFdgves",
      });
    }
    
}

module.exports = {
    login,
    register
  };