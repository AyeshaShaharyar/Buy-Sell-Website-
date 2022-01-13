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
        const templateVars = {books: books}
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

  router.get("/:id", (req, res) => {
    const requested = (req.params.id)
    db.query(`SELECT * FROM books;`)
    .then(data =>{
      const books = data.rows;
      books.forEach(function(book){
        const storedTitle = book.title
        if(requested === storedTitle){
          res.render("books_ad", {title:book.title, price: book.price, image:book.image, description:book.description});
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

  // router.post("/favorites", (req,res)=>{
  //   const userId = req.session.user_id || 1;
  //   const bookId = //from the i button;
  // db.query(`INSERT INTO favorties(user_id,book_id) VALUES ($1,$2);`, [userId, bookId])
  // })
  // .then(data => {
  //   res.redirect ("/books");
  // })
  // .catch(err => {
  //   res
  //     .status(500)
  //     .json({ error: err.message });
  // });

  return router;
};
