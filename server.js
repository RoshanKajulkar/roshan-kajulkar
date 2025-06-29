import express from "express";
import axios from "axios";

const app = express();
const port = 3000;

app.get("/", (req, res) => {
  res.send("Hello World!");
});

let lastApiHit = "";

const hitApi = async () => {
  try {
    const endpoint = "https://roshan-kajulkar.onrender.com/";
    await axios.get(endpoint);
    lastApiHit = new Date().toLocaleString("en-IN", {
      timeZone: "Asia/Kolkata",
    });
  } catch (error) {
    console.log(error);
  }
};

setInterval(hitApi, 1 * 60 * 1000);

hitApi();

app.get("/ping", (req, res) => {
  res.send(
    `"https://roshan-kajulkar.onrender.com/" was last pinged on - ${lastApiHit}`
  );
});

app.listen(port, () => {
  console.log(`Example app listening on port ${port}`);
});
