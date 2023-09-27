module.exports = reqFilter = (req, res, next) => {
  if (!req.query.age) {
    res.send("Please provide age");
  } else if (req.query.age < 18) {
    res.send("You are not eligible for voting");
  } else {
    next();
  }
  console.log("ReqFilter");
};
