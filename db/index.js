const mongoose = require("mongoose");
const { urDb, urlDb } = require("../config");
mongoose.set("strictQuery", false);
mongoose.connect(urlDb);

const db = mongoose.connection;
module.exports = db;
