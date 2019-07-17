import {Router} from 'express'
import {Model} from 'mongoose'

export interface ICRUDRouter{
    collection: Model<any, {}>
    router: Router
    handlers: IHandlers
    middleware: any
}

export interface IHandlers {
    get?: any
    getById?: any
    post?: any
    put? : any
    delete?: any
}