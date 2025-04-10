const express = require("express");
const cors = require("cors");
const axios = require("axios");
const dotenv = require("dotenv");

dotenv.config();

const app = express();
const PORT = 4000;

app.use(cors());
app.use(express.json());

app.post("/api/oauth/token", async (req, res) => {
  const { code } = req.body;

  try {
    const result = await axios.post(
      "https://login.salesforce.com/services/oauth2/token",
      new URLSearchParams({
        grant_type: "authorization_code",
        code,
        client_id: process.env.SF_CLIENT_ID,
        client_secret: process.env.SF_CLIENT_SECRET,
        redirect_uri: process.env.SF_REDIRECT_URI,
      }),
      {
        headers: {
          "Content-Type": "application/x-www-form-urlencoded",
        },
      }
    );

    res.json(result.data);
  } catch (err) {
    console.error(
      "OAuth token exchange failed:",
      err.response?.data || err.message
    );
    res
      .status(500)
      .json({ error: "Token exchange failed", details: err.response?.data });
  }
});

app.listen(PORT, () => {
  console.log(
    `🟢 Salesforce OAuth backend running at http://localhost:${PORT}`
  );
});
