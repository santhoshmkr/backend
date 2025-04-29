import DoctorData from "../models/DocterModel.js"; 

export const postDocterform = async (req, res) => {
    try {
        const body = req.body;
        if (!body || Object.keys(body).length === 0) {
            return res.status(400).json({
                message: "Please fill out the form"
            });
        }
        const doctor = new DoctorData(body);
        await doctor.save();
        return res.status(201).json({
            message: "Doctor data saved successfully",
            data: doctor
        });
    } catch (error) {
        console.error(error);
        return res.status(500).json({
            message: "Something went wrong",
            error: error.message
        });
    }
}

// get all docter data
export const getDocterData = async (req, res) => {
    try {
        const data = await DoctorData.find().lean();
        return res.status(200).json({
            message: "Doctor data fetched successfully",
            data: data
        });
    } catch (error) {
        console.error(error);
        return res.status(500).json({
            message: "Something went wrong",
            error: error.message
        });
    }
};

// get docter data by id
export const getDocterDataById = async (req, res) => {
    try {
        const { _id } = req.params;
        if (!mongoose.Types.ObjectId.isValid(_id)) {
            return res.status(400).json({
                message: "Invalid ID format"
            });
        }
        const data = await DoctorData.findById(_id);
        if (!data) {
            return res.status(404).json({
                message: "Doctor not found"
            });
        }
        return res.status(200).json({
            message: "Doctor data fetched successfully",
            data: data
        });
    } catch (error) {
        console.error(error);
        return res.status(500).json({
            message: "Something went wrong",
            error: error.message
        });
    }
};

// update docter data by id
export const updateDocterData = async (req, res) => {
    try {
        const { body } = req;
        const { _id } = req.params;
        
        if (!body || Object.keys(body).length === 0) {
            return res.status(400).json({
                message: "Please provide data to update"
            });
        }
        
        if (!mongoose.Types.ObjectId.isValid(_id)) {
            return res.status(400).json({
                message: "Invalid ID format"
            });
        }

        const doctor = await DoctorData.findByIdAndUpdate(_id, body, { 
            new: true,
            runValidators: true 
        });
        
        if (!doctor) {
            return res.status(404).json({
                message: "Doctor not found"
            });
        }
        return res.status(200).json({
            message: "Doctor data updated successfully",
            data: doctor
        });
    } catch (error) {
        console.error(error);
        return res.status(500).json({
            message: "Something went wrong",
            error: error.message
        });
    }
};

// delete docter data by id
export const deleteDocterData = async (req, res) => {
    try {
        const { _id } = req.params;
        if (!mongoose.Types.ObjectId.isValid(_id)) {
            return res.status(400).json({
                message: "Invalid ID format"
            });
        }
        const doctor = await DoctorData.findByIdAndDelete(_id);
        if (!doctor) {
            return res.status(404).json({
                message: "Doctor not found"
            });
        }
        return res.status(200).json({
            message: "Doctor data deleted successfully",
            data: doctor
        });
    } catch (error) {
        console.error(error);
        return res.status(500).json({
            message: "Something went wrong",
            error: error.message
        });
    }
};