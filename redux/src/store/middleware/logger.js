const logger = param => store => next => action => {
  // console.log("next", next);
  // console.log("Store", store);
  // console.log("action", action);
  // console.log("param", param);
  return next(action);
};
export default logger;