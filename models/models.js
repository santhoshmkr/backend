import mongoose from "mongoose";

const documentSchema = new mongoose.Schema(
  {
    aadharCard: { type: String, required: false },
    panCard: { type: String, required: false },
    rationCard: { type: String, required: false },
    DrivingLicence: { type: String, required: false },
  },
  { _id: false }
);

const personSchema = new mongoose.Schema(
  {
    aadharNumber: { type: String, required: false },
    age: { type: String, required: false },
    city: { type: String, required: false },
    dateOfBirth: { type: String, required: false },
    documents: documentSchema,
    gender: { type: String, required: false },
    identificationMarks: [{ type: String }],
    maritalStatus: { type: String, required: false },
    spouseName: { type: String, required: false },
    name: { type: String, required: false },
    panNumber: { type: String, required: false },
    permanentAddress: { type: String, required: false },
    presentAddress: { type: String, required: false },
    rationNumber: { type: String, required: false },
    relationship: { type: String, required: false },
    relationshipOther: { type: String, required: false },
    relationship_with_patient: { type: String, required: false },
    relationship_with_patientOther: { type: String, required: false },
    relationship_with_doner: { type: String, required: false },
    relationship_with_donerOther: { type: String, required: false },
    relationshipPersonName: { type: String, required: false },
    relationship_with_donerandDoner_depandent: { type: String, required: false },
    relationship_with_donerandDoner_depandentOther: { type: String, required: false },
  },
  { _id: false }
);

const TamilPerson = new mongoose.Schema(
  {
    age: { type: String, required: false },
    city: { type: String, required: false },
    dateOfBirth: { type: String, required: false },
    gender: { type: String, required: false },
    identificationMarks: [{ type: String }],
    maritalStatus: { type: String, required: false },
    spouseName: { type: String, required: false },
    name: { type: String, required: false },
    permanentAddress: { type: String, required: false },
    presentAddress: { type: String, required: false },
    relationship: { type: String, required: false },
    relationshipOther: { type: String, required: false },
    relationship_with_patient: { type: String, required: false },
    relationship_with_patientOther: { type: String, required: false },
    relationship_with_doner: { type: String, required: false },
    relationship_with_donerOther: { type: String, required: false },
    relationshipPersonName: { type: String, required: false },
    relationship_with_donerandDoner_depandent: { type: String, required: false },
    relationship_with_donerandDoner_depandentOther: { type: String, required: false },
  },
  { _id: false }
);

const hospitalSchema = new mongoose.Schema(
  {
    doctorNameMD: { type: String, required: false },
    doctorNameNephrology: { type: String, required: false },
    doctorNameUrology: { type: String, required: false },
    hospitalName: { type: String, required: false },
    hospitalAddress: { type: String, required: false },
  },
  { _id: false }
);

const languageSchema = new mongoose.Schema(
  {
    Doner: personSchema,
    Doner_Dependent: personSchema,
    Recipient: personSchema,
  },
  { _id: false }
);

const tamilSchema = new mongoose.Schema(
  {
    Doner: TamilPerson,
    Doner_Dependent: TamilPerson,
    Recipient: TamilPerson,
  },
  { _id: false }
);

const DataSchema = new mongoose.Schema({
  Hospital_details: {
    tamil: hospitalSchema,
    english: hospitalSchema
  },
  English: languageSchema,
  Tamil: tamilSchema,
});

const DataModel = mongoose.model("PatientData", DataSchema);

export default DataModel;