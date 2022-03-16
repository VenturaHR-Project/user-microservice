import mongoose, { Schema } from "mongoose"
import { AccountType } from "../enum/AccountType"

const schema = new Schema({
    name: {
        type: String,
        require: true
    },
    email: {
        type: String,
        require: true,
        unique: true,
        trim: true
    },
    password: {
        type: String,
        required: true
    },
    accountType: {
        type: AccountType,
        require: true
    },
    phone: {
        type: String,
        required: true
    },
    address: {
        type: String,
        required: true
    },
    isActive: {
        type: Boolean,
        required: true,
        default: true
    },
    cpf: {
        type: String,
        require: false,
        trim: true 
    },
    cnpj: {
        type: String,
        require: false,
        trim: true 
    },
    corporateName: {
        type: String,
        require: false,
        trim: true 
    }
})

const User = mongoose.model("User", schema)

export { User }