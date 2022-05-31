import models from "../../models";
const Like = models.Like;

export const getLikes = (req, res, next) => {
  Like.findAll()
    .then((list) => {
      res.send(list);
    })
    .catch((err) => {
      console.err(err);
      next(err);
    });
};

export const getLike = (req, res, next) => {
  const {
    params: { id },
  } = req;
  Like.findOne({
    where: {
      like_id: id,
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

export const createLike = (req, res, next) => {
  Like.create({
    user_id: req.body.user_id,
    event_id: req.body.event_id,
  })
    .then((result) => {
      console.log(result);
      res.status(201).json(result);
    })
    .catch((err) => {
      console.error(err);
      next(err);
    });
};

export const realDeleteLike = (req, res, next) => {
  const {
    params: { id },
  } = req;
  Like.destroy({
    where: { like_id: id },
  })
    .then((list) => {
      res.json(list);
    })
    .catch((err) => {
      console.error(err);
      next(err);
    });
};
