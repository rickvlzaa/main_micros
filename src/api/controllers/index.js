import jwt from 'jsonwebtoken';

export const createUser = async (req, res, next) => {
    res.send('create user resource')
}

export const authUser = async (req, res, next) => {
    jwt.sign({user: 'test_user'}, 'secret', {expiresIn: 10}, function(err, token){
        res.send(`token: ${token}`)
    })
}