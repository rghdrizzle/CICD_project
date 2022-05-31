import models from "../../models";
const Shop = models.Shop;

export const getShops = (req, res, next) => {
  Shop.findAll()
    .then((list) => {
      res.send(list);
    })
    .catch((err) => {
      console.err(err);
      next(err);
    });
};

export const getShop = (req, res, next) => {
  const {
    params: { id },
  } = req;
  Shop.findOne({
    where: {
      shop_id: id,
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

export const createShop = (req, res, next) => {
  Shop.create({
    name: req.body.name,
    tel: req.body.tel,
    register_number: req.body.register_number,
    start_time: req.body.start_time,
    end_time: req.body.end_time,
    holiday: req.body.holiday,
    shop_content: req.body.shop_content,
    zonecode: req.body.zonecode,
    basic_address: req.body.basic_address,
    road_address: req.body.road_address,
    detail_address: req.body.detail_address,
    latitude: req.body.latitude,
    longitude: req.body.longitude,
    category_id: req.body.category_id,
    user_id: req.body.user_id,
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

export const updateShop = (req, res, next) => {
  const {
    params: { id },
  } = req;
  Shop.update(
    {
      name: req.body.name,
      tel: req.body.tel,
      register_number: req.body.register_number,
      start_time: req.body.start_time,
      end_time: req.body.end_time,
      holiday: req.body.holiday,
      shop_content: req.body.shop_content,
      zonecode: req.body.zonecode,
      basic_address: req.body.basic_address,
      road_address: req.body.road_address,
      detail_address: req.body.detail_address,
      latitude: req.body.latitude,
      longitude: req.body.longitude,
      category_id: req.body.category_id,
      user_id: req.body.user_id,
      updated_datetime: Date.now(),
    },
    {
      where: { shop_id: id },
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

export const deleteShop = (req, res, next) => {
  const {
    params: { id },
  } = req;
  Shop.update(
    {
      removed_datetime: Date.now(),
      enabled: false,
    },
    {
      where: { shop_id: id },
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
