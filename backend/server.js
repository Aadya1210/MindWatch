const express = require("express");
const cors = require("cors");

const app = express();
app.use(cors());
app.use(express.json());

const PORT = 5000;

const journalEntries = [];
app.get("/", (req, res) => {
  res.send("🚀 MindWatch Backend is Running!");
});


app.post("/journal", (req, res) => {
  journalEntries.push(req.body);

    console.log(journalEntries);

    res.json({
        success: true,
        message: "Journal saved successfully!"
    });
    });

app.get("/journal", (req, res) => {
  res.json(journalEntries);
});

app.listen(PORT, () => {
  console.log(`Server running on http://localhost:${PORT}`);
});