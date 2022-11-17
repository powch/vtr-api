const db = require("../models");

module.exports = {
  create: (req, res) => {
    db.User.create({
      id: req.params.id,
      displayName: req.body.displayName,
    })
      .then((newUser) => res.json(newUser))
      .catch((err) => res.status(422).json(err));
  },

  findOne: async (req, res) => {
    await db.User.findOneAndUpdate({ id: req.params.id }, req.body, {
      upsert: true,
    })
      .populate(["contributions", "favorites"])
      .then((populatedUser) => res.json(populatedUser))
      .catch((err) => res.status(422).json(err));
  },

  delete: (req, res) => {
    db.User.findOneAndDelete({ id: req.params.id })
      .then(() => res.status(204))
      .catch((err) => res.status(422).json(err));
  },
};
