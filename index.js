const server = require("./server");

const port = process.env.PORT || 5400;
server.listen(port, () => console.log(`\n** Running on port ${port} **\n`));
