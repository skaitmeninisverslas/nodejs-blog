module.exports = (req, res) => {
  if (req.session.userId) {
    return res.render("createCategory");
  }

  res.render("createCategory");
};
