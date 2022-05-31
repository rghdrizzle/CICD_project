import models from "../../models";
const User = models.User;

export const getUsers = (req, res, next) => {
  User.findAll()
    .then((list) => {
      res.send(list);
    })
    .catch((err) => {
      console.err(err);
      next(err);
    });
};

export const getUser = (req, res, next) => {
  const {
    params: { id },
  } = req;
  User.findOne({
    where: {
      user_id: id,
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

export const createUser = (req, res, next) => {
  User.create({
    email: req.body.email,
    password: req.body.password, //암호화 필요
    name: req.body.name,
    phone: req.body.phone,
    role: req.body.role,
    enabled: true,
  })
    .then((result) => {
      console.log(result);
      res.status(201).json(result);
    })
    .catch((err) => {
      console.log(err);
      next(err);
    });
};

export const updateUser = (req, res, next) => {
  const {
    params: { id },
  } = req;
  User.update(
    {
      password: req.body.password, //암호화 필요
      name: req.body.name,
      phone: req.body.phone,
      updated_datetime: Date.now(),
    },
    {
      where: { user_id: id },
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

export const deleteUser = (req, res, next) => {
  const {
    params: { id },
  } = req;
  User.update(
    {
      removed_datetime: Date.now(),
      enabled: false,
    },
    {
      where: { user_id: id },
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
