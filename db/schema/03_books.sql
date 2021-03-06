DROP TABLE IF EXISTS books CASCADE;
CREATE TABLE books (
  id SERIAL PRIMARY KEY NOT NULL,
  title VARCHAR(255) NOT NULL,
  -- author VARCHAR(255),
  image VARCHAR(255) NOT NULL,
  price INTEGER NOT NULL DEFAULT 0,
  rating SMALLINT NOT NULL DEFAULT 0,
  review TEXT,
  seller_id INTEGER REFERENCES users(id) ON DELETE CASCADE,
  isFeatured BOOLEAN,
  isSold BOOLEAN DEFAULT FALSE,
  description TEXT,
  condition TEXT,
  category_id INTEGER REFERENCES categories(id) ON DELETE CASCADE
);
