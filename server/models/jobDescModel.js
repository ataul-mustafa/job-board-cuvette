const mongoose = require("mongoose");

const jobDescModel = new mongoose.Schema({
    companyName: {
        type: String,
        required: [true, "Company name is required"]
    },
    logoURL: {
        type: String,
        required: [true, "Logo URL is required"]
    },
    jobPosition: {
        type: String,
        required: [true, "Job position is required"]
    },
    monthlySalary: {
        type: String,
        required: [true, "Monthly salary is required"]
    },
    jobType: {
        type: String,
        required: [true, "Job Type is required"]
    },
    Location: {
        type: String,
        required: [true, "choose between remote/onsite"]
    },
    jobDesc: {
        type: String,
        required: [true, "Job Description is required"]
    },
    skills: [
        {
            type: String,
        }
    ],
    additionalInfo: {
        type: String,
    }
})


module.exports = mongoose.model("JobDescription", jobDescModel);