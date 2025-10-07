// model/contactModel.js
const mongoose = require('mongoose');

const contactSchema = mongoose.Schema({
  name: {
    type: String,
    required: [true, "Please add the contact name"]
  },
  email: {
    type: String,
    required: [true, "Please add the contact email"]
  },
  phone: {
    type: String,
    required: [true, "Please add the contact number"]
  }
}, {
  timestamps: true // optional: adds createdAt and updatedAt fields
});

module.exports = mongoose.model("Contact", contactSchema);
