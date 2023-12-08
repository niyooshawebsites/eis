const mongoose = require("mongoose");

const connection = async () => {
  try {
    const conn = await mongoose.connect(process.env.CONN_STRING);
    if (conn) {
      console.log(`Database connection successful`.cyan.underline.bold);
    }
  } catch (err) {
    console.log(`Connection Error: ${err.message}`.trimEnd.underline.bold);
  }
};

module.exports = connection;
