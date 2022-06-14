const Client = require("../models/client.model");

const getClient = async (req, res) => {
    let clients = await Client.findAll();
    res.render('client', {clients: clients});

}

const createClient = async (req, res) => {
    await Client.create(req.body);
    res.render('client', {clients: await Client.findAll()});
};

const getClientById = async (req, res) => {
    const client = await Client.findByPk(req.params['id']);
    res.render('client', {clients: client})
};

const updateClient = async (req, res) => {
    await Client.create(req.body).save();
    res.render('client', {clients: req.body});
};

const deleteClient = async (req, res) => {
    await Client.destroy({
        where: {id: req.params['id']}
    })
    res.render('client');
};

module.exports = {
    getClient,
    createClient,
    getClientById,
    updateClient,
    deleteClient
}