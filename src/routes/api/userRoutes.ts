import {Router, Request, Response} from 'express'
import User from '../../lib/db/Models/User'
const router = Router()

router.get('/', (req: Request, res: Response) => {
    User.find((err, allUsers) => {
        if(err) res.send("Unable to find users")
        else res.json(allUsers)
    })
})

router.post('/', (req: Request, res: Response) => {
    User.create(req.body)
    .then(createdUser => {
        console.log("created new User", createdUser)
        createdUser.save()
        res.send(`New user created: ${createdUser.email}`)
    })
    .catch(err => {
        console.error(err)
        res.send(`Unable to create new user: ${err.errmsg}`)
    }) 
})

router.get('/:userId', (req: Request, res: Response) => {
    User.findById(req.params.userId, (err, foundUser) => {
        if(err) {
            console.error(err)
            res.send("User not found")
        } else res.json(foundUser)
    })
})
export default router