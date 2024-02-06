console.clear();
require('#Config/env.js')
const httpServer = require("#Config/http.js");
const conectDB = require("#Config/db.js");

const bootstrap = async () => {
    await conectDB(process.env.MONGODB_URL);
    
    httpServer.listen(process.env.PORT, () => {
        console.log(`Server listen  ${process.env.PORT}`)
    })
}
bootstrap();