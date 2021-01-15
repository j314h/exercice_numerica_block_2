//middle for verifed user connected
exports.verifUserConnect = (req, res, next) => {
  try {
    if (!req.isAuthenticated()) throw new Error("User is not connect");
    next();
  } catch (e) {
    next(e);
  }
};

//middle virification root user connected
exports.verifUserAccesRoot = (req, res, next) => {
  try {
    if (req.user.role !== "root") throw new Error("You don't have permission, minimum level required 'root'");
    next();
  } catch (e) {
    next(e);
  }
};
