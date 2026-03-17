import mongoose from "mongoose";

const InstallmentSchema = new mongoose.Schema({
  amount: String,
  date: Date
});

const EnrollmentSchema = new mongoose.Schema({
  name: String,
  address: String,
  phone: String,
  emergencyPhone: String,
  email: String,
  bloodGroup: String,
  disability: String,

  courseTitle: String,
  aadhaar: String,
  duration: String,
  softwareUsed: String,
  courseFee: String,

  languages: {
    language1: String,
    language2: String,
    language3: String,
    language4: String
  },

  paymentType: String,
  totalAmount: String,

  installments: [InstallmentSchema],

  createdAt: {
    type: Date,
    default: Date.now
  }
});

export default mongoose.models.Enrollment ||
  mongoose.model("Enrollment", EnrollmentSchema);