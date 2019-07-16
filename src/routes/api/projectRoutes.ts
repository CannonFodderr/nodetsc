import {Router, Request, Response} from 'express'
import Project from '../../lib/db/Models/Project'

const router = Router()

router.get('/', (req: Request, res: Response) => {
    res.send("Get All Projects")
})

router.post('/', (req: Request, res: Response) => {
    console.log(req.body)
    Project.create(req.body)
    .then(createdProject => {
        createdProject.save()
        res.send(`Created new Project: ${createdProject.title}`)
    })
    .catch(err => {
        console.error(err)
        res.send(err)
    })
})

router.get('/:projectId', (req: Request, res: Response) => {
    res.send("find project by id")
})

export default router