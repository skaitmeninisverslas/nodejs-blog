const path = require('path');
const Post = require('../../database/models/Post');
const User = require('../../database/models/User');
const Categories = require('../../database/models/Categories');

module.exports = async (req, res) => {
    const { image } = req.files;
    const user = await User.findById(req.session.userId);
    const categories = await Categories.findOne({_id: req.body.category});

    image.mv(path.resolve(__dirname, '..', '..', 'public/posts', image.name), async (error) => {

      Post.create({
        title: req.body.title,
        content: req.body.content,
        description: req.body.description,
        author: user.username,
        image: `/posts/${image.name}`,
        category: categories._id

      }, (error, post) => {
          res.redirect('/');
      });
    });
}
