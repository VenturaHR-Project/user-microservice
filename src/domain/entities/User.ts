import mongoose, { Schema, Document } from "mongoose"
import { Bcrypt } from "../../utils/cryptography/Bcrypt"
import { AccountType } from "../enum/AccountType"

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

schema.pre("save", async function (next) {
    const salt = 12
    const bcrypt = new Bcrypt(salt)
    const passwordHash = await bcrypt.hash(this.password)

    this.password = passwordHash
    next()
})

const User = mongoose.model("User", schema)

export { User }