const mongoose = require('mongoose');
const express = require('express');
const path = require('path');
const logger = require('./config/logger');
const errorHandler = require('./middleware/errorHandler');
const { connectToDatabase } = require('./config/databaseConfig'); // Import the database configuration

const app = express();

// Set Mongoose strictQuery option
mongoose.set('strictQuery', false);

// Load environment variables
const PORT = process.env.PORT || 3000;

// Connect to MongoDB using the configuration module
connectToDatabase()
  .then(() => logger.info('Database connected'))
  .catch(err => logger.error('Database connection error:', err));

// Middleware
app.use(express.json());
app.use(express.static('public'));
// Serve static files from the 'public' directory
app.use(express.static(path.join(__dirname, 'public')));

// Serve HTML files
app.get('/', (req, res) => {
  res.sendFile(path.join(__dirname, 'views', 'index.html'));  // Home page
});

app.get('/dashboard', (req, res) => {
  res.sendFile(path.join(__dirname, 'views', 'dashboard.html'));  // Dashboard page
});

app.get('/reports', (req, res) => {
  res.sendFile(path.join(__dirname, 'views', 'reports.html'));  // Reports page
});

// Handle other routes as needed
app.get('/devices', (req, res) => {
  // Serve devices HTML or handle this route
});

app.get('/transactions', (req, res) => {
  // Serve transactions HTML or handle this route
});

app.get('/maintenance', (req, res) => {
  // Serve maintenance HTML or handle this route
});

app.get('/api/auth/register', (req, res) => {
  console.log('Register route hit');
  res.send('Register API');
});


// Error handling
app.use((req, res) => {
  res.status(404).send('Page not found');  // Handle 404 errors
});
// Import and use routes
const authRoutes = require('./routes/authRoutes');
const inventoryRoutes = require('./routes/inventoryRoutes');
const transactionRoutes = require('./routes/transactionRoutes');
const deviceRoutes = require('./routes/deviceRoutes');
const maintenanceRoutes = require('./routes/maintenanceRoutes');


app.use('/api/auth', require('./routes/authRoutes'));
app.use('/api/devices', require('./routes/deviceRoutes'));
app.use('/api/transactions', require('./routes/transactionRoutes'));
app.use('/api/maintenance', require('./routes/maintenanceRoutes'));
app.use('/api/inventory', require('./routes/inventoryRoutes'));

// Error handling
app.use(errorHandler);

// Start the server
app.listen(PORT, () => {
  logger.info(`Server running on port ${PORT}`);
});
