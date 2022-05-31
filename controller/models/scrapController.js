import models from "../../models";
const Scrap = models.Scrap;

export const getScraps = (req, res, next) => {
  Scrap.findAll()
    .then((list) => {
      res.send(list);
    })
    .catch((err) => {
      console.err(err);
      next(err);
    });
};

export const getScrap = (req, res, next) => {
  const {
    params: { id },
  } = req;
  Scrap.findOne({
    where: {
      scrap_id: id,
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

export const createScrap = (req, res, next) => {
  Scrap.create({
    user_id: req.body.user_id,
    event_id: req.body.event_id,
    enabled: true,
  })
    .then((result) => {
      console.log(result);
      console.log(`스크랩 아이디: ${result.dataValues.scrap_id}`);
      res.status(201).json(result);
    })
    .catch((err) => {
      console.error(err);
      next(err);
    });
};

export const deleteScrap = (req, res, next) => {
  const {
    params: { id },
  } = req;
  Scrap.update(
    {
      removed_datetime: Date.now(),
      enabled: false,
    },
    {
      where: { scrap_id: id },
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
