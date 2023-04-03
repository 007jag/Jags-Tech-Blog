const { Post } = require('../models');

const postData = [
  {
    title: "The Future of Artificial Intelligence: Challenges and Opportunities",
    post_text: "Artificial intelligence has come a long way since its inception, and it's only getting better. With the rise of deep learning and natural language processing, we can expect AI to revolutionize the way we live and work in the coming years. Are you ready for the AI revolution?",
    user_id: 1,
  },
  {
    title: "The Rise of Low-Code Development Platforms",
    post_text: "With the increasing demand for digital solutions, low-code development platforms have become a game-changer in the tech industry. These platforms allow businesses to build complex applications faster and more efficiently, without the need for specialized coding skills, making it an accessible solution for both developers and non-developers alike.",
    user_id: 2,
  },
  {
    title: "The Future of Artificial Intelligence in Healthcare",
    post_text: "AI is rapidly transforming the healthcare industry, from medical research to clinical operations. With its ability to analyze vast amounts of data and provide insights that were once impossible, AI is poised to revolutionize healthcare as we know it.",
    user_id: 2,
  },
  {
    title: "The Future of Autonomous Vehicles",
    post_text: "With the advancements in technology, the future of autonomous vehicles is looking brighter than ever. Not only will self-driving cars make transportation easier and more efficient, but they also have the potential to greatly reduce traffic accidents and save countless lives. However, there are still many challenges that need to be addressed before they become a reality.",
    user_id: 3,
  },
  {
    title: " The Advantages of Cloud Computing for Small Businesses",
    post_text: "Cloud computing changed my business by providing secure and reliable technology solutions accessible from anywhere, anytime, which boosted my productivity and saved me money by eliminating the need for expensive hardware and IT support.",
    user_id: 4,
  },
  {
    title: "The Benefits of Using Artificial Intelligence in Customer Service",
    post_text: "AI has revolutionized the customer service industry, with chatbots and virtual assistants handling simple inquiries and data analysis providing personalized recommendations. It's a valuable tool for any business looking to improve its customer experience.",
    user_id: 5,
  },
]

const seedPosts = () => Post.bulkCreate(postData);

module.exports = seedPosts;