const User = require("../models/user.model");
const UserResponse = require("../middlewares/helpers/responses/user.response");
const errorCodes = require("../middlewares/helpers/enums/errorCodes.enum");


const getUser = (req, res) => {
    User.findAll()
        .then(users => {
            const response = UserResponse.getUserResponse();
            res.status(response.status).json({data: users, status: response.type, message: response.message});
        })
        .catch((error) => {
            const response = error.errors[0]
            res.status(errorCodes.Error400.code).json({status: errorCodes.Error400.type, message: response.message});
        });
};

const createUser = (req, res) => {
    User.create(req.body).then((user) => {
        const response = UserResponse.createUserResponse();
        res.status(response.status).json({data: user, status: response.type, message: response.message});
    }).catch(error => {
        const response = error.errors[0]
        res.status(errorCodes.Error400.code).json({status: errorCodes.Error400.type, message: response.message});
    });
};

const getUserById = (req, res) => {
    User.findByPk(req.params['id']).then(user => {
        const response = UserResponse.getUserResponse();
        res.status(response.status).json({data: user, status: response.type, message: response.message});
    }).catch(error => {
        const response = error.errors[0]
        res.status(errorCodes.Error400.code).json({status: errorCodes.Error400.type, message: response.message});
    })
};

const updateUser = async (req, res) => {
    try {
        const user = await User.update(req.body, {
            where: {id: req.params['id']}
        });
        if (!user) {
            res.status(errorCodes.Error400.code).json({status: errorCodes.Error400.type, message: ''});
        } else {
            const response = UserResponse.getUserResponse();
            res.status(response.status).json({
                data: await User.findByPk(req.params['id']),
                status: response.type,
                message: response.message
            });
        }
    } catch (e) {
        console.log(e);
        const response = e.errors[0]
        res.status(errorCodes.Error400.code).json({status: errorCodes.Error400.type, message: response.message});
    }
};

const deleteUser = (req, res) => {
    User.findByPk(req.params['id']).then(async resp => {
        await User.destroy({
            where: {id: resp.id}
        });
        const response = UserResponse.deleteUserResponse();
        res.status(response.status).json({status: response.type, message: response.message});
    }).catch(error => {
        console.log(error)
    });
};

module.exports = {
    getUser,
    createUser,
    getUserById,
    updateUser,
    deleteUser,
}