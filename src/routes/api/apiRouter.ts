import {Router} from 'express'
import User from '../../lib/db/Models/User'
import Project from '../../lib/db/Models/Project'
import CRUDRouter from '../../lib/server/router'

const router = Router()

router.use('/user', CRUDRouter(User))
router.use('/project', CRUDRouter(Project))

export default router