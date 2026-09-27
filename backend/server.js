const express = require("express");

const app = express();
const PORT = Number(process.env.PORT) || 5000;

app.get("/", (req, res) => {
  res.json({
    message: "Bali Bagus Dev Studio Backend",
    status: "running"
  });
});

app.listen(PORT, () => {
  console.log(`Backend berjalan di http://localhost:${PORT}`);
});
