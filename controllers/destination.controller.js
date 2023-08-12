const Destination = require("../models/destination.model")

module.exports.testApi = (req, res) => {
    res.json({message: "status ok"})
}

module.exports.allDest = (req, res) => {
    Destination.find()
    .then(response => res.json(response))
    .catch(err => res.json(err))
}

module.exports.oneDest = (req, res) => {
    Destination.findOne({_id: req.params.id})
    .then(response => res.json(response))
    .catch(err => res.json(err))
}

module.exports.addDest = (req, res) => {
    Destination.create(req.body)
    .then(response => res.json(response))
    .catch(err => res.json(err))
}

module.exports.updateDest = (req, res) => {
    Destination.findOneAndUpdate(
        {_id : req.params.id},
        req.body,
        {new : true, runValidators: true}
    )
    .then(response => res.json(response))
    .catch(err => res.json(err))
}

module.exports.deleteDest = (req, res) => {

    Destination.deleteOne({_id: req.params.id})
    .then(response => res.json(response))
    .catch(err => res.json(err))
}