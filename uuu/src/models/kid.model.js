module.exports = (sequelize, Sequelize) => {
  const Kid = sequelize.define("kid", {
    sex: {
      type: Sequelize.INTEGER
    },
    born_date: {
      type: Sequelize.DATEONLY
    },
    years: {
      type: Sequelize.INTEGER
    },
    vzg: {
      type: Sequelize.INTEGER
    },
    dotr: {
      type: Sequelize.DATEONLY
    },
    dta: {
      type: Sequelize.FLOAT
    },
    mta: {
      type: Sequelize.FLOAT
    },
    bmi: {
      type: Sequelize.FLOAT
    },
    ogka: {
      type: Sequelize.INTEGER
    },
  });

  return Kid;
};