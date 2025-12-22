// const express = require('express');
// const cors = require('cors');
// const dotenv = require('dotenv');
// const connectDB = require('./config/db');
// const consultationRoutes = require('./routes/consultationRoutes');

// // Load environment variables
// dotenv.config();

// // Connect to database
// connectDB();

// const app = express();

// // Middleware
// app.use(cors({
//   origin: ['http://localhost:3000', 'http://localhost:5173'], // React dev server ports
//   credentials: true,
// }));
// app.use(express.json());
// app.use(express.urlencoded({ extended: true }));

// // Routes
// app.use('/api', consultationRoutes);

// // Health check endpoint
// app.get('/health', (req, res) => {
//   res.status(200).json({
//     status: 'success',
//     message: 'Server is running',
//     timestamp: new Date().toISOString(),
//   });
// });

// // Error handling middleware
// app.use((err, req, res, next) => {
//   console.error(err.stack);
//   res.status(500).json({
//     success: false,
//     message: 'Something went wrong!',
//     error: process.env.NODE_ENV === 'development' ? err.message : undefined,
//   });
// });

// const PORT = process.env.PORT || 5001;

// app.listen(PORT, () => {
//   console.log(`Server running on port ${PORT}`);
// });


// const express = require('express');
// const cors = require('cors');
// const dotenv = require('dotenv');
// const connectDB = require('./config/db');
// const consultationRoutes = require('./routes/consultationRoutes');

// // Load environment variables
// dotenv.config();

// // Connect to database
// connectDB();

// const app = express();

// // Middleware
// app.use(cors({
//   origin: ['http://localhost:3000', 'http://localhost:5173'], // React dev server ports
//   credentials: true,
// }));
// app.use(express.json());
// app.use(express.urlencoded({ extended: true }));

// // Routes
// app.use('/api', consultationRoutes);

// // Health check endpoint
// app.get('/health', (req, res) => {
//   res.status(200).json({
//     status: 'success',
//     message: 'Server is running',
//     timestamp: new Date().toISOString(),
//   });
// });

// // Error handling middleware
// app.use((err, req, res, next) => {
//   console.error(err.stack);
//   res.status(500).json({
//     success: false,
//     message: 'Something went wrong!',
//     error: process.env.NODE_ENV === 'development' ? err.message : undefined,
//   });
// });

// const PORT = process.env.PORT || 5001; // Changed to 5001

// app.listen(PORT, () => {
//   console.log(`Server running on port ${PORT}`);
// });

const express = require('express');
const cors = require('cors');
const dotenv = require('dotenv');
const connectDB = require('./config/db');
const consultationRoutes = require('./routes/consultationRoutes');

// Load environment variables
dotenv.config();

// Connect to database
connectDB();

const app = express();

// Middleware
app.use(cors({
  origin: ['http://localhost:3000', 'http://localhost:5173', 'https://growmore-digital.vercel.app'],
  credentials: true,
}));
app.use(express.json());
app.use(express.urlencoded({ extended: true }));

// Routes
app.use('/api', consultationRoutes);

// Health check endpoint
app.get('/health', (req, res) => {
  res.status(200).json({
    status: 'success',
    message: 'Server is running',
    timestamp: new Date().toISOString(),
  });
});

// Serve static files in production (if needed)
if (process.env.NODE_ENV === 'production') {
  app.use(express.static('client/build'));
  
  app.get('*', (req, res) => {
    res.sendFile(path.resolve(__dirname, 'client', 'build', 'index.html'));
  });
}

// Error handling middleware
app.use((err, req, res, next) => {
  console.error(err.stack);
  res.status(500).json({
    success: false,
    message: 'Something went wrong!',
    error: process.env.NODE_ENV === 'development' ? err.message : undefined,
  });
});

const PORT = process.env.PORT || 5001;

app.listen(PORT, () => {
  console.log(`Server running on port ${PORT}`);
});