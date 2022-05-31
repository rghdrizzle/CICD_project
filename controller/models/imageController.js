import models from "../../models";
const Image = models.Image;

export const getImages = (req, res, next) => {
  Image.findAll()
    .then((list) => {
      res.send(list);
    })
    .catch((err) => {
      console.err(err);
      next(err);
    });
};

export const getImage = (req, res, next) => {
  const {
    params: { id },
  } = req;
  Image.findOne({
    where: {
      image_id: id,
    },
  })
    .then((list) => {
      res.send(list);
    })
    .catch((err) => {
      console.error(err);
      next(err);
    });
};

export const createImage = (req, res, next) => {
  Image.create({
    image_name: req.body.image_name,
    image_path: req.body.image_path,
    enabled: true,
  })
    .then((result) => {
      console.log(result);
      req.body.image_id = result.dataValues.image_id;
      console.log(`이미지 아이디: ${req.body.image_id}`);
      next();
    })
    .catch((err) => {
      console.error(err);
      next(err);
    });
};

export const updateImage = (req, res, next) => {
  const {
    params: { id },
  } = req;
  Image.update(
    {
      image_name: req.body.image_name,
      image_path: req.body.image_path,
      removed_datetime: req.body.removed_datetime,
      //   enabled: req.body.enabled,
    },
    {
      where: { image_id: id },
    }
  )
    .then((result) => {
      res.json(result);
    })
    .catch((err) => {
      console.error(err);
      next(err);
    });
};

export const deleteImage = (req, res, next) => {
  const {
    params: { id },
  } = req;
  Image.update(
    {
      removed_datetime: Date.now(),
      enabled: false,
    },
    {
      where: { image_id: id },
    }
  )
    .then((result) => {
      res.json(result);
    })
    .catch((err) => {
      console.error(err);
      next(err);
    });
};

export const realDeleteImage = (req, res, next) => {
  const {
    params: { id },
  } = req;
  Image.destroy({
    where: { image_id: id },
  })
    .then((list) => {
      res.json(list);
    })
    .catch((err) => {
      console.error(err);
      next(err);
    });
};
