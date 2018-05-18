import { Router } from 'express'
import { createUser } from '../controllers';

const router = Router()

router.get('/', (req, res) => {
    res.send('please login')
});

router.post('/', createUser);

export default router