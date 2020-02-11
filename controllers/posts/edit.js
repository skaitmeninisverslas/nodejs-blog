const Post = require('../../database/models/Post');

module.exports = async (req, res) => {
  const post = await Post.findOne({title: req.params.post});

  if(req.session.userId) {
return res.status(200).send(post);
  }

}
