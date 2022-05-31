import bcrypt from "bcrypt";
import { Router } from "express";
import passport from "passport";
import models from "../models";
const User = models.User;
const Shop = models.Shop;

export const getProfile = (req, res, next) => {
  res.send({
    user: req.user,
  });
};

//오너 회원가입
export const postJoin = async (req, res, next) => {
  const {
    email,
    password,
    name,
    phone,
    role,
    shop_name,
    tel,
    register_number,
    start_time,
    end_time,
    holiday,
    shop_content,
    zonecode,
    basic_address,
    road_address,
    detail_address,
    latitude,
    longitude,
    category_id,
  } = req.body;
  try {
    const exUser = await User.findOne({ where: { email } });
    if (exUser) {
      req.flash("joinError", "이미 가입된 이메일입니다.");
      return res.send({ message: "가입된 이메일입니다." });
    }
    const hash = await bcrypt.hash(password, 12);
    const userResult = await User.create({
      email,
      password: hash,
      name,
      phone,
      role,
      enabled: true,
    });
    const shopResult = await Shop.create({
      name: shop_name,
      tel,
      register_number,
      start_time,
      end_time,
      holiday,
      shop_content,
      zonecode,
      basic_address,
      road_address,
      detail_address,
      latitude,
      longitude,
      category_id,
      user_id: userResult.dataValues.user_id,
      enabled: true,
    });

    return res.send({ shopResult, userResult, message: hash });
  } catch (error) {
    console.log(error);
    return next(error);
  }
};

// 고객 회원가입
export const postCustomerJoin = async (req, res, next) => {
  const { email, password, name, phone, role } = req.body;
  try {
    const exUser = await User.findOne({ where: { email } });
    if (exUser) {
      req.flash("joinError", "이미 가입된 이메일입니다.");
      return res.send({ message: "가입된 이메일입니다." });
    }
    const hash = await bcrypt.hash(password, 12);
    const userResult = await User.create({
      email,
      password: hash,
      name,
      phone,
      role,
      enabled: true,
    });
    return res.send({ userResult, message: hash });
  } catch (err) {
    console.log(err);
    next(err);
  }
};

//LocalStrategy
export const localLogin = async (email, password, done) => {
  try {
    const exUser = await User.findOne({ where: { email } });
    if (exUser) {
      const result = await bcrypt.compare(password, exUser.password);
      if (result) {
        done(null, exUser);
      } else {
        done(null, false, { message: "비밀번호가 일치하지 않습니다." });
      }
    } else {
      done(null, false, { message: "가입되지 않은 회원입니다." });
    }
  } catch (error) {
    console.error(error);
    done(error);
  }
};

//globalRouter 로그인
export const postLogin = async (req, res, next) => {
  passport.authenticate("local", (authError, user, info) => {
    if (authError) {
      console.error(authError);
      return next(authError);
    }
    if (!user) {
      req.flash("loginError", info.message);
      return res.send(info.message);
    }
    return req.login(user, (loginError) => {
      if (loginError) {
        console.error(loginError);
        return next(loginError);
      }
      return res.send({
        session: req.session,
        user: req.user,
        _passport: req._passport,
      });
    });
  })(req, res, next);
};

//로그아웃
export const logout = async (req, res, next) => {
  req.logout();
  req.session.destroy();
  res.send({ message: "로그아웃 성공" });
};
