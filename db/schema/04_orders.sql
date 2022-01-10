DROP TABLE IF EXISTS orders CASCADE;
CREATE TABLE orders (
  id SERIAL PRIMARY KEY NOT NULL,
  customer_id INTEGER REFERENCES users(id) ON DELETE CASCADE,
  -- name VARCHAR(255) NOT NULL,
  order_date DATE,
  seller_id INTEGER REFERENCES users(id) ON DELETE CASCADE,
  book_id INTEGER REFERENCES books(id) ON DELETE CASCADE
);
