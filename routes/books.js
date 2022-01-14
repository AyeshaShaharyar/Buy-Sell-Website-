/*
 * All routes for Users are defined here
 * Since this file is loaded in server.js into api/users,
 *   these routes are mounted onto /users
 * See: https://expressjs.com/en/guide/using-middleware.html#middleware.router
 */

const express = require('express');
const router  = express.Router();

module.exports = (db) => {
  router.get("/", (req, res) => {
    db.query(`SELECT * FROM books;`)
      .then(data => {
        const books = data.rows;
        const templateVars = {books: books, user: req.session.id}
        res.render("home", templateVars);
      })
      .catch(err => {
        res
          .status(500)
          .json({ error: err.message });
      });
  });

  router.post("/", (req, res) => {
    const userId = req.session.user_id || 1;
    console.log("body=", req.body);
    db.query(`INSERT INTO books(title, description, image, condition, price, seller_id) VALUES($1,$2,$3,$4,$5,$6) RETURNING * `, [req.body.title, req.body.description, req.body.url, req.body.condition, req.body.amount, userId ])
      .then(data=>{
        db.query(`INSERT INTO categories(name) VALUES($1) RETURNING *`, [ req.body.category])
      })
      .then(data => {
        db.query(`INSERT INTO users(email, phone_numbers) VALUES($1, $2) RETURNING *`, [req.body.email, req.body.phone])
      })
      .then(data => {
        res.redirect ("/books");
      })
      .catch(err => {
        res
          .status(500)
          .json({ error: err.message });
      });
  });

  router.get("/favorites", (req, res) => {
    const user_id = req.session.user_id;
    db.query(`SELECT *, books.title FROM favorites JOIN books ON favorites.book_id=books.id JOIN users ON favorites.user_id=users.id WHERE users.id=$1;`, [user_id])
    .then(data => {
      const books = data.rows;
      console.log(books);
      const templateVars = {books: books}
      res.render("favorites", templateVars);
    })
    .catch(err => {
      res
        .status(500)
        .json({ error: err.message });
    });
  });

  router.get("/:id", (req, res) => {
    const user = req.session.id || 2;
    const templateVars = {user: user};
    const requested = (req.params.id)
    db.query(`SELECT * FROM books;`)
    .then(data =>{
      const books = data.rows;
      books.forEach(function(book){
        const storedTitle = book.title
        if(requested === storedTitle){
          res.render("books_ad", {title:book.title, price: book.price, image:book.image, description:book.description, condition:book.condition}, templateVars);
        } })
    })
    .catch(err => {
      res
        .status(500)
        .json({ error: err.message });
    });

  });

  router.post("/search", (req, res) => {
    db.query(`SELECT * from books
    WHERE books.title ILIKE $1`, [`%${req.body.search}%`])
      .then(data => {
        const books = data.rows;
        const templateVars = {books: books}
        res.render("home", templateVars);
      })
      .catch(err => {
        res
          .status(500)
          .json({ error: err.message });
      });
  });

  router.post("/favorites", (req,res)=>{
    const userId = req.session.user_id || 5 ;
    const bookId = req.body.id;
    console.log(userId, bookId);
  db.query(`INSERT INTO favorites(user_id,book_id) VALUES ($1,$2);`, [userId, bookId])
  .then(data => {
    res.status(200);
  })
  .catch(err => {
    console.log(err);
    res
      .status(500)
      .json({ error: err.message });
  });
})


  return router;
};
