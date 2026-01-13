export const protectRoute = async (req, res, next) => {
  if (!req.auth().isAuthenticated) {  //clerk is handling the auth
    return res.status(401).json({ message: "Unauthorized - you must be logged in" });
  }
  next();
};