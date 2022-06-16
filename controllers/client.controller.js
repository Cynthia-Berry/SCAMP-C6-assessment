const Client = require("../models/client.model");
const errorCodes = require("../middlewares/helpers/enum/errorCodes.enum")

const getClient = (req, res) => {
    Client.findAll()
        .then(clients => {
            res.status(200).json({data: clients, status: "SUCCESS", message: "Successfully fetched all clients"});
        })
        .catch((error) => {
            const response = error.errors[0]
            res.status(errorCodes.Error400.code).json({status: errorCodes.Error400.type, message: response.message});
        });
};

const createClient = (req, res) => {
    Client.create(req.body).then((client) => {
        res.status(200).json({data: client, status: "SUCCESS", message: "Successfully created client"});
    }).catch(error => {
        const response = error.errors[0]
        res.status(errorCodes.Error400.code).json({status: errorCodes.Error400.type, message: response.message});
    });
};

const getClientById = (req, res) => {
    Client.findByPk(req.params['id']).then(client => {
        res.status(200)
    }).catch(error => {
        const response = error.errors[0]
        res.status(errorCodes.Error400.code).json({status: errorCodes.Error400.type, message: response.message});
    })
};


const updateClient = async (req, res) => {
    try {
        const client = await Client.update(req.body, {
            where: {id: req.params['id']}
        })
        if (!client) {
            res.status(errorCodes.Error400.code).json({status: errorCodes.Error400.type, message: ''});
        } else {
            res.status(200).json({data: await Client.findByPk(req.params['id']), status: "SUCCESS", message: "Successfully updated client"});
        }
    } catch (e) {
        console.log(e);
        const response = e.errors[0]
        res.status(errorCodes.Error400.code).json({status: errorCodes.Error400.type, message: response.message});
    }
};

const deleteClient = (req, res) => {
  Client.findByPk(req.params['id']).then(async response => {
        await Client.destroy({
            where: {id: response.id}
        });
        res.status(204).json({status: "SUCCESS", message: "Successfully deleted client"});
    }).catch(error => {
        console.log(error)
    });
};

module.exports = {
    getClient,
    createClient,
    getClientById,
    updateClient,
    deleteClient,
}