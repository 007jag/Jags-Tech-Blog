const { Comment } = require('../models');

const commentData = [
  {
    comment_text: "super useful thank you !",
    post_id: 3,
    user_id: 1
  },
  {
    comment_text: "this is awesome thanks !",
    post_id: 1,
    user_id: 4
  },
  {
    comment_text: "cloud computing saved me so much !",
    post_id: 4,
    user_id: 2
  },
  {
    comment_text: "thanks for the input !",
    post_id: 4,
    user_id: 3
  },
  {
    comment_text: "Im both scared and excited about AI",
    post_id: 5,
    user_id: 5
  },
  {
    comment_text: "its like everytime I call customer service im just talking to an AI",
    post_id: 5,
    user_id: 4
  },
];

const seedComments = () => Comment.bulkCreate(commentData);

module.exports = seedComments;