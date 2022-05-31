import models from "../models";
const User = models.User;
const Shop = models.Shop;

export const ownerList = async (req, res, next) => {
  try {
    const users = await User.findAll({
      where: { role: true },
      raw: true,
    });
    res.send(users);
  } catch (err) {
    console.log(err);
    next(err);
  }
};

export const ownerShopList = async (req, res, next) => {
  const {
    body: { id },
  } = req;
  try {
    const shops = await Shop.findAll({
      where: { user_id: id },
      raw: true,
    });
    res.send(shops);
  } catch (err) {
    console.log(err);
    next(err);
  }
};
