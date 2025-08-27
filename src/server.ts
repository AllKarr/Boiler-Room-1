import express = require("express");
import session = require("express-session");
import cookieParser = require("cookie-parser");
import path = require("path");

// __dirname works natively in CommonJS
// No need for import.meta.url hacks

// Extend session type
declare module "express-session" {
  interface SessionData {
    referrer?: string;
  }
}

const app = express();

// Middleware
app.use(express.json());
app.use(express.urlencoded({ extended: true }));
app.use(cookieParser());
app.use(
  session({
    secret: "super-secret-key",
    resave: false,
    saveUninitialized: true,
    cookie: { maxAge: 1000 * 60 * 60 * 24 } // 1 day
  })
);

// Setup EJS view engine
app.set("view engine", "ejs");
app.set("views", path.join(__dirname, "views"));

// ✅ Landing page
app.get("/", (req, res) => {
  const savedRef = req.session.referrer || req.cookies.referrer || null;
  res.render("landing", { referrer: savedRef });
});

// ✅ Register GET
app.get("/register", (req, res) => {
  const ref = req.query.ref as string | undefined;

  if (ref) {
    req.session.referrer = ref;
    res.cookie("referrer", ref, { maxAge: 1000 * 60 * 60 * 24 });
  }

  const savedRef = req.session.referrer || req.cookies.referrer || "anonymous";
  res.render("register", { referrer: savedRef });
});

// ✅ Register POST
app.post("/register", (req, res) => {
  const { name, email } = req.body;
  const referrer = req.session.referrer || req.cookies.referrer || "anonymous";

  res.send(`
    <h2>✅ Thanks for registering, ${name} (${email})</h2>
    <p>You were referred by: <strong>${referrer}</strong></p>
    <a href="/">Go back to landing page</a>
  `);
});

const PORT = 4000;
app.listen(PORT, () => {
  console.log(`🚀 Server running at http://localhost:${PORT}`);
});
