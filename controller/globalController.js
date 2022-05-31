import { Op } from "sequelize";
import models from "../models";
const Category = models.Category;
const Image = models.Image;
const Event = models.Event;
const Shop = models.Shop;
const Like = models.Like;

export const hello = (req, res, next) => {
  res.send("sfsdfsdf");
  next();
};

export const HomeBanner = async (req, res, next) => {
  //현재 날짜, 위치, 이벤트 정보 비교 후 이미지 가져오기
  try {
    const events = await Event.findAll({
      limit: 4,
      include: Image,
    });
    res.send(events);
  } catch (err) {
    console.log(err);
    next(err);
  }
};

// 홈 화면 카테고리 이미지 조회
export const getCategoryImage = async (req, res, next) => {
  try {
    const result = await Category.findAll({ include: Image });
    if (result) {
      res.send(result);
    }
  } catch (err) {
    console.log(err);
    next(err);
  }
};

// 카테고리 리스트 정보 조회
export const getCategoryList = async (req, res, next) => {
  const {
    params: { id },
  } = req;
  try {
    console.log(typeof id);
    let shops = await Shop.findAll({
      where: { category_id: parseInt(id, 10) },
      attributes: [["shop_id", "shop_id"]],
    });
    console.log(shops);
    shops = shops.map((i) => i.shop_id);
    console.log(shops);

    if (shops.length === 0) {
      return res.send({ result: [] });
    }

    const result = await Event.findAll({
      where: {
        shop_id: {
          [Op.or]: shops,
        },
      },
      include: [Image, Shop],
      order: [["likes_count", "DESC"]],
    });
    res.send({ result });
  } catch (err) {
    console.log(err);
    next(err);
  }
};

// 이벤트 상세 조회
export const getDetailEvent = async (req, res, next) => {
  const {
    params: { id },
  } = req;
  try {
    const result = await Event.findOne({
      where: { event_id: id },
      include: [Image, Shop],
    });
    res.send(result);
  } catch (err) {
    console.log(err);
    next(err);
  }
};

// 좋아요 리스트 조회
export const getLikeList = async (req, res, next) => {
  const {
    params: { id },
  } = req;
  try {
    const Id = parseInt(id);
    if (isNaN(Id)) {
      return res.send({ error: 1 });
    }
    console.log(Id);
    let likes = await Like.findAll({
      where: { user_id: Id },
      attributes: [["event_id", "event_id"]],
      raw: true,
    });
    likes = likes.map((i) => i.event_id);

    const result = await Event.findAll({
      where: {
        event_id: {
          [Op.or]: likes,
        },
      },
      include: Image,
      order: [["likes_count", "DESC"]],
    });

    return res.send(result);
  } catch (err) {
    console.log(err);
    next(err);
  }
};

// 이벤트 좋아요 버튼
export const addLikeEvent = async (req, res, next) => {
  const {
    body: { event_id, user_id },
  } = req;
  try {
    const likeResult = await Like.create({
      user_id,
      event_id,
    });
    let likeCnt = await Event.findOne({
      where: { event_id },
      attributes: ["likes_count"],
    });
    likeCnt = parseInt(likeCnt.likes_count) + 1;
    // console.log(likeCnt);

    const eventResult = await Event.update(
      {
        likes_count: likeCnt,
      },
      {
        where: { event_id },
      }
    );
    res.send({ likeResult, eventResult });
  } catch (err) {
    console.log(err);
    next(err);
  }
};

export const removeLikeEvent = async (req, res, next) => {
  const {
    body: { event_id, user_id },
  } = req;
  try {
    const likeResult = await Like.destroy({
      where: {
        event_id,
        user_id,
      },
    });

    let likeCnt = await Event.findOne({
      where: { event_id },
      attributes: ["likes_count"],
    });
    likeCnt = parseInt(likeCnt.likes_count) - 1;

    const eventResult = await Event.update(
      {
        likes_count: likeCnt,
      },
      {
        where: { event_id },
      }
    );
    res.send({ likeResult, eventResult });
  } catch (err) {
    console.log(err);
    next(err);
  }
};
