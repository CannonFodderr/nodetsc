import {Router} from 'express'
import userRoutes from './userRoutes'
import projectRoutes from './projectRoutes'
import User from '../../lib/db/Models/User'
import userRouter from '../../lib/server/router'
const router = Router()
console.log(userRouter(User))

router.use('/user', userRouter(User))
// router.use('/user', userRoutes)
router.use('/project', projectRoutes)

export default router