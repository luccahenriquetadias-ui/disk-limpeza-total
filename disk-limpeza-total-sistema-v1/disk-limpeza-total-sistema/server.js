const express = require("express");
const path = require("path");

const app = express();
const publicDir = path.join(__dirname, "public");

app.get("/config.js", (req, res) => {
  res.type("application/javascript");
  const url = process.env.SUPABASE_URL || "";
  const key = process.env.SUPABASE_ANON_KEY || "";
  res.send(
    `window.SUPABASE_URL=${JSON.stringify(url)};\n` +
    `window.SUPABASE_ANON_KEY=${JSON.stringify(key)};\n`
  );
});

app.use(express.static(publicDir));

app.get("*", (req, res) => {
  res.sendFile(path.join(publicDir, "index.html"));
});

app.listen(process.env.PORT || 3000, () => {
  console.log("Disk Limpeza Total V2 online");
});
