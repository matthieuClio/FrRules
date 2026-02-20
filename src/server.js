// Dotenv
require('dotenv').config();
// App
const app = require('./app');

// Start server
app.listen(process.env.PORT, () => {
    console.log(`Server listen on port ${process.env.PORT}`);
});