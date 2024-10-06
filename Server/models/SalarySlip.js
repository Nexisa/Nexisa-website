const mongoose = require("mongoose");

const salarySlipSchema = new mongoose.Schema(
  {
    user: {
      type: mongoose.Schema.Types.ObjectId,
      ref: "User",
      required: true,
    },
    month: {
      type: String,
      required: true,
    },
    file: {
      type: String,
      required: true,
    },
  },
  { timestamps: true }
);

const SalarySlip = mongoose.model("SalarySlip", salarySlipSchema);
module.exports = SalarySlip;
