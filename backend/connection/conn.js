const mongoose = require('mongoose');
mongoose.connect('mongodb://localhost:27017/Online_Book_Store')
.then(()=>console.log('Connected to MongoDB'));