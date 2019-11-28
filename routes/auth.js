const express = require("express");
const passport = require('passport');
const router = express.Router();
const User = require("../models/User");
const Event = require("../models/Event")

// Bcrypt to encrypt passwords
const bcrypt = require("bcrypt");
const bcryptSalt = 10;


router.get("/login", (req, res, next) => {
  res.render("auth/login", { "message": req.flash("error") });
});

router.post("/login", passport.authenticate("local", {
  successRedirect: "/",
  failureRedirect: "/auth/login",
  failureFlash: true,
  passReqToCallback: true
}));

router.get("/signup", (req, res, next) => {
  res.render("auth/signup");
});

router.post("/signup", (req, res, next) => {
  const username = req.body.username;
  const password = req.body.password;
  const email = req.body.email;
  if (username === "" || password === "" || email === "") {
    res.render("auth/signup", { message: "Indicate username,password or email" });
    return;
  }

  User.findOne({ username }, "username", (err, user) => {
    if (user !== null) {
      res.render("auth/signup", { message: "The username already exists" });
      return;
    }

    const salt = bcrypt.genSaltSync(bcryptSalt);
    const hashPass = bcrypt.hashSync(password, salt);

    const newUser = new User({
      username,
      password: hashPass,
      email,
    });

    newUser.save()
      .then(() => {
        res.redirect("/auth/login");
      })
      .catch(err => {
        res.render("auth/signup", { message: "Something went wrong" });
      })
  });
});

router.get("/logout", (req, res) => {
  req.logout();
  res.redirect("/");
});

router.get("/profile", (req, res) => {
  User.findById(req.user._id)
    .populate("event")
    .then(theUser => {
      res.render("auth/profile", ({ user: theUser }))
    })
    .catch(err => console.log("error al recobrar info BBDD ", err))

})
router.post("/profile", (req, res) => {
  User.findByIdAndUpdate(req.user._id, { username: req.body.username })
    .then(theUser => res.redirect('/'))
    .catch(err => console.log("error al actualizar el usuario", err))
})
module.exports = router;
