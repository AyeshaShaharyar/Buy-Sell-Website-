-- As a user, I want to see featured books whether or not I’m logged in, if I click on the main page I should see all featured books.

SELECT * from books WHERE books.isFeatured IS TRUE;

-- As a user, I want to filter books by price/by name, whether or not I’m logged in. If I enter the price range and filter the books, it should return relevant results.

SELECT * from books WHERE books.price =$1 AND books.title LIKE %$2%;

-- As a user, given that I am logged in, if I click on the favorite button, the book is added to my favorites.

INSERT INTO favorties(user_id,book_id) VALUES ($1,$2 );

-- As a user, given that I am logged in, If I click on the MyFavoriteBook button, I can see a page listing all my favorites.

SELECT books.title as title FROM favorites JOIN books ON favorites.book_id=books.id JOIN users ON favorites.user_id=users.id WHERE users.id=$1;

-- As a user, given that I am logged in, if I click on the seller’s name, I can send a message to the seller that is listing the item.

-- As a seller, I want to be able to post items so that my potential customers can see them //create

INSERT INTO books(title, author, image, price, seller_id)VALUES(
  $1,$2,$3,$4,$5
)

-- As an seller, I want to be able to remove items so that my listing reflects what I have available for my customers //delete

-- As a seller, I want to be able to mark items as SOLD because I don’t want to sell something that’s no longer available

UPDATE books
-- JOIN?
SET isSold = true
WHERE books.seller_id=1;
--  how do we get user id
-- SELECT * FROM books WHERE books.seller_id=1;


-- As a seller, I want to be able to send messages via app, email, or text back on negotiations when buying the said book because I need a reliable way to talk to my customer who started the said negotiation.s

-- As a seller, I want to be able to send messages via app, email, or text back on negotiations when buying the said book because I need a reliable way to talk to my customer who started the said negotiation.
