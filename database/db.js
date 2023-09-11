const mongoose = require("mongoose");
const connectToDb = () => {
  mongoose
    .connect("mongodb+srv://root:admin@todolist.yzlg19h.mongodb.net/", {
      useNewUrlParser: true,
      useUnifiedTopology: true,
    })
    .then(() => {
      console.log("mongo db atlas conectado");
    })
    .catch((err) => console.log(err));
};

module.exports = connectToDb;
