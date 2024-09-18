const dotenv = require("dotenv");
dotenv.config();

const http = require("http");

const app = require("./src/app");

const server = http.createServer(app);

const port = Number(process.env.PORT);

server.listen(port, () => {
  console.log(`Server started at Port ${port}`);
});
