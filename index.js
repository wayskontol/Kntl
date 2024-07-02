const express = require('express')
const cors = require('cors');
const path = require('path');
const apiRouter = require('./router/api');
const app = express()
const PORT = process.env.PORT || 3000;

app.use(express.json());
app.use('/api', apiRouter);
app.use(express.static(path.join(__dirname, '/resources')));

app.use(cors());
/**
  * Home Router
  */
app.get("/", (req, res) => {
  res.sendFile(path.join(__dirname, 'resources', 'index.html'));
})

app.get("/contributors", (req, res) => {
  res.sendFile(path.join(__dirname, 'resources', 'contributor.html'));
})
//
// API ROUTER
app.use('/api', apiRouter);
//
// DOCS ROUTER
app.get('/docs', (req, res) => {
    res.sendFile(path.join(__dirname, 'resources', 'docs.html'));
});
app.get('/changelogs', (req, res) => {
    res.sendFile(path.join(__dirname, 'resources', 'changelogs.html'));
});
app.get("/tags-ai", (req, res) => {
  res.sendFile(path.join(__dirname, 'resources', 'ai.html'));
});
app.get("/tags-downloader", (req, res) => {
  res.sendFile(path.join(__dirname, 'resources', 'downloader.html'));
});
app.get("/tags-tools", (req, res) => {
  res.sendFile(path.join(__dirname, 'resources', 'tools.html'));
});
//
app.use((err, req, res, next) => {
  console.error(err.stack);
  res.status(500).send("Something broke!");
});
app.use("/", (req, res, next) => {
  res.status(404).sendFile(path.join(__dirname, 'resources', '404.html'));
});
app.listen(PORT, () => {
  console.log(`app listening on port ${PORT}`)
})