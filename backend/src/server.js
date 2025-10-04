const app = require('./app');
require('dotenv').config();

const PORT = process.env.PORT || 3000;

if(!process.env.PORT){
  console.warn("⚠️ Warning: PORT is not defined in .env file. Using default port 3000.");
}

if(process.env.ENVIRONMENT !== 'production'){
  console.log("ℹ️ Info: Running in non-production environment.");
  app.listen(PORT, () => {
    console.log(`🚀 Server is running on port ${PORT}`);
  });
} else {
  console.log("ℹ️ Info: Running in production environment.");
}