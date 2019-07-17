import {Router, Request, Response} from 'express'
import {Model, Error} from 'mongoose'

interface ICRUDRouter{
    collection: Model<any, {}>
    router: Router
}

export class CRUDRouter implements ICRUDRouter{
    collection: Model<any, {}>
    router: Router
    constructor(collection: any){
        this.collection = collection
        this.router = Router()
        // Read All Route
        this.router.get('/', (req: Request, res: Response) => {
            this.collection.find()
            .then(allResults => res.json(allResults))
            .catch(err => console.error(err))
        })
        // Read Route
        this.router.get('/:id', (req: Request, res: Response) => {
            this.collection.findById(req.params.id, 
                (err: Error, foundEntry: Model<any, {}>) => 
            {
                if(err) {
                    console.error(err)
                    res.send(err)
                } else res.json(foundEntry)
            })
        })
        // Create Route
        this.router.post('/', (req: Request, res:Response) => {
            this.collection.create(req.body)
            .then(createdEntry => {
                console.log(createdEntry)
                createdEntry.save()
                res.send(`Created new entry`)
            })
            .catch(err => {
                console.error(err)
                res.send(`Error: ${err}`)
            })
        })
        // Update Route
        this.router.put('/:id', (req: Request, res: Response) => {
            this.collection.findOne({_id: req.params.id}, (err, foundEntry) => {
                if(err){
                    console.error(err)
                    res.send(`Unable to find entry`)
                } else {
                    foundEntry.update(req.body, (err: Error) => {
                        if(err) {
                            console.error(err)
                            res.send(err)
                        } else {
                            res.send(`Entry Updated: ${req.params.id}`)
                        }
                    })
                }
            })
        })
        // Destroy Route
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
    return new CRUDRouter(collection).router
}