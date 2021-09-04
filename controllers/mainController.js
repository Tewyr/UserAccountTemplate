const dataMapper = require('../dataMapper');

const mainController = {
    getUsersDetails : (req, res) => {
        dataMapper.getUsers((error, response) => {
            if (error) {
                res.status(500).send(error.message);
            } else {
                console.log("cc", response.rows[0]);
            }
        })
    },
    addNewUser : (req, res) => {
        dataMapper.createNewUser(req.body,(error, response) => {
            if (error) {
                res.status(500).send(error.message);
            } else {

                console.log("Requête réussie", response);
                res.status(200).send('Utilisateur bien ajouté');
            }
        })
    }
}

module.exports = mainController;