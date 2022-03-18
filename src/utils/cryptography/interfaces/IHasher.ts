export interface IHasher {
    hash: (value: string) => Promise<string>
    hashSync: (value: string) => Promise<string>
}