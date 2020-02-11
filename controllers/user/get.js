const User = require('../../database/models/User');

module.exports = async (req, res) => {
  const user = await User.findById(req.session.userId);

  if (req.session.userId) {
    return res.status(200).send(user);
    // res.render('user', {
    //   user
    // });
  }
    return res.status(200).send(user);
}
