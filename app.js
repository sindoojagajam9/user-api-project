const express = require('express');
const app = express();

app.use(express.json());

const PORT = 3000;

app.get('/', (req, res) => {
    res.send("Server is running...");
})

const userRoutes = require('./routes/userRoutes');
app.use("/api/user", userRoutes);

const server = app.listen(PORT, () => {
    console.log("Server is running on PORT", PORT);
});

server.on('error', (err) => {
    console.error('Server error:', err);
});