const path = require('path');
const express = require('express');
const app = express();
const publicPath = path.join(__dirname, '..', 'public');
const port = process.env.PORT || 3000;

app.use(express.static(publicPath));
//route 1
app.get('/app', (req, res) => {
  res.sendFile(path.join(publicPath, 'index.html'));
});
//route 2
app.get('/info', (req, res) => {
  res.sendFile(path.join(publicPath, 'info.html'))
})

app.listen(port, () => {
  console.log(`Server running on ${port}`);
});
