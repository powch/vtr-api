const db = require("../models");

module.exports = {
  getInitialPayload: async (req, res) => {
    const userData = await db.User.findOne({ id: req.params.id })
      .populate(["contributions", "favorites"])
      .catch((err) => res.status(422).json(err));

    const assetData = await db.Asset.paginate(
      {},
      { page: 1, limit: 10, sort: { dateAdded: -1 } }
    ).catch((err) => res.status(422).json(err));

    return res.json({ userData, assetData });
  },
};
