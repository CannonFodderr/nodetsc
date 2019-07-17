import {Router, Request, Response, NextFunction} from 'express'
import {IHandlers} from '../../lib/interfaces/IRouter'
import User from '../../lib/db/Models/User'
import Project from '../../lib/db/Models/Project'
import CRUDRouter from '../../lib/server/router'

const router = Router()

const myMiddleware = (req:Request, res:Response, next: NextFunction) => {
    console.log("Hi from custom middleware!")
    next()
}
const myHandlers: IHandlers = {
    getById: (req:Request, res:Response) => {
        res.send("Hello from custom GET Handler")
    },
    put: (req:Request, res:Response) => {
        res.send("Hello from custom PUT Handler")
    },
}

router.use('/user', CRUDRouter(User, myMiddleware, myHandlers))
router.use('/project', CRUDRouter(Project))

export default router