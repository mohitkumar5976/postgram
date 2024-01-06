const mongoose = require("mongoose");

const conn = async () => {
  await mongoose
    .connect(process.env.MONGO_URL, {
      useNewUrlParser: true,
      useUnifiedTopology: true,
    })
    .then(() => console.log("connected"))
    .catch((err) => console.log(err.message));
};

module.exports = conn;
