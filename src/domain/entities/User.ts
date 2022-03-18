import mongoose, { Schema, Document } from "mongoose"
import { Bcrypt } from "../../utils/cryptography/Bcrypt"
import { BcryptConstants } from "../../utils/cryptography/constants/BcryptConstants"
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

    generateHash(password: string): Promise<string>
    validateIfObjectIdIsValid(id: string): Promise<boolean>
}

const schema = new Schema<IUser>({
    name: {
        type: String,
        require: true,
        trim: true
    },
    email: {
        type: String,
        require: true,
        unique: true,
        trim: true
    },
    password: {
        type: String,
        required: true,
        trim: true
    },
    accountType: {
        type: AccountType,
        require: true
    },
    phone: {
        type: String,
        required: true,
        trim: true
    },
    address: {
        type: String,
        required: true,
        trim: true
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
    const bcrypt = new Bcrypt()
    const passwordHash = await bcrypt.hash(this.password)

    this.password = passwordHash
    next()
})

schema.methods.generateHash = async function(password: string): Promise<string> {
    const bcrypt = new Bcrypt(BcryptConstants.salt)
    return bcrypt.hashSync(password)
}

schema.methods.validateIfObjectIdIsValid = async function(id: string): Promise<boolean> {
    return mongoose.Types.ObjectId.isValid(id)
}

const User = mongoose.model("User", schema)

export { User }