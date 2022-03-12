import mongoose, { Schema } from "mongoose";
import User from "./User";

const CompanySchema = new Schema({
    cnpj: {
        type: String,
        require: true,
        trim: true 
    },
    corporateName: {
        type: String,
        require: true,
        trim: true 
    }
}).add(User)

const Company = mongoose.model("company", CompanySchema)

export default Company