import express from "express";
import routes from "./routes/index";
import cors from "cors";

const app = express();
const port = 4000;

app.use(cors());
app.use(express.json());

app.use("/api", routes);

app.listen(port, () => {
  console.log(`Listening on port ${port}.`);
});
