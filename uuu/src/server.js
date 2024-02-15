const express = require("express");
const app = express();
const db = require("./models");
var path = require('path');
var cors = require('cors')
const kidsRoutes = require("./routes/kids.routes");
const historyRoutes = require("./routes/history.routes");
const userRoutes = require("./routes/user.routes");

global.__basedir = __dirname + "/..";
app.use(cors())
app.use(express.urlencoded({ extended: true }));
app.use(express.json());
const buildPath = path.join(__dirname, '..', '/client/build');
app.use(express.static(buildPath));
kidsRoutes(app);
historyRoutes(app);
userRoutes(app);

app.get('/*', function (req, res) {
  res.sendFile(path.join(__dirname, '../client/build', 'index.html'));
});
db.sequelize.sync();
// db.sequelize.sync({ force: true }).then(() => {
//   console.log("Drop and re-sync db.");
// });

let port = process.env.PORT || 5000
app.listen(port, () => {
  console.log(`Running at localhost:${port}`);
});
