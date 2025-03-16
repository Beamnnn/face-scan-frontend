const express = require("express");
const path = require("path");

const app = express();
const PORT = process.env.PORT || 3000;

// เสิร์ฟไฟล์ Static จากโฟลเดอร์ public
app.use(express.static(path.join(__dirname, "public")));

// Routes สำหรับแต่ละหน้า
app.get("/", (req, res) => {
    res.sendFile(path.join(__dirname, "public", "index.html"));
});

app.get("/register", (req, res) => {
    res.sendFile(path.join(__dirname, "public", "register.html"));
});

app.get("/ml-demo", (req, res) => {
    res.sendFile(path.join(__dirname, "public", "theory.html"));
});

app.get("/nn-demo", (req, res) => {
    res.sendFile(path.join(__dirname, "public", "tutorial.html"));
});

// เริ่มเซิร์ฟเวอร์
app.listen(PORT, () => {
    console.log(`Frontend running at http://127.0.0.1:${PORT}`);
});
