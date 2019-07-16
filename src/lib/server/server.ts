import express, {Express, Router} from 'express'
const PORT = Number(process.env.PORT) || 9001

interface IServer{
    listen(): void;
    addRoutes(router: Router, prefix?: string): void;
    useMiddleware(middleware: any): void;
}

export class Server implements IServer{
    private port: number
    private app: Express
    constructor(port: number){
        this.port = port
        this.app = express()
    }
    listen(): void{
        this.app.listen(this.port, () =>  console.log(`Serving on port: ${this.port}`))
    }
    useMiddleware(middleware: any): void{
        this.app.use(middleware)
    }
    addRoutes(router: Router, prefix?: string): void{
        if(prefix) this.app.use(prefix, router)
        else this.app.use(router)
    }
}

export default new Server(PORT)
