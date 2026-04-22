const jwt = require('jsonwebtoken')

const createusertoken = async (user, req, res) => {
    const token = jwt.sign({
        name: user.name,
        id: user.id,
    }, 'fatec turma6 22042026' )

    res.status(201).json({
        message:'Você está autenticado.',
        token: token,
        UserId: user._id,

    })
}

module.exports = createusertoken
