import {Router, Request, Response} from 'express'
import {Model} from 'mongoose'

interface IRouter{
    collection: Model<any, {}>
    router: Router
    findAll(): void
    findById(): void
    destroyById(): void
}

export class SubRouter implements IRouter{
    collection: Model<any, {}>
    router: Router
    constructor(collection: any){
        this.collection = collection
        this.router = Router()
    }
    findAll(): void{
        this.router.get('/', (req: Request, res: Response) => {
            this.collection.find()
            .then(allResults => res.json(allResults))
            .catch(err => console.error(err))
        })
    }
    findById(): void{
        this.router.get('/:id', (req: Request, res: Response) => {
            this.collection.findById(req.params.id, (err, foundEntry) => {
                if(err) {
                    console.error(err)
                    res.send(err)
                } else res.json(foundEntry)
            })
        })
    }
    destroyById(): void{
        this.router.delete('/:id', (req: Request, res: Response) => {
            this.collection.findByIdAndRemove(req.params.id, (err, res) => {
                if(err) {
                    console.log(err)
                    res.send(err)
                } else res.send(`Deleted entry`)
            })
        })
    }
}

export default (collection: Model<any, {}>) => {
    return new SubRouter(collection).router
}