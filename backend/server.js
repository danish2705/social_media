const app = require("./app");
const { database } = require("./config/database");

app.listen(process.env.PORT, () => {
  console.log(`Server running on port ${process.env.PORT}`);
});
