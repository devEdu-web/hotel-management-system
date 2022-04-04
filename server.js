const dotenv = require('dotenv');
const { app } = require('./src/app.js');
const database = require('./src/config/database.js');

dotenv.config();

database
    .connect(process.env.DB_URL)
    .then((result) => {
        app.listen(8080, () => {
            console.log('Server running');
        });
    })
    .catch((error) => {
        throw error;
    });
