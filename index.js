import express from "express";
import path from "path";
const server = express();
server.use(express.static(path.resolve()));
server.use("/", (req, res) => {
  return res.sendFile(path.join(path.resolve(), "index.html"));
});
server.listen(3000, () => {
  console.log("Server is listening at the port 3000");
});
