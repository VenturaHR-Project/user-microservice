import { Name } from "./Name"

describe("Name ValueObject", () => {
    it("Shouldn't accept less than 2 chars in the name", () => {
        const nameOrEror = Name.create("M")
        expect(nameOrEror.isLeft()).toBeFalsy()
    })

    it("Shouldn't accept more than 100 chars in the name", () => {
        const nameOrEror = Name.create("a".repeat(105))
        expect(nameOrEror.isLeft()).toBeFalsy()
    })

    it("Should accept valid name", () => {
        const nameOrEror = Name.create("example") 
        expect(nameOrEror.isRight()).toBeTruthy()
    }) 
})