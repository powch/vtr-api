const axios = require("axios");
const db = require("../models");

module.exports = {
  create: async (req, res) => {
    const encodedImage = await axios({
      url: req.body.image,
      method: "get",
      responseType: "arraybuffer",
    })
      .then((imageData) => {
        const imageType = imageData.headers["content-type"];
        const encodedString = Buffer.from(imageData.data).toString("base64");
        return `data:${imageType};base64, ${encodedString}`;
      })
      .catch((err) => req.body.image);

    const updatedBody = { ...req.body, image: encodedImage };

    await db.Asset.create(updatedBody)
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
    const { page, sortBy, searchParams } = req.params;

    db.Asset.paginate(
      {
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
