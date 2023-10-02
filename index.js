const  dotenv = require("dotenv");
const  express = require("express");
const  cors = require("cors");
const  mongoose = require("mongoose");
const  shortid = require("shortid");
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
  const { origUrl } = req.body;
  const base = `http://localhost:3333`;

  if (utils.validateUrl(origUrl)) {
    try {
      const shortUrl = `${base}/2`;

      // url = new Url({
      //   origUrl,
      //   shortUrl,
      //   urlId,
      //   date: new Date(),
      // });

      res.json(shortUrl);
    } catch (err) {
      console.log(err);
      res.status(500).json('Server Error');
    }
  } else {
    res.status(400).json('Invalid Original Url');
  }
});

// redirect endpoint
app.get("/:urlId", async (req, res) => {
  try {
    const url = await Url.findOne({ urlId: req.params.urlId });
    console.log(url)
    if (url) {
      url.clicks++;
      url.save();
      return res.redirect(url.origUrl);
    } else res.status(404).json("Not found");
  } catch (err) {
    console.log(err);
    res.status(500).json("Server Error");
  }
});

// Port Listenning on 3333
const PORT = process.env.PORT || 8080;
app.listen(PORT, () => {
  console.log(`Server is running at PORT ${PORT}`);
});