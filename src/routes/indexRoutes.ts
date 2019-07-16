import {Router, Request, Response} from 'express'

const router = Router()

router.get('/', (req: Request, res: Response) => {
    res.send('Hi from Router')
})

export default router