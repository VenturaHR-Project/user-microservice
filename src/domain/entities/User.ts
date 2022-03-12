import mongoose, { Schema } from "mongoose"
import { AccountType } from "../enum/AccountType"

const UserSchema = new Schema({
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
    }
})

const User = mongoose.model("User", UserSchema)

export default User