const { UserRouter } = require("./modules/users/route");

const routeErrorHandler = (req, res, next) => {
  res.status(404).json({
    requestMethod: req.method,
    requestEndpoint: req.url
  });
  next();
}

module.exports.Route = (app) => {
  app.use('/users', UserRouter);

  /**
   * tambahin router yang lainnya sebelum bagian routerErrorHandler
   */

  app.use(routeErrorHandler);
}