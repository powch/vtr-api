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
    await db.User.findOneAndUpdate(
      { id: req.params.id },
      { $push: { [req.body.category]: req.body.assetId } },
      { new: true }
    )
      .populate(["contributions", "favorites"])
      .then(async (updatedUser) => {
        if (req.body.category === "likes") {
          await db.Asset.findOneAndUpdate(
            { _id: req.body.assetId },
            { $inc: { likes: req.body.category === "likes" ? 1 : 0 } }
          ).catch((err) => res.status(422).json(err));
        }

        return res.status(201).json({ userData: updatedUser });
      })
      .catch((err) => res.status(422).json(err));
  },
};
