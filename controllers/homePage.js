const Post = require('../database/models/Post');
const Categories = require('../database/models/Categories');
const User = require('../database/models/User');

module.exports = async (req, res) => {

    const post = await Post.find({});
    const categories = await Categories.find({});
    const user = await User.findById(req.session.userId).select(['-password']);

    return res.status(200).send({post, categories, user});
}
