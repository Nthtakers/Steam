const express = require("express");
const app = express();

app.use('/', express.static('dist'))

const cors = require("cors");
app.use(cors());

// Users //
app.get("/users/:id", (req, res) => {
    res.sendFile("/dist/social-user-activity.html", { root: __dirname });
});

// Games //
app.get("/games", (req, res) => {
    res.sendFile("/dist/news-grid-2.html", { root: __dirname });
});

app.get("/user/login/", (req, res) => {
    res.sendFile("/dist/gallery.html", { root: __dirname });
});

app.get("/game/:id", (req, res) => {
    res.sendFile("/dist/news-single-big-content.html", { root: __dirname });
});

// Reviews //
app.get("reviews/games/:id", (req, res) => {
    res.sendFile("/dist/news-single-big-content.html", { root: __dirname });
});

app.get("/user/login/", (req, res) => {
    res.sendFile("/dist/news-single-big-content.html", { root: __dirname });
});

// Posts //
app.get("/user/posts/:id", (req, res) => {
    res.sendFile("/dist/social-user-activity.html", { root: __dirname });
});

// Reply //
app.get("/users/posts/:id", (req, res) => {
    res.sendFile("/dist/social-user-activity.html", { root: __dirname });
});


const PORT = 3001;
app.listen(PORT, () => { 
    console.log(`Client server has started listening on port ${PORT}`);
});
