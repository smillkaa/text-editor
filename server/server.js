const express = require('express');
const mongoose = require('mongoose')

const app = express();
const PORT = process.env.PORT || 3000;

app.use(express.static('../client/dist'));
app.use(express.urlencoded({ extended: true }));
app.use(express.json());

mongoose.connect(
    process.env.MONGODB_URI || 'mongodb://127.0.0.1:27017/social-network-api', {
        useNewUrlParser: true,
        useUnifiedTopology: true
    }   
)

mongoose.set('debug', true);

require('./routes/htmlRoutes')(app);

app.listen(PORT, () => console.log(`Now listening on port: ${PORT}`));
