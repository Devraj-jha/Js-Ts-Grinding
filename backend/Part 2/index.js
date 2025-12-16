const tea = require("express"); 

const app = tea();

app.get("/", (req, res) => {
  res.send("Hello kend");
});

app.listen(3000, () => {
  console.log("Backend is running on port 3000");
});
