import 'dotenv/config';
import app from './app.js';

const PORT = process.env.PORT || 3000;

app.get('/status', (req, res) => res.json({ ok: true }));

if(!process.env.PORT){
  console.warn("⚠️ Warning: PORT is not defined in .env file. Using default port 3000.");
}

if(process.env.NODE_ENV !== 'production'){
  console.log("ℹ️ Info: Running in non-production environment.");
  app.listen(PORT, () => {
    console.log(`🚀 Server is running on port ${PORT}`);
  });
} else {
  console.log("ℹ️ Info: Running in production environment.");
}