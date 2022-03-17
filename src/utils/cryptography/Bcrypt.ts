import { IHashComparer } from "./IHashComparer"
import { IHasher } from "./IHasher"
import bcrypt from "bcryptjs"

export class Bcrypt implements IHasher, IHashComparer {
    constructor(
        private readonly salt: number
    ) { }

    async hash(value: string): Promise<string> {
        return bcrypt.hash(value, this.salt)
    }

    async compare(value: string, hash: string): Promise<boolean> {
        return bcrypt.compare(value, hash)
    }
}