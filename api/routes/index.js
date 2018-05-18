const { Router } = require('express')

const router = Router();

router.get('/login', (req, res) => {
    res.send('please login');
});

module.exports = router;