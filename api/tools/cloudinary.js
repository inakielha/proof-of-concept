const cloudinary = require ("cloudinary").v2;

// cloudinary.config({ 
//     cloud_name: process.env.CLOUDINARY_NAME, 
//     api_key: process.env.CLOUDINARY_API_KEY, 
//     api_secret: process.env.CLOUDINARY_API_SECRET 
//   });
cloudinary.config({ 
  cloud_name: 'boke10', 
  api_key: '918793879555744', 
  api_secret: '6CW9_WP08TkcQisePPVi4zgRlII' 
});

  module.exports = cloudinary;