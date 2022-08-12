const mongoose = require("mongoose");

const Schema = mongoose.Schema;

const customerSchema = new Schema({
  customerName: {
    type: String,
    required: true,
  },
  customerMobileNumber: {
    type: Number,
    required: true,
  },
  customerDrivingNumber: {
    type: String,
    required: true,
  },
  customerRidePrice: {
    type: Number,
    required: true,
  },
  customerAdd: {
    type: String,
    required: true,
  },
  customerDestination: {
    type: String,
    required: true,
  },
  customerAvailableSeats: {
    type: Number,
    required: true,
  },
});

const Customer = mongoose.model("customer", customerSchema);

module.exports = Customer;