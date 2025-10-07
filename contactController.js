// controllers/contactController.js
const Contact = require("../model/contactModel");

// Get a contact by ID
const getContact = async (req, res) => {
  try {
    const contact = await Contact.findById(req.params.id);
    if (!contact) {
      return res.status(404).json({ message: "Contact not found" });
    }
    res.status(200).json(contact);
  } catch (error) {
    console.log(error);
    res.status(500).json({ message: "Server error" });
  }
};

// Create a new contact
const createContact = async (req, res) => {
  try {
    const { name, email, phone } = req.body;
    if (!name || !email || !phone) {
      return res.status(400).json({ message: "All fields are required" });
    }
    const contact = await Contact.create({ name, email, phone });
    res.status(201).json({ message: "A new contact is created", contact });
  } catch (error) {
    console.log(error);
    res.status(500).json({ message: "Server error during creation" });
  }
};

// Update a contact
const updateContact = async (req, res) => {
  try {
    const contact = await Contact.findById(req.params.id);
    if (!contact) {
      return res.status(404).json({ message: "Contact not found" });
    }

    const updatedContact = await Contact.findByIdAndUpdate(
      req.params.id, 
      req.body, 
      { new: true }
    );

    res.status(200).json(updatedContact);
  } catch (error) {
    console.log(error);
    res.status(500).json({ message: "Server error during update" });
  }
};

// Delete a contact
const deleteContact = async (req, res) => {
  try {
    const contact = await Contact.findById(req.params.id);
    if (!contact) {
      return res.status(404).json({ message: "Contact not found" });
    }

    await Contact.findByIdAndDelete(req.params.id);
    res.status(200).json({ message: "Contact deleted", contact });
  } catch (error) {
    console.log(error);
    res.status(500).json({ message: "Server error during deletion" });
  }
};

module.exports = {
  getContact,
  createContact,
  updateContact,
  deleteContact
};
