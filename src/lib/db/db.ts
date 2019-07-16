import mongoose from 'mongoose'
const DB_URL = process.env.DATABASE_URL || 'mongodb://localhost/mydb'

interface IDatabase{
    connect(): void;
}

class Database implements IDatabase{
    private dburl: string
    constructor(dburl: string){
        this.dburl = dburl
    }
    connect(): void{
        mongoose.connect(this.dburl, { useNewUrlParser: true })
        .then(() => console.log(`Connected to db`))
        .catch(err => console.error(`Db unable to connect`, err))
    }
}

export default new Database(DB_URL)