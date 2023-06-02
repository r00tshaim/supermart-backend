import mongoose from 'mongoose'
const AUTHDB_DEFAULT = "admin";

export const dbconnect = async () => {
    const CONNECTION_URL = `${process.env.MONGO_URI}/${process.env.MONGO_DBNAME}`
    try {
        const conn = await mongoose.connect(CONNECTION_URL, {
            authSource: process.env.MONGO_AUTHDB || AUTHDB_DEFAULT,
            useUnifiedTopology: true,
            useNewUrlParser: true,
            //useCreateIndex: true
        })
        console.log(`MongoDB Connected: ${conn.connection.host}`)
    } catch (error) {
        console.error(`MongoDB Error: ${error}`)
        process.exit(1)
    }
}
