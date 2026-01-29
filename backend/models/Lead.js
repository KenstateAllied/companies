import mongoose from 'mongoose';

const leadSchema = new mongoose.Schema({
  name: { type: String, required: true },
  id: { type: String, required: true },
  prof: { type: String, required: true },
  level: { type: String, required: true },
  exp: { type: String, required: true },
  ward: { type: String, required: true },
  name: { type: String, required: true },
  phone: { type: String, required: true },
  email: { type: String, required: true },
  
});

export default mongoose.model('Lead', leadSchema);
