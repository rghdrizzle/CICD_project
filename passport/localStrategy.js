import passportLocal from "passport-local";
import { localLogin } from "../controller/authController";
const LocalStrategy = passportLocal.Strategy;

export default (passport) => {
  passport.use(
    new LocalStrategy(
      {
        usernameField: "email",
        passwordField: "password",
      },
      localLogin
    )
  );
};
