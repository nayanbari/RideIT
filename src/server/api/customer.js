const express = require("express");
const customerModel = require("../model/customer");
const app = express();

app.post("/add_ride", async (req, res) => {
    const customer = new customerModel(req.body);
  
    try {
      await customer.save();
      res.send(customer);
    } catch (error) {
      res.status(500).send(error);
    }
});

app.get("/get_ride", async (req, res) => {
    const customers = await customerModel.find({});
  
    try {
      res.send(customers);
    } catch (error) {
      res.status(500).send(error);
    }
  });

module.exports = app;