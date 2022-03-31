import mongoose, { Document, Schema } from "mongoose"
import { AccountType } from "../enum/AccountType"

interface IUser extends Document {
    uid: string
    name: string
    accountType: AccountType
    phone: string
    address: string
    isActive: boolean
    cpf?: string
    cnpj?: string
    corporateName?: string

    validateIfObjectIdIsValid(id: string): Promise<boolean>
}

const schema = new Schema<IUser>({
    uid: {
        type: String,
        require: true,
        trim: true
    },
    name: {
        type: String,
        require: true,
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

schema.methods.validateIfObjectIdIsValid = async function(id: string): Promise<boolean> {
    return mongoose.Types.ObjectId.isValid(id)
}

const User = mongoose.model("User", schema)

export { User }
