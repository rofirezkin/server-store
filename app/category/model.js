const mongose = require("mongoose");

let categorySchema = mongose.Schema(
  {
    name: { type: String, require: [true, "Nama kateogry harus diisi"] },
  },
  { timestamps: true }
);

module.exports = mongose.model("Category", categorySchema);
