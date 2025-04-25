import mongoose from "mongoose";

const hospitalSchema = new mongoose.Schema({
    doctorNameMD: String,
    doctorNameNephrology: String,
    doctorNameUrology: String,
    hospitalName: String,
    hospitalAddress: String
});

const DoctorSchema = new mongoose.Schema({
    tamil: hospitalSchema,
    english: hospitalSchema
});

export default mongoose.model("Doctor", DoctorSchema);