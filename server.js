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

// เริ่มเซิร์ฟเวอร์ และให้สามารถเข้าถึงจากทุก IP ได้
app.listen(PORT, "0.0.0.0", () => {
    console.log(`Frontend running at http://0.0.0.0:${PORT}`);
});
