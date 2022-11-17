const db = require("../models");

module.exports = {
  create: (req, res) => {
    db.Gear.create(req.body)
      .then(async (newGear) => {
        await db.User.findOneAndUpdate(
          { id: req.params.id },
          { contributions: newGear._id },
          { new: true }
        );
        return res.json(newGear);
      })
      .catch((err) => res.status(422).json(err));
  },

  findAll: (req, res) => {
    const { queryParams, page } = req.body;
    const { searchParams } = queryParams || {};

    db.Gear.paginate(
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
      { page: page, limit: 10, sort: { dateAdded: -1 } }
    )
      .sort({ date: -1 })
      .then((gear) => res.json(gear))
      .catch((err) => res.status(422).json(err));
  },

  delete: (req, res) => {
    db.Gear.findOneAndDelete({ id: req.params.id })
      .then(() => res.status(204))
      .catch((err) => res.status(422).json(err));
  },
};
