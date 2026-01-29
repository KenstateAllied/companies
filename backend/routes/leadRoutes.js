import express from 'express';
import Lead from '../models/Lead.js';

const router = express.Router();

// POST /api/leads
router.post('/', async (req, res) => {
  const { name, id, prof, level, exp, ward, phone, email } = req.body;
  try {
    const newLead = new Lead({ name, id, prof, level, exp, ward, phone, email });
    await newLead.save();
    res.status(201).json({ message: 'Lead saved successfully' });
  } catch (err) {
    res.status(500).json({ message: 'Server error', error: err });
  }
});

console.log("Route hit");
console.log(req.body);
console.log("API BASE:", import.meta.env.VITE_API_BASE_URL);


export default router;
