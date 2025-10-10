import { v4 as uuidv4 } from "uuid";

const userTokenMiddleware = (req, res, next) => {
  const cookieName = "user_token";
  let userToken = req.cookies[cookieName];

  if (!userToken) {
    userToken = uuidv4();

    res.cookie(cookieName, userToken, {
      maxAge: 365 * 24 * 60 * 60 * 1000, 
      httpOnly: true,
      sameSite: "lax", 
      secure: process.env.NODE_ENV === "production", 
    });
  }

  req.userToken = userToken;
  next();
};

export default userTokenMiddleware;
