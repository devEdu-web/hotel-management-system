import dotenv from 'dotenv';
import {app} from './src/app.js';
import database from './src/config/database.js'

dotenv.config()

database.connect(process.env.DB_URL)
    .then(result => {
        app.listen(8080, () => {
            console.log('Server running')
        })
    })
    .catch(error => {
        throw error
    })