const db = require("../models");

module.exports = {
  create: (req, res) => {
    db.Asset.create(req.body)
      .then(async (newAsset) => {
        await db.User.findOneAndUpdate(
          { id: req.params.id },
          { $push: { contributions: newAsset._id } },
          { new: true }
        );
        return res.json(newAsset);
      })
      .catch((err) => res.status(422).json(err));
  },

  // search via regex with "name": {$regex: /foobar/, $options: 'i'}
  findAll: (req, res) => {
    const { page, sortBy } = req.params;

    db.Asset.paginate(
      {
        ...queryParams,
        ...(searchParams
          ? {
              [searchParams.type]: {
                $regex: searchParams.input,
                $options: "i",
              },
            }
          : {}),
      },
      { page, limit: 20, sort: { [sortBy]: -1 } }
    )
      .then((assets) => res.json(assets))
      .catch((err) => res.status(422).json(err));
  },

  delete: (req, res) => {
    db.Asset.findOneAndDelete({ id: req.params.id })
      .then(() => res.status(204))
      .catch((err) => res.status(422).json(err));
  },
};
