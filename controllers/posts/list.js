const Post = require('../../database/models/Post');
const Categories = require('../../database/models/Categories');

module.exports = async (req, res) => {
    const posts = await Post.find({});
    return res.status(200).send(posts);
}
