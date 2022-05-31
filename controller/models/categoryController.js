import models from "../../models";
const Category = models.Category;

export const getCategories = (req, res, next) => {
  Category.findAll()
    .then((list) => {
      res.send(list);
    })
    .catch((err) => {
      console.error(err);
      next(err);
    });
};

export const getCategory = (req, res, next) => {
  const {
    params: { id },
  } = req;
  Category.findOne({
    where: {
      category_id: id,
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

export const createCategory = (req, res, next) => {
  Category.create({
    name: req.body.name,
    image_id: req.body.image_id,
    enabled: true,
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

export const updateCategory = (req, res, next) => {
  const {
    params: { id },
  } = req;
  Category.update(
    {
      name: req.body.name,
      image_id: req.body.image_id,
      updated_datetime: Date.now(),
      //   enabled: req.body.enabled,
    },
    {
      where: { category_id: id },
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

export const deleteCategory = (req, res, next) => {
  const {
    params: { id },
  } = req;
  Scrap.update(
    {
      removed_datetime: Date.now(),
      enabled: false,
    },
    {
      where: { category_id: id },
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
