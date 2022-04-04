import bcrypt from "bcryptjs"
import { BcryptConstants } from "./constants/BcryptConstants"
import { IHashComparer } from "./interfaces/IHashComparer"
import { IHasher } from "./interfaces/IHasher"

export class Bcrypt implements IHasher, IHashComparer {
    constructor(
        private readonly salt: number = BcryptConstants.salt
    ) { }

    async hash(value: string): Promise<string> {
        return bcrypt.hash(value, this.salt)
    }

    async hashSync(value: string): Promise<string> {
        return bcrypt.hashSync(value, this.salt)
    }

    async compare(value: string, hash: string): Promise<boolean> {
        return bcrypt.compare(value, hash)
    }
}