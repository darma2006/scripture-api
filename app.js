require("dotenv").config();
require("./config/passport");

const swaggerUi = require("swagger-ui-express");
const swaggerDocument = require("./swagger.json");
const express = require("express");
const app = express();
const connectDB = require("./config/db");
const session = require("express-session");
const passport = require("passport");

// middleware
app.use(express.json());

// DB
connectDB();

// session
app.use(session({
  secret: "secret",
  resave: false,
  saveUninitialized: true
}));

// passport
app.use(passport.initialize());
app.use(passport.session());

// AUTH ROUTES
app.get("/auth/google",
  passport.authenticate("google", { scope: ["profile", "email"] })
);

app.get("/auth/google/callback",
  passport.authenticate("google", {
    successRedirect: "/",
    failureRedirect: "/login"
  })
);

app.get("/", (req, res) => {
  res.send("Login successful 🎉");
});

// API routes
app.use("/scriptures", require("./routes/scriptures"));
app.use("/notes", require("./routes/notes"));
app.use("/users", require("./routes/users"));
app.use("/tags", require("./routes/tags"));

app.use("/api-docs", swaggerUi.serve, swaggerUi.setup(swaggerDocument));

// server
const PORT = process.env.PORT || 3000;
app.listen(PORT, () => console.log(`Server running on port ${PORT}`));


module.exports = app;