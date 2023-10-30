const passport = require("passport");

exports.isAuth = (req, res, done) => {
  return passport.authenticate("jwt");
};

exports.sanitizeUser = (user) => {
  return { id: user.id, role: user.role };
};

exports.cookieExtractor = function (req) {
  let token = null;
  if (req && req.cookies) {
    token = req.cookies["jwt"];
  }
  //   token =
  //     "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpZCI6IjY1M2Y2YjkzMWMzZDBiMWE4ZTMwNmYwMiIsInJvbGUiOiJ1c2VyIiwiaWF0IjoxNjk4NjU1MTIzfQ._0UhV5j8owQX_WksN7e2SQWsXoNwWxrCc0HE2oH-5As";
  return token;
};
