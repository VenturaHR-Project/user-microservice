import mongoose, { Schema } from "mongoose"
import User from "./User"

const CandidateSchema = new Schema({
    cpf: {
        type: String, require: true
    }
}).add(User)

const Candidate = mongoose.model("Candidate", CandidateSchema)

export default Candidate