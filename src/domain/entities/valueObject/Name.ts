import { Either, left, right } from "../../../shared/either/Either"
import { InvalidNameError } from "../errors/InvalidName"

export class Name {
    private constructor(
        private readonly name: string
    ) { }

    getName(): string {
        return this.name;
    }

    static validate(name: string): boolean {
        if (!name || name.trim().length < 2 || name.trim().length > 255) {
            return false
        }
        return true
    }

    static create(name: string): Either<InvalidNameError, Name> {
        if (!Name.validate(name)) {
            return left(new InvalidNameError())
        }
        return right(new Name(name))
    }
}