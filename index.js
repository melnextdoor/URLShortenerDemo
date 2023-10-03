const  dotenv = require("dotenv");
const  express = require("express");
const  cors = require("cors");
const  Url = require("./Url");
const  utils = require("./utils/Util");

// configure dotenv
dotenv.config();
const app = express();

// cors for cross-origin requests to the frontend application
app.use(cors());
// parse requests of content-type - application/json
app.use(express.json());

// Basic Return
app.get("/", async (req, res) => {
  res.status(200).json('Connection Made')
})

// URL shortener endpoint
app.post("/short", async (req, res) => {
  console.log("HERE",req.body.url);
  const origUrl = req.body.url
  const base = process.env.DOMAIN_URL;
  
  try {
    utils.validateUrl(origUrl)
    const shortUrl = `${base}/k7yUTc`;

    res.json(shortUrl);
  } catch (err) {
    console.log(err);
    res.status(500).json(err);
  }
});

// Port Listenning on 3333
const PORT = process.env.PORT || 8080;
app.listen(PORT, () => {
  console.log(`Server is running at PORT ${PORT}`);
});