import mongoose from 'mongoose';

const contactSchema = new mongoose.Schema({
  firstName: String,
  lastName: String,
  email: String,
  phone: String,
  service: String,
  message: String,
});

const Contact = mongoose.models.Contact || mongoose.model('Contact', contactSchema);

export default Contact;
