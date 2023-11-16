const app = require("./server");
const config = require("./utils/config");
const mongoose = require("mongoose");

mongoose.set("strictQuery", false);

mongoose
  .connect(config.URI)
  .then(() => {
    console.log("Connected to mongoDb....");
    app.listen(config.PORT, () => {
      console.log(`Server running on port ${config.PORT}`);
    });
  })
  .catch((err) => {
    console.error("error connecting to mongoDb", err);
  });
