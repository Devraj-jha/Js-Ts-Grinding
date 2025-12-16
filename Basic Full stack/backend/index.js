const express = require("express");

const app = express();

// middleware to read JSON from request body
app.use(express.json());

// route to receive message
app.post("/send-message", (req, res) => {
  const message = req.body.message;

  if (!message) {
    return res.status(400).json({
      error: "Message is required"
    });
  }

  console.log("Message received:", message);

  res.json({
    reply: "Backend received your message"
  });
});

app.listen(3000, () => {
  console.log("Backend running on http://localhost:3000");
});
