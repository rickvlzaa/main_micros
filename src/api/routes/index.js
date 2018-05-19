import { Router } from 'express'
import { createUser, authUser } from '../controllers';
import { asyncMiddleware } from '../../utils';
const router = Router()

router.get('/', asyncMiddleware(async (req, res) => {
    res.send('please login')
}));

router.post('/', asyncMiddleware(createUser))
router.get('/auth', asyncMiddleware(authUser))

export default router

