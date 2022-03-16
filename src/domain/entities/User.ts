import mongoose, { Schema, Document } from "mongoose"
import { AccountType } from "../enum/AccountType"
import bcrypt from "bcryptjs"

interface IUser extends Document {
    name: string
    email: string
    password: string
    accountType: AccountType
    phone: string
    address: string
    isActive: boolean
    cpf?: string
    cnpj?: string
    corporateName?: string
}

const schema = new Schema<IUser>({
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

schema.pre("save", function (next) {
    if (!this.isModified("password")) {
        return next()
    }

    bcrypt.hash(this.password, 10, (err, hash) => {
        if (err) {
            return next(err)
        }
        this.password = hash
        next()
    })
})

const User = mongoose.model("User", schema)

export { User }