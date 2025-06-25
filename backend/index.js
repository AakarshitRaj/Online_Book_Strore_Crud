const express = require('express');

const app = express();
const cors = require('cors');
const bookRoutes = require('./routes/bookRoutes'); // Ensure this file exists and exports the router
require('./connection/conn');
app.use(cors()); // Ensure this file exists and connects to MongoDB
app.use(express.json()); // Middleware to parse JSON request bodies in POST
app.use('/api/v1', bookRoutes); // Use the book routes under the /api/v1 path



app.listen(1000, () => {
    console.log('Server is running on 1000');
});