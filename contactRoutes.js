// routes/contactRoutes.js
const express = require("express");
const router = express.Router();

const {
  getContact,
  createContact,
  updateContact,
  deleteContact
} = require('../controllers/contactController');

// Routes
router.get('/:id', getContact);        // Get a contact by ID
router.post('/', createContact);       // Create a new contact
router.put('/:id', updateContact);     // Update a contact by ID
router.delete('/:id', deleteContact);  // Delete a contact by ID

module.exports = router; // Export router
