import local from "./localStrategy";
import models from "../models";
// import { passport } from "passport";
const User = models.User;

// module.exports = (passport) => {
//   passport.serializeUser((user, done) => {
//     done(null, user.user_id);
//   });

//   passport.deserializeUser((id, done) => {
//     User.findOne({ where: { user_id: id } })
//       .then((user) => done(null, user))
//       .catch((err) => done(err));
//   });
// };

export default (passport) => {
  passport.serializeUser((user, done) => {
    done(null, user.user_id);
  });

  passport.deserializeUser((id, done) => {
    User.findOne({ where: { user_id: id } })
      .then((user) => done(null, user))
      .catch((err) => done(err));
  });

  local(passport);
};
