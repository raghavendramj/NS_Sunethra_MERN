const express = require("express");
const app = express();
const coursesRouter = require("./11_Routers");
const cors = require('cors');
app.use(cors())


//Linking the applicaton and router!
app.use("/courses", coursesRouter);
;

const port = process.env.PORT || 8100;
app.listen(port, () => {
  console.log(`Server started at ${port}`);
});
