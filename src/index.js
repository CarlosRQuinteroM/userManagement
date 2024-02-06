console.clear();
require('#Config/env.js')
const httpServer = require("#Config/http.js");
const conectDB = require("#Config/db.js");

const bootstrap = async () => {
    try {
        // Conect to DB
        await conectDB(process.env.MONGODB_URL);
        console.log('Connected to MongoDB');

        // start PORT HTTP
        httpServer.listen(process.env.PORT, () => {
            console.log(`Server listening on port ${process.env.PORT}`);
        });
    } catch (error) {
        console.error('Error during bootstrap:', error);
        process.exit(1);
    }
}
bootstrap();