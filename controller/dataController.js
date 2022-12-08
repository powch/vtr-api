const db = require("../models");

module.exports = {
  getInitialPayload: async (req, res) => {
    const userData = await db.User.findOneAndUpdate(
      { id: req.params.id },
      req.body,
      {
        upsert: true,
      }
    )
      .populate(["contributions", "favorites"])
      .catch((err) => res.status(422).json(err));

    const assetData = await db.Asset.paginate(
      {},
      { page: 1, limit: 20, sort: { dateAdded: -1 } }
    ).catch((err) => res.status(422).json(err));

    return res.status(200).json({ userData, assetData });
  },

  updateUserArrays: async (req, res) => {
    const userData = await db.User.findOneAndUpdate(
      { id: req.params.id },
      { [req.body.type]: req.body.id },
      { new: true }
    )
      .populate(["contributions", "favorites"])
      .catch((err) => res.status(422).json(err));

    const assetData = await db.Asset.findByIdAndUpdate(
      { id: req.body.id },
      { $inc: { likes: 1 } },
      { new: true }
    ).catch((err) => res.status(422).json(err));

    return res.status(201).json({ userData, assetData });
  },
};
