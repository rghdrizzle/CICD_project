import bcrypt from "bcrypt";
import { Op } from "sequelize";
import models from "../models";
const User = models.User;
const Scrap = models.Scrap;
const Event = models.Event;

//customer
export const updateUserData = async (req, res, next) => {
  const {
    params: { id },
  } = req;
  try {
    const result = await User.update(
      {
        name: req.body.name,
        phone: req.body.phone,
        updated_datetime: Date.now(),
      },
      {
        where: { user_id: id },
      }
    );
    res.send(result); //실패 시 0, 성공 시 1
  } catch (err) {
    console.error(err);
    next(err);
  }
};

// 유저 패스워드 재설정
export const updateUserPw = async (req, res, next) => {
  const {
    params: { id },
    body: { password },
  } = req;
  try {
    const hash = await bcrypt.hash(password, 12);
    const result = await User.update(
      {
        password: hash,
        updated_datetime: Date.now(),
      },
      {
        where: { user_id: id },
      }
    );
    res.send(result);
  } catch (err) {
    console.log(err);
    next(err);
  }
};

// 개선 필요
export const scrapList = async (req, res, next) => {
  const {
    params: { id },
  } = req;
  try {
    let events = await Scrap.findAll({
      where: { user_id: id },
      attributes: [["event_id", "event_id"]],
      raw: true,
    });
    events = events.map((i) => i.event_id);
    console.log(events);

    const result = await Event.findAll({
      where: {
        event_id: {
          [Op.or]: events,
        },
      },
      order: [["likes_count", "DESC"]],
      raw: true,
      // limit: 10,
      // offset: (page - 1) * 10,
    });
    res.send({ result });
  } catch (err) {
    console.log(err);
    next(err);
  }
};
