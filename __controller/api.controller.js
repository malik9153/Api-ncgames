const { selectApi} = require("../endpoints.json");



exports.getApi = (req, res, next) => {
  const endpoints = require('../endpoints.json')

      res.status(200).send({endpoints});
 
}

