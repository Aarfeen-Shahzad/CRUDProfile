const mongoose = require("mongoose");

url =
  "mongodb+srv://arfeen:Qwerty4321@cluster0.7wr3emm.mongodb.net/?retryWrites=true&w=majority";

const conectionDb = () => {
  console.log("DB is connected");
  mongoose.set("strictQuery", false);
  return mongoose.connect(url, {
    useNewUrlParser: true,
    useUnifiedTopology: true,
  });
};
module.exports = conectionDb;
