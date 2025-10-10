const allowedOrigins = [
  'http://localhost:3000',      
  'http://localhost:5173',      
];

const corsOptions = {
  origin: (origin, callback) => {   
    if (allowedOrigins.includes(origin) || !origin) {
      callback(null, true);
    } else {
      callback(new Error('Akses ditolak oleh kebijakan CORS'));
    }
  },
  methods: 'GET,POST,PUT,DELETE,PATCH,HEAD',
  credentials: true,
  optionsSuccessStatus: 200
};

export default corsOptions;