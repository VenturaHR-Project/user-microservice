import mongoose from "mongoose"

export class Database {
    private mongoURI = process.env.MONGO_URI || ""

    constructor() { }

    public createConnection() {
        mongoose.connect(this.mongoURI, {
            useNewUrlParser: true,
            useUnifiedTopology: true,
            useCreateIndex: true,
        });
        this.logger()
    }

    private logger(): void {
        let dbConnection: mongoose.Connection
        dbConnection = mongoose.connection
        dbConnection.on('connected', () => console.log('MongoDB connected'))
        dbConnection.on('error', (error) => console.error.bind(console, `Connection error: ${error}`))
    }
}