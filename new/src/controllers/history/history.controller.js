const db = require("../../models");

const User = db.user
const History = db.history

const add = async (user) => {

    const users = await User.findAll({
       where: {
            email: user.email
          } 
        } 
    )
    if(users.length != 0){
        console.log("adding")
        History.create({
            email: user.email,
            password: user.password,
            surname: user.surname,
            name: user.name,
            lastname: user.lastname,
            status: user.status,
            work: user.work,
            loginTime: Date.now()
        })
    }
}

const get = async (req, res) => {

    const users = await History.findAll()
    res.status(200).send({
    data: users,
    });
    
}

const clear = async (req, res) => {
    History.destroy({
        where: {},
        truncate: true
      })
      res.status(200).send({
        data: "cleared",
      });
}

module.exports = {
    add,
    get,
    clear
  };