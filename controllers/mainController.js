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
    },
    changeUserPassword : async (req, res) => {
       await dataMapper.getUniqueUser(req.session.user.id, (error, response) => {
            if (error) {
                res.status(500).send(error.message);
            } else {
                const data = response.rows[0]
                console.log("Requête réussie", response.rows[0]);
                    if(data.password === req.body.oldPassword) {
                        dataMapper.updateUser(data.id, req.body.password,(error, response) => {
                            if (error) {
                                res.status(500).send(error.message);
                             } else {
                                console.log("Update du password effectué");
                                res.status(200).send('its ok bro')
                            }
                        })
                    } else {
                        res.status(401).send("Wrong password")
                    }
            }
        })
    },
}

module.exports = mainController;