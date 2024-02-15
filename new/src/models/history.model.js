module.exports = (sequelize, Sequelize) => {
    const History = sequelize.define("user", {
      email: {
        type: Sequelize.TEXT
      },
      password: {
        type: Sequelize.TEXT
      },
      surname: {
        type: Sequelize.TEXT
      },
      name: {
        type: Sequelize.TEXT
      },
      lastname: {
        type: Sequelize.TEXT
      },
      status: {
        type: Sequelize.INTEGER
      },
      work: {
        type: Sequelize.TEXT
      },
      loginTime: {
        type: Sequelize.DATE
      }
    });
  
    return History;
  };