import {Router} from 'express'
import userRoutes from './userRoutes'
import projectRoutes from './projectRoutes'

const router = Router()

router.use('/user', userRoutes)
router.use('/project', projectRoutes)

export default router