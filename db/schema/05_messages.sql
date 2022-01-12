DROP TABLE IF EXISTS messages CASCADE;
CREATE TABLE messages (
  id SERIAL PRIMARY KEY NOT NULL,
  message TEXT,
  customer_id INTEGER REFERENCES users(id) ON DELETE CASCADE,
  seller_id INTEGER REFERENCES users(id) ON DELETE CASCADE,
  created_time TIMESTAMP
);
